# Operations on movements:
## USEFUL FOR THE APP
- **CREATE** - Create a movement:  
    - Endpoint: POST http://localhost:3000/movements  

    - *req.body:* (movement_code, product_id, employee_id, movement_type, movement_date, description)  

    - To obtain product_id, use the product serial_number (alphanumeric code):   
      - Endpoint: GET http://localhost:3000/products/serial_number  
    Then, retrieve product_id from the response JSON.
    - To obtain employee_id, use the employee_code (alphanumeric code):   
      - Endpoint: GET http://localhost:3000/employees/employee_code  
    Then, retrieve employee_id from the response JSON.

- **GET BY PRODUCT ID** - Get movement by product_id:
    - Endpoint: GET http://localhost:3000/movements/product/product_id  

   - To obtain product_id, use the product serial_number (alphanumeric code):   
      - Endpoint: GET http://localhost:3000/products/serial_number  
    Then, retrieve product_id from the response JSON.

## NOT USEFUL

  - **GET ALL** - Obtain all movements: 
      - Endpoint: GET http://localhost:3000/movements 
    
  - **GET BY MOVEMENT CODE** - Get movement by movement_code:
      - Endpoint: GET http://localhost:3000/movements/movement_code

  - **DELETE** - Delete movement:
      - Endpoint: DELETE http://localhost:3000/movements/movement_code