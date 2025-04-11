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

## Project Structure
- controllers/
- routes/
- middlewares/
- services/

## Instructions

### How to Run the App
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Start the application with `npm start`.

### How to Access the Swagger Docs
- Open your browser and navigate to `http://localhost:3000/api-docs` to view the API documentation.

### How to Import the Postman Collection
1. Open Postman.
2. Click on "Import" and select the Postman collection file.
3. Follow the prompts to complete the import.
