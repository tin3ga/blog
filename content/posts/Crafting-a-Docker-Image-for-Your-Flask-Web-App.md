---
title: "Crafting a Docker Image for Your Flask Web App"
date: 2024-01-13T12:21:10+03:00
draft: false
tags: ["python", "flask", "docker", "devops"]
weight: 120
ShowToc: true
---

## Introduction🐋

[Docker](https://www.docker.com/) is a revolutionary containerization platform that streamlines software development and deployment. It encapsulates applications and their dependencies, ensuring consistency across different environments. Docker eliminates the "it works on my machine" problem, promoting collaboration and scalability. Its efficient resource utilization and isolation capabilities make it a vital tool for modern software development.

## Prerequisites 📋

- Flask Application.
- Docker [Follow these steps to install docker to your computer](https://docs.docker.com/engine/install/).
- Docker Hub Account [create a free account](https://hub.docker.com/signup/).

**I will assume that you have a basic understanding of python, especially the Flask framework and an understanding of networking ports**.

## Sample project 🏗️

Project Directory Structure:

```
hello-flask/
├── app/
│   ├── __init__.py
│   └── app.py
├── requirements.txt
└── Dockerfile

```

Sample code in app.py file:

```
from flask import Flask

app = Flask(__name__) # create an instance of our imported Flask class.


@app.route("/")
def home():
    return 'hello flask'

# allows the code to be executed directly as a script
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
```

[Official Flask Documentation](https://flask.palletsprojects.com/en/3.0.x/quickstart/)

## Dockerfile 📝

Docker automates image creation by interpreting instructions from a [Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#:~:text=What%20is%20a%20Dockerfile%3F,to%20build%20a%20given%20image.), a text file containing sequential commands required to build a specific image. A Docker image comprises immutable layers, each representing an instruction from the Dockerfile. These layers are arranged in a stack, with each one capturing the incremental changes made compared to the previous layer.

create a Dockerfile with the following instructions:

```docker
FROM python:alpine

RUN apk update
RUN apk add -y python-pip; pip install --no-cache-dir --upgrade pip
WORKDIR /hello-flask
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY /app .
ENTRYPOINT [ "python" ]
CMD [ "app.py" ]

```

### Each instruction break down

`FROM python:alpine`
It specifies the base image to use, in this case, python:alpine. This image is based on the Alpine Linux distribution and includes Python.

Note that while it's possible to use a Debian-based distro as the base image, it would require manual installation of Python within the image. A python image based on alpine is smaller size compared to other distributions, therefore contributing to a more lightweight and efficient container.

`RUN apk update`
This updates the package index on the Alpine system using the apk package manager.

`RUN apk add -y python-pip; pip install --no-cache-dir --upgrade pip`
This installs python-pip using apk and then upgrades pip to the latest version. The -y flag is used to automatically confirm the installation.

`WORKDIR /hello-flask`
Sets the working directory inside the container to /hello-flask.

`COPY requirements.txt .`
Copies the requirements.txt file from the build context (where the Dockerfile is located) into the /hello-flask directory in the container.

`RUN pip install -r requirements.txt`
Installs the Python packages listed in requirements.txt using pip. This is typically done in a separate step to take advantage of Docker layer caching.

`COPY /app .`
Copies the contents of the /app directory from the build context into the current working directory `/hello-flask` in the container.

`ENTRYPOINT [ "python" ]`
Specifies the default executable when the container starts. In this case, it sets the default executable to Python.

`CMD [ "app.py" ]`
Provides default arguments for the ENTRYPOINT. When the container is run, it will execute python app.py by default.

## Building your docker image 🔨

The [docker build](https://docs.docker.com/engine/reference/commandline/build/) command builds Docker images from a Dockerfile and a context.

`docker image build -t myrepo/hello-flask .`

This will build an image with the repository name as `myrepo/hello-flask` and a tag of latest is applied by default.
The `-t` option allows you to tag your Docker image with a specific name and optionally a tag.
Tags are typically appended to the image name by specifying them following a colon.

The dot at the end of the command specifies the build context. The build context is the path to the directory containing the Dockerfile and any files needed for the build process. In this case, it's set to the current directory.

## Running a container from your image 📦

The [docker container run](https://docs.docker.com/engine/reference/commandline/run/) command runs a command in a new container, pulling the image if needed and starting the container.

`docker container run --rm -p 5000:5000  myrepo/hello-flask`

replace `myrepo` with your docker hub username or if you don't intend to upload to image just use name of the image.e.g

`docker container run --rm -p 5000:5000 hello-flask`

`--rm`
This flag removes the container automatically after it stops running. It helps to keep the system clean by avoiding the accumulation of unused containers.

`-p 5000:5000`
This flag maps the port 5000 from the host to the port 5000 on the container. It allows communication between the host machine and the running container through this specified port.

`myrepo/hello-flask`
This is the name of the Docker image used to create the container. It's assumed that you have an image named hello-flask in the myrepo repository.

another useful OPTION to add to the docker container run command is:
`--detach` or `-d` this runs the container in the background and prints its ID.

You should be able to view a webpage by visiting http://localhost:5000

## Pushing your image to docker hub 🚀

Before trying to push your image make sure to login in the docker CLI using `docker login` with your docker hub credentials.

Use [docker image push](https://docs.docker.com/engine/reference/commandline/push/) to upload your images to the Docker Hub registry or to a self-hosted one.

`docker image push myrepo/hello-flask`

### Other Commands

`docker image tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]` -- create an image tag

`docker image ls` -- lists images in your local machine.

`docker container ls` or `docker ps [OPTIONS]` -- lists containers.

`docker container stop [container id | container name]` -- stop a running container.

`docker container rm [container id | container name]` -- remove container.

`docker image prune [OPTIONS]` -- remove unused images.

[More Commands - Documentation](https://docs.docker.com/engine/reference/commandline/cli/)

## Images Vs Containers

An image represents the application we intend to execute, while a container is an instance of that image running as a process.

Think of a Docker image as a recipe or a blueprint for creating a specific environment, and a Docker container as a ready-made dish prepared using the recipe (image).
