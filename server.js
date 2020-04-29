const express = require('express');
const routes = require("./routes");
const cors = require('cors');
const passport = require("passport")
const fileUpload = require('express-fileupload');
// const {jwtOptions, strategy, passport} = require("./JWT/index");
// const Vimeo = require('vimeo').Vimeo;
// const client = new Vimeo("{client_id}", "{client_secret}", "{access_token}");

const PORT = process.env.PORT || 3001;
const app = express();

// passport.use(strategy)
app.use(passport.initialize())

//file transfer module 
app.use(fileUpload ({createParentPath: true},{debug: true}) )

// parse requests of content-type: application/json
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// enable cross origin sharring
app.use(cors());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
};

app.use(routes);

// client.request({
//     method: 'GET',
//     path: '/oembed.json?url="https://vimeo.com/412924050/244119736a"'
// }, function (error, body, status_code, headers) {
//     if (error) {
//         console.log(error);
//     }

//     console.log(body);
// })


app.listen(PORT, function(){
    console.log(`API Server now listening on PORT ${PORT}`)
})