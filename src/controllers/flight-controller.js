const { error } = require("winston");
const { flightService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");
/**
 *
 * post : /flights
 */
async function createFlight(req, res) {
  try {
    const {
      flightNumber,
      airplaneId,
      departureAirportId,
      arrivalAirportId,
      arrivalTime,
      departureTime,
      price,
      boardingGate,
      totalSeats,
    } = req.body;

    const flight = await flightService.createFlight({
      flightNumber,
      airplaneId,
      departureAirportId,
      arrivalAirportId,
      arrivalTime,
      departureTime,
      price,
      boardingGate,
      totalSeats,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Flight created successfully",
      data: flight,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while creating flight",
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createFlight,
};
