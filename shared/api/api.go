package api

import (
	"os"

	"github.com/gin-gonic/gin"
)

type Api struct {
	server  *gin.Engine
	routers []Router
}

type Router interface {
	Route(handler *gin.RouterGroup)
}

func (a *Api) Start() error {
	root := a.server.Group("/api/v1")

	for _, router := range a.routers {
		router.Route(root)
	}

	port := os.Getenv("APP_PORT")
	err := a.server.Run("0.0.0.0:" + port)
	if err != nil {
		return err
	}

	return err
}
