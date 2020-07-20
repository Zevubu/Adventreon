const router = require("express").Router();

const hostRoutes = require("./hostRoute");
const userRoutes = require("./userRoute");
const showRoutes = require("./showRoute");
const epiRoutes = require("./epiRoute");
const kfRoutes = require("./KFRoute");
const uploadRoutes = require("./uploadRoute");

// pull shows episode hosts all valid no creation abilities
// /api/req/hosts
router.use("/hosts", hostRoutes);
// /api/req/users
router.use("/users", userRoutes );
// /api/req/shows
router.use("/shows", showRoutes);
// /api/req/episodes
router.use("/episodes", epiRoutes);
// /api/req/kidfrd
router.use("/kidfrd", kfRoutes);
// /api/req/data
router.use("/data", uploadRoutes);


module.exports = router;