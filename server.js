const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const routes = require("./routes");
const cors = require('cors');
const {passport} = require('./passport/index')
const fileUpload = require('express-fileupload');
// const bodyParser = require("body-parser");
// const {jwtOptions, strategy, passport} = require("./JWT/index");

const PORT = process.env.PORT || 3001;
const app = express();

// const VcId = process.env.VIMEO_CLIENT_ID;
// const VsKey = process.env.VIMEO_SECRET_KEY;
// const VAT = process.env.VIMEO_ACCESS_TOKEN;

// let Vimeo = require('vimeo').Vimeo;
// console.log(`Vimeo ${JSON.stringify(Vimeo) }`)
// let client = new Vimeo(VcId, VsKey, VAT);
// console.log(client)

// passport.use(strategy)
app.use(passport.initialize())

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// // parse application/json
// app.use(bodyParser.json())
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


app.listen(PORT, function(){
    console.log(`API Server now listening on bleep PORT ${PORT}`)
})