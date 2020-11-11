const router = require("express").Router();
const {ROLES ,passport, checkIsInRole, validate, ageValidate} = require("../../passport");
const logoutAPI = require('./logoutAPI');
const baseAPI = require('./api/index');
const hostAPI = require('./hostAPI');
const managAPI = require('./managerAPI');
// const masterAPI = require('./masterAPI')

// logged out routes no token needed 
// /api/opening
router.use("/opening", logoutAPI);

// user routes, simple is token route 
// /api/req
router.use("/req",
    passport.authenticate('jwt', {session: false}),
    baseAPI
);
//  passport.authenticate('jwt', {session: false}),

// host routes 
// /api/hreq
router.use("/hreq",
    passport.authenticate('jwt', {session: false}),
    checkIsInRole(ROLES.Host),
    hostAPI
);

// management routes /api/mreq
router.use('/mreq',
    passport.authenticate('jwt', {session: false}),
    checkIsInRole(ROLES.Manag),    
    managAPI
);
// master routes /api/master
// router.use('/mastreq',
//     passport.authenticate('jwt', {session: false}),
//     checkIsInRole(ROLES.Manag),    
//     masterAPI
// );

module.exports = router;