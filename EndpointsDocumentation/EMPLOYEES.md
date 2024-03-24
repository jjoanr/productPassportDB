# Operations on employees:
## USEFUL FOR THE APP 
- **VALIDATE CREDENTIALS** - Validate password for a certain employee: 
   
    - Endpoint: POST http://localhost:3000/employee/validate  

    - *req.body:* employee_code, password, and company_code to validate.  

    - To obtain company_id, use the company_code (alphanumeric code):  
      - Endpoint: GET http://localhost:3000/companies/company_code  
    Then, retrieve company_id from the response JSON.

- **GET BY EMPLOYEE CODE** - Get employee account by employee_code:  

     - Endpoint: GET http://localhost:3000/employees/employee_code

## NOT USEFUL        
 - **GET ALL** - Obtain all employee accounts: 
      - Endpoint: GET http://localhost:3000/employees

- **UPDATE BY EMPLOYEE CODE** - Update information about an employee:  

    - Endpoint: PUT http://localhost:3000/employees/employee_code  

    - *req.body:* All the information necessary for the update (password)

- **DELETE** - Delete employee account:  
    - Endpoint: DELETE http://localhost:3000/employees/employee_code