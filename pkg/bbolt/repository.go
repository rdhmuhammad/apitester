package bbolt

import (
	"context"
	"encoding/json"
	"fmt"
	"reflect"

	"go.etcd.io/bbolt"
)

type RepositoryInterface[T any] interface {
	Create(ctx context.Context, id string, entity *T) error
	Update(ctx context.Context, id string, entity *T) error
	Delete(ctx context.Context, id string) error
	View(ctx context.Context, id string) (*T, error)
	List(ctx context.Context) ([]T, error)
	Exists(ctx context.Context, id string) (bool, error)
}

type repository[T any] struct {
	db         *bbolt.DB
	bucketName string
}

type RepositoryOption func(*repositoryConfig)

type repositoryConfig struct {
	bucketName string
}

func WithBucketName(name string) RepositoryOption {
	return func(c *repositoryConfig) {
		c.bucketName = name
	}
}

func NewRepository[T any](db *bbolt.DB, opts ...RepositoryOption) (RepositoryInterface[T], error) {
	var cfg repositoryConfig
	for _, opt := range opts {
		opt(&cfg)
	}

	var zero T
	if cfg.bucketName == "" {
		t := reflect.TypeOf(zero)
		if t.Kind() == reflect.Ptr {
			t = t.Elem()
		}
		cfg.bucketName = t.Name()
	}

	if cfg.bucketName == "" {
		return nil, fmt.Errorf("unable to derive bucket name; provide WithBucketName option")
	}

	r := &repository[T]{
		db:         db,
		bucketName: cfg.bucketName,
	}

	if err := r.ensureBucket(); err != nil {
		return nil, fmt.Errorf("ensure bucket %q: %w", cfg.bucketName, err)
	}

	return r, nil
}

func (r *repository[T]) ensureBucket() error {
	return r.db.Update(func(tx *bbolt.Tx) error {
		_, err := tx.CreateBucketIfNotExists([]byte(r.bucketName))
		return err
	})
}

func (r *repository[T]) Create(ctx context.Context, id string, entity *T) error {
	data, err := json.Marshal(entity)
	if err != nil {
		return fmt.Errorf("marshal entity: %w", err)
	}

	return r.db.Update(func(tx *bbolt.Tx) error {
		b := tx.Bucket([]byte(r.bucketName))
		return b.Put([]byte(id), data)
	})
}

func (r *repository[T]) Update(ctx context.Context, id string, entity *T) error {
	return r.Create(ctx, id, entity)
}

func (r *repository[T]) Delete(ctx context.Context, id string) error {
	return r.db.Update(func(tx *bbolt.Tx) error {
		b := tx.Bucket([]byte(r.bucketName))
		return b.Delete([]byte(id))
	})
}

func (r *repository[T]) View(ctx context.Context, id string) (*T, error) {
	var result *T

	err := r.db.View(func(tx *bbolt.Tx) error {
		b := tx.Bucket([]byte(r.bucketName))
		data := b.Get([]byte(id))
		if data == nil {
			return nil
		}

		var entity T
		if err := json.Unmarshal(data, &entity); err != nil {
			return fmt.Errorf("unmarshal entity: %w", err)
		}
		result = &entity
		return nil
	})

	return result, err
}

func (r *repository[T]) List(ctx context.Context) ([]T, error) {
	var results = make([]T, 0)

	err := r.db.View(func(tx *bbolt.Tx) error {
		b := tx.Bucket([]byte(r.bucketName))
		return b.ForEach(func(_, data []byte) error {
			if data == nil {
				return nil
			}

			var entity T
			if err := json.Unmarshal(data, &entity); err != nil {
				return fmt.Errorf("unmarshal entity: %w", err)
			}
			results = append(results, entity)
			return nil
		})
	})

	return results, err
}

func (r *repository[T]) Exists(ctx context.Context, id string) (bool, error) {
	var found bool

	err := r.db.View(func(tx *bbolt.Tx) error {
		b := tx.Bucket([]byte(r.bucketName))
		data := b.Get([]byte(id))
		if data != nil {
			found = true
		}
		return nil
	})

	return found, err
}
