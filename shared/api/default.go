package api

import (
	"os"
	"path/filepath"

	"github.com/gin-gonic/gin"
	"github.com/rdhmuhammad/apitester/internal/domain"
	"github.com/rdhmuhammad/apitester/internal/usecase/environment"
	"github.com/rdhmuhammad/apitester/internal/usecase/watch"
	"github.com/rdhmuhammad/apitester/pkg/bbolt"
	"github.com/rdhmuhammad/apitester/pkg/logger"
	"github.com/rdhmuhammad/apitester/pkg/middleware"
)

func Default() *Api {
	server := gin.Default()
	server.Use(middleware.AllowCORS())

	api := Api{
		server: server,
	}

	reZero := logger.DefaultLogger()
	collectionRepo, boltDB := initCollectionRepo()

	selectedCollectionRepo, err := bbolt.NewRepository[domain.SelectedCollection](boltDB.DB(), bbolt.WithBucketName("SelectedCollection"))
	if err != nil {
		panic(err)
	}

	routers := []Router{
		watch.NewController(&reZero, collectionRepo, selectedCollectionRepo),
		environment.NewController(&reZero, collectionRepo),
	}

	api.routers = routers

	return &api
}

func initCollectionRepo() (bbolt.RepositoryInterface[domain.Collection], *bbolt.BoltDB) {
	dbPath := collectionDBPath()
	boltDB, err := bbolt.NewBoltDB(dbPath)
	if err != nil {
		panic(err)
	}

	repo, err := bbolt.NewRepository[domain.Collection](boltDB.DB())
	if err != nil {
		panic(err)
	}

	return repo, boltDB
}

func collectionDBPath() string {
	if p := os.Getenv("BOLT_DB_PATH"); p != "" {
		return p
	}
	configDir, err := os.UserConfigDir()
	if err != nil {
		return "resource/db/collection.db"
	}
	return filepath.Join(configDir, "apitester", "collection.db")
}
