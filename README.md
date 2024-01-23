# Ecommerce API

## Setup
1. Clone the repository.
2. Create a MongoDB database and obtain the connection string.
3. Create a .env file in the root directory with the following content:
4. Install dependencies: `npm install`
5. Start the server: `npm start`

## API Endpoints
- Add Products: `POST/create`
- Add product: `http://localhost:5000/products/create`
- Request body:
 ```
 {
   "name": "laptop",
   "quantity": 10
 }
 ```
- List products: `GET /products`
- Delete product: `DELETE /products/:id`

- Update product quantity: `POST /products/:id/update_quantity/?number=10`

## Example
- Add product:
  ```
  curl -X POST -H
  "Content-Type: application/json" -d
  '{"name": "laptop", "quantity": 10}'
  http://localhost:3000/products/create
  ```
- List products:
  ```
  curl http://localhost:5000/products
  ```
- Delete product:
  ```
  curl -X DELETE http://localhost:5000/products/1
  ```
- Update product quantity:
  ```
  curl -X POST http://localhost:5000/products/1/update_quantity/?number=5
  ```
```

This basic implementation should help you get started with an Ecommerce API using Node.js and MongoDB.
