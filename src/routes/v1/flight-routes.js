const express = require("express");

const router = express.Router();

const { flightController } = require("../../controllers/index");
const { flightMiddleware } = require("../../middlewares");

// POST : /api/v1/flights
router.post(
  "/",
  flightMiddleware.validateCreateFlightRequest,
  flightController.createFlight
);

// GET : /api/v1/flights?trips=BOM-DEL
router.get("/", flightController.getAllFlights);

// GET : /api/v1/flights/5
router.get("/:id", flightController.getFlightById);

//patch : /api/v1/flights/:id
router.patch(
  "/:id/seats",
  flightMiddleware.validateUpdateSeatsRequest,
  flightController.updateRemainingSeats
);

module.exports = router;
