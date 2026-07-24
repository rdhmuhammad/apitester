package api

import (
	"context"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

type Api struct {
	server  *gin.Engine
	routers []Router
	srv     *http.Server
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
	a.srv = &http.Server{
		Addr:    "0.0.0.0:" + port,
		Handler: a.server,
	}

	if err := a.srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		return err
	}

	return nil
}

func (a *Api) Shutdown(ctx context.Context) error {
	if a.srv != nil {
		return a.srv.Shutdown(ctx)
	}
	return nil
}
