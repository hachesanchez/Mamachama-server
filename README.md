# El-Megafono-server

## Auth Routes
Base URL `/api/auth`

| HTTP Method   | URI Path       | Description             |
| ------------- | -------------- | ----------------------- |
| POST          | `/signup`      | Signup user             |
| POST          | `/login`       | Login user              |
| GET           | `/verify`      | Verify Auth Token       |

## Project Routes
Base URL `/api/project`

| HTTP Method   | URI Path                        | Description             | Middleware            |
| ------------- | ------------------------------- | ----------------------- | --------------------- |
| GET           | `/getAllProjects`               | Get all Projects        | None                  |
| GET           | `/getOneProject/:id`            | Get one Project by ID   | None                  |
| POST          | `/saveProject`                  | Save new Project        | isAuthenticated       |
| PUT           | `/edit/:id`                     | Edit Project by ID      | isAuthenticated       |
| DELETE        | `/delete/:id`                   | Delete Project by ID    | isAuthenticated       |

## Collaborator's Routes
Base URL `/api/collaborators`

| HTTP Method   | URI Path                   | Description                      | Middleware            |
| ------------- | -------------------------- | -------------------------------- | --------------------- |
| GET           | `/getAllCollaborators`     | Get all Collaborators            | None                  |
| GET           | `/getOneCollaborator/:id`  | Get one collaborator by ID       | None                  |
| POST          | `/saveCollaborator`        | Save new collaborator            | isAuthenticated       |
| PUT           | `/edit/:id`                | Edit collaborator by ID          | isAuthenticated       |
| DELETE        | `/delete/:id`              | Delete collaborator by ID        | isAuthenticated       |

## Upload Routes
Base URL `/api/upload`

| HTTP Method   | URI Path       | Description                 | Middleware            |
| ------------- | -------------- | --------------------------- | --------------------- |
| POST          | `/image`       | Upload image to Cloudinary  | isAuthenticated       |

## Users Routes
Base URL `/api/users`

| HTTP Method   | URI Path                        | Description             | Middleware             |
| ------------- | ------------------------------- | ----------------------- | ---------------------- |
| GET           | `/getAllUsers`                  | Get all users           | isAuthenticated        |
| GET           | `/getOneUser/:id`               | Get one user by ID      | isAuthenticated        |
| PUT           | `/edit/:id`                     | Edit user profile       | isAuthenticated        |
| DELETE        | `/delete/:id`                   | Delete user profile     | isAuthenticated        |

## Blog Routes
Base URL `/api/blog`

| HTTP Method   | URI Path                   | Description                      | Middleware            |
| ------------- | -------------------------- | -------------------------------- | --------------------- |
| GET           | `/getAllPosts`             | Get all Posts                    | None                  |
| GET           | `/getOnePost/:id`          | Get one post by ID               | None                  |
| POST          | `/savePost`                | Save new post                    | isAuthenticated       |
| PUT           | `/edit/:id`                | Edit post by ID                  | isAuthenticated       |
| DELETE        | `/delete/:id`              | Delete post by ID                | isAuthenticated       |


## Test Routes
Base URL `/api/test`

| HTTP Method   | URI Path       | Description             | Middleware             |
| ------------- | -------------- | ----------------------- | ---------------------- |
| GET           | `/`            | Test endpoint           | None                   |
