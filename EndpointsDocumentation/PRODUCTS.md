# Operations on products:
## USEFUL FOR THE APP
- **GET BY SERIAL NUMBER** - Get product by serial_number:  
    - Endpoint: GET http://localhost:3000/products/serial_number  

- **CREATE** - Create a product: 
    - Endpoint: POST http://localhost:3000/products  

    - *req.body:* (serial_number, product_name, description, manufacturer_id, production_date, status)

- **UPDATE BY SERIAL NUMBER** - Update information about a product:  
    - Endpoint: PUT http://localhost:3000/products/serial_number  

    - *req.body:* (product_name, description, status)


## NOT USEFUL
- **GET ALL** - Obtain all products: 
    - Endpoint: GET http://localhost:3000/products 

- **DELETE** - Delete product:  
    - Endpoint: DELETE http://localhost:3000/products/serialnumber