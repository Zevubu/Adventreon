const router = require("express").Router();

// const hostRoutes = require("./hostRoutes");
const showRoutes = require("./showRoutes");
// const epiRoutes = require("./epiRoutes");
// minturized version of api

// router.use("/hosts", hostRoutes);
router.use("/shows", showRoutes);
// router.use("/episodes", epiRoutes);

module.exports = router;