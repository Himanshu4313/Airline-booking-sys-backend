const { error } = require("winston");
const { airportService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");
/**
 *
 * post : /airport
 */
async function createAirport(req, res) {
  try {
    const { name, code , address , cityId } = req.body;

    const airport = await airportService.createAirport({
      name,
      code,
      address,
      cityId
        });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Airport created successfully",
      data: airport,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while creating airport",
      data: {},
      error: error,
    });
  }
}
/*
* get : /airport
*/
async function getAirports(req, res) {
  try {
    const airports = await airportService.getAllAirports();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Airports retrieved successfully",
      data: airports,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while retrieving airports",
      data: {},
      error: error,
    });
  }
}
/**
 * get : /airport/:id
 */
async function getAirportById(req, res) {
  try {
    const id = req.params.id;
    const airport = await airportService.getAirportById(id);

    if (!airport) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Airport not found",
        data: {},
        error: {
          StatusCodes: StatusCodes.NOT_FOUND,
          explaination: "This airport does not exist in the database",
        },
      });
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Airport retrieved successfully",
      data: airport,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while retrieving particular airport",
      data: {},
      error: error,
    });
  }
}
/*
patch : /airport/:id
*/

async function updateAirport(req, res) {
  try {
    const id = req.params.id;
    const airportData = req.body;
    const upadtedAirport = await airportService.updateAirport(id, {
        airportData,
    });

    if (!upadtedAirport) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Airport not found",
        data: {},
        error: {
          StatusCodes: StatusCodes.NOT_FOUND,
          explaination:
            "This airport does not exist in the database for updating",
        },
      });
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Airport updated successfully",
      data: upadtedAirport,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while updating particular airport",
      data: {},
      error: error,
    });
  }
}

/**
 * delete : /airport/:id
 */
async function deleteAirport(req, res) {
  try {
    const id = req.params.id;
    const deleteAirport = await airportService.deleteAirport(id);

    if (!deleteAirport) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Airport not found",
        data: {},
        error: {
          StatusCodes: StatusCodes.NOT_FOUND,
          message: "Airport not found in database for deleting",
        },
      });
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Airport deleted successfully",
      data: deleteAirport,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while deleting particular airport",
      data: {},
      error: error,
    });
  }
}
module.exports = {
  createAirport,
  getAirports,
  getAirportById,
  updateAirport,
  deleteAirport,
};