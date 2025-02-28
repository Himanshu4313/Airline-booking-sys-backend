const { error } = require("winston");
const { AirplaneService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");
/**
 *
 * post : /airplane
 */
async function createAirplane(req, res) {
  try {
    console.log("Enter controller file f");

    const { modelNumber, capacity } = req.body;
    
    console.log(modelNumber , capacity);
    
    const airplane = await AirplaneService.createAirplane({
      modelNumber,
      capacity
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Airplane created successfully",
      data: airplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while creating airplane",
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createAirplane,
};
