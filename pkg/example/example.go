package example

import (
	_ "embed"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"path/filepath"

	"github.com/rdhmuhammad/apitester"
)

//go:embed collection.json
var DefaultCollection []byte

// SetupMux configures and returns an http.Handler with sample target service
// endpoints (/health, /api/users) and the embedded Apitester documentation UI.
func SetupMux(collectionPath string) (http.Handler, error) {
	resolvedPath, err := resolveCollectionPath(collectionPath)
	if err != nil {
		return nil, fmt.Errorf("failed to resolve collection path: %w", err)
	}

	// 1. Initialize Apitester as an embedded library
	apiTester, err := apitester.NewDocs(
		apitester.WithCollectionPath(resolvedPath),
	)
	if err != nil {
		return nil, fmt.Errorf("failed to initialize apitester: %w", err)
	}

	// 2. Setup target service multiplexer
	mux := http.NewServeMux()

	// Sample target service routes
	mux.HandleFunc("GET /health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(map[string]string{
			"status":  "ok",
			"service": "target-service",
		})
	})

	mux.HandleFunc("GET /api/users", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode([]map[string]string{
			{"id": "1", "name": "Alice"},
			{"id": "2", "name": "Bob"},
		})
	})

	// 3. Mount Apitester (which serves API endpoints at /api/v1/ and embedded frontend at /)
	mux.Handle("/", apiTester)

	return mux, nil
}

func resolveCollectionPath(requestedPath string) (string, error) {
	// If requested path exists on disk and we are not in a serverless environment with read-only root, use it.
	if requestedPath != "" && os.Getenv("VERCEL") == "" {
		if _, err := os.Stat(requestedPath); err == nil {
			return requestedPath, nil
		}
	}

	// In Vercel serverless / read-only or fallback mode, write embedded collection to writable os.TempDir().
	tmpFile := filepath.Join(os.TempDir(), "apitester-collection.json")
	if _, err := os.Stat(tmpFile); os.IsNotExist(err) {
		if err := os.WriteFile(tmpFile, DefaultCollection, 0644); err != nil {
			return "", fmt.Errorf("failed to write fallback collection to %s: %w", tmpFile, err)
		}
	}

	return tmpFile, nil
}
