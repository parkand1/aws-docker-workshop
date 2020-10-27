# Build you own images with Buildkit and deploy to ECS

1. Clone application repo
    - `git clone <demo-repo>`
2. Application overview
    - React.js frontend
    - Node.js backend
    - MongoDB
3. Build using BuildKit
    1. Tell docker-compse to use BuildKit
        - `export COMPOSE_DOCKER_CLI_BUILD=1`
    2. Tell docker engine to use BuildKit
        - `export DOCKER_BUILDKIT=1`
    3. cd /path/to/code
    4. `docker context use default`
    5. `docker-compose build`
    6. `docker images`
4. Push images to hub
    - `docker-compose push`
5. Run locally
    - `docker context use default`
    - `docker-compose up `
6. Deploy to ecs
    - `docker context use ecs`
    - `docker compose up`
7. Test app
    1. `docker context ps`
        - Grab url and open app in browser
    2. Add a record
        - `{ “name”: “Shiny Widget” }`
8. View logs
    - `docker context logs`
9. View entities in aws console
    - https://us-east-2.console.aws.amazon.com/
    - Navigate to ECS
        - Explore Cluster
10. Scale Cluster
```
deploy:
      replicas: 2
      update_config:
        parallelism: 2
        delay: 10s
        order: stop-first
```
11. Verify that we now have two backend services 
    - Open AWS console
12. Test app
    - `docker context ps`
        - Grab url and open app in browser
    - Add a couple of records
        `{ “name”: “01 Shiny Widget” }
        { “name”: “02 Shiny Widget” }
        { “name”: “03 Shiny Widget” }`
    - Observe that saved widgets get saved to different servers
