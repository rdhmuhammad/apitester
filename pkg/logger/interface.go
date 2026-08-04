package logger

import "github.com/gin-gonic/gin"

type Logger interface {
	Info(msg string)
	Infof(format string, v ...interface{})
	Error(err error)
	Errorf(format string, v ...interface{})
	ErrorWithMsg(err error, msg string)
	Warn(msg string)
	Warnf(format string, v ...interface{})
	Debug(msg string)
	Debugf(format string, v ...interface{})
	Fatal(msg string)
	Fatalf(format string, v ...interface{})
	Println(v ...interface{})
	LoggingRequest(c *gin.Context)
}
