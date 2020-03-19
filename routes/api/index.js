const router = require("express").Router();

const hostRoutes = require("./hostRoute");
const userRoutes = require("./userRoute");
const showRoutes = require("./showRoute");
const epiRoutes = require("./epiRoute");
const kfRoutes = require("./KFRoute")

router.use("/hosts", hostRoutes);
router.use("/users", userRoutes );
router.use("/shows", showRoutes);
router.use("/episodes", epiRoutes);
router.use("/kidfriendly", kfRoutes);

module.exports = router;