package watch

import (
	"github.com/gin-gonic/gin"
	"github.com/rdhmuhammad/apitester/pkg/mapper"
	"github.com/rdhmuhammad/apitester/shared/payload"
)

type Controller struct {
	Uc     UsecaseInterface
	mapper mapper.Mapper
}

type UsecaseInterface interface {
	Read() (ReadResponse, error)
}

func NewController() Controller {
	return Controller{
		Uc: NewUsecase(),
	}
}

func (ctrl Controller) Read(c *gin.Context) {
	res, err := ctrl.Uc.Read()
	ctrl.mapper.NewResponse(c, payload.NewSuccessResponse(res, "Success"),
		err,
	)
}

func (ctrl Controller) Route(rg *gin.RouterGroup) {
	collection := rg.Group("/collection")
	collection.GET("/read", ctrl.Read)
}
