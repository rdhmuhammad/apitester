package bbolt

import (
	"fmt"
	"go.etcd.io/bbolt"
	"os"
	"path/filepath"
)

type BoltDB struct {
	db *bbolt.DB
}

func NewBoltDB(path string) (*BoltDB, error) {
	dir := filepath.Dir(path)
	if err := os.MkdirAll(dir, 0755); err != nil {
		return nil, fmt.Errorf("create bolt db directory: %w", err)
	}

	db, err := bbolt.Open(path, 0644, nil)
	if err != nil {
		return nil, fmt.Errorf("open bolt db: %w", err)
	}

	return &BoltDB{db: db}, nil
}

func (b *BoltDB) Close() error {
	return b.db.Close()
}

func (b *BoltDB) DB() *bbolt.DB {
	return b.db
}
