const router = require("express").Router();
const weatherRoutes = require("./weatherRoutes");

// Weather routes /
router.use("/weather", weatherRoutes);

module.exports = router;

