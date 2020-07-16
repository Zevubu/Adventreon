const router = require("express").Router();
const {ROLES ,passport, checkIsInRole, validate, ageValidate} = require("../../passport");
const LogoutAuth = require("./authLogOut/index");
const userAuth = require("./authUser");
const hostAuth = require("./authHost/index");
const managAuth = require("./authManager");
const masterAuth = require('./authMaster')
const tempHAuth = require("./authTempHost/index");
const tempMAuth = require("./authTempManager");
const authTools = require('./tools')


// logout /auth/opening
router.use("/opening", LogoutAuth);

// user /auth/user
// router.use('/user', userAuth); //user,managment/ master have access

// host /auth/host
router.use(
    '/hosts',
    passport.authenticate('jwt', {session: false}),
    checkIsInRole(ROLES.Host),
    hostAuth
); //host/ managment/ master have access

// tempH /auth/temph
router.use(
    '/temph',
    passport.authenticate('jwt', {session: false}),
    tempHAuth
) //temph/ managment/ master have access

// managment /auth/managment
router.use(
    '/managment', 
    passport.authenticate('jwt', {session: false}),
    checkIsInRole(ROLES.Manag), 
    managAuth) //managment/ master have access

// tempM /auth/tempm
router.use(
    '/tempm',
    passport.authenticate('jwt', {session: false}), 
    tempMAuth
)
    // tempm, master
// master /auth/master
// router.use('/master', masterAuth)
//Tools /auth/tools
router.use('/tools', authTools) // logout/ all

module.exports = router;