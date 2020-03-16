const path = require("path");
const Router = require("express").Router();
const apiRoutes = require("./api/index");
// const authRoutes = require("./auth/index");


Router.use("/api", apiRoutes);
// Router.use('/auth', authRoutes);

Router.use(function(req, res){
     res.sendFile(path.join(__dirname,"../client/build/index.html"));
})

module.exports = Router;