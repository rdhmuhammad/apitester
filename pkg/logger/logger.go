//go:generate mockery --all --inpackage --case snake

package logger

import (
	"os"
	"time"

	"github.com/getsentry/sentry-go"
	sentrygin "github.com/getsentry/sentry-go/gin"
	"github.com/gin-gonic/gin"
)

type Sentry struct {
	hub Hub
}

type Hub interface {
	CaptureException(exception error) *sentry.EventID
	CaptureMessage(message string) *sentry.EventID
}

type Catcher interface {
	Catch(err error)
	CaptureMessage(msg string)
	SetHubFromContext(ctx *gin.Context)
}

func Default() Catcher {
	traceSampleRate := 1.0
	sentryEnvironment := os.Getenv("SENTRY_ENVIRONMENT")
	if sentryEnvironment == "production" {
		traceSampleRate = 0.2
	}
	err := sentry.Init(sentry.ClientOptions{
		Dsn:              os.Getenv("SENTRY_DSN"),
		Environment:      sentryEnvironment,
		TracesSampleRate: traceSampleRate,
	})
	if err != nil {
		panic(err)
	}

	defer sentry.Flush(2 * time.Second)

	return &Sentry{}
}

func (c *Sentry) Catch(err error) {
	if c.hub == nil {
		sentry.CaptureException(err)
		return
	}

	c.hub.CaptureException(err)
}

func (c *Sentry) CaptureMessage(msg string) {
	c.hub.CaptureMessage(msg)
}

func (c *Sentry) SetHubFromContext(ctx *gin.Context) {
	c.hub = sentrygin.GetHubFromContext(ctx)
}
