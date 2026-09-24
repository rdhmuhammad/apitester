package apitester

import (
	"embed"
	"fmt"
	"io/fs"
	"net/http"
	"os"
	"strings"

	"github.com/rdhmuhammad/apitester/internal/usecase/auth"
	"github.com/rdhmuhammad/apitester/internal/usecase/watch"
	"github.com/rdhmuhammad/apitester/pkg/logger"
	"github.com/rdhmuhammad/apitester/pkg/middleware"
)

//go:embed all:frontend/dist
var frontendFS embed.FS

type Config struct {
	CollectionPath string
	RoutePrefix    string
	AdminUsername  string
	AdminPassword  string
}

type Option func(*Config)

func WithCollectionPath(path string) Option {
	return func(c *Config) {
		c.CollectionPath = path
	}
}

func WithRoutePrefix(prefix string) Option {
	return func(c *Config) {
		c.RoutePrefix = strings.TrimSuffix(prefix, "/")
	}
}

func WithCredentials(username, password string) Option {
	return func(c *Config) {
		c.AdminUsername = username
		c.AdminPassword = password
	}
}

type ApiTester struct {
	config    Config
	handler   http.Handler
	watchCtrl watch.Controller
	authCtrl  auth.Controller
	apiMux    *http.ServeMux
	spaFS     fs.FS
}

func NewDocs(opts ...Option) (*ApiTester, error) {
	cfg := Config{
		CollectionPath: os.Getenv("COLLECTION_PATH"),
		RoutePrefix:    "/api/v1",
		AdminUsername:  os.Getenv("ADMIN_USERNAME"),
		AdminPassword:  os.Getenv("ADMIN_PASSWORD"),
	}

	for _, opt := range opts {
		opt(&cfg)
	}

	if cfg.CollectionPath == "" {
		cfg.CollectionPath = "resource/apidocs/collection.json"
	}

	lg := logger.DefaultLogger()
	watchCtrl := watch.NewController(&lg, cfg.CollectionPath)
	authCtrl := auth.NewController(&lg, cfg.AdminUsername, cfg.AdminPassword)

	apiMux := http.NewServeMux()
	watchCtrl.Register(apiMux, cfg.RoutePrefix)
	authCtrl.Register(apiMux, cfg.RoutePrefix)

	distSub, err := fs.Sub(frontendFS, "frontend/dist")
	if err != nil {
		return nil, err
	}

	spa := spaHandler(distSub)

	combinedHandler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if strings.HasPrefix(r.URL.Path, cfg.RoutePrefix) {
			apiMux.ServeHTTP(w, r)
			return
		}
		spa.ServeHTTP(w, r)
	})

	corsWrapped := middleware.AllowCORS(combinedHandler)

	return &ApiTester{
		config:    cfg,
		handler:   corsWrapped,
		watchCtrl: watchCtrl,
		authCtrl:  authCtrl,
		apiMux:    apiMux,
		spaFS:     distSub,
	}, nil
}

func (a *ApiTester) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	a.handler.ServeHTTP(w, r)
}

func (a *ApiTester) Handler() http.Handler {
	return a.handler
}

func (a *ApiTester) RegisterMux(mux *http.ServeMux) {
	a.watchCtrl.Register(mux, a.config.RoutePrefix)
	a.authCtrl.Register(mux, a.config.RoutePrefix)
}

func (a *ApiTester) StaticHandler() http.Handler {
	return spaHandler(a.spaFS)
}

func spaHandler(distFS fs.FS) http.Handler {
	fileServer := http.FileServer(http.FS(distFS))
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		path := strings.TrimPrefix(r.URL.Path, "/")
		if path == "" {
			path = "index.html"
		}

		if path == ".env" {
			host := r.Host
			port := ""
			if colon := strings.LastIndex(host, ":"); colon != -1 {
				port = host[colon+1:]
			}
			w.Header().Set("Content-Type", "text/plain; charset=utf-8")
			w.WriteHeader(http.StatusOK)
			_, _ = fmt.Fprintf(w, "PORT=%s\nVITE_API_URL=/api/v1\n", port)
			return
		}

		f, err := distFS.Open(path)
		if err == nil {
			stat, err := f.Stat()
			f.Close()
			if err == nil && !stat.IsDir() {
				fileServer.ServeHTTP(w, r)
				return
			}
		}

		indexBytes, err := fs.ReadFile(distFS, "index.html")
		if err != nil {
			http.NotFound(w, r)
			return
		}
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		w.WriteHeader(http.StatusOK)
		w.Write(indexBytes)
	})
}
