const {FlightRepository} = require('../repositories');

const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    throw error;
  }
}

module.exports = {
    createFlight
}