**Operations on products:**

  - **GET ALL** - Obtain all products: 
      - Endpoint: GET http://localhost:3000/products 

  - **CREATE** - Create a product: 
      - Endpoint: POST http://localhost:3000/products 
      - *req.body:* All the information necessary for the creation (product_name, description, manufacturer_id, production_date, status)
      -  Example req.body JSON:  
      {  
      "product_id":"123",  
      "product_name":"test",  
      "description":"test",  
      "manufacturer_id":"1002",
      "production_date":"2024-01-01",
      "status":"in_stock"
      }  
  - **GET BY PRODUCT_ID** - Get product by product_id:
      - Endpoint: GET http://localhost:3000/products/product_id

  - **UPDATE BY PRODUCT_ID** - Update information about a product identified by product_id:
      - Endpoint: PUT http://localhost:3000/products/product_id 
      - *req.body:* All the information necessary for the update (product_name, description,status)
      - Example req.body JSON:  
      {  
      "product_name":"pc123",  
      "description":"test",  
      "status":"in_use"  
      }  

  - **DELETE** - Delete product:
      - Endpoint: DELETE http://localhost:3000/products/product_id
