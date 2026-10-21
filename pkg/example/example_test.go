package example

import (
	"bytes"
	"encoding/json"
	"mime/multipart"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestSetupMux(t *testing.T) {
	handler, err := SetupMux("")
	if err != nil {
		t.Fatalf("SetupMux failed: %v", err)
	}

	tests := []struct {
		name           string
		method         string
		url            string
		headers        map[string]string
		body           string
		expectedStatus int
		checkBody      func(t *testing.T, body string)
	}{
		{
			name:           "Health Check",
			method:         "GET",
			url:            "/health",
			expectedStatus: http.StatusOK,
			checkBody: func(t *testing.T, body string) {
				var res map[string]string
				if err := json.Unmarshal([]byte(body), &res); err != nil {
					t.Fatalf("failed to parse json: %v", err)
				}
				if res["status"] != "ok" || res["service"] != "target-service" {
					t.Errorf("unexpected body: %v", res)
				}
			},
		},
		{
			name:           "Users Endpoint",
			method:         "GET",
			url:            "/api/users",
			expectedStatus: http.StatusOK,
			checkBody: func(t *testing.T, body string) {
				var res []map[string]string
				if err := json.Unmarshal([]byte(body), &res); err != nil {
					t.Fatalf("failed to parse json: %v", err)
				}
				if len(res) != 2 {
					t.Errorf("expected 2 users, got %d", len(res))
				}
			},
		},
		{
			name:           "Items Query Params Filtering",
			method:         "GET",
			url:            "/api/items?category=electronics&search=mouse&limit=5",
			expectedStatus: http.StatusOK,
			checkBody: func(t *testing.T, body string) {
				var res struct {
					Data   []Item `json:"data"`
					Total  int    `json:"total"`
					Page   int    `json:"page"`
					Limit  int    `json:"limit"`
					Filter map[string]any
				}
				if err := json.Unmarshal([]byte(body), &res); err != nil {
					t.Fatalf("failed to parse json: %v", err)
				}
				if len(res.Data) != 1 {
					t.Fatalf("expected 1 item, got %d", len(res.Data))
				}
				if res.Data[0].Name != "Wireless Ergonomic Mouse" {
					t.Errorf("unexpected item name: %s", res.Data[0].Name)
				}
			},
		},
		{
			name:   "Item Detail by Path Param with Custom Header",
			method: "GET",
			url:    "/api/items/1",
			headers: map[string]string{
				"X-Request-ID": "test-req-123",
			},
			expectedStatus: http.StatusOK,
			checkBody: func(t *testing.T, body string) {
				var res struct {
					Data      Item   `json:"data"`
					RequestID string `json:"request_id"`
				}
				if err := json.Unmarshal([]byte(body), &res); err != nil {
					t.Fatalf("failed to parse json: %v", err)
				}
				if res.Data.ID != "1" {
					t.Errorf("expected item ID '1', got %s", res.Data.ID)
				}
				if res.RequestID != "test-req-123" {
					t.Errorf("expected request_id 'test-req-123', got %s", res.RequestID)
				}
			},
		},
		{
			name:           "Item Detail Not Found",
			method:         "GET",
			url:            "/api/items/9999",
			expectedStatus: http.StatusNotFound,
			checkBody: func(t *testing.T, body string) {
				if !strings.Contains(body, "not_found") {
					t.Errorf("expected not_found error message in body: %s", body)
				}
			},
		},
		{
			name:   "Create Item with JSON Body",
			method: "POST",
			url:    "/api/items",
			headers: map[string]string{
				"Content-Type": "application/json",
			},
			body:           `{"name":"External SSD 1TB","category":"electronics","price":119.99,"tags":["storage","hardware"],"in_stock":true}`,
			expectedStatus: http.StatusCreated,
			checkBody: func(t *testing.T, body string) {
				var res struct {
					Message string `json:"message"`
					Data    Item   `json:"data"`
				}
				if err := json.Unmarshal([]byte(body), &res); err != nil {
					t.Fatalf("failed to parse json: %v", err)
				}
				if res.Data.Name != "External SSD 1TB" {
					t.Errorf("expected created name 'External SSD 1TB', got %s", res.Data.Name)
				}
				if res.Data.ID == "" {
					t.Errorf("expected generated ID")
				}
			},
		},
		{
			name:   "Create Item Validation Error",
			method: "POST",
			url:    "/api/items",
			headers: map[string]string{
				"Content-Type": "application/json",
			},
			body:           `{"category":"electronics"}`,
			expectedStatus: http.StatusBadRequest,
			checkBody: func(t *testing.T, body string) {
				if !strings.Contains(body, "bad_request") {
					t.Errorf("expected bad_request error in body: %s", body)
				}
			},
		},
		{
			name:   "Update Item with Path Param & JSON Body (PUT)",
			method: "PUT",
			url:    "/api/items/2",
			headers: map[string]string{
				"Content-Type": "application/json",
			},
			body:           `{"name":"Mechanical Keyboard Pro RGB","category":"electronics","price":99.99,"tags":["hardware","gaming","wireless"],"in_stock":true}`,
			expectedStatus: http.StatusOK,
			checkBody: func(t *testing.T, body string) {
				var res struct {
					Message string `json:"message"`
					Data    Item   `json:"data"`
				}
				if err := json.Unmarshal([]byte(body), &res); err != nil {
					t.Fatalf("failed to parse json: %v", err)
				}
				if res.Data.Name != "Mechanical Keyboard Pro RGB" || res.Data.Price != 99.99 {
					t.Errorf("unexpected updated data: %+v", res.Data)
				}
			},
		},
		{
			name:   "Partial Update Item with Path Param & JSON Body (PATCH)",
			method: "PATCH",
			url:    "/api/items/3",
			headers: map[string]string{
				"Content-Type": "application/json",
			},
			body:           `{"price":12.99,"in_stock":true}`,
			expectedStatus: http.StatusOK,
			checkBody: func(t *testing.T, body string) {
				var res struct {
					Message string `json:"message"`
					Data    Item   `json:"data"`
				}
				if err := json.Unmarshal([]byte(body), &res); err != nil {
					t.Fatalf("failed to parse json: %v", err)
				}
				if res.Data.Price != 12.99 || !res.Data.InStock {
					t.Errorf("unexpected patched data: %+v", res.Data)
				}
				// Name should be preserved
				if res.Data.Name != "Ceramic Coffee Mug" {
					t.Errorf("expected original name to be preserved, got %s", res.Data.Name)
				}
			},
		},
		{
			name:           "Delete Item with Path Param (DELETE)",
			method:         "DELETE",
			url:            "/api/items/3",
			expectedStatus: http.StatusOK,
			checkBody: func(t *testing.T, body string) {
				if !strings.Contains(body, "deleted successfully") {
					t.Errorf("expected deletion confirmation: %s", body)
				}
			},
		},
		{
			name:           "Secure Endpoint Without Auth (Should Fail 401)",
			method:         "GET",
			url:            "/api/secure/profile",
			expectedStatus: http.StatusUnauthorized,
			checkBody: func(t *testing.T, body string) {
				if !strings.Contains(body, "unauthorized") {
					t.Errorf("expected unauthorized error: %s", body)
				}
			},
		},
		{
			name:   "Secure Endpoint With Valid Bearer Auth",
			method: "GET",
			url:    "/api/secure/profile",
			headers: map[string]string{
				"Authorization": "Bearer secret-token-xyz",
			},
			expectedStatus: http.StatusOK,
			checkBody: func(t *testing.T, body string) {
				var res struct {
					Status        string            `json:"status"`
					User          map[string]string `json:"user"`
					TokenReceived string            `json:"token_received"`
				}
				if err := json.Unmarshal([]byte(body), &res); err != nil {
					t.Fatalf("failed to parse json: %v", err)
				}
				if res.Status != "authenticated" || res.TokenReceived != "secret-token-xyz" {
					t.Errorf("unexpected auth response: %+v", res)
				}
			},
		},
		{
			name:   "Secure Action With Bearer Auth and JSON Body",
			method: "POST",
			url:    "/api/secure/action",
			headers: map[string]string{
				"Authorization": "Bearer secret-token-xyz",
				"Content-Type":  "application/json",
			},
			body:           `{"action":"deploy_service","environment":"production"}`,
			expectedStatus: http.StatusOK,
			checkBody: func(t *testing.T, body string) {
				var res struct {
					Status      string `json:"status"`
					Action      string `json:"action"`
					Environment string `json:"environment"`
				}
				if err := json.Unmarshal([]byte(body), &res); err != nil {
					t.Fatalf("failed to parse json: %v", err)
				}
				if res.Status != "success" || res.Action != "deploy_service" {
					t.Errorf("unexpected action response: %+v", res)
				}
			},
		},
		{
			name:   "Custom Headers Inspection",
			method: "GET",
			url:    "/api/headers",
			headers: map[string]string{
				"X-Custom-Header": "ApitesterCustomValue",
				"X-Request-ID":    "req-trace-456",
			},
			expectedStatus: http.StatusOK,
			checkBody: func(t *testing.T, body string) {
				var res struct {
					CustomHeader string `json:"custom_header"`
					RequestID    string `json:"request_id"`
				}
				if err := json.Unmarshal([]byte(body), &res); err != nil {
					t.Fatalf("failed to parse json: %v", err)
				}
				if res.CustomHeader != "ApitesterCustomValue" || res.RequestID != "req-trace-456" {
					t.Errorf("unexpected header inspection response: %+v", res)
				}
			},
		},
		{
			name:           "Apitester Read Collection",
			method:         "GET",
			url:            "/api/v1/collection/read",
			expectedStatus: http.StatusOK,
			checkBody: func(t *testing.T, body string) {
				if len(body) == 0 {
					t.Errorf("expected non-empty response body")
				}
			},
		},
		{
			name:           "Apitester SPA index.html",
			method:         "GET",
			url:            "/",
			expectedStatus: http.StatusOK,
			checkBody: func(t *testing.T, body string) {
				if len(body) == 0 {
					t.Errorf("expected non-empty index.html body")
				}
			},
		},
	}

	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			var bodyReader *strings.Reader
			if tc.body != "" {
				bodyReader = strings.NewReader(tc.body)
			} else {
				bodyReader = strings.NewReader("")
			}

			req := httptest.NewRequest(tc.method, tc.url, bodyReader)
			for k, v := range tc.headers {
				req.Header.Set(k, v)
			}

			rec := httptest.NewRecorder()
			handler.ServeHTTP(rec, req)

			if rec.Code != tc.expectedStatus {
				t.Errorf("expected status %d, got %d. Body: %s", tc.expectedStatus, rec.Code, rec.Body.String())
			}
			if tc.checkBody != nil {
				tc.checkBody(t, rec.Body.String())
			}
		})
	}
}

func TestMultipartUpload(t *testing.T) {
	handler, err := SetupMux("")
	if err != nil {
		t.Fatalf("SetupMux failed: %v", err)
	}

	// Create a multipart form buffer
	var body bytes.Buffer
	writer := multipart.NewWriter(&body)

	// Add form fields
	_ = writer.WriteField("title", "Test Upload Title")
	_ = writer.WriteField("description", "Testing multipart file upload")

	// Add file field
	part, err := writer.CreateFormFile("file", "sample-log.txt")
	if err != nil {
		t.Fatalf("failed to create form file: %v", err)
	}
	sampleContent := "line 1: service initialized\nline 2: running test\n"
	_, _ = part.Write([]byte(sampleContent))

	_ = writer.Close()

	req := httptest.NewRequest("POST", "/api/upload", &body)
	req.Header.Set("Content-Type", writer.FormDataContentType())

	rec := httptest.NewRecorder()
	handler.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d. Body: %s", rec.Code, rec.Body.String())
	}

	var res struct {
		Status     string            `json:"status"`
		FormFields map[string]string `json:"form_fields"`
		File       struct {
			Filename    string `json:"filename"`
			SizeBytes   int64  `json:"size_bytes"`
			ContentType string `json:"content_type"`
			ReadBytes   int    `json:"read_bytes"`
		} `json:"file"`
	}

	if err := json.Unmarshal(rec.Body.Bytes(), &res); err != nil {
		t.Fatalf("failed to parse json: %v", err)
	}

	if res.Status != "ok" {
		t.Errorf("expected status 'ok', got %s", res.Status)
	}
	if res.FormFields["title"] != "Test Upload Title" {
		t.Errorf("expected title 'Test Upload Title', got %s", res.FormFields["title"])
	}
	if res.File.Filename != "sample-log.txt" {
		t.Errorf("expected filename 'sample-log.txt', got %s", res.File.Filename)
	}
	if res.File.ReadBytes != len(sampleContent) {
		t.Errorf("expected %d read bytes, got %d", len(sampleContent), res.File.ReadBytes)
	}
}
