const { StatusCodes } = require("http-status-codes");
const { error } = require("winston");

function validateCreateAirportRequest(req, res, next) {
  if (!req.body.name) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `something went wrong while creating airport`,
      data: {},
      error: {
        explaination:
          "Name are not found in the incoming request, please try to give valid data",
      },
    });
  }
  
  if (!req.body.code) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `something went wrong while creating airport`,
      data: {},
      error: {
        explaination:
          "code are not found in the incoming request, please try to give valid data",
      },
    });
  }

  if (!req.body.cityId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `something went wrong while creating airport`,
      data: {},
      error: {
        explaination:
          "cityId are not found in the incoming request, please try to give valid data",
      },
    });
  }
  next();
}
module.exports ={
    validateCreateAirportRequest
}