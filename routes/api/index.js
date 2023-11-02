const router = require('express').Router();
const locationRoutes = require('./Location.routes');
const travelerRoutes = require('./Traveler.Route');
const tripRoutes = require('./Trips.Routes');

router.use('/locations', locationRoutes);
router.use('/travelers', travelerRoutes);
router.use('/trips', tripRoutes);

module.exports = router;