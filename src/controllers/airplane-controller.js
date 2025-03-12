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

    console.log(modelNumber, capacity);

    const airplane = await AirplaneService.createAirplane({
      modelNumber,
      capacity,
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

async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAllAirplanes();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Airplanes retrieved successfully",
      data: airplanes,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while retrieving airplanes",
      data: {},
      error: error,
    });
  }
}

async function getAirplaneById(req, res) {
  try {
    const id = req.params.id;
    const airplane = await AirplaneService.getAirplaneById(id);

    if (!airplane) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Airplane not found",
        data: {},
        error: {
          StatusCodes: StatusCodes.NOT_FOUND,
          explaination: "This airplane does not exist in the database",
        },
      });
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Airplane retrieved successfully",
      data: airplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while retrieving particular airplane",
      data: {},
      error: error,
    });
  }
}

async function updateAirplane(req, res) {
  try {
    const id = req.params.id;
    const airplaneData = req.body;
    const upadtedAirplane = await AirplaneService.updateAirplane(id, {
      airplaneData,
    });

    if (!upadtedAirplane) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Airplane not found",
        data: {},
        error: {
          StatusCodes: StatusCodes.NOT_FOUND,
          explaination:
            "This airplane does not exist in the database for updating",
        },
      });
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Airplane updated successfully",
      data: upadtedAirplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while updating particular airplane",
      data: {},
      error: error,
    });
  }
}

async function deleteAirplane(req, res) {
  try {
    const id = req.params.id;
    const deleteAirplane = await AirplaneService.deleteAirplane(id);

    if (!deleteAirplane) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Airplane not found",
        data: {},
        error: {
          StatusCodes: StatusCodes.NOT_FOUND,
          message: "Airplane not found in database for deleting",
        },
      });
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Airplane deleted successfully",
      data: deleteAirplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while deleting particular airplane",
      data: {},
      error: error,
    });
  }
}
module.exports = {
  createAirplane,
  getAirplanes,
  getAirplaneById,
  updateAirplane,
  deleteAirplane,
};
