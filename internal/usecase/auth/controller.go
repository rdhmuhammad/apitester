package auth

import (
	"context"
	"encoding/json"
	"net/http"
	"strings"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/rdhmuhammad/apitester/pkg/logger"
	"github.com/rdhmuhammad/apitester/pkg/mapper"
	"github.com/rdhmuhammad/apitester/shared/payload"
)

type Controller struct {
	Uc        UsecaseInterface
	mapper    mapper.Mapper
	jwtSecret []byte
	hasAuth   bool
}

type UsecaseInterface interface {
	Login(ctx context.Context, req LoginRequest) (LoginResponse, error)
	HasAuth() bool
	JWTSecret() []byte
}

func NewController(lg *logger.ReZero, adminUsername, adminPassword string) Controller {
	uc := NewUsecase(lg, adminUsername, adminPassword)
	return Controller{
		Uc:        uc,
		mapper:    mapper.NewMapper(),
		jwtSecret: uc.JWTSecret(),
		hasAuth:   uc.HasAuth(),
	}
}

func (ctrl Controller) Login(w http.ResponseWriter, r *http.Request) {
	var req LoginRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		_ = json.NewEncoder(w).Encode(payload.DefaultErrorInvalidDataWithMessage(err.Error()))
		return
	}

	result, err := ctrl.Uc.Login(r.Context(), req)
	if err != nil {
		if invalid, invalidErr := ctrl.mapper.IsInvalidDataError(err); invalid {
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusBadRequest)
			_ = json.NewEncoder(w).Encode(payload.DefaultErrorInvalidDataWithMessage(invalidErr.Error()))
			return
		}
		ctrl.mapper.NewResponse(w, payload.NewSuccessResponse(result, "Login failed"), err)
		return
	}

	maxAge := int(result.ExpiresAt - time.Now().Unix())
	if maxAge > 0 {
		http.SetCookie(w, &http.Cookie{
			Name:     "token",
			Value:    result.Token,
			Path:     "/",
			MaxAge:   maxAge,
			HttpOnly: true,
			SameSite: http.SameSiteLaxMode,
		})
	}

	ctrl.mapper.NewResponse(w, payload.NewSuccessResponse(result, "Login successful"), nil)
}

func (ctrl Controller) Me(w http.ResponseWriter, r *http.Request) {
	if !ctrl.hasAuth {
		ctrl.mapper.NewResponse(w, payload.NewSuccessResponse(MeResponse{
			Username:      "public",
			Authenticated: true,
		}, "Success"), nil)
		return
	}

	cookie, err := r.Cookie("token")
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusUnauthorized)
		_ = json.NewEncoder(w).Encode(payload.DefaultErrorInvalidDataWithMessage("Not authenticated"))
		return
	}

	token, err := jwt.ParseWithClaims(cookie.Value, &jwt.RegisteredClaims{}, func(t *jwt.Token) (interface{}, error) {
		return ctrl.jwtSecret, nil
	})
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusUnauthorized)
		_ = json.NewEncoder(w).Encode(payload.DefaultErrorInvalidDataWithMessage("Not authenticated"))
		return
	}

	claims, ok := token.Claims.(*jwt.RegisteredClaims)
	if !ok || !token.Valid {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusUnauthorized)
		_ = json.NewEncoder(w).Encode(payload.DefaultErrorInvalidDataWithMessage("Not authenticated"))
		return
	}

	ctrl.mapper.NewResponse(w, payload.NewSuccessResponse(MeResponse{
		Username:      strings.TrimSpace(claims.Subject),
		Authenticated: true,
	}, "Success"), nil)
}

func (ctrl Controller) Register(mux *http.ServeMux, prefix string) {
	mux.HandleFunc("POST "+prefix+"/auth/login", ctrl.Login)
	mux.HandleFunc("GET "+prefix+"/auth/me", ctrl.Me)
}
