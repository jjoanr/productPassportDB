# Operations on users:
## USEFUL FOR THE APP
- **CREATE** - Create a new user account:  
    - Endpoint: POST http://localhost:3000/users  

    - *req.body:* (username, password, email)

- **VALIDATE CREDENTIALS** - Validate password for a certain user:  
    - Endpoint: POST http://localhost:3000/users/validate  

    - *req.body:* (username, password)

- **GET BY USERNAME** - Get user account by username:  
    - Endpoint: GET http://localhost:3000/users/username

- **UPDATE BY USERNAME** - Update information about a user account:  
    - Endpoint: PUT http://localhost:3000/users/username 

    - *req.body:* (newUsername, password, email)

- **DELETE** - Delete user account:  
    - Endpoint: DELETE http://localhost:3000/users/username

## NOT USEFUL
  - **GET ALL** - Obtain all user accounts: 
      - Endpoint: GET http://localhost:3000/users 