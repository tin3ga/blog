---
title: "A Docker Compose Example (FlaskAPP + PostgreSQL + Traefik)"
date: 2024-02-09T10:29:08+03:00
draft: false
tags: ["python", "flask", "docker", "devops", "traefik", "compose"]
weight: 120
ShowToc: true
---

## Introduction

[Docker Compose](https://docs.docker.com/compose/) is a tool used for defining and running multi-container Docker applications. It allows developers to describe all the services that make up an application in a single YAML file, defining the relationships and configurations between them. Docker Compose then uses this YAML configuration to deploy and manage the application's containers as a single unit. Docker Compose is particularly useful for development environments, testing, and deploying multi-container applications in a consistent and reproducible manner. It simplifies the process of managing complex application architectures by providing a declarative configuration file and a set of commands for common operations.

## Components of Docker compose

- compose file

A YAML file is used to define the configuration of the entire application stack, including services, networks, and volumes. It specifies details such as the Docker images to use, container dependencies, environment variables etc.

The default path for a Compose file is compose.yaml or compose.yml. docker-compose.yml/docker-compose.yaml also supported for backwards compatibility.

- Services

Each service in a Docker Compose file represents a containerized application component. Services can be built from a specified Dockerfile or use pre-built images from a registry. You can define the relationships and dependencies between services.

- Volumes

Volumes can be defined to persist data outside the containers. This is crucial for storing data that needs to survive container restarts or updates.

- Environment Variables

Docker Compose allows you to set environment variables for services.

- Networks

Docker Compose allows you to define custom networks to connect containers and control communication between them. Services can be attached to specific networks to isolate or expose their communication.

## A Sample compose file

The Docker Compose file below defines a set of services that work together to run a Flask-based todo application along with a PostgreSQL database and Traefik as a reverse proxy/load balancer.

```yaml
services:
  todo:
    image: tinegagideon/flask-todo
    ports:
      - "5000:5000"
    environment:
      - DATABASE_URL=postgresql+psycopg2://postgres:postgres@todo-db:5432/postgres
    labels:
      # Explicitly tell Traefik to expose this container
      - "traefik.enable=true"
      # The domain the service will respond to
      - "traefik.http.routers.todo.rule=Host(`localhost`)"
    depends_on:
      - todo-db
      - traefik

  todo-db:
    image: postgres:14
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_DB=postgres
    volumes:
      - pgdata:/var/lib/postgresql/data

  traefik:
    image: traefik:v3.0
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
    ports:
      - "80:80"
      - "8080:8080"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"

volumes:
  pgdata:
```

### Compose file breakdown

The compose file is divided into two sections: services and volume, with three services.

#### Services Section

**todo Service**

- It uses an image named tinegagideon/flask-todo for the Flask todo application.
- Exposes port 5000 of the container to port 5000 of the host machine.
- Sets environment variables for the Flask application, including the database URL.
- Uses labels to configure Traefik to expose this service and defines the routing rule.
- Depends on the todo-db service and the traefik service.

**todo-db Service**

- Uses the official PostgreSQL image with version 14.
- Exposes port 5432 of the container to port 5432 of the host machine.
- Sets environment variables for the PostgreSQL database i.e the password, username, and database name.
- Mounts a volume named pgdata to persist PostgreSQL data.

**traefik Service**

- Uses the Traefik image with version 3.0.
- Specifies command-line arguments for Traefik:

`--api.insecure=true`
enables insecure access to the Traefik API.

`--providers.docker=true`
enables Docker as a provider.

`--providers.docker.exposedbydefault=false`
specifies that services must be explicitly exposed.

`--entrypoints.web.address=:80`
defines the entry point for HTTP traffic.

- Exposes port 80 and port 8080 of the container to the corresponding ports on the host machine.
- Mounts the Docker socket to interact with Docker daemon inside the Traefik container.

#### Volumes Section

Defines a named volume named pgdata that is used by the todo-db service to persist PostgreSQL data.
