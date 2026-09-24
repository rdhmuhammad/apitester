package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net/http"

	"github.com/rdhmuhammad/apitester"
)

func main() {
	var port string
	var collectionPath string
	flag.StringVar(&port, "port", "8080", "Port to run the target service on")
	flag.StringVar(&collectionPath, "collection", "resource/apidocs/collection.json", "Path to Postman collection JSON")
	flag.Parse()

	// 1. Initialize Apitester as an embedded library
	apiTester, err := apitester.NewDocs(
		apitester.WithCollectionPath(collectionPath),
	)
	if err != nil {
		log.Fatalf("Failed to initialize apitester: %v", err)
	}

	// 2. Setup target service HTTP multiplexer
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

	addr := fmt.Sprintf(":%s", port)
	log.Printf("Target service running with embedded Apitester at http://localhost%s/", addr)
	log.Printf("Target service health check: http://localhost%s/health", addr)
	log.Printf("Apitester collection endpoint: http://localhost%s/api/v1/collection/read", addr)

	if err := http.ListenAndServe(addr, mux); err != nil && err != http.ErrServerClosed {
		log.Fatalf("Server error: %v", err)
	}
}
