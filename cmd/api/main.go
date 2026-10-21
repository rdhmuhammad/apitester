package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/rdhmuhammad/apitester/pkg/example"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	collectionPath := os.Getenv("COLLECTION_PATH")
	handler, err := example.SetupMux(collectionPath)
	if err != nil {
		log.Fatalf("Failed to initialize server: %v", err)
	}

	addr := fmt.Sprintf(":%s", port)
	log.Printf("Server listening on port %s", port)

	if err := http.ListenAndServe(addr, handler); err != nil && err != http.ErrServerClosed {
		log.Fatalf("Server error: %v", err)
	}
}
