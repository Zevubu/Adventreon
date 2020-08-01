const express = require("express");
const cryption = require('../../../controllers/cryption')
const {opts} = require('../../../passport')
const connection = require("../../../controllers/connection");
const query = require('../../../controllers/query');
const create = require('../../../crud/create');
const CONFIG = require('../../../jwtConfig');
const dbConfig = require('../../../dbConfig'); 
const jwt= require('jsonwebtoken');
const userQuery = require("../../../query_builders/user-query");
const router = express.Router();
// Make new managment profile. 

// /auth/tempm/register
router.post('/register', async (req, res) => {
    if (!req.body) return res.sendStatus(400);    
    const {first_name, last_name, user_name,mhswitch, dob, email, password, title, about, p_img, b_img, category, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform, verified} = req.body;

        const cryptPass = await cryption.stringEncryption(password);
        // console.log(`cryptPass: ${cryptPass}`) 
        // const decryptPass = await cryption.stringDecryption(cryptPass);
        // console.log(`decryptPass: ${decryptPass}`)
        
        const conn = await connection(dbConfig).catch(e => {});
        const result = await create(
            conn,
            'users',
            ['first_name, last_name, user_name, user_type, mhswitch, dob, email, password, title, about, p_img, b_img, category, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform, verified'],
            [first_name, last_name, user_name, 'manager', mhswitch, dob, email, cryptPass, title, about, p_img, b_img, category, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform, verified]  
        );
        const user = result;
        console.log(`register user:${JSON.stringify(user)}`)
        if(user.insertId){
            res.send({
                id: user.insertId || null,
                user_name: user_name || null,
                worked:true
            });
        }else{
            res.send({
                id: user.insertId || null,
                user_name: user_name || null,
                worked:false
            })
        }
    

}); 

module.exports = router;