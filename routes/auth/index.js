const express = require("express");
const bcrypt = require("bcrypt");
const cryption = require('../../controllers/cryption')

const oktaClient = require('../../controllers/okta_client')
const connection = require("../../controllers/connection");
const query = require('../../controllers/query');
const router = express.Router();
const dbConfig = require('../../dbConfig');
const create = require('../../crud/create');
const CONFIG = require('../../jwtConfig');
const jwt= require('jsonwebtoken');
const userQuery = require("../../query_builders/user-query");

// const {jwtOptions, strategy, passport} = require("../../middleware/passport");
// /register is not built out for this api yet.
// /auth/register
router.post('/register', async (req, res) => {
    if (!req.body) return res.sendStatus(400);    
    const {first_name, last_name, user_name, user_type, mhswitch, dob, email, password, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform, verified} = req.body;

        const cryptPass = await cryption.stringEncryption(password);
        // console.log(`cryptPass: ${cryptPass}`) 
        // const decryptPass = await cryption.stringDecryption(cryptPass);
        // console.log(`decryptPass: ${decryptPass}`)
        
        const conn = await connection(dbConfig).catch(e => {});
        const result = await create(
            conn,
            'users',
            ['first_name, last_name, user_name, user_type, mhswitch, dob, email, password, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform, verified'],
            [first_name, last_name, user_name, user_type, mhswitch, dob, email, cryptPass, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform, verified]  
        );
        const [user = {}] = result;
        res.send({
            id: user.id || null,
            user_name: user.user_name || null
        });
    
    // const OktaUser = {
    //     profile: {
    //         firstName: firstName,
    //         lastName: lastName,
    //         displayName:user_name,
    //         userType: user_type,
    //         email: email,
    //         login: email     
    //     },
    //     credentials: {
    //         password: {
    //             value: password
    //         }
    //     }
    // }
    // oktaClient.createUser(newUser)
    // .then(user=>{
    //     res.status(201);
    //     res.send(user)
    // })
    // .catch(err => {
    //     res.status(400);
    //     res.send(err);
    // })
    

}); 
// [user_name, { toString: () => `SHA1('${user_type}')`}, dob, email, { toString: () => `SHA1('${password}')`}, title, about, p_img, b_img, shows, { toString: () => `SHA1('${payment}')`}, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig]  
// /auth/login
router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    const expTime = parseInt(CONFIG.jwt_expiration);
    const cPass = await cryption.stringEncryption(password);
    // console.log(`log in request data: ${userName} ${password}`)
    const conn = await connection(dbConfig).catch(e => {});
    // const passTest = await query(
    //     con,
    //     'SELECT password FROM users WHERE user_name=?',
    //     [userName]
    // )
    // const match = bcrypt.compareSync(password, passTest[0].password)
    const user = await query(
        conn,
        `SELECT id,user_name, user_type, mhswitch, dob, email, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform, verified, time_stamp FROM users WHERE user_name=? AND password=?`,
        [userName,cPass]
    );
    res.send({user_info: user[0], token: jwt.sign({user_id: this.id}, CONFIG.jwt_encryption, {expiresIn: expTime})} || {id: null, userName: null });
});
// /auth/deleteuser/:id
router.delete('/deleteuser/:id', async (req, res) => {
    const { id } = req.params;
    const conn = await connection(dbConfig).catch(e => {});
    const status = await query(
        conn, 
        userQuery.deleteById(), [id])
    res.send(status)
  });

router.get('/emailtest/:email', async (req, res) => {
    const { email } = req.params;
    console.log(`email:${email}`)
    const conn = await connection(dbConfig).catch(e => {});
    const emailCheck = await query(
        conn,
        'SELECT COUNT(*) AS total FROM users WHERE user_email = ?', [email])
    res.send(emailCheck);
});



const isEmailInUse = async (email) => {
    console.log(`email:${email}`)
    const conn = await connection(dbConfig).catch(e => {});
    const emailCheck = await query(
        conn,
        'SELECT COUNT(*) AS total FROM users WHERE user_email = ?',
        [email]
    )
    return emailCheck;
}





module.exports = router;