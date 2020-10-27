# Deploy Using Docker ECS integration

## Docker Context
Ability to point to container runtime and deploy your apps using the docker commands you already know
docker compose up, down, ps

### Create and Manage Contexts
1. `docker context ls`
2. `docker context create ecs ecs`
    1. Select or create profile
    2. Enter Region
    3. Enter credentials
        - If you choose “No” then docker will use the profile creds
3. `docker context ls`
    - Notice the ‘*’. This indicates the current context.
4. `docker context use ecs`

### Deploy single application using ECS context
1. Create a docker compose file
    1. `touch docker-compose.yml`

        ```		
        version: "3.8"

        services:
        webserver:
        image: nginx
        ports:
            - "80:80"
        ```

2. Deploy with compose
    - `docker compose up`
3. View application and logs
    1. List containers
        - `docker compose ps`
    2. Copy container endpoint under the PORTS column
    3. View logs
        - `docker compose logs`
    4. Open your favorite browser and navigate to the container endpoint
    5. View logs in terminal
    6. Tear down ECS cluster
        1. Make sure you are using the ecs context created above
        2. `docker compose use ecs`
        3. `docker compose down`
