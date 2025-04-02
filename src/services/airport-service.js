const {AirportRepository} = require('../repositories');

const airportRepository = new AirportRepository();


async function createAirport(data) {
  try {
    const airport = await airportRepository.create(data);
    return airport;
  } catch (error) {
    throw error;
  }
}
async function getAllAirports() {
  try {
    const airports = await airportRepository.getAll();
    return airports;
  } catch (error) {
    throw error;
  }
}

async function getAirportById(id) {
  try {
    const airport = await airportRepository.get(id);
    return airport;
  } catch (error) {
    throw error;
  }
}

async function updateAirport(id, data) {
  try {
    const airport = await airportRepository.update(id, data);
    return airport;
  } catch (error) {
    throw error;
  }
}

async function deleteAirport(id) {
  try {
    const deleteAirport = await airportRepository.destroy(id);
    return deleteAirport;
  } catch (error) {
    throw error;
  }
}
module.exports = {
    createAirport,
    getAllAirports,
    getAirportById,
    updateAirport,
    deleteAirport,
};


