package watch

import "time"

type ReadResponse struct {
	Changed   bool      `json:"changed"`
	Content   string    `json:"content"`
	UpdatedAt time.Time `json:"updatedAt"`
}
