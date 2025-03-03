const { StatusCodes } = require("http-status-codes");
const { error } = require("winston");

function validateCreateAirplaneRequest(req, res, next) {
  if (!req.body.modelNumber || !req.body.capacity) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `something went wrong while creating airplane`,
      data: {},
      error: {
        explaination:
          "ModelNumber or Capacity data are not found in the incoming request, please try to give valid data",
      },
    });
  }
  next();
}

function validateUpdateAirplaneRequest(req, res, next) {
  if (!req.body.modelNumber && !req.body.capacity) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `something went wrong while updating airplane`,
      data: {},
      error: {
        explaination:
          "Please provide at least one of the fields of airplane to update",
      },
    });
  }
  next();
}
module.exports = {
  validateCreateAirplaneRequest,
  validateUpdateAirplaneRequest
};
