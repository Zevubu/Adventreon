const router = require("express").Router();

const showRoutes = require("./showsRoute");
const epiRoutes = require("./epiRoutes")

// make shows, and episodes view the hosts non valid show/epis as well.
// /api/hrequest/shows
router.use('/shows', showRoutes);
// /api/hrequest/episodes
router.use('/episodes', epiRoutes);

module.exports = router;
