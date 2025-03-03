const { AirplaneRepository } = require("../repositories");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    console.log("enter in service file ");
    console.log("data", data);
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    throw error;
  }
}
async function getAllAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw error;
  }
}

async function getAirplaneById(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    throw error;
  }
}

async function updateAirplane(id, data) {
  try {
    const airplane = await airplaneRepository.update(id, data);
    return airplane;
  } catch (error) {
    throw error;
  }
}

async function deleteAirplane(id) {
    try {
         const deleteAirplane =  await airplaneRepository.destroy(id);
         return deleteAirplane;
    } catch (error) {
        throw error;
    }
}
module.exports = {
  createAirplane,
  getAllAirplanes,
  getAirplaneById,
  updateAirplane,
  deleteAirplane
};
