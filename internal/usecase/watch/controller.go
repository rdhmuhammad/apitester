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
	UploadCollection(fileBytes []byte) error
	ListCollections() ([]domain.Collection, error)
	CreateCollection(req CreateCollectionRequest) (domain.Collection, error)
	UpdateCollectionByID(id string, req UpdateCollectionRequest) (domain.Collection, error)
	DeleteCollection(id string) error
	SelectCollection(id string) (domain.Collection, error)
	WriteCollection(id string, content string) error
	GetActiveCollection() (domain.Collection, error)
}

func NewController(lg *logger.ReZero, collectionRepo bbolt.RepositoryInterface[domain.Collection]) Controller {
	return Controller{
		Uc: NewUsecase(lg, collectionRepo),
	}
}

func (ctrl Controller) Read(c *gin.Context) {
	id := c.Param("id")
	res, err := ctrl.Uc.Read(id)
	ctrl.mapper.NewResponse(c, payload.NewSuccessResponse(res, "Success"),
		err,
	)
}

func (ctrl Controller) Upload(c *gin.Context) {
	fileHeader, err := c.FormFile("file")
	if err != nil {
		c.JSON(http.StatusBadRequest, payload.DefaultErrorInvalidDataWithMessage("Collection file is required"))
		return
	}

	file, err := fileHeader.Open()
	if err != nil {
		ctrl.mapper.NewResponse(c, nil, err)
		return
	}
	defer file.Close()

	fileBytes, err := io.ReadAll(file)
	if err != nil {
		ctrl.mapper.NewResponse(c, nil, err)
		return
	}

	err = ctrl.Uc.UploadCollection(fileBytes)
	if invalid, invalidErr := ctrl.mapper.IsInvalidDataError(err); invalid {
		c.JSON(http.StatusBadRequest, payload.DefaultErrorInvalidDataWithMessage(invalidErr.Error()))
		return
	}

	ctrl.mapper.NewResponse(c, payload.NewSuccessResponseNoData("Collection uploaded successfully"), err)
}

func (ctrl Controller) CreateCollection(c *gin.Context) {
	var req CreateCollectionRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, payload.DefaultErrorInvalidDataWithMessage(err.Error()))
		return
	}

	res, err := ctrl.Uc.CreateCollection(req)
	ctrl.mapper.NewResponse(c, payload.NewSuccessResponse(res, "Collection created"), err)
}

func (ctrl Controller) UpdateCollectionByID(c *gin.Context) {
	id := c.Param("id")
	var req UpdateCollectionRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, payload.DefaultErrorInvalidDataWithMessage(err.Error()))
		return
	}

	res, err := ctrl.Uc.UpdateCollectionByID(id, req)
	ctrl.mapper.NewResponse(c, payload.NewSuccessResponse(res, "Collection updated"), err)
}

func (ctrl Controller) DeleteCollection(c *gin.Context) {
	id := c.Param("id")
	err := ctrl.Uc.DeleteCollection(id)
	ctrl.mapper.NewResponse(c, payload.NewSuccessResponseNoData("Collection deleted"), err)
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

func (ctrl Controller) Route(rg *gin.RouterGroup) {
	collection := rg.Group("/collection")
	collection.GET("/read/:id", ctrl.Read)
	collection.POST("/upload", ctrl.Upload)
	collection.GET("/list", ctrl.ListCollections)
	collection.POST("/create", ctrl.CreateCollection)
	collection.PUT("/:id", ctrl.UpdateCollectionByID)
	collection.DELETE("/:id", ctrl.DeleteCollection)
	collection.PUT("/select/:id", ctrl.SelectCollection)
	collection.PUT("/write/:id", ctrl.WriteCollection)
	collection.GET("/get-active", ctrl.GetActiveCollection)
}
