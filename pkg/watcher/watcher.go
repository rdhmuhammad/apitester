package watcher

import (
	"log"
	"os"
	"path/filepath"
	"sync"
	"time"

	"github.com/fsnotify/fsnotify"
	"github.com/rdhmuhammad/apitester/pkg/logger"
)

type FileWatcher struct {
	watcher *fsnotify.Watcher
	State *FileState
}

func New(path string) *FileWatcher {
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		panic(err)
	}

	state := &FileState{}

	log.Printf("watching file: %s", path)
	go listen(path, watcher, state)

	if err := watcher.Add(filepath.Dir(path)); err != nil {
		panic(err)
	}
	
	return &FileWatcher{
		watcher: watcher,
		State: state,
	}
}

func (f *FileWatcher) Close() error {
	if f == nil || f.watcher == nil {
		return nil
	}
	return f.watcher.Close()
}

func listen(path string, watcher *fsnotify.Watcher, state *FileState) {
	for {
		select {
		case event, ok := <-watcher.Events:
			if !ok {
				logger.Infof("file watcher events channel closed")
				return
			}
			if filepath.Clean(event.Name) != filepath.Clean(path) {
				continue
			}
			if event.Has(fsnotify.Write) || event.Has(fsnotify.Create) {
				data, err := os.ReadFile(path)
				if err != nil {
					log.Printf("error reading file: %v", err)
					continue
				}
				info, err := os.Stat(path)
				if err != nil {
					log.Printf("error stating file: %v", err)
					continue
				}
				state.Update(string(data), info.ModTime())
				log.Printf("file changed: %s at %s", path, info.ModTime().Format(time.RFC3339))
			}
		case err, ok := <-watcher.Errors:
			if !ok {
				return
			}
			logger.Errorf("watcher error: %v", err)
		}
	}
}

type FileState struct {
	mu      sync.RWMutex
	content string
	changed bool
	lastMod time.Time
}

func (f *FileState) Update(content string, modTime time.Time) {
	f.mu.Lock()
	defer f.mu.Unlock()
	f.content = content
	f.changed = true
	f.lastMod = modTime
}

func (f *FileState) Read() (string, bool, time.Time) {
	f.mu.RLock()
	defer f.mu.RUnlock()
	return f.content, f.changed, f.lastMod
}
