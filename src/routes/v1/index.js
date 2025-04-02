const express = require("express");

const information = require("../../controllers/info.controllers.js");
const router = express.Router();

const airplaneRoutes = require('./airplane-routes.js');
const cityRoutes = require('./city-routes.js');
const airportRoutes = require('./airport-routes.js');

// console.log("Enter v1 index file");

router.use('/airplanes',airplaneRoutes);

router.use('/cities',cityRoutes);

router.use('/airports',airportRoutes);

router.get("/info", information.info);

module.exports = router;
