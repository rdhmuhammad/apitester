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

func (u *Usecase) UpdateCollection(fileBytes []byte) error {
	content := strings.TrimPrefix(string(fileBytes), "\uFEFF")

	var updateReq UpdateRequest
	if err := json.Unmarshal([]byte(content), &updateReq); err != nil {
		return localerror.InvalidData("Invalid collection.json data")
	}

	if updateReq.Content.Info.Name == "" {
		return localerror.InvalidData("Collection info name is required")
	}

	if len(updateReq.Content.Item) == 0 {
		return localerror.InvalidData("Collection item is required")
	}

	raw, err := json.MarshalIndent(updateReq.Content, "", "  ")
	if err != nil {
		return u.errHandler.ErrorReturn(err)
	}

	return u.saveToFile(raw)
}

func (u *Usecase) UploadCollection(fileBytes []byte) error {
	content := strings.TrimPrefix(string(fileBytes), "\uFEFF")

	var docsContent DocsContent
	if err := json.Unmarshal([]byte(content), &docsContent); err != nil {
		return localerror.InvalidData("Invalid collection.json file")
	}

	if docsContent.Info.Name == "" {
		return localerror.InvalidData("Collection info name is required")
	}

	if len(docsContent.Item) == 0 {
		return localerror.InvalidData("Collection item is required")
	}

	return u.saveToFile([]byte(content))
}

func (u *Usecase) saveToFile(content []byte) error {
	apiDocsPath := os.Getenv("API_DOCS")
	if err := os.WriteFile(apiDocsPath, content, 0644); err != nil {
		return u.errHandler.ErrorReturn(err)
	}

	info, err := os.Stat(apiDocsPath)
	if err != nil {
		return u.errHandler.ErrorReturn(err)
	}

	if u.watcher != nil && u.watcher.State != nil {
		u.watcher.State.Update(string(content), info.ModTime())
	}

	if info.ModTime().IsZero() && u.watcher != nil && u.watcher.State != nil {
		u.watcher.State.Update(string(content), time.Now())
	}

	return nil
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
