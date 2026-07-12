package watch

import (
	"context"
	"encoding/json"
	"os"
	"regexp"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/rdhmuhammad/apitester/internal/domain"
	"github.com/rdhmuhammad/apitester/pkg/bbolt"
	"github.com/rdhmuhammad/apitester/pkg/localerror"
	"github.com/rdhmuhammad/apitester/pkg/logger"
	"github.com/rdhmuhammad/apitester/pkg/watcher"
)

var baseURLRegex = regexp.MustCompile(`(?i)(base.*url|url.*base)`)

type Usecase struct {
	watcher        *watcher.FileWatcher
	errHandler     localerror.HandleError
	collectionRepo bbolt.RepositoryInterface[domain.Collection]
}

func NewUsecase(lg *logger.ReZero) *Usecase {
	collectionRepo := initCollectionRepo()
	fw := watcher.New()

	if selected := findSelectedCollection(collectionRepo); selected != nil {
		fw.Watch(selected.Path)
	}

	return &Usecase{
		errHandler:     localerror.NewHandlerError(lg),
		watcher:        fw,
		collectionRepo: collectionRepo,
	}
}

func findSelectedCollection(repo bbolt.RepositoryInterface[domain.Collection]) *domain.Collection {
	all, err := repo.List(context.Background())
	if err != nil {
		return nil
	}
	for i := range all {
		if all[i].IsSelected {
			return &all[i]
		}
	}
	return nil
}

func initCollectionRepo() bbolt.RepositoryInterface[domain.Collection] {
	boltDB, err := bbolt.NewBoltDB("resource/db/collection.db")
	if err != nil {
		panic(err)
	}

	repo, err := bbolt.NewRepository[domain.Collection](boltDB.DB())
	if err != nil {
		panic(err)
	}

	return repo
}

func (u *Usecase) ListCollections() ([]domain.Collection, error) {
	return u.collectionRepo.List(context.Background())
}

func (u *Usecase) Read(id string) (ReadResponse, error) {
	collection, err := u.collectionRepo.View(context.Background(), id)
	if err != nil {
		return ReadResponse{}, u.errHandler.ErrorReturn(err)
	}
	if collection == nil {
		return ReadResponse{}, localerror.InvalidData("Collection not found")
	}

	fileBytes, err := os.ReadFile(collection.Path)
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
	return ReadResponse{
		Content:   docsContent,
		Changed:   false,
		UpdatedAt: collection.UpdatedAt,
	}, nil
}

func (u *Usecase) CreateCollection(req CreateCollectionRequest) (domain.Collection, error) {
	now := time.Now()
	collection := domain.Collection{
		ID:         uuid.NewString(),
		Name:       req.Name,
		Path:       req.Path,
		IsSelected: false,
		CreatedAt:  now,
		UpdatedAt:  now,
	}
	if err := u.collectionRepo.Create(context.Background(), collection.ID, &collection); err != nil {
		return domain.Collection{}, u.errHandler.ErrorReturn(err)
	}
	return collection, nil
}

func (u *Usecase) UpdateCollectionByID(id string, req UpdateCollectionRequest) (domain.Collection, error) {
	collection, err := u.collectionRepo.View(context.Background(), id)
	if err != nil {
		return domain.Collection{}, u.errHandler.ErrorReturn(err)
	}
	if collection == nil {
		return domain.Collection{}, localerror.InvalidData("Collection not found")
	}
	if req.Name != "" {
		collection.Name = req.Name
	}
	if req.Path != "" {
		collection.Path = req.Path
	}
	collection.UpdatedAt = time.Now()
	if err := u.collectionRepo.Update(context.Background(), id, collection); err != nil {
		return domain.Collection{}, u.errHandler.ErrorReturn(err)
	}
	return *collection, nil
}

func (u *Usecase) DeleteCollection(id string) error {
	return u.collectionRepo.Delete(context.Background(), id)
}

func (u *Usecase) SelectCollection(id string) (domain.Collection, error) {
	all, err := u.collectionRepo.List(context.Background())
	if err != nil {
		return domain.Collection{}, u.errHandler.ErrorReturn(err)
	}

	var selected *domain.Collection
	for _, c := range all {
		c.IsSelected = false
		if c.ID == id {
			c.IsSelected = true
			selected = &c
		}
		if err := u.collectionRepo.Update(context.Background(), c.ID, &c); err != nil {
			return domain.Collection{}, u.errHandler.ErrorReturn(err)
		}
	}

	if selected == nil {
		return domain.Collection{}, localerror.InvalidData("Collection not found")
	}

	u.watcher.Watch(selected.Path)

	return *selected, nil
}

func (u *Usecase) GetActiveCollection() (domain.Collection, error) {
	selected := findSelectedCollection(u.collectionRepo)
	if selected == nil {
		return domain.Collection{}, localerror.InvalidData("No active collection")
	}
	return *selected, nil
}

func (u *Usecase) WriteCollection(id string, content string) error {
	if content == "" {
		return localerror.InvalidData("Collection content is required")
	}

	collection, err := u.collectionRepo.View(context.Background(), id)
	if err != nil {
		return u.errHandler.ErrorReturn(err)
	}
	if collection == nil {
		return localerror.InvalidData("Collection not found")
	}

	if err := os.WriteFile(collection.Path, []byte(content), 0644); err != nil {
		return u.errHandler.ErrorReturn(err)
	}

	info, err := os.Stat(collection.Path)
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
	selected := findSelectedCollection(u.collectionRepo)
	if selected == nil {
		return localerror.InvalidData("No active collection selected")
	}

	if err := os.WriteFile(selected.Path, content, 0644); err != nil {
		return u.errHandler.ErrorReturn(err)
	}

	info, err := os.Stat(selected.Path)
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
