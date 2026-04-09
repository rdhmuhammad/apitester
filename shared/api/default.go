package api

import (
	"github.com/gin-gonic/gin"
	"github.com/rdhmuhammad/apitester/internal/usecase/watch"
	"github.com/rdhmuhammad/apitester/pkg/logger"
	"github.com/rdhmuhammad/apitester/pkg/middleware"
)

func Default() *Api {
	server := gin.Default()
	server.Use(middleware.AllowCORS())

	api := Api{
		server: server,
	}

	logger.DefaultLogger()

	routers := []Router{
		watch.NewController(),
	}

	api.routers = routers

	return &api
}
