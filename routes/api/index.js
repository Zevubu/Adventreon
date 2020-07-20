const router = require("express").Router();

// const logoutAPI = require('./logoutAPI');
const baseAPI = require('./api/index');
const hostAPI = require('./hostAPI');
// const managAPI = require('./managerAPI');
// const masterAPI = require('./masterAPI')

// logged out routes no token needed 
// /api/opening
// router.use("/opening", logoutAPI);
// user routes, simple is token route 
// /api/req
router.use("/req", baseAPI);
// host routes 
// /api/hreq
router.use("/hreq", hostAPI);
// management routes /api/mreq
// router.use('/mreq',managAPI);
// master routes /api/master
// router.use('/mastreq', masterAPI);

module.exports = router;