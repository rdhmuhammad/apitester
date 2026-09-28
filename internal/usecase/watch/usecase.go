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

func (u *Usecase) Initiate(collectionPath string) error {
	return u.initiate(collectionPath)
}

func (u *Usecase) initiate(collectionPath string) error {
	if collectionPath == "" {
		collectionPath = u.path
	}
	if collectionPath == "" {
		return localerror.InvalidData("Collection path is not set")
	}

	fileBytes, err := os.ReadFile(collectionPath)
	if err != nil {
		return u.errHandler.ErrorReturn(err)
	}

	content := strings.TrimPrefix(string(fileBytes), "\uFEFF")
	var docsContent DocsContent
	if err := json.Unmarshal([]byte(content), &docsContent); err != nil {
		return u.errHandler.ErrorReturn(err)
	}

	for i := range docsContent.Variable {
		if docsContent.Variable[i].ID == "" {
			docsContent.Variable[i].ID = uuid.NewString()
		}
		if isBaseURLVar(docsContent.Variable[i].Key) && docsContent.Variable[i].Category == "" {
			docsContent.Variable[i].Category = "BASE_URL"
		}
	}

	if docsContent.Auth != nil {
		for i := range docsContent.Auth.Bearer {
			if docsContent.Auth.Bearer[i].Id == "" {
				docsContent.Auth.Bearer[i].Id = uuid.NewString()
			}
		}
	}

	docsContent.Item = processItems(docsContent.Item, docsContent.Auth)

	updatedBytes, err := json.MarshalIndent(docsContent, "", "  ")
	if err != nil {
		return u.errHandler.ErrorReturn(err)
	}

	if err := os.WriteFile(collectionPath, updatedBytes, 0644); err != nil {
		return u.errHandler.ErrorReturn(err)
	}

	if u.path == collectionPath && u.watcher != nil && u.watcher.State != nil {
		info, statErr := os.Stat(collectionPath)
		if statErr == nil {
			u.watcher.State.Update(string(updatedBytes), info.ModTime())
		}
	}

	return nil
}

func processItems(items []CollectionItem, rootAuth *CollectionAuth) []CollectionItem {
	for i := range items {
		if items[i].ID == "" {
			items[i].ID = uuid.NewString()
		}

		if items[i].Request != nil {
			req := items[i].Request

			for j := range req.Header {
				if req.Header[j].Id == "" {
					req.Header[j].Id = uuid.NewString()
				}
			}
			for j := range req.URL.Query {
				if req.URL.Query[j].Id == "" {
					req.URL.Query[j].Id = uuid.NewString()
				}
			}
			if req.Body != nil {
				for j := range req.Body.FormData {
					if req.Body.FormData[j].Id == "" {
						req.Body.FormData[j].Id = uuid.NewString()
					}
				}

				hasContentType := false
				for _, h := range req.Header {
					if strings.EqualFold(h.Key, "Content-Type") {
						hasContentType = true
						break
					}
				}
				if !hasContentType {
					ctVal := "application/json"
					if strings.EqualFold(req.Body.Mode, "formdata") {
						ctVal = "multipart/form-data"
					}
					req.Header = append(req.Header, Header{
						Id:    uuid.NewString(),
						Key:   "Content-Type",
						Value: ctVal,
					})
				}
			}

			if req.Auth == nil {
				if rootAuth != nil {
					var bearerProps []Property
					bearerVal := ""
					if rootAuth.Bearer != nil {
						bearerProps = make([]Property, len(rootAuth.Bearer))
						copy(bearerProps, rootAuth.Bearer)
						for k := range bearerProps {
							if bearerProps[k].Id == "" {
								bearerProps[k].Id = uuid.NewString()
							}
							if strings.EqualFold(bearerProps[k].Key, "token") && bearerVal == "" {
								bearerVal = bearerProps[k].Value
							}
						}
						if bearerVal == "" && len(bearerProps) > 0 {
							bearerVal = bearerProps[0].Value
						}
					}

					authType := rootAuth.Type
					if authType == "" {
						authType = "bearer"
					}

					req.Auth = &ReqAuth{
						Type:       authType,
						Bearer:     bearerProps,
						AuthSource: "inherit",
					}

					for j := range req.Header {
						if strings.EqualFold(req.Header[j].Key, "Authorization") {
							req.Header[j].Value = bearerVal
						}
					}
				} else {
					var authHeaderVal string
					hasAuthHeader := false
					for _, h := range req.Header {
						if strings.EqualFold(h.Key, "Authorization") {
							authHeaderVal = h.Value
							hasAuthHeader = true
							break
						}
					}

					if hasAuthHeader {
						req.Auth = &ReqAuth{
							Type:       "bearer",
							AuthSource: "onrequest",
							Bearer: []Property{
								{
									Id:    uuid.NewString(),
									Key:   "token",
									Value: authHeaderVal,
									Type:  "string",
								},
							},
						}
					}
				}
			} else {
				for j := range req.Auth.Bearer {
					if req.Auth.Bearer[j].Id == "" {
						req.Auth.Bearer[j].Id = uuid.NewString()
					}
				}
			}
		}

		for j := range items[i].Response {
			for k := range items[i].Response[j].Header {
				if items[i].Response[j].Header[k].Id == "" {
					items[i].Response[j].Header[k].Id = uuid.NewString()
				}
			}
			if items[i].Response[j].OriginalRequest != nil {
				orig := items[i].Response[j].OriginalRequest
				for k := range orig.Header {
					if orig.Header[k].Id == "" {
						orig.Header[k].Id = uuid.NewString()
					}
				}
				for k := range orig.URL.Query {
					if orig.URL.Query[k].Id == "" {
						orig.URL.Query[k].Id = uuid.NewString()
					}
				}
				if orig.Body != nil {
					for k := range orig.Body.FormData {
						if orig.Body.FormData[k].Id == "" {
							orig.Body.FormData[k].Id = uuid.NewString()
						}
					}
				}
				if orig.Auth != nil {
					for k := range orig.Auth.Bearer {
						if orig.Auth.Bearer[k].Id == "" {
							orig.Auth.Bearer[k].Id = uuid.NewString()
						}
					}
				}
			}
		}

		if items[i].Item != nil {
			items[i].Item = processItems(items[i].Item, rootAuth)
		}
	}

	return items
}

func setId(item []CollectionItem) []CollectionItem {
	for i := range item {
		if item[i].ID == "" {
			item[i].ID = uuid.NewString()
		}

		if item[i].Request != nil {
			for j := range item[i].Request.Header {
				if item[i].Request.Header[j].Id == "" {
					item[i].Request.Header[j].Id = uuid.NewString()
				}
			}
			for j := range item[i].Request.URL.Query {
				if item[i].Request.URL.Query[j].Id == "" {
					item[i].Request.URL.Query[j].Id = uuid.NewString()
				}
			}
			if item[i].Request.Body != nil {
				for j := range item[i].Request.Body.FormData {
					if item[i].Request.Body.FormData[j].Id == "" {
						item[i].Request.Body.FormData[j].Id = uuid.NewString()
					}
				}
			}
			if item[i].Request.Auth != nil {
				for j := range item[i].Request.Auth.Bearer {
					if item[i].Request.Auth.Bearer[j].Id == "" {
						item[i].Request.Auth.Bearer[j].Id = uuid.NewString()
					}
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
