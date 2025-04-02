const express = require("express");

const router = express.Router();

const { airportController } = require("../../controllers/index");
const { airportMiddleware } = require("../../middlewares");

// POST : /api/v1/airports
router.post("/",
    airportMiddleware.validateCreateAirportRequest,
    airportController.createAirport);
// GET : /api/v1/airports
router.get("/", airportController.getAirports);
// GET : /api/v1/airports/:id
router.get("/:id", airportController.getAirportById);
// PATCH : /api/v1/airports/:id
router.patch("/:id", airportController.updateAirport);
// DELETE : /api/v1/airports/:id
router.delete("/:id", airportController.deleteAirport);

module.exports = router;
