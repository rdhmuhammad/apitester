package example

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
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
			req := httptest.NewRequest(tc.method, tc.url, nil)
			rec := httptest.NewRecorder()

			handler.ServeHTTP(rec, req)

			if rec.Code != tc.expectedStatus {
				t.Errorf("expected status %d, got %d", tc.expectedStatus, rec.Code)
			}
			if tc.checkBody != nil {
				tc.checkBody(t, rec.Body.String())
			}
		})
	}
}
