const express = require("express");
const { cityController } = require("../../controllers");
const { cityMiddleware } = require("../../middlewares");

const router = express.Router();

// /api/v1/cities POST
router.post(
  "/",
  cityMiddleware.createCityValidation,
  cityController.createCity
);

// /api/v1/cities/id patch
router.patch(
  "/:id",
  cityMiddleware.updateCityValidation,
  cityController.updateCity
);

// /api/v1/cities/id delete
router.delete("/:id", cityController.deleteCity);
module.exports = router;
