const dotenv = require("dotenv");
const router = require("express").Router();
dotenv.config();
const VcId = process.env.VIMEO_CLIENT_ID;
const VsKey = process.env.VIMEO_SECRET_KEY;
const VAT = process.env.VIMEO_ACCESS_TOKEN;

let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo(VcId, VsKey, VAT);
// Matches /video/test
router.route("/test")
    .get(
        
        'https://vimeo.com/api/oembed.json?url="https://vimeo.com/412924050/244119736a"')
