## Docker Compose Setup
docker-compose up --build

## Database API routes:

*All tables have the same operations: GET ALL, CREATE, GET BY ID, UPDATE BY ID, DELETE*

Example for user accounts:

  - **GET ALL** - Obtain all user accounts: 
      - Endpoint: GET http://localhost:3000/users 

  - **CREATE** - Create a new user account: 
      - Endpoint: POST http://localhost:3000/users 
      - *req.body:* All the information necessary for the creation (username, password, email)

  - **GET BY ID** - Get user account by user_id:
      - Endpoint: GET http://localhost:3000/users/user_id

  - **UPDATE BY ID** - Update information about a user account identified by user_id:
      - Endpoint: PUT http://localhost:3000/users/user_id 
      - *req.body:* All the information necessary for the update (username, password, email)

  - **DELETE** - Delete user account:
      - Endpoint: DELETE http://localhost:3000/users
