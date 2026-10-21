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
		if _, err := os.Stat("_example/collection.json"); err == nil {
			defaultCollection = "_example/collection.json"
		} else if _, err := os.Stat("collection.json"); err == nil {
			defaultCollection = "collection.json"
		} else if _, err := os.Stat("pkg/example/collection.json"); err == nil {
			defaultCollection = "pkg/example/collection.json"
		} else if _, err := os.Stat("resource/apidocs/collection.json"); err == nil {
			defaultCollection = "resource/apidocs/collection.json"
		}
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
	log.Printf("=================================================================")
	log.Printf("  Target service running with embedded Apitester")
	log.Printf("  Address: http://localhost%s/", addr)
	log.Printf("=================================================================")
	log.Printf("Available Example Test Endpoints:")
	log.Printf("  • [GET]    http://localhost%s/health                       (Without auth, health check)", addr)
	log.Printf("  • [GET]    http://localhost%s/api/users                    (Without auth, user list)", addr)
	log.Printf("  • [GET]    http://localhost%s/api/items?category=&search=  (With query params)", addr)
	log.Printf("  • [GET]    http://localhost%s/api/items/{id}               (With path param & headers)", addr)
	log.Printf("  • [POST]   http://localhost%s/api/items                    (With JSON body, create item)", addr)
	log.Printf("  • [PUT]    http://localhost%s/api/items/{id}               (With path param & JSON body, full update)", addr)
	log.Printf("  • [PATCH]  http://localhost%s/api/items/{id}               (With path param & JSON body, partial update)", addr)
	log.Printf("  • [DELETE] http://localhost%s/api/items/{id}               (With path param, delete item)", addr)
	log.Printf("  • [GET]    http://localhost%s/api/secure/profile           (With auth: Bearer <token>)", addr)
	log.Printf("  • [POST]   http://localhost%s/api/secure/action            (With auth: Bearer <token> & JSON body)", addr)
	log.Printf("  • [POST]   http://localhost%s/api/upload                   (With multipart/form-data: title, description, file)", addr)
	log.Printf("  • [GET]    http://localhost%s/api/headers                  (With custom headers inspection)", addr)
	log.Printf("-----------------------------------------------------------------")
	log.Printf("Apitester UI:         http://localhost%s/", addr)
	log.Printf("Collection endpoint:  http://localhost%s/api/v1/collection/read", addr)
	log.Printf("=================================================================")

	if err := http.ListenAndServe(addr, handler); err != nil && err != http.ErrServerClosed {
		log.Fatalf("Server error: %v", err)
	}
}
