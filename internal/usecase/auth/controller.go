package auth

import (
	"context"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/rdhmuhammad/apitester/internal/domain"
	"github.com/rdhmuhammad/apitester/pkg/bbolt"
	"github.com/rdhmuhammad/apitester/pkg/logger"
	"github.com/rdhmuhammad/apitester/pkg/mapper"
	"github.com/rdhmuhammad/apitester/pkg/middleware"
	"github.com/rdhmuhammad/apitester/shared/payload"
)

type Controller struct {
	Uc        UsecaseInterface
	mapper    mapper.Mapper
	jwtSecret []byte
}

type UsecaseInterface interface {
	Login(ctx context.Context, req LoginRequest) (LoginResponse, error)
}

func NewController(lg *logger.ReZero, userRepo bbolt.RepositoryInterface[domain.User]) Controller {
	return Controller{
		Uc:        NewUsecase(lg, userRepo),
		mapper:    mapper.NewMapper(),
		jwtSecret: JWTSecret(),
	}
}

func (ctrl Controller) Login(c *gin.Context) {
	var req LoginRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, payload.DefaultErrorInvalidDataWithMessage(err.Error()))
		return
	}

	result, err := ctrl.Uc.Login(context.Background(), req)
	if err != nil {
		if invalid, invalidErr := ctrl.mapper.IsInvalidDataError(err); invalid {
			c.JSON(http.StatusBadRequest, payload.DefaultErrorInvalidDataWithMessage(invalidErr.Error()))
			return
		}
		ctrl.mapper.NewResponse(c, payload.NewSuccessResponse(result, "Login failed"), err)
		return
	}

	maxAge := int(result.ExpiresAt - time.Now().Unix())
	if maxAge > 0 {
		c.SetCookie("token", result.Token, maxAge, "/", "", false, true)
	}

	ctrl.mapper.NewResponse(c, payload.NewSuccessResponse(result, "Login successful"), nil)
}

func (ctrl Controller) Me(c *gin.Context) {
	username, exists := c.Get("username")
	if !exists {
		c.JSON(http.StatusUnauthorized, payload.DefaultErrorInvalidDataWithMessage("Not authenticated"))
		return
	}

	ctrl.mapper.NewResponse(c, payload.NewSuccessResponse(MeResponse{
		Username:      username.(string),
		Authenticated: true,
	}, "Success"), nil)
}

func (ctrl Controller) Route(rg *gin.RouterGroup) {
	auth := rg.Group("/auth")
	auth.POST("/login", ctrl.Login)

	auth.Use(middleware.CookieAuth(ctrl.jwtSecret))
	auth.GET("/me", ctrl.Me)
}
