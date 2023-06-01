# E-commerce Back End

## Description
This project is the back-end for an e-commerce website. It provides a functional Express.js API that interacts with a MySQL database using Sequelize. The API allows users to perform various operations related to categories, products, and tags, such as retrieving data, creating new records, updating existing records, and deleting records.

The purpose of this project is to demonstrate the fundamental architecture of an e-commerce platform and showcase the implementation of the latest technologies for back-end development.

## Installation
To install and run the project locally, follow these steps:

Clone the repository: git clone <repository-url>
Navigate to the project directory: cd e-commerce-back-end
Install the dependencies: npm install
Set up the database connection by creating an environment variable file (.env) and adding the following details:
```md
DB_NAME=<your-database-name>
DB_USER=<your-database-username>
DB_PASSWORD=<your-database-password>
```
Run the database migrations and seed the data: npm run seed
Start the application: node server.js

## Usage
Once the project is set up and running, you can use Insomnia to interact with the API. The following routes are available:

* `GET /api/categories`: Retrieves all categories.
* `GET /api/products`: Retrieves all products.
* `GET /api/tags`: Retrieves all tags.
* `POST /api/categories`: Creates a new category.
* `POST /api/products`: Creates a new product.
* `POST /api/tags`: Creates a new tag.
* `PUT /api/categories/:id`: Updates a category with the specified ID.
* `PUT /api/products/:id`: Updates a product with the specified ID.
* `PUT /api/tags/:id`: Updates a tag with the specified ID.
* `DELETE /api/categories/:id`: Deletes a category with the specified ID.
* `DELETE /api/products/:id`: Deletes a product with the specified ID.
* `DELETE /api/tags/:id`: Deletes a tag with the specified ID.

## Walkthrough Video
Please find the walkthrough video demonstrating the application's functionality and meeting all the acceptance criteria here:

<video>
  <source src="https://drive.google.com/file/d/1KhRtflpfPNiKH-TcLbhac5DChiQiJ548/view" type="video/mp4">
  <!-- Add additional <source> tags for other supported video formats -->
  Your browser does not support the video tag.
</video>


## License
This project is licensed under the MIT license.
