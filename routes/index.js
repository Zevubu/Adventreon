const path = require("path");
const Router = require("express").Router();
const {ROLES ,passport, checkIsInRole, validate} = require("../passport");

const apiRoutes = require("./api/index");
const authRoutes = require("./auth/index");
const videoRoutes = require("./video/video-hub");
const videoUpload = require('./video/upload');
const router = require("./api/api/hostRoute");

// logged out may
Router.use('/auth', authRoutes);
// Router.use("/api_l", apiRoutes); 
//api_l routes exactly match basic '/api' only with limitted pull and usablility.
// or they only pull one small list of shows that are free, under 18, and verifide.
Router.use('/validate', validate);

// Logged in 
// user
Router.use("/api", apiRoutes);
// Router.use('authu')

// host 
// Router.use('/auth_h')
// Router.use("/api_h") //update/ delete shows episodes.
Router.use("/video", videoRoutes.tester);
Router.use("/upload", videoUpload.vimeoUpload);
Router.use("/patch", videoUpload.tusPatcher);

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