package watch

import (
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rdhmuhammad/apitester/pkg/logger"
	"github.com/rdhmuhammad/apitester/pkg/mapper"
	"github.com/rdhmuhammad/apitester/shared/payload"
)

type Controller struct {
	Uc     UsecaseInterface
	mapper mapper.Mapper
}

type UsecaseInterface interface {
	Read() (ReadResponse, error)
	UploadCollection(fileBytes []byte) error
	UpdateCollection(fileBytes []byte) error
}

func NewController(lg *logger.ReZero) Controller {
	return Controller{
		Uc: NewUsecase(lg),
	}
}

func (ctrl Controller) Read(c *gin.Context) {
	res, err := ctrl.Uc.Read()
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

func (ctrl Controller) Update(c *gin.Context) {
	fileBytes, err := io.ReadAll(c.Request.Body)
	if err != nil {
		ctrl.mapper.NewResponse(c, nil, err)
		return
	}

	err = ctrl.Uc.UpdateCollection(fileBytes)
	if invalid, invalidErr := ctrl.mapper.IsInvalidDataError(err); invalid {
		c.JSON(http.StatusBadRequest, payload.DefaultErrorInvalidDataWithMessage(invalidErr.Error()))
		return
	}

	ctrl.mapper.NewResponse(c, payload.NewSuccessResponseNoData("Collection updated successfully"), err)
}

func (ctrl Controller) Route(rg *gin.RouterGroup) {
	collection := rg.Group("/collection")
	collection.GET("/read", ctrl.Read)
	collection.POST("/upload", ctrl.Upload)
	collection.PUT("/update", ctrl.Update)
}
