package example

import (
	_ "embed"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"sort"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/rdhmuhammad/apitester"
)

//go:embed collection.json
var DefaultCollection []byte

// Item represents a sample product/item resource.
type Item struct {
	ID        string   `json:"id"`
	Name      string   `json:"name"`
	Category  string   `json:"category"`
	Price     float64  `json:"price"`
	Tags      []string `json:"tags,omitempty"`
	InStock   bool     `json:"in_stock"`
	CreatedAt string   `json:"created_at,omitempty"`
	UpdatedAt string   `json:"updated_at,omitempty"`
}

type itemInput struct {
	Name     *string   `json:"name"`
	Category *string   `json:"category"`
	Price    *float64  `json:"price"`
	Tags     *[]string `json:"tags"`
	InStock  *bool     `json:"in_stock"`
}

type itemStore struct {
	mu     sync.RWMutex
	items  map[string]Item
	nextID int
}

func newItemStore() *itemStore {
	now := time.Now().UTC().Format(time.RFC3339)
	s := &itemStore{
		items:  make(map[string]Item),
		nextID: 4,
	}

	s.items["1"] = Item{
		ID:        "1",
		Name:      "Wireless Ergonomic Mouse",
		Category:  "electronics",
		Price:     29.99,
		Tags:      []string{"hardware", "peripheral"},
		InStock:   true,
		CreatedAt: now,
	}
	s.items["2"] = Item{
		ID:        "2",
		Name:      "Mechanical Keyboard RGB",
		Category:  "electronics",
		Price:     89.99,
		Tags:      []string{"hardware", "gaming"},
		InStock:   true,
		CreatedAt: now,
	}
	s.items["3"] = Item{
		ID:        "3",
		Name:      "Ceramic Coffee Mug",
		Category:  "lifestyle",
		Price:     14.50,
		Tags:      []string{"kitchen", "office"},
		InStock:   false,
		CreatedAt: now,
	}

	return s
}

func (s *itemStore) getAll(search, category string, inStock *bool, limit, page int) ([]Item, int) {
	s.mu.RLock()
	defer s.mu.RUnlock()

	var filtered []Item
	searchLower := strings.ToLower(strings.TrimSpace(search))
	categoryLower := strings.ToLower(strings.TrimSpace(category))

	for _, item := range s.items {
		if searchLower != "" {
			nameMatch := strings.Contains(strings.ToLower(item.Name), searchLower)
			catMatch := strings.Contains(strings.ToLower(item.Category), searchLower)
			if !nameMatch && !catMatch {
				continue
			}
		}

		if categoryLower != "" && strings.ToLower(item.Category) != categoryLower {
			continue
		}

		if inStock != nil && item.InStock != *inStock {
			continue
		}

		filtered = append(filtered, item)
	}

	sort.Slice(filtered, func(i, j int) bool {
		return filtered[i].ID < filtered[j].ID
	})

	total := len(filtered)
	if page < 1 {
		page = 1
	}
	if limit < 1 {
		limit = 10
	}

	start := (page - 1) * limit
	if start >= total {
		return []Item{}, total
	}

	end := start + limit
	if end > total {
		end = total
	}

	return filtered[start:end], total
}

func (s *itemStore) getByID(id string) (Item, bool) {
	s.mu.RLock()
	defer s.mu.RUnlock()
	item, ok := s.items[id]
	return item, ok
}

func (s *itemStore) create(input itemInput) Item {
	s.mu.Lock()
	defer s.mu.Unlock()

	id := strconv.Itoa(s.nextID)
	s.nextID++

	now := time.Now().UTC().Format(time.RFC3339)
	item := Item{
		ID:        id,
		CreatedAt: now,
	}

	if input.Name != nil {
		item.Name = *input.Name
	}
	if input.Category != nil {
		item.Category = *input.Category
	}
	if input.Price != nil {
		item.Price = *input.Price
	}
	if input.Tags != nil {
		item.Tags = *input.Tags
	}
	if input.InStock != nil {
		item.InStock = *input.InStock
	}

	s.items[id] = item
	return item
}

func (s *itemStore) update(id string, input itemInput) (Item, bool) {
	s.mu.Lock()
	defer s.mu.Unlock()

	existing, ok := s.items[id]
	if !ok {
		return Item{}, false
	}

	now := time.Now().UTC().Format(time.RFC3339)
	existing.UpdatedAt = now

	if input.Name != nil {
		existing.Name = *input.Name
	}
	if input.Category != nil {
		existing.Category = *input.Category
	}
	if input.Price != nil {
		existing.Price = *input.Price
	}
	if input.Tags != nil {
		existing.Tags = *input.Tags
	}
	if input.InStock != nil {
		existing.InStock = *input.InStock
	}

	s.items[id] = existing
	return existing, true
}

func (s *itemStore) patch(id string, input itemInput) (Item, bool) {
	s.mu.Lock()
	defer s.mu.Unlock()

	existing, ok := s.items[id]
	if !ok {
		return Item{}, false
	}

	now := time.Now().UTC().Format(time.RFC3339)
	existing.UpdatedAt = now

	if input.Name != nil {
		existing.Name = *input.Name
	}
	if input.Category != nil {
		existing.Category = *input.Category
	}
	if input.Price != nil {
		existing.Price = *input.Price
	}
	if input.Tags != nil {
		existing.Tags = *input.Tags
	}
	if input.InStock != nil {
		existing.InStock = *input.InStock
	}

	s.items[id] = existing
	return existing, true
}

func (s *itemStore) delete(id string) bool {
	s.mu.Lock()
	defer s.mu.Unlock()

	if _, ok := s.items[id]; !ok {
		return false
	}
	delete(s.items, id)
	return true
}

func writeJSON(w http.ResponseWriter, status int, data any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(data)
}

func writeError(w http.ResponseWriter, status int, errCode, message string) {
	writeJSON(w, status, map[string]string{
		"error":   errCode,
		"message": message,
	})
}

// SetupMux configures and returns an http.Handler with a comprehensive variety
// of sample target service endpoints (GET, POST, PUT, PATCH, DELETE, query/path params,
// auth/no-auth, headers, json body, multipart/form-data) and the embedded Apitester documentation UI.
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

	// 2. Setup target service multiplexer and in-memory store
	mux := http.NewServeMux()
	store := newItemStore()

	// --- 1. Health & Users (Existing endpoints) ---
	mux.HandleFunc("GET /health", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, http.StatusOK, map[string]string{
			"status":  "ok",
			"service": "target-service",
		})
	})

	mux.HandleFunc("GET /api/users", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, http.StatusOK, []map[string]string{
			{"id": "1", "name": "Alice"},
			{"id": "2", "name": "Bob"},
		})
	})

	// --- 2. Query Params & Filtering (GET /api/items) ---
	mux.HandleFunc("GET /api/items", func(w http.ResponseWriter, r *http.Request) {
		query := r.URL.Query()
		search := query.Get("search")
		category := query.Get("category")

		var inStock *bool
		if query.Has("in_stock") {
			val := query.Get("in_stock") == "true" || query.Get("in_stock") == "1"
			inStock = &val
		}

		limit := 10
		if l := query.Get("limit"); l != "" {
			if n, err := strconv.Atoi(l); err == nil && n > 0 {
				limit = n
			}
		}

		page := 1
		if p := query.Get("page"); p != "" {
			if n, err := strconv.Atoi(p); err == nil && n > 0 {
				page = n
			}
		}

		items, total := store.getAll(search, category, inStock, limit, page)
		writeJSON(w, http.StatusOK, map[string]any{
			"data":  items,
			"total": total,
			"page":  page,
			"limit": limit,
			"filter": map[string]any{
				"search":   search,
				"category": category,
				"in_stock": inStock,
			},
		})
	})

	// --- 3. Path Param & Header Inspection (GET /api/items/{id}) ---
	mux.HandleFunc("GET /api/items/{id}", func(w http.ResponseWriter, r *http.Request) {
		id := r.PathValue("id")
		if id == ":id" {
			id = "1"
		}

		reqID := r.Header.Get("X-Request-ID")
		if reqID != "" {
			w.Header().Set("X-Request-ID", reqID)
		}

		item, found := store.getByID(id)
		if !found {
			writeError(w, http.StatusNotFound, "not_found", fmt.Sprintf("Item with ID %q not found", id))
			return
		}

		resp := map[string]any{
			"data": item,
		}
		if reqID != "" {
			resp["request_id"] = reqID
		}
		writeJSON(w, http.StatusOK, resp)
	})

	// --- 4. JSON Body Create (POST /api/items) ---
	mux.HandleFunc("POST /api/items", func(w http.ResponseWriter, r *http.Request) {
		var input itemInput
		if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
			writeError(w, http.StatusBadRequest, "invalid_json", "Failed to parse JSON body: "+err.Error())
			return
		}

		if input.Name == nil || strings.TrimSpace(*input.Name) == "" {
			writeError(w, http.StatusBadRequest, "bad_request", "Field 'name' is required")
			return
		}

		created := store.create(input)
		writeJSON(w, http.StatusCreated, map[string]any{
			"message": "Item created successfully",
			"data":    created,
		})
	})

	// --- 5. Full Update (PUT /api/items/{id}) ---
	mux.HandleFunc("PUT /api/items/{id}", func(w http.ResponseWriter, r *http.Request) {
		id := r.PathValue("id")
		if id == ":id" {
			id = "1"
		}

		var input itemInput
		if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
			writeError(w, http.StatusBadRequest, "invalid_json", "Failed to parse JSON body: "+err.Error())
			return
		}

		if input.Name == nil || strings.TrimSpace(*input.Name) == "" {
			writeError(w, http.StatusBadRequest, "bad_request", "Field 'name' is required for full update")
			return
		}

		updated, found := store.update(id, input)
		if !found {
			writeError(w, http.StatusNotFound, "not_found", fmt.Sprintf("Item with ID %q not found", id))
			return
		}

		writeJSON(w, http.StatusOK, map[string]any{
			"message": "Item updated successfully",
			"data":    updated,
		})
	})

	// --- 6. Partial Update (PATCH /api/items/{id}) ---
	mux.HandleFunc("PATCH /api/items/{id}", func(w http.ResponseWriter, r *http.Request) {
		id := r.PathValue("id")
		if id == ":id" {
			id = "1"
		}

		var input itemInput
		if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
			writeError(w, http.StatusBadRequest, "invalid_json", "Failed to parse JSON body: "+err.Error())
			return
		}

		patched, found := store.patch(id, input)
		if !found {
			writeError(w, http.StatusNotFound, "not_found", fmt.Sprintf("Item with ID %q not found", id))
			return
		}

		writeJSON(w, http.StatusOK, map[string]any{
			"message": "Item partially updated successfully",
			"data":    patched,
		})
	})

	// --- 7. Delete (DELETE /api/items/{id}) ---
	mux.HandleFunc("DELETE /api/items/{id}", func(w http.ResponseWriter, r *http.Request) {
		id := r.PathValue("id")
		if id == ":id" {
			id = "1"
		}

		if !store.delete(id) {
			writeError(w, http.StatusNotFound, "not_found", fmt.Sprintf("Item with ID %q not found", id))
			return
		}

		writeJSON(w, http.StatusOK, map[string]any{
			"message":    "Item deleted successfully",
			"deleted_id": id,
		})
	})

	// --- 8. Bearer Auth Protection (GET /api/secure/profile) ---
	mux.HandleFunc("GET /api/secure/profile", func(w http.ResponseWriter, r *http.Request) {
		authHeader := r.Header.Get("Authorization")
		if !strings.HasPrefix(authHeader, "Bearer ") {
			writeError(w, http.StatusUnauthorized, "unauthorized", "Missing or invalid Authorization header. Expected 'Bearer <token>'")
			return
		}

		token := strings.TrimSpace(strings.TrimPrefix(authHeader, "Bearer "))
		if token == "" {
			writeError(w, http.StatusUnauthorized, "unauthorized", "Bearer token cannot be empty")
			return
		}

		writeJSON(w, http.StatusOK, map[string]any{
			"status": "authenticated",
			"user": map[string]string{
				"id":       "usr_100",
				"username": "tester",
				"email":    "tester@example.com",
				"role":     "admin",
			},
			"token_received": token,
		})
	})

	// --- 9. Bearer Auth + JSON Body (POST /api/secure/action) ---
	mux.HandleFunc("POST /api/secure/action", func(w http.ResponseWriter, r *http.Request) {
		authHeader := r.Header.Get("Authorization")
		if !strings.HasPrefix(authHeader, "Bearer ") {
			writeError(w, http.StatusUnauthorized, "unauthorized", "Missing or invalid Authorization header. Expected 'Bearer <token>'")
			return
		}

		token := strings.TrimSpace(strings.TrimPrefix(authHeader, "Bearer "))
		if token == "" {
			writeError(w, http.StatusUnauthorized, "unauthorized", "Bearer token cannot be empty")
			return
		}

		var payload struct {
			Action      string `json:"action"`
			Environment string `json:"environment"`
		}
		if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
			writeError(w, http.StatusBadRequest, "invalid_json", "Failed to parse JSON body: "+err.Error())
			return
		}

		if strings.TrimSpace(payload.Action) == "" {
			writeError(w, http.StatusBadRequest, "bad_request", "Field 'action' is required")
			return
		}

		writeJSON(w, http.StatusOK, map[string]any{
			"status":         "success",
			"message":        "Secure action executed successfully",
			"action":         payload.Action,
			"environment":    payload.Environment,
			"executed_by":    "tester",
			"token_received": token,
		})
	})

	// --- 10. Headers Inspection (GET /api/headers) ---
	mux.HandleFunc("GET /api/headers", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, http.StatusOK, map[string]any{
			"headers":       r.Header,
			"custom_header": r.Header.Get("X-Custom-Header"),
			"request_id":    r.Header.Get("X-Request-ID"),
			"user_agent":    r.Header.Get("User-Agent"),
			"authorization": r.Header.Get("Authorization"),
		})
	})

	// --- 11. Multipart Form Data Upload (POST /api/upload) ---
	mux.HandleFunc("POST /api/upload", func(w http.ResponseWriter, r *http.Request) {
		// Limit multipart body to 10 MB
		if err := r.ParseMultipartForm(10 << 20); err != nil {
			writeError(w, http.StatusBadRequest, "invalid_multipart", "Failed to parse multipart form: "+err.Error())
			return
		}

		title := r.FormValue("title")
		description := r.FormValue("description")

		var fileInfo any
		file, header, err := r.FormFile("file")
		if err == nil {
			defer file.Close()
			content, _ := io.ReadAll(file)
			fileInfo = map[string]any{
				"filename":     header.Filename,
				"size_bytes":   header.Size,
				"content_type": header.Header.Get("Content-Type"),
				"read_bytes":   len(content),
			}
		}

		writeJSON(w, http.StatusOK, map[string]any{
			"status":  "ok",
			"message": "Multipart form processed successfully",
			"form_fields": map[string]string{
				"title":       title,
				"description": description,
			},
			"file": fileInfo,
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
	if err := os.WriteFile(tmpFile, DefaultCollection, 0644); err != nil {
		return "", fmt.Errorf("failed to write fallback collection to %s: %w", tmpFile, err)
	}

	return tmpFile, nil
}
