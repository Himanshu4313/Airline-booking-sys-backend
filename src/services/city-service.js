const {CitiesRepository}  = require('../repositories');

const citiesRepository = new CitiesRepository();


async function createCities(data){
    try {
        const cities = await citiesRepository.create(data);
        return cities;
    } catch (error) {
        throw error;
    }
}

async function updateCities(id,data){
       try {
           const cities = await citiesRepository.update(id,data);
           return cities;
       } catch (error) {
         throw error;
       }
}

async function deleteCities(id){
    try {
           const cities = await citiesRepository.destroy(id);
           return cities;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createCities,
    updateCities,
    deleteCities
}
