package db

import (
	"context"
	"fmt"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"
	"reflect"
	"strings"
	"time"
)

type GenericRepository[T schema.Tabler] struct {
	db    *gorm.DB
	model T
}

func (repo *GenericRepository[T]) SetupConnection(db *gorm.DB) {
	repo.db = db
}

func NewGenericeRepoPointr[T schema.Tabler](db *gorm.DB, model T) *GenericRepository[T] {
	return &GenericRepository[T]{
		db:    db,
		model: model,
	}
}

func NewGenericeRepo[T schema.Tabler](db *gorm.DB, table T) GenericRepository[T] {
	return GenericRepository[T]{
		db:    db,
		model: table,
	}
}

var (
	/**
	Format input
	- TableName.ColName
	- ColName
	Return TableName, ColumnName
	*/
	getColNameStr = func(col string) (string, string) {
		var colName, tableName string
		split := strings.Split(col, ".")
		if len(split) == 2 {
			tableName = split[0]
			colName = split[1]
			return tableName, colName
		}
		return "", col
	}

	Search = func(val string, col ...string) clause.Expression {
		var exps = make([]clause.Expression, len(col))
		for i, c := range col {
			tableName, colName := getColNameStr(c)
			exps[i] = clause.Like{
				Column: clause.Column{Name: colName, Table: tableName},
				Value:  "%" + val + "%",
			}
		}
		return clause.Or(exps...)
	}

	Equal = func(val interface{}, col string) clause.Expression {
		tableName, colName := getColNameStr(col)
		return clause.Eq{
			Column: clause.Column{Name: colName, Table: tableName},
			Value:  val,
		}

	}
	ExpressionDateRange = func(start time.Time, end time.Time, col string, table string) clause.Expression {
		return clause.And(
			clause.Gte{
				Column: clause.Column{Name: col},
				Value:  start.Format("2006-01-02 15:04:05"),
			},
			clause.Lte{
				Column: clause.Column{Name: col},
				Value:  end.Format("2006-01-02 15:04:05"),
			},
		)
	}
	Query = func(exps ...clause.Expression) []clause.Expression {
		return exps
	}
)

func InArray[T interface{}](val []T, col string) clause.Expression {
	tableName, colName := getColNameStr(col)
	output := make([]interface{}, len(val))
	for i, v := range val {
		output[i] = v
	}

	return clause.IN{
		Column: clause.Column{Name: colName, Table: tableName},
		Values: output,
	}
}

func NotInArray[T interface{}](val []T, col string) clause.Expression {
	tableName, colName := getColNameStr(col)
	output := make([]interface{}, len(val))
	for i, v := range val {
		output[i] = v
	}

	return clause.Not(clause.IN{
		Column: clause.Column{Name: colName, Table: tableName},
		Values: output,
	})
}

type PaginationQuery struct {
	PerPage int
	Page    int
}

type GenericRepositoryInterface[T any] interface {
	FindAllByExpression(
		ctx context.Context,
		expression []clause.Expression,
	) ([]T, error)
	FindAll(ctx context.Context) ([]T, error)
	FindPagedByExpression(ctx context.Context, cond []clause.Expression, paginate PaginationQuery) ([]T, int, error)
	FindPagedByExpressionAndPreloadConditioned(
		ctx context.Context,
		cond []clause.Expression,
		paginate PaginationQuery,
		joins []string,
		preload []PreloadWithCondition,
		expType int,
	) ([]T, int, error)
	FindAllByExpressionAndPreloadConditioned(ctx context.Context, cond []clause.Expression, joins []string, preload []PreloadWithCondition) ([]T, error)
	FindAllByExpressionAndJoin(
		ctx context.Context,
		cond []clause.Expression,
		join []string,
		preload []string,
	) ([]T, error)
	FindAllByScopeAndJoin(
		ctx context.Context,
		scope []func(db *gorm.DB) *gorm.DB,
		join []string,
		preload []string,
	) ([]T, error)
	CountByExpression(ctx context.Context, exp []clause.Expression) (int, error)
	CountByExpressionAndJoin(ctx context.Context, exp []clause.Expression, join []string) (int, error)
	SumByExpression(ctx context.Context, col string, exp []clause.Expression) (int, error)
	Update(ctx context.Context, data T) error
	UpdateSelectedCols(ctx context.Context, data T, columns ...string) error
	BulkStore(ctx context.Context, data []T) ([]T, error)
	DeleteByExpression(ctx context.Context, exp []clause.Expression) error
	StoreExclude(ctx context.Context, data T, ignore ...string) (T, error)
	Store(ctx context.Context, data T) (T, error)
	DeleteByID(ctx context.Context, id uint) error
	Delete(ctx context.Context, data T) error
	BulkDelete(ctx context.Context, data []T) error
	FindOneByID(ctx context.Context, id interface{}) (T, error)
	FindOneByExpressionAndJoin(
		ctx context.Context,
		cond []clause.Expression,
		joins []string,
		preload []string,
	) (T, error)
	FindOneByExpression(
		ctx context.Context,
		cond []clause.Expression,
	) (T, error)
	FindPagedByExpressionJoin(ctx context.Context, cond []clause.Expression, paginate PaginationQuery, join []string, preload []string, expType int) ([]T, int, error)
	FindAllByExpressionPaginate(
		ctx context.Context,
		paginate PaginationQuery,
		cond []clause.Expression,
	) ([]T, int, error)
	BulkUpdateSelectedColumn(ctx context.Context, children []T, fields ...string) error
	IsExistCondition(
		ctx context.Context,
		cond []clause.Expression,
	) (bool, error)
	IsExist(
		ctx context.Context,
		column string, val interface{}) (bool, error)

	/**
	================ selection usage ==============
	*/

	FindOneByIDSelection(
		ctx context.Context,
		entity interface{},
		id interface{},
	) error
	FindOneByExpSelection(
		ctx context.Context,
		entity interface{},
		cond []clause.Expression,
	) error
	FindAllByExpSelection(
		ctx context.Context,
		entity interface{},
		cond []clause.Expression,
	) error
	JoinAllByExpSelection(
		ctx context.Context,
		entity interface{},
		cond []clause.Expression,
		joins []string,
	) error
	JoinOneByExpSelection(
		ctx context.Context,
		entity interface{},
		cond []clause.Expression,
		joins []string,
	) error
}

func (repo GenericRepository[T]) BulkUpdateSelectedColumn(ctx context.Context, children []T, fields ...string) error {
	return repo.db.WithContext(ctx).Transaction(func(tx *gorm.DB) error {
		for _, child := range children {
			err := tx.Select(fields).
				Updates(&child).Error
			if err != nil {
				return err
			}
		}
		return nil
	})
}

func (repo GenericRepository[T]) Update(ctx context.Context, data T) error {
	return repo.db.WithContext(ctx).Updates(&data).Error
}

func (repo GenericRepository[T]) CountByExpressionAndJoin(ctx context.Context, exp []clause.Expression, join []string) (int, error) {
	var count int64
	db := repo.db.WithContext(ctx).
		Model(&repo.model)

	for _, j := range join {
		db = db.Joins(j)
	}

	for _, c := range exp {
		db = db.Where(c)
	}

	err := db.Count(&count).Error

	return int(count), err
}

func (repo GenericRepository[T]) CountByExpression(ctx context.Context, exp []clause.Expression) (int, error) {
	var count int64
	err := repo.db.WithContext(ctx).
		Table(repo.model.TableName()).
		Clauses(clause.Where{Exprs: exp}).
		Count(&count).Error

	return int(count), err
}

func (repo GenericRepository[T]) SumByExpression(ctx context.Context, col string, exp []clause.Expression) (int, error) {
	var summary int
	err := repo.db.WithContext(ctx).
		Table(repo.model.TableName()).
		Clauses(clause.Where{Exprs: exp}).
		Select(fmt.Sprintf("coalesce(sum(%s), 0) as summary", col)).
		Find(&summary).Error

	return summary, err
}

func (repo GenericRepository[T]) UpdateSelectedCols(ctx context.Context, data T, columns ...string) error {
	return repo.db.WithContext(ctx).
		Select(columns).
		Updates(&data).Error
}

func (repo GenericRepository[T]) BulkStore(ctx context.Context, data []T) ([]T, error) {
	err := repo.db.WithContext(ctx).
		Create(&data).Error

	return data, err
}

func (repo GenericRepository[T]) StoreExclude(ctx context.Context, data T, ignore ...string) (T, error) {
	err := repo.db.WithContext(ctx).
		Omit(ignore...).
		Create(&data).Error

	return data, err
}

func (repo GenericRepository[T]) Store(ctx context.Context, data T) (T, error) {
	err := repo.db.WithContext(ctx).
		Create(&data).Error

	return data, err
}

func (repo GenericRepository[T]) DeleteByExpression(ctx context.Context, exp []clause.Expression) error {
	return repo.db.WithContext(ctx).
		Clauses(clause.Where{Exprs: exp}).
		Table(repo.model.TableName()).
		Delete(&repo.model).Error
}

func (repo GenericRepository[T]) Delete(ctx context.Context, data T) error {
	return repo.db.WithContext(ctx).Delete(&data).Error
}

func (repo GenericRepository[T]) DeleteByID(ctx context.Context, id uint) error {
	return repo.db.WithContext(ctx).
		Where("id = ?", id).
		Delete(&repo.model).Error
}

func (repo GenericRepository[T]) BulkDelete(ctx context.Context, data []T) error {
	return repo.db.WithContext(ctx).Delete(&data).Error
}

func (repo GenericRepository[T]) FindAll(ctx context.Context) ([]T, error) {
	var data []T
	err := repo.db.WithContext(ctx).
		Find(&data).Error

	return data, err
}

func (repo GenericRepository[T]) FindAllByExpression(
	ctx context.Context,
	expression []clause.Expression,
) ([]T, error) {
	var result []T
	err := repo.db.WithContext(ctx).
		Clauses(clause.Where{Exprs: expression}).
		Find(&result).Error

	return result, err
}

func (repo GenericRepository[T]) FindAllByScopeAndJoin(
	ctx context.Context,
	scope []func(db *gorm.DB) *gorm.DB,
	join []string,
	preload []string,
) ([]T, error) {
	var result []T
	db := repo.db.WithContext(ctx).
		Model(&result)

	for _, sc := range scope {
		db = db.Scopes(sc)
	}

	for _, pr := range preload {
		db = db.Preload(pr)
	}

	for _, j := range join {
		db = db.Joins(j)
	}

	err := db.First(&result).Error
	return result, err
}

func (repo GenericRepository[T]) FindOneByExpressionAndJoin(
	ctx context.Context,
	cond []clause.Expression,
	joins []string,
	preload []string,
) (T, error) {
	var result T
	db := repo.db.WithContext(ctx).
		Model(&result).
		Clauses(clause.Where{Exprs: cond})

	for _, pr := range preload {
		db = db.Preload(pr)
	}

	for _, join := range joins {
		db = db.Joins(join)
	}

	err := db.First(&result).Error
	return result, err
}

func (repo GenericRepository[T]) FindOneByID(ctx context.Context, id interface{}) (T, error) {
	var data T
	err := repo.db.WithContext(ctx).
		First(&data, "id = ?", id).Error

	return data, err
}

func (repo GenericRepository[T]) FindOneByExpression(
	ctx context.Context,
	cond []clause.Expression,
) (T, error) {
	var result T
	db := repo.db.WithContext(ctx).
		Model(&result).
		Clauses(clause.Where{Exprs: cond})

	err := db.First(&result).Error
	return result, err
}

type PreloadWithCondition struct {
	ColName string
	Args    []interface{}
}

func (repo GenericRepository[T]) FindPagedByExpression(
	ctx context.Context,
	cond []clause.Expression,
	paginate PaginationQuery,
) ([]T, int, error) {
	var result []T
	var total int64

	db := repo.db.WithContext(ctx).
		Model(&result)

	errCount := db.Count(&total).Error
	if errCount != nil {
		return nil, 0, errCount
	}

	offset := paginate.PerPage * (paginate.Page - 1)
	limit := paginate.PerPage

	if len(cond) > 0 {
		db = db.Clauses(clause.Where{Exprs: cond})
	}

	err := db.
		Find(&result).
		Offset(offset).
		Limit(limit).Error

	return result, int(total), err
}

const (
	ExpressionOr = iota
	ExpressionAnd
)

func (repo GenericRepository[T]) FindPagedByExpressionAndPreloadConditioned(
	ctx context.Context,
	cond []clause.Expression,
	paginate PaginationQuery,
	joins []string,
	preload []PreloadWithCondition,
	expType int,
) ([]T, int, error) {
	var result []T
	var total int64

	db := repo.db.WithContext(ctx).
		Model(&result)

	db = repo.applyWhereClause(cond, expType, db)

	for _, j := range joins {
		db = db.Joins(j)
	}

	for _, s := range preload {
		if len(s.Args) == 0 {
			db = db.Preload(s.ColName)
		} else {
			db = db.Preload(s.ColName, s.Args...)
		}
	}

	errCount := db.Count(&total).Error
	if errCount != nil {
		return nil, 0, errCount
	}

	offset := paginate.PerPage * (paginate.Page - 1)
	limit := paginate.PerPage

	err := db.
		Offset(offset).
		Limit(limit).
		Find(&result).
		Error
	return result, int(total), err
}

func (repo GenericRepository[T]) applyWhereClause(cond []clause.Expression, expType int, db *gorm.DB) *gorm.DB {
	if len(cond) > 0 {
		switch expType {
		case ExpressionOr:
			db = db.Clauses(clause.Where{Exprs: cond})
			break
		case ExpressionAnd:
			for _, c := range cond {
				db = db.Where(c)
			}
			break
		}
	}
	return db
}

func (repo GenericRepository[T]) FindAllByExpressionAndPreloadConditioned(
	ctx context.Context,
	cond []clause.Expression,
	joins []string,
	preload []PreloadWithCondition,
) ([]T, error) {
	var result []T
	db := repo.db.WithContext(ctx).
		Model(&result)

	if len(cond) > 0 {
		db = db.Clauses(clause.Where{Exprs: cond})
	}

	for _, j := range joins {
		db = db.Joins(j)
	}

	for _, s := range preload {
		if len(s.Args) == 0 {
			db = db.Preload(s.ColName)
		} else {
			db = db.Preload(s.ColName, s.Args...)
		}
	}

	err := db.Find(&result).Error
	return result, err
}

func (repo GenericRepository[T]) FindAllByExpressionAndJoin(
	ctx context.Context,
	cond []clause.Expression,
	join []string,
	preload []string,
) ([]T, error) {
	var result []T
	db := repo.db.WithContext(ctx).
		Model(&result).Clauses(clause.Where{Exprs: cond})

	for _, j := range join {
		db = db.Joins(j)
	}

	for _, s := range preload {
		db = db.Preload(s)
	}

	err := db.Find(&result).Error
	return result, err
}

func (repo GenericRepository[T]) FindPagedByExpressionJoin(
	ctx context.Context,
	cond []clause.Expression,
	paginate PaginationQuery,
	join []string,
	preload []string,
	expType int,
) ([]T, int, error) {
	var result []T
	var total int64
	db := repo.db.WithContext(ctx).
		Model(&result)

	db = repo.applyWhereClause(cond, expType, db)

	for _, j := range join {
		db = db.Joins(j)
	}

	for _, j := range preload {
		db = db.Preload(j)
	}

	errCount := db.Count(&total).Error
	if errCount != nil {
		return nil, 0, errCount
	}

	offset := paginate.PerPage * (paginate.Page - 1)
	limit := paginate.PerPage

	err := db.Find(&result).
		Limit(limit).
		Offset(offset).Error

	return result, int(total), err
}

func (repo GenericRepository[T]) FindAllByExpressionPaginate(
	ctx context.Context,
	paginate PaginationQuery,
	cond []clause.Expression,
) ([]T, int, error) {
	var result []T
	var total int64
	db := repo.db.WithContext(ctx).
		Model(&result).
		Clauses(clause.Where{Exprs: cond})

	errCount := db.Count(&total).Error
	if errCount != nil {
		return nil, 0, errCount
	}

	offset := paginate.PerPage * (paginate.Page - 1)
	limit := paginate.PerPage

	err := db.Find(&result).
		Limit(limit).
		Offset(offset).Error

	return result, int(total), err
}
func (repo GenericRepository[T]) IsExistCondition(
	ctx context.Context,
	cond []clause.Expression,
) (bool, error) {
	var total int64
	err := repo.db.WithContext(ctx).
		Model(&repo.model).
		Clauses(clause.Where{Exprs: cond}).
		Count(&total).Error

	return total > 0, err
}

func (repo GenericRepository[T]) IsExist(
	ctx context.Context,
	column string, val interface{}) (bool, error) {
	var total int64
	err := repo.db.WithContext(ctx).
		Model(&repo.model).
		Clauses(clause.Where{Exprs: []clause.Expression{
			clause.Eq{
				Column: clause.Column{Name: column, Table: repo.model.TableName()},
				Value:  val,
			},
		}}).
		Count(&total).Error

	return total > 0, err
}

/**
===================== USAGE WITH SPECIFIC COLUMN SELECTION =======================
*/

func (repo GenericRepository[T]) extractSelection(entity interface{}) ([]string, error) {
	typeOf := reflect.TypeOf(entity)
	if typeOf.Kind() != reflect.Ptr {
		return nil, fmt.Errorf("should had parsing entity struct pointer to parameter")
	}

	var results = make([]string, 0)

	elem := typeOf.Elem()
	switch elem.Kind() {
	case reflect.Struct:
		results = repo.fromStruct(elem)
		break
	case reflect.Array, reflect.Slice:
		results = repo.fromStruct(elem.Elem())
		break
	default:
		results = []string{}
	}

	return results, nil
}

func (repo GenericRepository[T]) fromStruct(elem reflect.Type) []string {
	var results = make([]string, elem.NumField())
	for i := 0; i < elem.NumField(); i++ {
		field := elem.Field(i)
		gormTag := field.Tag.Get("gorm")

		// Extract column name from gorm tag
		var columnName string
		if strings.Contains(gormTag, "column:") {
			// Find the start of "column:"
			parts := strings.Split(gormTag, ";")
			for _, part := range parts {
				part = strings.TrimSpace(part)
				if strings.HasPrefix(part, "column:") {
					columnName = strings.TrimPrefix(part, "column:")
					break
				}
			}
		}

		// Use column name if found, otherwise use field name
		if columnName != "" {
			results[i] = columnName
		}
	}
	return results
}

func (repo GenericRepository[T]) FindOneByIDSelection(
	ctx context.Context,
	entity interface{},
	id interface{},
) error {
	selection, err := repo.extractSelection(entity)
	if err != nil {
		return err
	}

	err = repo.db.WithContext(ctx).
		Table(repo.model.TableName()).
		Select(selection).
		First(entity, "id = ?", id).Error

	return err
}

func (repo GenericRepository[T]) FindOneByExpSelection(
	ctx context.Context,
	entity interface{},
	cond []clause.Expression,
) error {
	selection, err := repo.extractSelection(entity)
	if err != nil {
		return err
	}

	err = repo.db.WithContext(ctx).
		Table(repo.model.TableName()).
		Select(selection).
		Where(clause.Where{Exprs: cond}).
		First(entity).Error

	return err
}

func (repo GenericRepository[T]) FindAllByExpSelection(
	ctx context.Context,
	entity interface{},
	cond []clause.Expression,
) error {
	selection, err := repo.extractSelection(entity)
	if err != nil {
		return err
	}

	err = repo.db.WithContext(ctx).
		Table(repo.model.TableName()).
		Select(selection).
		Where(clause.Where{Exprs: cond}).
		Find(entity).Error

	return err
}

func (repo GenericRepository[T]) JoinAllByExpSelection(
	ctx context.Context,
	entity interface{},
	cond []clause.Expression,
	joins []string,
) error {
	selection, err := repo.extractSelection(entity)
	if err != nil {
		return err
	}

	tx := repo.db.WithContext(ctx).
		Table(repo.model.TableName()).
		Select(selection)

	for _, j := range joins {
		tx = tx.Joins(j)
	}

	err = tx.
		Where(clause.Where{Exprs: cond}).
		Find(entity).Error

	return err

}

func (repo GenericRepository[T]) JoinOneByExpSelection(
	ctx context.Context,
	entity interface{},
	cond []clause.Expression,
	joins []string,
) error {
	selection, err := repo.extractSelection(entity)
	if err != nil {
		return err
	}

	tx := repo.db.WithContext(ctx).
		Table(repo.model.TableName()).
		Select(selection)

	for _, j := range joins {
		tx = tx.Joins(j)
	}

	err = tx.
		Where(clause.Where{Exprs: cond}).
		First(entity).Error

	return err

}
