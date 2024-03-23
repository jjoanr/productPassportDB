**Operations on employee accounts:**

  - **GET ALL** - Obtain all employee accounts: 
      - Endpoint: GET http://localhost:3000/employees 

  - **CREATE** - Create a new employee account: 
      - Endpoint: POST http://localhost:3000/employees 
      - *req.body:* All the information necessary for the creation (employee_id, company_id, password)
      -  Example req.body JSON:  
      {  
      "employee_id":"A001-1000",  
      "company_id":"A001",  
      "password":"password"  
      }  
  - **VALIDATE CREDENTIALS** - Validate password for a certain employee:
      -Endpoint: POST http://localhost:3000/employee/validate  
      - *req.body:* employee_id and password to validate.
      - Example req.body JSON:  
        {
        "employee_id":"A001-1000",
        "password":"password"
        }
  - **GET BY EMPLOYEE ID** - Get employee account by employee_id:
      - Endpoint: GET http://localhost:3000/employees/employee_id

  - **UPDATE BY EMPLOYEE ID** - Update information about an employee account identified by employee_id:
      - Endpoint: PUT http://localhost:3000/employees/employee_id 
      - *req.body:* All the information necessary for the update (password)
      - Example req.body JSON:
        {
        "password":"newPassword",
        }
  - **DELETE** - Delete employee account:
      - Endpoint: DELETE http://localhost:3000/employees/employee_id
