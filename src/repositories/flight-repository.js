const CrudRepository = require("./crud-repository");

const { flight, Airplane, Airport, city } = require("../models");
const { Sequelize } = require("sequelize");
const db = require("../models");
const { addRowLockOnflight } = require("./queries");

class FlightRepository extends CrudRepository {
  constructor() {
    super(flight);
  }

  async getAllFlights(filter, sort) {
    try {
      const response = flight.findAll({
        where: filter,
        order: sort,
        include: [
          {
            model: Airplane,
            required: true,
            as: "airplaneDetail",
          },
          {
            model: Airport,
            required: true,
            as: "departureAirport",
            on: {
              // Here we apply condition on departure airport code means if departure airport code is equal to airport code then it will return only one result
              col1: Sequelize.where(
                Sequelize.col("flight.departureAirportId"),
                "=",
                Sequelize.col("departureAirport.code")
              ),
            },

            include: {
              model: city,
              required: true,
            },
          },
          {
            model: Airport,
            required: true,
            as: "arrivalAirport",
            on: {
              // Here we apply condition on arrival airport code means if arrival airport code is equal to airport code then it will return only one result
              col1: Sequelize.where(
                Sequelize.col("flight.arrivalAirportId"),
                "=",
                Sequelize.col("arrivalAirport.code")
              ),
            },

            include: {
              model: city,
              required: true,
            },
          },
        ],
      });

      // Return the result
      return response;
    } catch (error) {
      console.error("Error in fetching flights:", error.message || error);
      throw error;
    }
  }

  // custom function for update seats
  async updateSeats(flightId, seats, dec = true) {
    const transaction = await db.sequelize.transaction();
    try {
      await db.sequelize.query(addRowLockOnflight(flightId));
      const flightSeatsUpdate = await flight.findByPk(flightId);
      if (dec) {
        await flightSeatsUpdate.decrement(
          "totalSeats",
          { by: seats },
          { transaction: transaction }
        );
      } else {
        await flightSeatsUpdate.increment(
          "totalSeats",
          { by: seats },
          { transaction: transaction }
        );
      }
      await transaction.commit();
    } catch (error) {
      console.error("Error in updating seats:", error.message || error);
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = FlightRepository;
