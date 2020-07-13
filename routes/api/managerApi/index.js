const router = require("express").Router();

const hostRoutes = require("./hostRoute");
const userRoutes = require("./userRoute")
const showRoutes = require("./showRoute");
const epiRoutes = require("./epiRoute")

// can veiw edit and verify shows, episodes and hosts. 

router.use("/hosts", hostRoutes);
router.use("/users", userRoutes);
router.use("/shows", showRoutes);
router.use("/episodes", epiRoutes);

module.exports = router;