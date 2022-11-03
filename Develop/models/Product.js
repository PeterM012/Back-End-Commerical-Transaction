// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  // define columns
  {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: false,
      autoIncrement: true,
      allowNull: true
    },
    product_name:{
      type:DataTypes.STRING,
      allowNull: false
    },
    price:{
      type:DataTypes.DECIMAL,
      allowNull: false,
      Validate: {
        isDecimal: true
      }  
    },
    stock:{
      type:DataTypes.DECIMAL,
      allowNull: false,
      Validate: {
        isNumeric: true
    }
  },
    category_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
