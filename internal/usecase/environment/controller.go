package environment

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rdhmuhammad/apitester/internal/domain"
	"github.com/rdhmuhammad/apitester/pkg/bbolt"
	"github.com/rdhmuhammad/apitester/pkg/logger"
	"github.com/rdhmuhammad/apitester/pkg/mapper"
	"github.com/rdhmuhammad/apitester/shared/payload"
)

type Controller struct {
	Uc     UsecaseInterface
	mapper mapper.Mapper
}

type UsecaseInterface interface {
	ReadEnvironments(id string) (ReadEnvironmentsResponse, error)
	WriteEnvironments(id string, req WriteEnvironmentsRequest) error
}

func NewController(lg *logger.ReZero, collectionRepo bbolt.RepositoryInterface[domain.Collection]) Controller {
	return Controller{
		Uc: NewUsecase(lg, collectionRepo),
	}
}

func (ctrl Controller) ReadEnvironments(c *gin.Context) {
	id := c.Param("id")
	res, err := ctrl.Uc.ReadEnvironments(id)
	ctrl.mapper.NewResponse(c, payload.NewSuccessResponse(res, "Success"), err)
}

func (ctrl Controller) WriteEnvironments(c *gin.Context) {
	id := c.Param("id")

	var req WriteEnvironmentsRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, payload.DefaultErrorInvalidDataWithMessage(err.Error()))
		return
	}

	err := ctrl.Uc.WriteEnvironments(id, req)
	if invalid, invalidErr := ctrl.mapper.IsInvalidDataError(err); invalid {
		c.JSON(http.StatusBadRequest, payload.DefaultErrorInvalidDataWithMessage(invalidErr.Error()))
		return
	}

	ctrl.mapper.NewResponse(c, payload.NewSuccessResponseNoData("Environments written successfully"), err)
}

func (ctrl Controller) Route(rg *gin.RouterGroup) {
	collection := rg.Group("/collection")
	collection.GET("/:id/environments", ctrl.ReadEnvironments)
	collection.PUT("/:id/environments", ctrl.WriteEnvironments)
}
