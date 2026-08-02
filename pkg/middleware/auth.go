package middleware

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func CookieAuth(jwtSecret []byte) gin.HandlerFunc {
	return func(c *gin.Context) {
		tokenCookie, err := c.Cookie("token")
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"message": "Authentication required"})
			c.Abort()
			return
		}

		token, err := jwt.ParseWithClaims(tokenCookie, &jwt.RegisteredClaims{}, func(t *jwt.Token) (interface{}, error) {
			return jwtSecret, nil
		})
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"message": "Invalid or expired token"})
			c.Abort()
			return
		}

		claims, ok := token.Claims.(*jwt.RegisteredClaims)
		if !ok || !token.Valid {
			c.JSON(http.StatusUnauthorized, gin.H{"message": "Invalid token claims"})
			c.Abort()
			return
		}

		c.Set("username", strings.TrimSpace(claims.Subject))
		c.Next()
	}
}
