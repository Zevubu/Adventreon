const router = require("express").Router();

const hostRoutes = require("./hostRoute");
const spectRoutes = require("./spectRoute");
const showRoutes = require("./showRoute");

router.use("/hosts", hostRoutes);
router.use("/spectators", spectRoutes);
router.use("/shows", showRoutes);

module.exports = router;