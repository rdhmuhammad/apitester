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
	Auth     *CollectionAuth  `json:"auth,omitempty"`
	Variable []CollectionVar  `json:"variable"`
}

type CollectionInfo struct {
	PostmanID   string `json:"_postman_id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Schema      string `json:"schema"`
}

type CollectionItem struct {
	FunIden     string               `json:"funIden"`
	Name        string               `json:"name"`
	Item        []CollectionItem     `json:"item,omitempty"`
	Request     *Request             `json:"request,omitempty"`
	Response    []CollectionResponse `json:"response,omitempty"`
	Event       []CollectionEvent    `json:"event,omitempty"`
	ID          string               `json:"id"`
	Description string               `json:"description,omitempty"`
}

type CollectionResponse struct {
	Name            string           `json:"name"`
	OriginalRequest *Request         `json:"originalRequest,omitempty"`
	Status          string           `json:"status"`
	Code            int              `json:"code"`
	PreviewLanguage *string          `json:"_postman_previewlanguage,omitempty"`
	Header          []Header         `json:"header,omitempty"`
	Cookie          []ResponseCookie `json:"cookie,omitempty"`
	Body            string           `json:"body"`
}

type ResponseCookie struct {
	Key      string `json:"key"`
	Value    string `json:"value"`
	Domain   string `json:"domain,omitempty"`
	Path     string `json:"path,omitempty"`
	Secure   bool   `json:"secure,omitempty"`
	HTTPOnly bool   `json:"httpOnly,omitempty"`
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
	Id    string `json:"id"`
	Key   string `json:"key"`
	Value string `json:"value"`
}

type RequestBody struct {
	Mode     string     `json:"mode"`
	Raw      string     `json:"raw"`
	FormData []Property `json:"formdata,omitempty"`
}

type RequestURL struct {
	Raw   string     `json:"raw"`
	Host  []string   `json:"host"`
	Path  []string   `json:"path"`
	Query []Property `json:"query"`
}

type CollectionAuth struct {
	Type   string     `json:"type"`
	Bearer []Property `json:"bearer,omitempty"`
}

type Property struct {
	Id    string `json:"id"`
	Key   string `json:"key"`
	Value string `json:"value"`
	Type  string `json:"type,omitempty"`
	Src   string `json:"src,omitempty"`
}

type CollectionEvent struct {
	Listen string      `json:"listen"`
	Script EventScript `json:"script"`
}

type EventScript struct {
	Exec []string `json:"exec"`
	Type string   `json:"type"`
}

type CreateCollectionRequest struct {
	Name string `json:"name" binding:"required"`
	Path string `json:"path" binding:"required"`
}

type UpdateCollectionRequest struct {
	Name string `json:"name"`
	Path string `json:"path"`
}

type CollectionVar struct {
	ID       string `json:"id"`
	Key      string `json:"key"`
	Category string `json:"category"`
	Value    string `json:"value"`
	Type     string `json:"type"`
}

type TestFileInfo struct {
	Name     string `json:"name"`
	Filename string `json:"filename"`
}

type TestFileContent struct {
	Name  string     `json:"name"`
	Steps []TestStep `json:"steps"`
}

type TestStep struct {
	ID         string          `json:"id"`
	Name       string          `json:"name"`
	Method     string          `json:"method"`
	URL        string          `json:"url"`
	Headers    []TestHeader    `json:"headers"`
	Body       string          `json:"body,omitempty"`
	Assertions []AssertionRule `json:"assertions"`
	Captures   []CaptureRule   `json:"captures"`
}

type TestHeader struct {
	Key   string `json:"key"`
	Value string `json:"value"`
}

type AssertionRule struct {
	ID         string `json:"id"`
	Expression string `json:"expression"`
}

type CaptureRule struct {
	ID         string `json:"id"`
	VarName    string `json:"varName"`
	Expression string `json:"expression"`
}
