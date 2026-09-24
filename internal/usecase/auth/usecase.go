package auth

import (
	"context"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/rdhmuhammad/apitester/pkg/localerror"
	"github.com/rdhmuhammad/apitester/pkg/logger"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	Username string
	Password string
}

type Usecase struct {
	errHandler localerror.HandleError
	users      map[string]User
	jwtSecret  []byte
	hasAuth    bool
}

func NewUsecase(lg *logger.ReZero, adminUsername, adminPassword string) *Usecase {
	u := &Usecase{
		errHandler: localerror.NewHandlerError(lg),
		users:      make(map[string]User),
		jwtSecret:  jwtSecretFromEnv(),
	}

	if adminUsername == "" {
		adminUsername = os.Getenv("ADMIN_USERNAME")
	}
	if adminPassword == "" {
		adminPassword = os.Getenv("ADMIN_PASSWORD")
	}

	if adminUsername != "" && adminPassword != "" {
		hashed, err := bcrypt.GenerateFromPassword([]byte(adminPassword), bcrypt.DefaultCost)
		if err == nil {
			u.users[adminUsername] = User{
				Username: adminUsername,
				Password: string(hashed),
			}
			u.hasAuth = true
		}
	}

	return u
}

func (u *Usecase) HasAuth() bool {
	return u.hasAuth
}

func (u *Usecase) JWTSecret() []byte {
	return u.jwtSecret
}

func jwtSecretFromEnv() []byte {
	secret := os.Getenv("JWT_SECRET")
	if secret == "" {
		secret = "default-secret-change-me"
	}
	return []byte(secret)
}

func (u *Usecase) Login(ctx context.Context, req LoginRequest) (LoginResponse, error) {
	if !u.hasAuth {
		return LoginResponse{
			Username:  "public",
			Token:     "public-token",
			ExpiresAt: time.Now().Add(24 * time.Hour).Unix(),
		}, nil
	}

	user, exists := u.users[req.Username]
	if !exists {
		return LoginResponse{}, localerror.InvalidData("Invalid credentials")
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.Password)); err != nil {
		return LoginResponse{}, localerror.InvalidData("Invalid credentials")
	}

	duration := 24 * time.Hour
	if req.RememberMe {
		duration = 30 * 24 * time.Hour
	}

	expiresAt := time.Now().Add(duration)
	claims := jwt.RegisteredClaims{
		Subject:   user.Username,
		ExpiresAt: jwt.NewNumericDate(expiresAt),
		IssuedAt:  jwt.NewNumericDate(time.Now()),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedToken, err := token.SignedString(u.jwtSecret)
	if err != nil {
		return LoginResponse{}, u.errHandler.ErrorReturn(err)
	}

	return LoginResponse{
		Username:  user.Username,
		Token:     signedToken,
		ExpiresAt: expiresAt.Unix(),
	}, nil
}
