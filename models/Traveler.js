const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Traveler extends Model {}

Traveler.init(
  
);

module.exports = Traveler;