const express = require('express');
const routes = require("./routes");
const cors = require('cors');
// const passport = require("passport")
// const {jwtOptions, strategy, passport} = require("./JWT/index");

const PORT = process.env.PORT || 3001;
const app = express();

// passport.use(strategy)
// app.use(passport.initialize())

// parse requests of content-type: application/json
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// enable cross origin sharring
app.use(cors());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
};

app.use(routes);

// starting simple route 
// app.get("/", (req, res) => {
//     res.json(new Date());
// })


app.listen(PORT, function(){
    console.log(`API Server now listening on PORT ${PORT}`)
})