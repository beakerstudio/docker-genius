# Docker Genius

Effortless development environments with pure Docker.

Open-source release of [Docker Genius](https://dockergenius.com).

## Dev Environment

This development environment was generated with [Docker Genius](https://dockergenius.com) and requires [Docker](https://www.docker.com) to run.

Start everything from the command line:

```
docker-compose up
```

The command `npm run dev` is run on `docker-compose up`.

Install dependencies with npm:

```
docker-compose run --rm frontend npm install
```

Build and export static site to `out/` directory:

```
docker-compose run --rm frontend npm run build
```
