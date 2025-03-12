const { StatusCodes } = require("http-status-codes");

// Here we write code for createCityValidation
function createCityValidation(req, res, next) {
  if (!req.body.name) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: `something went wrong while creating cities`,
      data: {},
      error: {
        explaination:
          "city name is not found in the incoming request",
      },
    });
  }
  next();
}
// Here we write code for updateCityValidation
function updateCityValidation(req, res, next) {
    if (!req.body.name) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: `something went wrong while updating cities`,
        data: {},
        error: {
          explaination:
            "city name is not found in the incoming request",
        },
      });
    }
    next();
  }

module.exports = {
  createCityValidation,
  updateCityValidation
};
