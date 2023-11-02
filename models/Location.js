const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Location extends Model {}

Location.init(
  {
    id: {
        type: DataTypes.INTEGER,
        notNull: true,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        notNull: true,
        isAlphanumeric: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Location',
  }
);

module.exports = Location;