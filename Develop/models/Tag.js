const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

  // Create a new Sequelize model for Tags
class Tag extends Model {}

// set up fields and rules for Tag model
Tag.init(
  // define columns
  {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
     },
     tag_name:{
      type:DataTypes.STRING,
     },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
