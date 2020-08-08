const path = require("path");
const Router = require("express").Router();
const {ROLES ,passport, checkIsInRole, validate} = require("../passport");

const apiRoutes = require("./api/index");
const authRoutes = require("./auth/index");
const videoRoutes = require("./video/video-hub");
const videoUpload = require('./video/upload');
// const EmailRoutes = require('./email/index')
// const router = require("./api/api/hostRoute");

// Autherization
Router.use('/auth', authRoutes);

Router.use('/validate', validate);

// Base api
Router.use("/api", apiRoutes);

// video handeling
Router.use("/video", videoRoutes.tester);
Router.use("/upload", videoUpload.vimeoUpload);
Router.use("/patch", videoUpload.tusPatcher);

// email handeling
// Router.use("/email", EmailRoutes);

// manager
// Router.use('/auth_m') //update/ delete profile/ mhswitch
// Router.use("/api_m") //Validate Profiles.

// master can do everything except fo access profiles password.
// Router.use('/auth_mm') // everything
// Router.use("/api_mm") // everything

// temp Host /manager
// Router.use('/auth_th')

// temp manager /master
// Router.use('auth_tm')


Router.use(function(req, res){
     res.sendFile(path.join(__dirname,"../client/build/index.html"));
})

module.exports = Router;