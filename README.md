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
