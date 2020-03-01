// CREATE ROUTES TO DATABASE -----------------------------------------------
const router = require("express").Router();
const weatherController = require("../../controllers/weatherConroller");

// Matches with "/api/weather"
router.route("/")
  .get(weatherController.findAll)
  .post(weatherController.create);

// Matches with "/api/weather/:id"
router.route("/:id")
  .get(weatherController.findById)
  .put(weatherController.update)
  //.delete(weatherController.delete);
  .delete(weatherController.remove);

module.exports = router;
