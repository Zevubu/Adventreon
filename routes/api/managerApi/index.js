const router = require("express").Router();

const profileRoutes = require("./profileRoute");
const showRoutes = require("./showRoute");
const epiRoutes = require("./epiRoute");

// can veiw edit and verify shows, episodes and hosts. 

// /api/mreq/profiles
router.use("/profiles", profileRoutes);
// /api/mreq/shows
router.use("/shows", showRoutes);
// /api/mreq/episodes
router.use("/episodes", epiRoutes);

module.exports = router;