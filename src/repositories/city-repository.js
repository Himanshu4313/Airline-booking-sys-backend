const CrudRepository = require("./crud-repository");

const { city } = require("../models");
class citiesRepository extends CrudRepository {
  constructor() {
    super(city);
  }
}

module.exports = citiesRepository;