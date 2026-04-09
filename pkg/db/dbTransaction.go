package db

import (
	"context"
	"fmt"
	"reflect"

	"github.com/rdhmuhammad/apitester/pkg/logger"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

type DBTransaction struct {
	db    *gorm.DB
	repos []BaseRepository
}

type BaseRepository interface {
	SetupConnection(db *gorm.DB)
}

func NewDBTransaction(db *gorm.DB, repos ...BaseRepository) DBTransaction {
	var result = DBTransaction{
		db:    db,
		repos: make([]BaseRepository, 0),
	}
	for _, repo := range repos {
		result.repos = append(result.repos, repo)
	}

	return result
}

func (main *DBTransaction) End(err error) error {
	if err != nil {
		errTrx := main.db.Rollback().Error
		if errTrx != nil {
			return errTrx
		}
		return nil
	}
	errTx := main.db.Commit().Error
	if errTx != nil {
		return errTx
	}
	return nil
}

func (main *DBTransaction) Begin() {
	begin := main.db.Begin()

	for _, rp := range main.repos {
		rp.SetupConnection(begin)
	}

	main.db = begin
}

type RepoBean struct {
	Repo BaseRepository
}

func GetRepo[T schema.Tabler](main *DBTransaction, dm T) *GenericRepository[T] {
	return main.getRepository(&GenericRepository[T]{}).(*GenericRepository[T])
}

func (main *DBTransaction) getRepository(repo BaseRepository) BaseRepository {

	pTypeRepo := reflect.TypeOf(repo).Elem()

	for _, rp := range main.repos {
		pTypeMain := reflect.TypeOf(rp).Elem()
		if pTypeMain.Name() == pTypeRepo.Name() &&
			pTypeMain.PkgPath() == pTypeRepo.PkgPath() {
			// TODO: find out how to use a pointer reference instead of return
			return rp
		}
	}

	return repo
}

func TransactionEnd(
	ctx context.Context,
	dbTrx *DBTransaction,
	err error,
) {
	if r := recover(); r != nil {
		err := dbTrx.End(fmt.Errorf("recovery"))
		if err != nil {
			logger.Error(err)
			return
		}
	}

	err = dbTrx.End(err)
	if err != nil {
		logger.Error(err)
	}
}
