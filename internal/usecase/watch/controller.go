package watch

import (
	"io"
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
	Read(id string) (ReadResponse, error)
	ListCollections() ([]domain.Collection, error)
	SelectCollection(id string) (domain.Collection, error)
	WriteCollection(id string, content string) error
	GetActiveCollection() (domain.Collection, error)
	ReadSelectedCollection() (ReadResponse, error)
}

func NewController(lg *logger.ReZero, collectionRepo bbolt.RepositoryInterface[domain.Collection], selectedCollectionRepo bbolt.RepositoryInterface[domain.SelectedCollection]) Controller {
	return Controller{
		Uc: NewUsecase(lg, collectionRepo, selectedCollectionRepo),
	}
}

func (ctrl Controller) Read(c *gin.Context) {
	id := c.Param("id")
	res, err := ctrl.Uc.Read(id)
	ctrl.mapper.NewResponse(c, payload.NewSuccessResponse(res, "Success"),
		err,
	)
}

func (ctrl Controller) SelectCollection(c *gin.Context) {
	id := c.Param("id")
	res, err := ctrl.Uc.SelectCollection(id)
	ctrl.mapper.NewResponse(c, payload.NewSuccessResponse(res, "Collection selected"), err)
}

func (ctrl Controller) WriteCollection(c *gin.Context) {
	id := c.Param("id")
	body, err := io.ReadAll(c.Request.Body)
	if err != nil {
		c.JSON(http.StatusBadRequest, payload.DefaultErrorInvalidDataWithMessage(err.Error()))
		return
	}

	err = ctrl.Uc.WriteCollection(id, string(body))
	if invalid, invalidErr := ctrl.mapper.IsInvalidDataError(err); invalid {
		c.JSON(http.StatusBadRequest, payload.DefaultErrorInvalidDataWithMessage(invalidErr.Error()))
		return
	}

	ctrl.mapper.NewResponse(c, payload.NewSuccessResponseNoData("Collection written successfully"), err)
}

func (ctrl Controller) GetActiveCollection(c *gin.Context) {
	res, err := ctrl.Uc.GetActiveCollection()
	ctrl.mapper.NewResponse(c, payload.NewSuccessResponse(res, "Success"), err)
}

func (ctrl Controller) ListCollections(c *gin.Context) {
	res, err := ctrl.Uc.ListCollections()
	ctrl.mapper.NewResponse(c, payload.NewSuccessResponse(res, "Success"), err)
}

func (ctrl Controller) ReadSelectedCollection(c *gin.Context) {
	res, err := ctrl.Uc.ReadSelectedCollection()
	ctrl.mapper.NewResponse(c, payload.NewSuccessResponse(res, "Success"), err)
}

func (ctrl Controller) Route(rg *gin.RouterGroup) {
	collection := rg.Group("/collection")
	collection.GET("/read/:id", ctrl.Read)
	collection.GET("/list", ctrl.ListCollections)
	collection.PUT("/select/:id", ctrl.SelectCollection)
	collection.PUT("/write/:id", ctrl.WriteCollection)
	collection.GET("/get-active", ctrl.GetActiveCollection)
	collection.GET("/read-selected", ctrl.ReadSelectedCollection)
}
