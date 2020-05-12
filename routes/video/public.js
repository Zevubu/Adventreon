const dotenv = require("dotenv");
dotenv.config();
const router = require("express").Router();
const connection = require('./connection');
const query = require('../../controllers/query')
const dbConfig = require('./config')

const VcId = process.env.VIMEO_CLIENT_ID;
const VsKey = process.env.VIMEO_SECRET_KEY;
const VAT = process.env.VIMEO_ACCESS_TOKEN;

let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo(VcId, VsKey, VAT);
// Matches /video/test
router.route("/test")
    .get((req,res) => {
            // const client = new Vimeo(VcId, VsKey, VAT).catch(e => {});
            const video =  client.request({
                method: 'GET',
                path: '/tutorial'
            }, function (error, body, status_code, headers) {
                if (error) {
                    console.log(error);
                }
                console.log(body)
                return body;
            })
            console.log(video);
    })
        
        // 'https://vimeo.com/api/oembed.json?url="https://vimeo.com/412924050/244119736a"')

// client.request({
//     method: 'GET',
//     path: '/oembed.json?url="https://vimeo.com/412924050/244119736a"'
// }, function (error, body, status_code, headers) {
//     if (error) {
//         console.log(error);
//     }

//     console.log(body);
// })

        
        // client.request({
        //   method: 'GET',
        //   path: '/tutorial'
        // }, function (error, body, status_code, headers) {
        //   if (error) {
        //     console.log(error);
        //   }
        
        //   console.log(body);
        // })
