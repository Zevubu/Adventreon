const router = require("express").Router();

const hostRoutes = require("./hostRoute");
const userRoutes = require("./userRoute");
const showRoutes = require("./showRoute");
const epiRoutes = require("./epiRoute");
const kfRoutes = require("./KFRoute");
const uploadRoutes = require("./uploadRoute");

// pull shows episode hosts all valid no creation abilities

router.use("/hosts", hostRoutes);
router.use("/users", userRoutes );
router.use("/shows", showRoutes);
router.use("/episodes", epiRoutes);
router.use("/kidfriendly", kfRoutes);
router.use("/data", uploadRoutes);


module.exports = router;