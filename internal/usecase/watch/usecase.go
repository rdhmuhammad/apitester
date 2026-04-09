package watch

import (
	"encoding/json"
	"os"

	"github.com/rdhmuhammad/apitester/pkg/localerror"
	"github.com/rdhmuhammad/apitester/pkg/watcher"
)

type Usecase struct {
	watcher    *watcher.FileWatcher
	errHandler localerror.HandleError
}

func NewUsecase() *Usecase {
	return &Usecase{
		watcher: watcher.New(os.Getenv("API_DOCS")),
	}
}

func (u *Usecase) Read() (ReadResponse, error) {
	content, changed, updatedAt := u.watcher.State.Read()
	var docsContent DocsContent
	if !changed {
		fileBytes, err := os.ReadFile(os.Getenv("API_DOCS"))
		if err != nil {
			return ReadResponse{}, u.errHandler.ErrorReturn(err)
		}
		content = string(fileBytes)
	}

	err := json.Unmarshal([]byte(content), &docsContent)
	if err != nil {
		return ReadResponse{}, u.errHandler.ErrorReturn(err)
	}

	return ReadResponse{
		Content:   docsContent,
		Changed:   changed,
		UpdatedAt: updatedAt,
	}, nil
}
