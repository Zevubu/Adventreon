const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const VcId = process.env.VIMEO_CLIENT_ID;
const VsKey = process.env.VIMEO_SECRET_KEY;
const VAT = process.env.VIMEO_ACCESS_TOKEN;

let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo(VcId, VsKey, VAT);

module.exports ={
    tester: function(req, res){
        axios.get(client.request({
            method: 'GET',
            path: '/tutorial'
        }, function (error, body, status_code, headers) {
            if (error) {
                console.log(error);
            }
    
            console.log(body);
            res.send(body);
        }))
        
    },
}