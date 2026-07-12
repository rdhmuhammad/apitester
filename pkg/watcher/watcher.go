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
	State   *FileState
	pathCh  chan string
}

func New() *FileWatcher {
	w, err := fsnotify.NewWatcher()
	if err != nil {
		panic(err)
	}

	fw := &FileWatcher{
		watcher: w,
		State:   &FileState{},
		pathCh:  make(chan string, 1),
	}

	go fw.listen()

	return fw
}

func (fw *FileWatcher) Watch(path string) {
	fw.pathCh <- path
}

func (fw *FileWatcher) Close() error {
	if fw == nil || fw.watcher == nil {
		return nil
	}
	return fw.watcher.Close()
}

func (fw *FileWatcher) listen() {
	var currentPath string

	for {
		select {
		case path := <-fw.pathCh:
			if currentPath != "" {
				fw.watcher.Remove(filepath.Dir(currentPath))
			}
			currentPath = path
			if err := fw.watcher.Add(filepath.Dir(path)); err != nil {
				log.Printf("error adding watch for %s: %v", path, err)
				continue
			}
			log.Printf("watching file: %s", path)

		case event, ok := <-fw.watcher.Events:
			if !ok {
				logger.Infof("file watcher events channel closed")
				return
			}
			if currentPath == "" || filepath.Clean(event.Name) != filepath.Clean(currentPath) {
				continue
			}
			if event.Has(fsnotify.Write) || event.Has(fsnotify.Create) {
				data, err := os.ReadFile(currentPath)
				if err != nil {
					log.Printf("error reading file: %v", err)
					continue
				}
				info, err := os.Stat(currentPath)
				if err != nil {
					log.Printf("error stating file: %v", err)
					continue
				}
				fw.State.Update(string(data), info.ModTime())
				log.Printf("file changed: %s at %s", currentPath, info.ModTime().Format(time.RFC3339))
			}

		case err, ok := <-fw.watcher.Errors:
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
