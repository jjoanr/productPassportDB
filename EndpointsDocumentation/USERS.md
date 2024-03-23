**Operations on user accounts:**

  - **GET ALL** - Obtain all user accounts: 
      - Endpoint: GET http://localhost:3000/users 

  - **CREATE** - Create a new user account: 
      - Endpoint: POST http://localhost:3000/users 
      - *req.body:* All the information necessary for the creation (username, password, email)
      -  Example req.body JSON:  
      {  
      "username":"test",  
      "password":"test",  
      "email":"test@test.com"  
      }  
  - **VALIDATE CREDENTIALS** - Validate password for a certain user:
      -Endpoint: POST http://localhost:3000/users/validate  
      - *req.body:* Username and password to validate.
      - Example req.body JSON:  
        {
        "username":"test",
        "password":"password"
        }
  - **GET BY USERNAME** - Get user account by username:
      - Endpoint: GET http://localhost:3000/users/username

  - **UPDATE BY USERNAME** - Update information about a user account identified by username:
      - Endpoint: PUT http://localhost:3000/users/username 
      - *req.body:* All the information necessary for the update (newUsername, password, email)
      - Example req.body JSON:  
      {  
      "username":"newUsername",  
      "password":"newPassword",  
      "email":"newemail@test.com"  
      }  

  - **DELETE** - Delete user account:
      - Endpoint: DELETE http://localhost:3000/users/username
