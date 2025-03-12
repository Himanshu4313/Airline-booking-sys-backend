const { StatusCodes } = require("http-status-codes");
const { cityService } = require("../services");
const { error } = require("winston");

async function createCity(req, res) {
  try {
    const { name } = req.body;

    const cities = await cityService.createCities({
      name,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "City created successfully",
      data: cities,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while creating city",
      data: {},
      error: error,
    });
  }
}

async function updateCity(req, res) {
  try {
    const { id } = req.params;
    const { name } = req.body;
        
    const cities = await cityService.updateCities(id, { name });
    
    if(cities == 0){
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "City not found",
        data: {},
        error: {}
        });
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "City updated successfully",
      data: cities,
      error: {}
      });

    }
   catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while updating city",
      data: {},
      error: error,
    });
  }
}

async function deleteCity(req, res) {
  try {
    const id = req.params.id;
    const cities = await cityService.deleteCities(id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "City deleted successfully",
      data: cities,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while deleting city",
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createCity,
  updateCity,
  deleteCity,
};
