const router = require("express").Router();
const connection = require('../../controllers/connection');
const query = require('../../controllers/query');
const dbConfig = require('../../dbConfig');
const userQuery = require("../../query_builders/user-query");


//this route uploads the actual image file
router.route('/upload')
.post(async (req, res) => {
        console.log(req.files, 'This should happen First')
        upload = (req.files.myFile)
        upload.mv(`./uploads/${upload.name}`)
        res.send("Post Recieved")
    });

//this route uploads the SQL info for the location of that file
router.route('/user')
.post(async (req, res) => {
    ///gotta put relevant process here,place holder for now
    res.send("Post Recieved")
});


  module.exports = router;

