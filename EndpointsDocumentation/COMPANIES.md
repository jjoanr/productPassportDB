**Operations on companies:**

  - **GET ALL** - Obtain all companies: 
      - Endpoint: GET http://localhost:3000/companies 

  - **CREATE** - Create a company: 
      - Endpoint: POST http://localhost:3000/companies 
      - *req.body:* All the information necessary for the creation (company_id, company_name, address, phone_number, email)
      -  Example req.body JSON:  
      {  
      "company_id":"test",  
      "company_name":"test",  
      "address":"test",  
      "phone_number":"test",
      "email":"test"
      }  
  - **GET BY COMPANY_ID** - Get company by company_id:
      - Endpoint: GET http://localhost:3000/companies/company_id

  - **UPDATE BY COMPANY_ID** - Update information about a company identified by company_id:
      - Endpoint: PUT http://localhost:3000/companies/company_id 
      - *req.body:* All the information necessary for the update (address, phone_number, email)
      - Example req.body JSON:  
      {  
      "address":"test",  
      "phone_number":"test",  
      "email":"test"  
      }  

  - **DELETE** - Delete company:
      - Endpoint: DELETE http://localhost:3000/companies/company_id