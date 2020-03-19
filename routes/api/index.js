const router = require("express").Router();

const hostRoutes = require("./hostRoute");
const userRoutes = require("./userRoute");
const showRoutes = require("./showRoute");

router.use("/hosts", hostRoutes);
router.use("/users", userRoutes );
router.use("/shows", showRoutes);

module.exports = router;