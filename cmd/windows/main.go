package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"time"

	"github.com/joho/godotenv"
	"github.com/rdhmuhammad/apitester/shared/api"
	"golang.org/x/sync/errgroup"
	"golang.org/x/sys/windows/svc"
	"golang.org/x/sys/windows/svc/debug"
	"golang.org/x/sys/windows/svc/eventlog"
)

type WinService struct {
	api  *api.Api
	elog *eventlog.Log
}

func (w *WinService) logEvent(eid uint32, msg, level string) {
	if w.elog == nil {
		return
	}
	var err error
	switch level {
	case "info":
		err = w.elog.Info(eid, msg)
	case "error":
		err = w.elog.Error(eid, msg)
	case "warning":
		err = w.elog.Warning(eid, msg)
	}
	if err != nil {
		log.Printf("eventlog write failed: %v", err)
	}
}

func (w *WinService) Execute(args []string, r <-chan svc.ChangeRequest, status chan<- svc.Status) (bool, uint32) {
	const cmdsAccepted = svc.AcceptStop | svc.AcceptShutdown | svc.AcceptPauseAndContinue

	status <- svc.Status{State: svc.StartPending}

	w.api = api.Default()
	g, gctx := errgroup.WithContext(context.Background())
	g.Go(func() error {
		return w.api.Start()
	})

	status <- svc.Status{State: svc.Running, Accepts: cmdsAccepted}
	w.logEvent(1, "Service started, HTTP on port "+os.Getenv("APP_PORT"), "info")

loop:
	for {
		select {
		case <-gctx.Done():
			break loop
		case c := <-r:
			switch c.Cmd {
			case svc.Interrogate:
				status <- c.CurrentStatus
			case svc.Stop, svc.Shutdown:
				log.Print("Shutting service...!")
				w.logEvent(3, "Service shutting down", "info")
				ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
				defer cancel()
				if err := w.api.Shutdown(ctx); err != nil {
					log.Printf("API shutdown error: %v", err)
					w.logEvent(4, "API shutdown error: "+err.Error(), "warning")
				}
				break loop
			case svc.Pause:
				status <- svc.Status{State: svc.Paused, Accepts: cmdsAccepted}
			case svc.Continue:
				status <- svc.Status{State: svc.Running, Accepts: cmdsAccepted}
			default:
				log.Printf("Unexpected service control request #%d", c)
			}
		}
	}

	status <- svc.Status{State: svc.StopPending}

	exitCode := uint32(0)
	if err := g.Wait(); err != nil {
		log.Printf("API server error: %v", err)
		w.logEvent(2, "API server stopped unexpectedly: "+err.Error(), "error")
		exitCode = 1
	} else {
		w.logEvent(5, "Service stopped", "info")
	}

	return false, exitCode
}

func runService(elog *eventlog.Log, name string, isDebug bool) {
	svcInst := &WinService{elog: elog}
	if isDebug {
		err := debug.Run(name, svcInst)
		log.Println("Running Debug")
		if err != nil {
			log.Fatalln("Error running service in debug mode.")
		}
	} else {
		log.Println("Running Production: ", name)
		err := svc.Run(name, svcInst)
		if err != nil {
			log.Fatalln("Error running service in Service Control mode.")
		}
	}
}

func getLogPath() string {
	if p := os.Getenv("LOG_PATH"); p != "" {
		return p
	}
	configDir, err := os.UserConfigDir()
	if err != nil {
		return "resource/log/debug.log"
	}

	return filepath.Join(configDir, "apitester", "debug.log")
}

func main() {
	var envFile string
	var isDebug bool
	flag.StringVar(&envFile, "env", ".env.stag", "Provide env file path")
	flag.BoolVar(&isDebug, "debug", false, "Run in debug/console mode")
	flag.Parse()

	elog, err := eventlog.Open("Apitester-backend")
	if err != nil {
		log.Printf("eventlog.Open failed: %v (service may not be installed)", err)
	} else {
		defer elog.Close()
	}

	err = godotenv.Load(envFile)
	if err != nil {
		if elog != nil {
			elog.Error(1, "Failed to load env file: "+err.Error())
		}
		log.Println(err)
		panic(err)
	}

	logPath := getLogPath()
	os.MkdirAll(filepath.Dir(logPath), 0755)

	f, err := os.OpenFile(logPath, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		if elog != nil {
			elog.Error(2, "Failed to open log file: "+err.Error())
		}
		log.Fatalln(fmt.Errorf("error opening file: %v", err))
	}
	defer f.Close()

	log.SetOutput(f)
	if elog != nil {
		elog.Info(6, "Log file opened: "+logPath)
	}

	runService(elog, "Apitester-backend", isDebug)
}
