package auth

import (
	"context"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/google/uuid"
	"github.com/rdhmuhammad/apitester/internal/domain"
	"github.com/rdhmuhammad/apitester/pkg/bbolt"
	"github.com/rdhmuhammad/apitester/pkg/localerror"
	"github.com/rdhmuhammad/apitester/pkg/logger"
	"golang.org/x/crypto/bcrypt"
)

type Usecase struct {
	errHandler localerror.HandleError
	userRepo   bbolt.RepositoryInterface[domain.User]
	jwtSecret  []byte
}

func NewUsecase(lg *logger.ReZero, userRepo bbolt.RepositoryInterface[domain.User]) *Usecase {
	u := &Usecase{
		errHandler: localerror.NewHandlerError(lg),
		userRepo:   userRepo,
		jwtSecret:  jwtSecretFromEnv(),
	}
	u.seedAdmin()
	return u
}

func JWTSecret() []byte {
	return jwtSecretFromEnv()
}

func jwtSecretFromEnv() []byte {
	secret := os.Getenv("JWT_SECRET")
	if secret == "" {
		secret = "default-secret-change-me"
	}
	return []byte(secret)
}

func (u *Usecase) seedAdmin() {
	username := os.Getenv("ADMIN_USERNAME")
	password := os.Getenv("ADMIN_PASSWORD")
	if username == "" || password == "" {
		return
	}

	existing, err := u.userRepo.List(context.Background())
	if err != nil {
		return
	}

	for _, user := range existing {
		if user.Username == username {
			return
		}
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return
	}

	u.userRepo.Create(context.Background(), uuid.NewString(), &domain.User{
		ID:        uuid.NewString(),
		Username:  username,
		Password:  string(hashedPassword),
		CreatedAt: time.Now(),
	})
}

func (u *Usecase) Login(ctx context.Context, req LoginRequest) (LoginResponse, error) {
	users, err := u.userRepo.List(ctx)
	if err != nil {
		return LoginResponse{}, u.errHandler.ErrorReturn(err)
	}

	var user *domain.User
	for i := range users {
		if users[i].Username == req.Username {
			user = &users[i]
			break
		}
	}

	if user == nil {
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
