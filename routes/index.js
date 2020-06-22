const path = require("path");
const Router = require("express").Router();
const {ROLES ,passport, checkIsInRole, validate} = require("../passport");

const apiRoutes = require("./api/index");
const authRoutes = require("./auth/index");
const videoRoutes = require("./video/video-hub");
const videoUpload = require('./video/upload');

Router.use("/api", apiRoutes);
Router.use('/auth', authRoutes);
Router.use('/validate', validate);
Router.use("/video", videoRoutes.tester);
Router.use("/upload", videoUpload.vimeoUpload);
Router.use("/patch", videoUpload.tusPatcher);


Router.use(function(req, res){
     res.sendFile(path.join(__dirname,"../client/build/index.html"));
})

module.exports = Router;