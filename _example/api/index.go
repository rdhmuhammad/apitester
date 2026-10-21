package handler

import (
	"net/http"
	"os"
	"sync"

	"github.com/rdhmuhammad/apitester/pkg/example"
)

var (
	appHandler http.Handler
	initOnce   sync.Once
	initErr    error
)

// Handler is the entrypoint for Vercel Serverless Functions.
func Handler(w http.ResponseWriter, r *http.Request) {
	initOnce.Do(func() {
		collectionPath := os.Getenv("COLLECTION_PATH")
		appHandler, initErr = example.SetupMux(collectionPath)
	})

	if initErr != nil {
		http.Error(w, "Failed to initialize apitester: "+initErr.Error(), http.StatusInternalServerError)
		return
	}

	appHandler.ServeHTTP(w, r)
}
