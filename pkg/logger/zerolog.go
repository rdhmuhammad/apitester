package logger

import (
	"bytes"
	"fmt"
	"io"
	"os"
	"regexp"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"
)

var sensitiveFieldRegex = regexp.MustCompile(`"password"\s*:\s*"[^"]*"`)

type ReZero struct {
	logger *zerolog.Logger
	level  zerolog.Level
}

type LoggerBuilder struct {
	level   zerolog.Level
	logPath string
}

func DefaultLogger() *LoggerBuilder {
	logLevel := strings.ToLower(os.Getenv("LOG_LEVEL"))
	level := zerolog.InfoLevel
	switch logLevel {
	case "debug":
		level = zerolog.DebugLevel
	case "info":
		level = zerolog.InfoLevel
	case "warn":
		level = zerolog.WarnLevel
	case "error":
		level = zerolog.ErrorLevel
	case "fatal":
		level = zerolog.FatalLevel
	case "panic":
		level = zerolog.PanicLevel
	case "disabled":
		level = zerolog.Disabled
	}

	return &LoggerBuilder{
		level: level,
	}
}

func (b *LoggerBuilder) LogFile(path string) *LoggerBuilder {
	b.logPath = path
	return b
}

func (b *LoggerBuilder) Build() ReZero {
	zerolog.CallerSkipFrameCount = 4

	zerolog.CallerMarshalFunc = func(pc uintptr, file string, line int) string {
		short := file
		for i := len(file) - 1; i > 0; i-- {
			if file[i] == '/' {
				short = file[i+1:]
				break
			}
		}
		return fmt.Sprintf("%s:%d", short, line)
	}

	zerolog.SetGlobalLevel(b.level)

	consoleWriter := zerolog.ConsoleWriter{Out: os.Stdout, TimeFormat: time.RFC3339}

	var output io.Writer = consoleWriter
	if b.logPath != "" {
		if err := os.MkdirAll(b.logPath, 0755); err != nil {
			panic(err)
		}
		f, err := os.OpenFile(b.logPath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
		if err != nil {
			panic(err)
		}
		output = io.MultiWriter(consoleWriter, f)
	}

	logger := zerolog.New(output).
		With().
		Timestamp().
		Caller().
		Logger()

	return ReZero{
		logger: &logger,
		level:  b.level,
	}
}

func (l *ReZero) LoggingRequest(c *gin.Context) {

	if zerolog.DebugLevel != l.level {
		c.Next()
		return
	}

	// Read the request body
	var bodyBytes []byte
	if c.Request.Body != nil {
		bodyBytes, _ = io.ReadAll(c.Request.Body)
	}

	// Restore the body so it can be read again by subsequent handlers
	c.Request.Body = io.NopCloser(bytes.NewBuffer(bodyBytes))

	// Build log event
	event := l.logger.Info().
		Str("method", c.Request.Method).
		Str("path", c.Request.URL.Path).
		Str("query", c.Request.URL.RawQuery).
		Str("client_ip", c.ClientIP()).
		Str("user_agent", c.Request.UserAgent())

	// Only log body if it exists and is valid JSON, otherwise log as string
	if len(bodyBytes) > 0 {
		// Mask sensitive fields like password
		maskedBody := sensitiveFieldRegex.ReplaceAll(bodyBytes, []byte(`"password":"*****"`))

		// Check if it's valid JSON by looking for opening brace or bracket
		trimmed := bytes.TrimSpace(maskedBody)
		if len(trimmed) > 0 && (trimmed[0] == '{' || trimmed[0] == '[') {
			event = event.RawJSON("body", maskedBody)
		} else {
			event = event.Str("body", string(maskedBody))
		}
	}

	event.Msg("incoming request")
	c.Next()
}

// Info logs an info level message
func (l *ReZero) Info(msg string) {
	l.logger.Info().Msg(msg)
}

func (l *ReZero) Infof(format string, v ...interface{}) {
	l.logger.Info().Msgf(format, v...)
}

func (l *ReZero) Error(err error) {
	l.logger.Error().Err(err).Msg("")
}

func (l *ReZero) Errorf(format string, v ...interface{}) {
	l.logger.Error().Msgf(format, v...)
}

func (l *ReZero) ErrorWithMsg(err error, msg string) {
	l.logger.Error().Err(err).Msg(msg)
}

func (l *ReZero) Warn(msg string) {
	l.logger.Warn().Msg(msg)
}

func (l *ReZero) Warnf(format string, v ...interface{}) {
	l.logger.Warn().Msgf(format, v...)
}

func (l *ReZero) Debug(msg string) {
	l.logger.Debug().Msg(msg)
}

func (l *ReZero) Debugf(format string, v ...interface{}) {
	l.logger.Debug().Msgf(format, v...)
}

func (l *ReZero) Fatal(msg string) {
	l.logger.Fatal().Msg(msg)
}

func (l *ReZero) Fatalf(format string, v ...interface{}) {
	l.logger.Fatal().Msgf(format, v...)
}

func (l *ReZero) Println(v ...interface{}) {
	l.logger.Info().Msgf("%v", v...)
}
