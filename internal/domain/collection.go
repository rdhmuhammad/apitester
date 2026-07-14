package domain

import (
	"time"
)

type Collection struct {
	ID         string    `json:"id"`
	Name       string    `json:"name"`
	IsSelected bool      `json:"is_selected"`
	Path       string    `json:"path"`
	UpdatedAt  time.Time `json:"updated_at"`
	CreatedAt  time.Time `json:"created_at"`
}
