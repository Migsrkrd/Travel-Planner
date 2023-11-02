// import models
const Trip = require('./Trip');
const Traveler = require('./Traveler');
const Location = require('./Location');

Traveler.hasMany(Trip,{
    foreignKey: '',
})

Trip.belongsTo(Traveler, {
    foreignKey: '',
    onDelete: 'CASCADE',
})

Location.belongsToMany(Trip, {through: Traveler});


module.exports = {
 Location,
 Traveler,
 Trip,
};
