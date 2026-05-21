package watch

import (
	"encoding/json"
	"os"
	"regexp"
	"strings"

	"github.com/google/uuid"
	"github.com/rdhmuhammad/apitester/pkg/localerror"
	"github.com/rdhmuhammad/apitester/pkg/logger"
	"github.com/rdhmuhammad/apitester/pkg/watcher"
)

var baseURLRegex = regexp.MustCompile(`(?i)(base.*url|url.*base)`)

type Usecase struct {
	watcher    *watcher.FileWatcher
	errHandler localerror.HandleError
}

func NewUsecase(lg *logger.ReZero) *Usecase {
	return &Usecase{
		errHandler: localerror.NewHandlerError(lg),
		watcher:    watcher.New(os.Getenv("API_DOCS")),
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

	content = strings.TrimPrefix(content, "\uFEFF")
	err := json.Unmarshal([]byte(content), &docsContent)
	if err != nil {
		return ReadResponse{}, u.errHandler.ErrorReturn(err)
	}

	for i := range docsContent.Variable {
		if isBaseURLVar(docsContent.Variable[i].Key) && docsContent.Variable[i].ID == "" {
			docsContent.Variable[i].Category = "BASE_URL"
		}
	}

	docsContent.Item = setId(docsContent.Item)
	return ReadResponse{
		Content:   docsContent,
		Changed:   changed,
		UpdatedAt: updatedAt,
	}, nil
}

func setId(item []CollectionItem) []CollectionItem {
	for i, _ := range item {
		item[i].ID = uuid.NewString()

		if item[i].Item != nil {
			item[i].Item = setId(item[i].Item)
		}
	}

	return item
}

func isBaseURLVar(s string) bool {
	return baseURLRegex.MatchString(s)
}
