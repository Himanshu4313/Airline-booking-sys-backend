const express = require("express");
const { AirplaneController } = require("../../controllers/index");

const { airplaneMiddlewares } = require("../../middlewares");
const router = express.Router();

console.log("Enter airplane routes");

// /api/v1/airplanes POST
router.post(
  "/",
  airplaneMiddlewares.validateCreateAirplaneRequest,
  AirplaneController.createAirplane
);
// /api/v1/airplanes GET

router.get("/", AirplaneController.getAirplanes);

// /api/v1/airplanes/id GET   expmaple -> /api/v1/airplanes/34
router.get("/:id", AirplaneController.getAirplaneById);

// /api/v1/airplanes/id PUT
router.put(
  "/:id",
  airplaneMiddlewares.validateUpdateAirplaneRequest,
  AirplaneController.updateAirplane
);

//  /api/v1/airplanes/id DELETE 
router.delete("/:id" ,AirplaneController.deleteAirplane);


module.exports = router;
