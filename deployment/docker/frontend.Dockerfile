FROM node:22-alpine AS builder

WORKDIR /app
RUN corepack enable
RUN corepack prepare pnpm@10.23.0 --activate

COPY frontend/package.json frontend/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY frontend/ ./
RUN pnpm build

FROM nginx:1.27-alpine

COPY deployment/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html/build

EXPOSE 8088

CMD ["nginx", "-g", "daemon off;"]
