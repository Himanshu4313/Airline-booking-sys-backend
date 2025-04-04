const express = require("express");

const router = express.Router();

const { flightController } = require("../../controllers/index");
const { flightMiddleware } = require("../../middlewares");

// POST : /api/v1/flights
router.post("/",
    flightMiddleware.validateCreateFlightRequest,
    flightController.createFlight);

// GET : /api/v1/flights?trips=BOM-DEL    
router.get('/', flightController.getAllFlights);


module.exports = router;