package auth

type LoginRequest struct {
	Username   string `json:"username" binding:"required"`
	Password   string `json:"password" binding:"required"`
	RememberMe bool   `json:"rememberMe"`
}

type LoginResponse struct {
	Username  string `json:"username"`
	Token     string `json:"token"`
	ExpiresAt int64  `json:"expiresAt"`
}

type MeResponse struct {
	Username      string `json:"username"`
	Authenticated bool   `json:"authenticated"`
}
