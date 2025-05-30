# Inventory Management Application

## Overview
This is a complex inventory management application built using Node.js (Express) without any database. All data is stored in memory using arrays and objects.

## Features
- User authentication and authorization using JWT.
- Role-based access control (admin, staff, viewer).
- Inventory items module (create, read, update, delete).
- Categories module for classifying items.
- Vendors/suppliers module.
- Transaction module to handle incoming and outgoing inventory, updating stock accordingly.
- History log module to record stock changes.
- Request input validation via middleware.
- Global error handling.
- API documentation using Swagger (OpenAPI).
- A complete Postman Collection for testing all endpoints.

## Installation Instructions
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

## Running the Application
1. Start the application with `npm start`.
2. The application will run on `http://localhost:3000`.

## Accessing the Swagger Documentation
- Open your browser and navigate to `http://localhost:3000/api-docs` to view the API documentation.

## Using the Postman Collection for Testing
1. Open Postman.
2. Click on "Import" and select the `Postman_Collection.json` file.
3. Follow the prompts to complete the import.
4. Use the provided endpoints to test the application.

## API Endpoints Overview
- **Users**
  - `POST /api/users/register`: Register a new user.
  - `POST /api/users/login`: Log in a user.

- **Inventory**
  - `GET /api/inventory`: Get all inventory items.
  - `GET /api/inventory/:id`: Get an inventory item by ID.
  - `POST /api/inventory`: Create a new inventory item.
  - `PUT /api/inventory/:id`: Update an inventory item by ID.
  - `DELETE /api/inventory/:id`: Delete an inventory item by ID.

- **Categories**
  - `GET /api/categories`: Get all categories.
  - `POST /api/categories`: Create a new category.

- **Vendors**
  - `GET /api/vendors`: Get all vendors.
  - `POST /api/vendors`: Create a new vendor.

- **Transactions**
  - `GET /api/transactions`: Get all transactions.
  - `POST /api/transactions`: Create a new transaction.

- **History Logs**
  - `GET /api/history`: Get all history logs.
  - `POST /api/history`: Log a change in inventory.

## Creating a Token
1. When a user logs in, validate their credentials.
2. If valid, use the `jsonwebtoken` library to create a token.
3. The secret key used to sign the token should be stored in a `.env` file.

### Example of Setting the Secret Key
- Create a `.env` file in the root of your project and add the following line:
```
SECRET_KEY=your_secret_key_here
```
- Install the `dotenv` package and load it in your `server.js`:
```javascript
require('dotenv').config();
```

## Adjusting the Workspace for `.env` Usage
1. Ensure that the `dotenv` package is installed in your project.
2. Load the environment variables at the top of your `server.js` file:
```javascript
require('dotenv').config();
```

## Using the Secret Key in Your Code
- Replace any hardcoded secret key in your code with `process.env.SECRET_KEY`. For example:
```javascript
jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
});
