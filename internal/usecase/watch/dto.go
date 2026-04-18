package watch

import "time"

type ReadResponse struct {
	Changed   bool        `json:"changed"`
	Content   DocsContent `json:"content"`
	UpdatedAt time.Time   `json:"updatedAt"`
}

type DocsContent struct {
	Info     CollectionInfo   `json:"info"`
	Item     []CollectionItem `json:"item"`
	Variable []CollectionVar  `json:"variable"`
}

type CollectionInfo struct {
	PostmanID   string `json:"_postman_id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Schema      string `json:"schema"`
}

type CollectionItem struct {
	FunIden     string            `json:"funIden"`
	Name        string            `json:"name"`
	Item        []CollectionItem  `json:"item,omitempty"`
	Request     *Request          `json:"request,omitempty"`
	Response    []any             `json:"response,omitempty"`
	Event       []CollectionEvent `json:"event,omitempty"`
	ID          string            `json:"id"`
	Description string            `json:"description,omitempty"`
}

type Request struct {
	FunIden     string       `json:"funIden"`
	Method      string       `json:"method"`
	Header      []Header     `json:"header"`
	Body        *RequestBody `json:"body,omitempty"`
	URL         RequestURL   `json:"url"`
	Description string       `json:"description,omitempty"`
}

type Header struct {
	Key   string `json:"key"`
	Value string `json:"value"`
}

type RequestBody struct {
	Mode string `json:"mode"`
	Raw  string `json:"raw"`
}

type RequestURL struct {
	Raw  string   `json:"raw"`
	Host []string `json:"host"`
	Path []string `json:"path"`
}

type CollectionEvent struct {
	Listen string      `json:"listen"`
	Script EventScript `json:"script"`
}

type EventScript struct {
	Exec []string `json:"exec"`
	Type string   `json:"type"`
}

type CollectionVar struct {
	ID       string `json:"id"`
	Key      string `json:"key"`
	Category string `json:"category"`
	Value    string `json:"value"`
	Type     string `json:"type"`
}
