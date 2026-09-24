package watch

import (
	"encoding/json"
	"os"
	"regexp"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/rdhmuhammad/apitester/pkg/localerror"
	"github.com/rdhmuhammad/apitester/pkg/logger"
	"github.com/rdhmuhammad/apitester/pkg/watcher"
)

var baseURLRegex = regexp.MustCompile(`(?i)(base.*url|url.*base)`)

type Usecase struct {
	watcher    *watcher.FileWatcher
	errHandler localerror.HandleError
	path       string
}

func NewUsecase(lg *logger.ReZero, collectionPath string) *Usecase {
	fw := watcher.New()
	if collectionPath != "" {
		fw.Watch(collectionPath)
	}

	return &Usecase{
		errHandler: localerror.NewHandlerError(lg),
		watcher:    fw,
		path:       collectionPath,
	}
}

func (u *Usecase) Read() (ReadResponse, error) {
	if u.path == "" {
		return ReadResponse{}, localerror.InvalidData("Collection path is not set")
	}

	fileBytes, err := os.ReadFile(u.path)
	if err != nil {
		return ReadResponse{}, u.errHandler.ErrorReturn(err)
	}

	content := strings.TrimPrefix(string(fileBytes), "\uFEFF")
	var docsContent DocsContent
	if err := json.Unmarshal([]byte(content), &docsContent); err != nil {
		return ReadResponse{}, u.errHandler.ErrorReturn(err)
	}

	for i := range docsContent.Variable {
		if isBaseURLVar(docsContent.Variable[i].Key) && docsContent.Variable[i].ID == "" {
			docsContent.Variable[i].Category = "BASE_URL"
		}
	}

	docsContent.Item = setId(docsContent.Item)

	info, _ := os.Stat(u.path)
	var updatedAt time.Time
	if info != nil {
		updatedAt = info.ModTime()
	}

	return ReadResponse{
		Content:   docsContent,
		Changed:   false,
		UpdatedAt: updatedAt,
	}, nil
}

func (u *Usecase) WriteCollection(content string) error {
	if content == "" {
		return localerror.InvalidData("Collection content is required")
	}
	if u.path == "" {
		return localerror.InvalidData("Collection path is not set")
	}

	if err := os.WriteFile(u.path, []byte(content), 0644); err != nil {
		return u.errHandler.ErrorReturn(err)
	}

	info, err := os.Stat(u.path)
	if err != nil {
		return u.errHandler.ErrorReturn(err)
	}

	if u.watcher != nil && u.watcher.State != nil {
		u.watcher.State.Update(content, info.ModTime())
	}

	if info.ModTime().IsZero() && u.watcher != nil && u.watcher.State != nil {
		u.watcher.State.Update(content, time.Now())
	}

	return nil
}

func setId(item []CollectionItem) []CollectionItem {
	for i := range item {
		item[i].ID = uuid.NewString()

		if item[i].Request != nil {
			for j := range item[i].Request.Header {
				item[i].Request.Header[j].Id = uuid.NewString()
			}
			for j := range item[i].Request.URL.Query {
				item[i].Request.URL.Query[j].Id = uuid.NewString()
			}
			if item[i].Request.Body != nil {
				for j := range item[i].Request.Body.FormData {
					item[i].Request.Body.FormData[j].Id = uuid.NewString()
				}
			}
		}

		if item[i].Item != nil {
			item[i].Item = setId(item[i].Item)
		}
	}

	return item
}

func isBaseURLVar(s string) bool {
	return baseURLRegex.MatchString(s)
}
