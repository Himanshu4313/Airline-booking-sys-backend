const CrudRepository = require("./crud-repository");

const { flight } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(flight);
  }

  async getAllFlights(filter, sort) {
    try {
      const response = flight.findAll({
        where: filter,
        order: sort
      });

      // Return the result
      return response;
    } catch (error) {
      console.error("Error in fetching flights:", error.message || error);
      throw error;
    }
  }
}

module.exports = FlightRepository;
