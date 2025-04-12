const { StatusCodes } = require("http-status-codes");
const { error } = require("winston");

function validateCreateFlightRequest(req, res, next) {
  if (!req.body.flightNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `something went wrong while creating flight`,
      data: {},
      error: {
        explaination: "flightNumber are not found in the incoming request.",
      },
    });
  }

  if (!req.body.airplaneId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `something went wrong while creating flight`,
      data: {},
      error: {
        explaination: "airplaneId are not found in the incoming request.",
      },
    });
  }

  if (!req.body.departureAirportId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `something went wrong while creating flight`,
      data: {},
      error: {
        explaination:
          "departureAirportId are not found in the incoming request.",
      },
    });
  }
  if (!req.body.arrivalAirportId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `something went wrong while creating flight`,
      data: {},
      error: {
        explaination: "arrivalAirportId are not found in the incoming request.",
      },
    });
  }
  if (!req.body.arrivalTime) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `something went wrong while creating flight`,
      data: {},
      error: {
        explaination: "arrivalTime are not found in the incoming request.",
      },
    });
  }
  if (!req.body.departureTime) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `something went wrong while creating flight`,
      data: {},
      error: {
        explaination: "departureTime are not found in the incoming request.",
      },
    });
  }
  if (!req.body.price) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `something went wrong while creating flight`,
      data: {},
      error: {
        explaination: "price are not found in the incoming request.",
      },
    });
  }
  //   if (!req.body.boardingGate) {
  //     return res.status(StatusCodes.BAD_REQUEST).json({
  //       success: false,
  //       message: `something went wrong while creating flight`,
  //       data: {},
  //       error: {
  //         explaination:
  //           "boardingGate are not found in the incoming request.",
  //       },
  //     });
  //   }
  if (!req.body.totalSeats) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `something went wrong while creating flight`,
      data: {},
      error: {
        explaination: "totalSeats are not found in the incoming request.",
      },
    });
  }
  next();
}

function validateUpdateSeatsRequest(req, res, next) {
  if (!req.body.seats) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `something went wrong while updating the seats of the flight`,
      data: {},
      error: {
        explaination: "seats are not found in the incoming request.",
      },
    });
  }
  next();
}
module.exports = {
  validateCreateFlightRequest,
  validateUpdateSeatsRequest,
};
