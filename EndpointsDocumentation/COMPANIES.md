# Operations on companies:
## USEFUL FOR THE APP
- **GET BY COMPANY CODE** - Get company by company_code:  

    - Endpoint: GET http://localhost:3000/companies/company_code

## NOT USEFUL

  - **GET ALL** - Obtain all companies: 
      - Endpoint: GET http://localhost:3000/companies 

  - **CREATE** - Create a company: 
      - Endpoint: POST http://localhost:3000/companies

      - *req.body:* (company_code, company_name, address, phone_number, email)

  - **UPDATE BY COMPANY CODE** - Update information about a company:  
      - Endpoint: PUT http://localhost:3000/companies/company_code 

      - *req.body:* (company_name, address, phone_number, email)
     
  - **DELETE** - Delete company:
      - Endpoint: DELETE http://localhost:3000/companies/company_code