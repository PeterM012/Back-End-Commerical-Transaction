const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Create a new Sequelize model for Categories
class Category extends Model {}

Category.init(
  // define columns
// set up fields and rules for Category model
  {
    id:{
     type:DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true,
     allowNull: false
    },
    category_name:{
      type:DataTypes.STRING,
      allowNull: false
    }

  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    freezeTableName: true,
    //Everything returned in snake_case
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
