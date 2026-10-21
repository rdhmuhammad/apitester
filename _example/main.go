package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/rdhmuhammad/apitester/pkg/example"
)

func main() {
	defaultPort := os.Getenv("PORT")
	if defaultPort == "" {
		defaultPort = "8080"
	}

	defaultCollection := os.Getenv("COLLECTION_PATH")
	if defaultCollection == "" {
		defaultCollection = "resource/apidocs/collection.json"
	}

	var port string
	var collectionPath string
	flag.StringVar(&port, "port", defaultPort, "Port to run the target service on")
	flag.StringVar(&collectionPath, "collection", defaultCollection, "Path to Postman collection JSON")
	flag.Parse()

	handler, err := example.SetupMux(collectionPath)
	if err != nil {
		log.Fatalf("Failed to initialize apitester example: %v", err)
	}

	addr := fmt.Sprintf(":%s", port)
	log.Printf("Target service running with embedded Apitester at http://localhost%s/", addr)
	log.Printf("Target service health check: http://localhost%s/health", addr)
	log.Printf("Apitester collection endpoint: http://localhost%s/api/v1/collection/read", addr)

	if err := http.ListenAndServe(addr, handler); err != nil && err != http.ErrServerClosed {
		log.Fatalf("Server error: %v", err)
	}
}
