const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => sequelize.define('Category', {
  
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
  
});
