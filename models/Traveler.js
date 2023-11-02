const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Traveler extends Model {}

Traveler.init(
   {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlphanumeric: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Traveler',
  }
);

module.exports = Traveler;