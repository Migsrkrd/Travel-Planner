const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

const Traveler = require('./Traveler.js')
const Location = require('./Location.js')

class Trip extends Model { }

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            notNull: true,
            autoIncrement: true,
            primaryKey: true
        },
        trip_budget: {
            type: DataTypes.DECIMAL,
            isDecimal: true,
        },
        traveler_amount: {
            type: DataTypes.INTEGER,
            isInt: true,
        },
        traveler_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Traveler,
                key: 'id'
            }
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Location,
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Trip',
      }
);

module.exports = Trip;