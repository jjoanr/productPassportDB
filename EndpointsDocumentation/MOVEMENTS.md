**Operations on movements:**

  - **GET ALL** - Obtain all movements: 
      - Endpoint: GET http://localhost:3000/movements 

  - **CREATE** - Create a movement: 
      - Endpoint: POST http://localhost:3000/movements 
      - *req.body:* All the information necessary for the creation (movement_id, product_id, employee_id, movement_type, movement_date, description)
      -  Example req.body JSON:  
      {  
      "movement_id":"test",  
      "product_id":"test",  
      "employee_id":"test",  
      "movement_type":"test",
      "movement_date":"test",
      "description":"test",
      }  
  - **GET BY MOVEMENT_ID** - Get movement by movement_id:
      - Endpoint: GET http://localhost:3000/movements/movement_id

  - **DELETE** - Delete movement:
      - Endpoint: DELETE http://localhost:3000/movements/movement_id
