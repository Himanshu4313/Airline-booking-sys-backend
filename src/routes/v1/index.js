const express = require("express");

const information = require("../../controllers/info.controllers.js");
const router = express.Router();

const airplaneRoutes = require('./airplane-routes.js');
const cityRoutes = require('./city-routes.js');

console.log("Enter v1 index file");

router.use('/airplanes',airplaneRoutes);

router.use('/cities',cityRoutes)

router.get("/info", information.info);

module.exports = router;
