const { Op } = require("sequelize");
const { FlightRepository } = require("../repositories");

const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    throw error;
  }
}

//filtering flight by departureAirportId and arrivalAirportId  IXR => BLR

async function getAllFlights(query) {
  let customFilter = {};
  let customOrder = [];
  const endTripsTime = " 23:59:00";
  // trips = DEL-BLR
  if (query.trips) {
    const [departureAirportId, arrivalAirportId] = query.trips.split("-");

    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
  }

  // price

  if (query.price) {
    const [minPrice, maxPrice] = query.price.split("-");

    customFilter.price = {
      [Op.between]: [minPrice, maxPrice == undefined ? 15000 : maxPrice],
    };
  }

  // traveller

  if (query.travellers) {
    customFilter.totalSeats = {
      [Op.gte]: query.travellers,
    };
  }

  // tripsDate :

  if (query.tripDate) {
    const specificDate = new Date(query.tripDate);
    console.log(specificDate);
    customFilter.departureTime = {
      [Op.between]: [specificDate, new Date(specificDate.getTime() + 86400000)], // Add 1 day (86400000 ms)
      // [Op.eq] : specificDate
    };
  }

  // apply sort [price , departureTime , arrivalTime]

  if (query.sort) {
    const param = query.sort.split(",");
    const sortFilters = param.map((param) => param.split("_"));
    console.log(sortFilters);
    customOrder = sortFilters;
  }

  try {
    const Flights = await flightRepository.getAllFlights(
      customFilter,
      customOrder
    );
    return Flights;
  } catch (error) {
    throw error;
  }

  /*
         customFilter = {
              departureAirportId : "DEL",
              arrivalAirportId : "BLR",
              departureTime : {
                  [Op.eq] : [ 24-08-03  , 24-08-03 23:59:00 ]
              },
              price : {
                    [ Op.between] : [ 1000 , 2000 ]
              },
              totalSeats : {
              [Op.gte] : 1
             }

         }
  */
}

async function getFlight(id) {
  try {
    const flight = await flightRepository.get(id);
    return flight;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  createFlight,
  getAllFlights,
  getFlight
};
