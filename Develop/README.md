# Back-End-Commerical-Transaction

## Video Links
The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:
https://drive.google.com/file/d/13WC1M7mF4ir5e1ktuChLK87HZ-bVlSfL/view

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:
https://drive.google.com/file/d/1z0r2CEwKVHO3SVn_AkVsCtE-LEVSXUDc/view

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:
https://drive.google.com/file/d/1wTUT8uNTixjGe5IkvXi6iSBzqoKci1G9/view

The following animation shows the application's POST, PUT, and DELETE routes for product being tested in Insomnia:
https://drive.google.com/file/d/1n0MFtLuho9rsPoZxnLTHqmM-EQ4ogClu/view

The following animation shows the application's POST, PUT, and DELETE routes for tag being tested in Insomnia:
https://drive.google.com/file/d/1kl_0KQKRy3OUmizDzkiDt7gSYBqJLG93/view


## Technologies Used
- JS - Used to create functions needed to communicate with SQL
- SQL - To create databases and tables
- Node JS - Used to open on the server 
- Express JS - Used to route API
- Insomina - Application to see a visual representation of objects to GET,POST,PUT,DELETE

## To Do
A functional Express.js API Add my database name, MySQL username, and MySQL password to an environment variable file
Connect to a database using Sequelize enter schema and seed commands
Database is created and is seeded with test data enter the command to invoke the application
Server is started and the Sequelize models are synced to the MySQL database open API GET routes in Insomnia for categories, products, or tags
Data for each of these routes is displayed in a formatted JSON test API POST, PUT, and DELETE routes in Insomnia
Successfully create, update, and delete data in my database


## Summary 
This project was to build the back end for an e-commerce site. To begin this task I had to spend some time reading different articles such as how to use Express JS with MySQL to create a database and seeds. After reviewing the material for sequelize and how to create models i was going to need to API routes to call on my models. I then needed to use node JS to make the server live. I used Insomina to get a visual representation of my models, this would also allow me to GET, POST, PUT, DELETE. I felt the most challenging task to overcome for this task was understanding how to have mySQL seeds and api routes interacted with a live server. Something that I took away from this was how you can use sequelize to create models and update them in JS. I feel at the end of this I have achieved a better understanding of my sequelize and models. Below is my code for the function that excutes the importing of models and sequelize methods.

## Code Snippet
JS
```js
// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


```
