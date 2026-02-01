# Simple Inbox Application

# Overview

This project is a simple inbox application developed as a test assignment.
It allows users to create, view, and delete messages. There are no message recipients — all messages are visible to all users, and everyone can manage the shared inbox.

When a new message is created, it immediately appears in the message list.

## Features

- Shared inbox (no user-specific messages)
- Full Docker-based setup with one-command startup

## Technology Stack

### Backend

- Java Spring Boot
- PostgreSQL
- JPA / Hibernate
- Clean Architecture & Domain-Driven Design (DDD)

### Frontend

- React
- TypeScript
- Axios
- Formik (form handling and validation)
- Bootstrap (UI styling)

### Infrastructure

- Docker
- Docker Compose
- NGINX

## Installation & Running the Application

The entire application is fully containerized and can be started with a single command.

### Build and Run

```
docker-compose up --build
```
Alternatively:
```
docker-compose build --no-cache
docker-compose up -d
```

### Accessing the Application

Open the application in your browser at:
```
http://localhost
```

### Stopping the Application

To stop and remove all containers:
```
docker-compose down
```

## Configuration Notes

This is a test project, so environment (`.env`) files are intentionally not used to avoid additional setup steps.
All configuration values are defined directly in the `docker-compose.yml`.

In a real production environment, sensitive data and configuration values would be moved to environment variables.

![App screenshot](screenshot.png)