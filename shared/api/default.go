package api

import (
	"github.com/gin-gonic/gin"
	"github.com/rdhmuhammad/apitester/internal/usecase/watch"
	"github.com/rdhmuhammad/apitester/pkg/logger"
)

func Default() *Api {
	server := gin.Default()

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
