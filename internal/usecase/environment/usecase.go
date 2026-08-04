package environment

import (
	"context"
	"encoding/json"
	"os"
	"path/filepath"

	"github.com/rdhmuhammad/apitester/internal/domain"
	"github.com/rdhmuhammad/apitester/pkg/bbolt"
	"github.com/rdhmuhammad/apitester/pkg/localerror"
	"github.com/rdhmuhammad/apitester/pkg/logger"
)

type Usecase struct {
	errHandler     localerror.HandleError
	collectionRepo bbolt.RepositoryInterface[domain.Collection]
}

func NewUsecase(lg logger.Logger, collectionRepo bbolt.RepositoryInterface[domain.Collection]) *Usecase {
	return &Usecase{
		errHandler:     localerror.NewHandlerError(lg),
		collectionRepo: collectionRepo,
	}
}

const envFileName = "http-client.private.env.json"

func envFilePath(collectionPath string) string {
	return filepath.Join(filepath.Dir(collectionPath), "tests", envFileName)
}

func (u *Usecase) ReadEnvironments(id string) (ReadEnvironmentsResponse, error) {
	collection, err := u.collectionRepo.View(context.Background(), id)
	if err != nil {
		return ReadEnvironmentsResponse{}, u.errHandler.ErrorReturn(err)
	}
	if collection == nil {
		return ReadEnvironmentsResponse{}, localerror.InvalidData("Collection not found")
	}

	path := envFilePath(collection.Path)
	data, err := os.ReadFile(path)
	if err != nil {
		if os.IsNotExist(err) {
			if err := os.MkdirAll(filepath.Dir(path), 0644); err != nil {
				return ReadEnvironmentsResponse{}, u.errHandler.ErrorReturn(err)
			}

			if err := os.WriteFile(path, []byte("{}"), 0644); err != nil {
				return ReadEnvironmentsResponse{}, u.errHandler.ErrorReturn(err)
			}
			return ReadEnvironmentsResponse{Environments: []EnvironmentEntry{}}, nil
		}
		return ReadEnvironmentsResponse{}, u.errHandler.ErrorReturn(err)
	}

	if len(data) == 0 {
		return ReadEnvironmentsResponse{Environments: []EnvironmentEntry{}}, nil
	}

	var raw map[string]map[string]string
	if err := json.Unmarshal(data, &raw); err != nil {
		return ReadEnvironmentsResponse{}, localerror.InvalidData("Failed to parse environment file: " + err.Error())
	}

	entries := make([]EnvironmentEntry, 0, len(raw))
	for name, vars := range raw {
		entries = append(entries, EnvironmentEntry{
			Name:      name,
			Variables: vars,
		})
	}

	return ReadEnvironmentsResponse{Environments: entries}, nil
}

func (u *Usecase) WriteEnvironments(id string, req WriteEnvironmentsRequest) error {
	collection, err := u.collectionRepo.View(context.Background(), id)
	if err != nil {
		return u.errHandler.ErrorReturn(err)
	}
	if collection == nil {
		return localerror.InvalidData("Collection not found")
	}

	raw := make(map[string]map[string]string, len(req.Environments))
	for _, entry := range req.Environments {
		raw[entry.Name] = entry.Variables
	}

	data, err := json.MarshalIndent(raw, "", "  ")
	if err != nil {
		return u.errHandler.ErrorReturn(err)
	}

	path := envFilePath(collection.Path)
	if err := os.WriteFile(path, data, 0644); err != nil {
		return u.errHandler.ErrorReturn(err)
	}

	return nil
}
