const router = require("express").Router();

// const hostRoutes = require("./hostRoute");
// const providerRoutes = require("./userRoute");
const userRoutes = require("./userRoute");
// const showRoutes = require("./showRoute");

// router.use("/host", hostRoutes);
// router.use("/providers", providerRoutes);
router.use("/users", userRoutes);
// router.use("/shows", showRoutes);

module.exports = router;