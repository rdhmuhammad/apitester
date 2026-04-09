package db

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"os"
	"strconv"
)

func Default() (*gorm.DB, error) {
	// logLevel (env: DB_LOG_MODE)
	// 1 = Silent (not printing any log)
	// 2 = Error (only printing in case of error)
	// 3 = Warn (print error + warning)
	// 4 = Info (print all type of log)
	logLevel, _ := strconv.Atoi(os.Getenv("DB_LOG_MODE"))
	if logLevel == 0 {
		logLevel = 2
	}
	var (
		username string
		password string
		host     string
		port     string
		dbName   string
	)
	username = os.Getenv("MYSQL_USER")
	password = os.Getenv("MYSQL_PASSWORD")
	dbName = os.Getenv("MYSQL_DATABASE")
	port = os.Getenv("MYSQL_PORT")
	host = os.Getenv("MYSQL_HOST")
	dbConn, err := gorm.Open(
		mysql.Open(fmt.Sprintf(
			"%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=UTC",
			username,
			password,
			host,
			port,
			dbName,
		)),
		&gorm.Config{
			CreateBatchSize: 500,
			Logger:          logger.Default.LogMode(logger.LogLevel(logLevel)),
		},
	)

	return dbConn, err

}
