FROM mysql:8.0.23

COPY resource/db/migration/migration.sql /docker-entrypoint-initdb.d/
