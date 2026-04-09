FROM golang:1.24-alpine AS builder

WORKDIR /src

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /deployment/out/apitester ./cmd/main.go

FROM alpine:3.22

WORKDIR /app
RUN adduser -D appuser

COPY --from=builder /deployment/out/apitester ./apitester
COPY resource ./resource
COPY .env.stag ./.env.stag

USER appuser

EXPOSE 8999

CMD ["./apitester", "-env", ".env.stag"]
