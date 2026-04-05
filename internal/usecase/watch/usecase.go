package watch

import (
	"os"

	"github.com/rdhmuhammad/apitester/pkg/watcher"
)

type Usecase struct {
	watcher *watcher.FileWatcher
}

func NewUsecase() *Usecase {
	return &Usecase{
		watcher: watcher.New(os.Getenv("API_DOCS")),
	}
}

func (u *Usecase) Read() (ReadResponse, error) {
	content, changed, updatedAt := u.watcher.State.Read()
	if !changed {
		fileBytes, err := os.ReadFile(os.Getenv("API_DOCS"))
		if err != nil {
			return ReadResponse{}, err
		}

		content = string(fileBytes)
	}

	return ReadResponse{
		Content:   content,
		Changed:   changed,
		UpdatedAt: updatedAt,
	}, nil
}
