package watch

import (
	"encoding/json"
	"os"
	"path/filepath"
	"testing"

	"github.com/rdhmuhammad/apitester/pkg/logger"
)

func TestInitiate(t *testing.T) {
	tempDir := t.TempDir()
	filePath := filepath.Join(tempDir, "test_collection.json")

	initialJSON := `{
  "info": {
    "name": "Test Collection"
  },
  "auth": {
    "type": "bearer",
    "bearer": [
      {
        "id": "",
        "key": "token",
        "value": "{{token}}",
        "type": "string"
      }
    ]
  },
  "variable": [
    {
      "id": "",
      "key": "baseUrl",
      "value": "http://localhost:8080"
    },
    {
      "id": "existing-var-id",
      "key": "customVar",
      "value": "val"
    }
  ],
  "item": [
    {
      "id": "",
      "name": "Request With Body and Existing Auth Header",
      "request": {
        "method": "POST",
        "header": [
          {
            "id": "",
            "key": "Authorization",
            "value": "old-value"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"foo\":\"bar\"}"
        },
        "url": {
          "raw": "http://example.com/api",
          "host": ["http://example.com"],
          "path": ["api"],
          "query": [
            {
              "id": "",
              "key": "page",
              "value": "1"
            }
          ]
        }
      }
    },
    {
      "id": "existing-item-id",
      "name": "Request Without Body and Without Auth Header",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://example.com/get",
          "host": ["http://example.com"],
          "path": ["get"]
        }
      }
    },
    {
      "id": "",
      "name": "Request With FormData Body",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "formdata",
          "formdata": [
            {
              "id": "",
              "key": "file",
              "value": "content"
            }
          ]
        },
        "url": {
          "raw": "http://example.com/upload",
          "host": ["http://example.com"],
          "path": ["upload"]
        }
      }
    }
  ]
}`

	if err := os.WriteFile(filePath, []byte(initialJSON), 0644); err != nil {
		t.Fatalf("failed to write initial json: %v", err)
	}

	lg := logger.DefaultLogger()
	uc := NewUsecase(&lg, filePath)

	err := uc.Initiate(filePath)
	if err != nil {
		t.Fatalf("Initiate failed: %v", err)
	}

	readBytes, err := os.ReadFile(filePath)
	if err != nil {
		t.Fatalf("failed to read back initiated file: %v", err)
	}

	var result DocsContent
	if err := json.Unmarshal(readBytes, &result); err != nil {
		t.Fatalf("failed to unmarshal initiated json: %v", err)
	}

	// 1. Check variables
	if len(result.Variable) != 2 {
		t.Fatalf("expected 2 variables, got %d", len(result.Variable))
	}
	if result.Variable[0].ID == "" {
		t.Errorf("expected variable 0 ID to be set, was empty")
	}
	if result.Variable[0].Category != "BASE_URL" {
		t.Errorf("expected variable 0 category to be BASE_URL, got %q", result.Variable[0].Category)
	}
	if result.Variable[1].ID != "existing-var-id" {
		t.Errorf("expected existing variable ID to be preserved, got %q", result.Variable[1].ID)
	}

	// 2. Check root auth
	if result.Auth == nil {
		t.Fatalf("expected root Auth to be not nil")
	}
	if len(result.Auth.Bearer) != 1 {
		t.Fatalf("expected 1 bearer property, got %d", len(result.Auth.Bearer))
	}
	if result.Auth.Bearer[0].Id == "" {
		t.Errorf("expected root Auth bearer property ID to be set, was empty")
	}

	// 3. Check item 0: POST with body and existing Authorization header
	item0 := result.Item[0]
	if item0.ID == "" {
		t.Errorf("expected item 0 ID to be set")
	}
	if item0.Request == nil {
		t.Fatalf("expected item 0 Request to be non-nil")
	}
	if len(item0.Request.URL.Query) > 0 && item0.Request.URL.Query[0].Id == "" {
		t.Errorf("expected query param ID to be set")
	}

	// Content-Type header should have been added because it had body
	var ctHeader *Header
	var authHeader *Header
	for i := range item0.Request.Header {
		h := &item0.Request.Header[i]
		if h.Key == "Content-Type" {
			ctHeader = h
		}
		if h.Key == "Authorization" {
			authHeader = h
		}
	}
	if ctHeader == nil {
		t.Errorf("expected Content-Type header to be added for request with body")
	} else {
		if ctHeader.Id == "" {
			t.Errorf("expected Content-Type header ID to be set")
		}
		if ctHeader.Value != "application/json" {
			t.Errorf("expected Content-Type header to be application/json, got %q", ctHeader.Value)
		}
	}

	// Auth check for item 0: rootAuth was not null -> authSource = inherit, bearer from DocsContent.Auth, replace Authorization header
	if item0.Request.Auth == nil {
		t.Fatalf("expected item 0 Request.Auth to be created")
	}
	if item0.Request.Auth.AuthSource != "inherit" {
		t.Errorf("expected item 0 Request.Auth.AuthSource to be 'inherit', got %q", item0.Request.Auth.AuthSource)
	}
	if item0.Request.Auth.Type != "bearer" {
		t.Errorf("expected item 0 Request.Auth.Type to be 'bearer', got %q", item0.Request.Auth.Type)
	}
	if len(item0.Request.Auth.Bearer) != 1 || item0.Request.Auth.Bearer[0].Value != "{{token}}" {
		t.Errorf("expected item 0 Request.Auth.Bearer to copy rootAuth bearer, got %+v", item0.Request.Auth.Bearer)
	}
	if authHeader == nil {
		t.Fatalf("expected Authorization header to exist")
	}
	if authHeader.Value != "{{token}}" {
		t.Errorf("expected Authorization header value to be replaced with bearer value '{{token}}', got %q", authHeader.Value)
	}

	// 4. Check item 1: GET without body and without Authorization header
	item1 := result.Item[1]
	if item1.ID != "existing-item-id" {
		t.Errorf("expected existing item ID to be preserved, got %q", item1.ID)
	}
	// It has no body, so Content-Type header should NOT be present
	for _, h := range item1.Request.Header {
		if h.Key == "Content-Type" {
			t.Errorf("did not expect Content-Type header for request without body")
		}
		if h.Key == "Authorization" {
			t.Errorf("did not expect Authorization header to be created if not existed")
		}
	}
	// Request.Auth should be created with inherit because DocsContent.Auth is not null
	if item1.Request.Auth == nil {
		t.Fatalf("expected item 1 Request.Auth to be created with inherit")
	}
	if item1.Request.Auth.AuthSource != "inherit" {
		t.Errorf("expected item 1 Request.Auth.AuthSource to be 'inherit', got %q", item1.Request.Auth.AuthSource)
	}

	// 5. Check item 2: FormData body
	item2 := result.Item[2]
	var fdContentType *Header
	for i := range item2.Request.Header {
		if item2.Request.Header[i].Key == "Content-Type" {
			fdContentType = &item2.Request.Header[i]
		}
	}
	if fdContentType == nil {
		t.Fatalf("expected Content-Type header for FormData body")
	}
	if fdContentType.Value != "multipart/form-data" {
		t.Errorf("expected multipart/form-data for FormData body, got %q", fdContentType.Value)
	}
	if item2.Request.Body.FormData[0].Id == "" {
		t.Errorf("expected FormData item ID to be set")
	}
}

func TestInitiate_WithoutRootAuth(t *testing.T) {
	tempDir := t.TempDir()
	filePath := filepath.Join(tempDir, "no_root_auth.json")

	initialJSON := `{
  "info": {
    "name": "No Root Auth Collection"
  },
  "item": [
    {
      "id": "",
      "name": "Request With Own Auth Header",
      "request": {
        "method": "GET",
        "header": [
          {
            "id": "",
            "key": "Authorization",
            "value": "Bearer custom-jwt-token"
          }
        ],
        "url": {
          "raw": "http://example.com/api"
        }
      }
    },
    {
      "id": "",
      "name": "Request Without Any Auth",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://example.com/public"
        }
      }
    }
  ]
}`

	if err := os.WriteFile(filePath, []byte(initialJSON), 0644); err != nil {
		t.Fatalf("failed to write initial json: %v", err)
	}

	lg := logger.DefaultLogger()
	uc := NewUsecase(&lg, filePath)

	err := uc.Initiate(filePath)
	if err != nil {
		t.Fatalf("Initiate failed: %v", err)
	}

	readBytes, err := os.ReadFile(filePath)
	if err != nil {
		t.Fatalf("failed to read back initiated file: %v", err)
	}

	var result DocsContent
	if err := json.Unmarshal(readBytes, &result); err != nil {
		t.Fatalf("failed to unmarshal initiated json: %v", err)
	}

	// Item 0: No root auth, but has Authorization header -> authSource = onrequest, value from header authorization
	item0 := result.Item[0]
	if item0.Request.Auth == nil {
		t.Fatalf("expected item 0 Request.Auth to be created")
	}
	if item0.Request.Auth.AuthSource != "onrequest" {
		t.Errorf("expected AuthSource 'onrequest', got %q", item0.Request.Auth.AuthSource)
	}
	if len(item0.Request.Auth.Bearer) != 1 || item0.Request.Auth.Bearer[0].Value != "Bearer custom-jwt-token" {
		t.Errorf("expected Bearer value to match Authorization header value, got %+v", item0.Request.Auth.Bearer)
	}
	if item0.Request.Auth.Bearer[0].Id == "" {
		t.Errorf("expected Bearer property Id to be set")
	}

	// Item 1: No root auth, no Authorization header -> leave it be (Request.Auth remains nil)
	item1 := result.Item[1]
	if item1.Request.Auth != nil {
		t.Errorf("expected item 1 Request.Auth to remain nil, but got %+v", item1.Request.Auth)
	}
}

func TestInitiate_NestedItemsAndPreservedAuth(t *testing.T) {
	tempDir := t.TempDir()
	filePath := filepath.Join(tempDir, "nested.json")

	initialJSON := `{
  "info": {
    "name": "Nested Collection"
  },
  "item": [
    {
      "id": "folder-1",
      "name": "Folder",
      "item": [
        {
          "id": "",
          "name": "Nested Request With Existing ReqAuth",
          "request": {
            "method": "POST",
            "auth": {
              "type": "bearer",
              "authSource": "onrequest",
              "bearer": [
                {
                  "id": "",
                  "key": "token",
                  "value": "existing-token"
                }
              ]
            },
            "header": [
              {
                "id": "ct-header-id",
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{}"
            },
            "url": {
              "raw": "http://example.com/nested"
            }
          }
        }
      ]
    }
  ]
}`

	if err := os.WriteFile(filePath, []byte(initialJSON), 0644); err != nil {
		t.Fatalf("failed to write initial json: %v", err)
	}

	lg := logger.DefaultLogger()
	uc := NewUsecase(&lg, filePath)

	err := uc.Initiate(filePath)
	if err != nil {
		t.Fatalf("Initiate failed: %v", err)
	}

	readBytes, err := os.ReadFile(filePath)
	if err != nil {
		t.Fatalf("failed to read back initiated file: %v", err)
	}

	var result DocsContent
	if err := json.Unmarshal(readBytes, &result); err != nil {
		t.Fatalf("failed to unmarshal initiated json: %v", err)
	}

	folder := result.Item[0]
	if folder.ID != "folder-1" {
		t.Errorf("expected folder ID to be preserved, got %q", folder.ID)
	}
	nested := folder.Item[0]
	if nested.ID == "" {
		t.Errorf("expected nested item ID to be generated")
	}

	// ReqAuth was already non-null, should NOT be overwritten
	if nested.Request.Auth.AuthSource != "onrequest" {
		t.Errorf("expected preserved AuthSource 'onrequest', got %q", nested.Request.Auth.AuthSource)
	}
	if nested.Request.Auth.Bearer[0].Value != "existing-token" {
		t.Errorf("expected preserved Bearer value 'existing-token', got %q", nested.Request.Auth.Bearer[0].Value)
	}
	if nested.Request.Auth.Bearer[0].Id == "" {
		t.Errorf("expected Bearer property empty Id to be set")
	}

	// Content-Type header already existed with ID -> preserve ID
	if nested.Request.Header[0].Id != "ct-header-id" {
		t.Errorf("expected existing header ID to be preserved, got %q", nested.Request.Header[0].Id)
	}
	// Should not have duplicated Content-Type
	ctCount := 0
	for _, h := range nested.Request.Header {
		if h.Key == "Content-Type" {
			ctCount++
		}
	}
	if ctCount != 1 {
		t.Errorf("expected exactly 1 Content-Type header, got %d", ctCount)
	}
}
