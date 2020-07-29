const router = require("express").Router();

const showRoutes = require("./showsRoute");
const epiRoutes = require("./epiRoutes")

// make shows, and episodes view the hosts non valid show/epis as well.
// /api/hreq/shows
router.use('/shows', showRoutes);
// /api/hreq/episodes
router.use('/episodes', epiRoutes);

module.exports = router;
