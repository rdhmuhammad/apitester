package watch

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/rdhmuhammad/apitester/pkg/logger"
	"github.com/rdhmuhammad/apitester/pkg/mapper"
	"github.com/rdhmuhammad/apitester/shared/payload"
)

const maxCollectionBodyBytes = 10 << 20 // 10 MB

type Controller struct {
	Uc             UsecaseInterface
	mapper         mapper.Mapper
	authMiddleware func(http.Handler) http.Handler
}

type UsecaseInterface interface {
	Read() (ReadResponse, error)
	WriteCollection(content string) error
}

func NewController(lg *logger.ReZero, collectionPath string) Controller {
	return Controller{
		Uc:     NewUsecase(lg, collectionPath),
		mapper: mapper.NewMapper(),
	}
}

func (ctrl Controller) WithAuth(mw func(http.Handler) http.Handler) Controller {
	ctrl.authMiddleware = mw
	return ctrl
}

func (ctrl Controller) Read(w http.ResponseWriter, r *http.Request) {
	res, err := ctrl.Uc.Read()
	ctrl.mapper.NewResponse(w, payload.NewSuccessResponse(res, "Success"), err)
}

func (ctrl Controller) WriteCollection(w http.ResponseWriter, r *http.Request) {
	r.Body = http.MaxBytesReader(w, r.Body, maxCollectionBodyBytes)
	body, err := io.ReadAll(r.Body)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		_ = json.NewEncoder(w).Encode(payload.DefaultErrorInvalidDataWithMessage(err.Error()))
		return
	}

	err = ctrl.Uc.WriteCollection(string(body))
	if invalid, invalidErr := ctrl.mapper.IsInvalidDataError(err); invalid {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		_ = json.NewEncoder(w).Encode(payload.DefaultErrorInvalidDataWithMessage(invalidErr.Error()))
		return
	}

	ctrl.mapper.NewResponse(w, payload.NewSuccessResponseNoData("Collection written successfully"), err)
}

func (ctrl Controller) Register(mux *http.ServeMux, prefix string) {
	readHandler := http.Handler(http.HandlerFunc(ctrl.Read))
	writeHandler := http.Handler(http.HandlerFunc(ctrl.WriteCollection))
	if ctrl.authMiddleware != nil {
		readHandler = ctrl.authMiddleware(readHandler)
		writeHandler = ctrl.authMiddleware(writeHandler)
	}
	mux.Handle("GET "+prefix+"/collection/read", readHandler)
	mux.Handle("PUT "+prefix+"/collection/write", writeHandler)
}
