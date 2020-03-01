const router = require("express").Router();
const weatherRoutes = require("./weatherRoutes");

// Book routes
router.use("/weather", weatherRoutes);

module.exports = router;

