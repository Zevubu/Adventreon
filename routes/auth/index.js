const express = require("express");
const cryption = require('../../controllers/cryption')
const {opts} = require('../../passport')
const connection = require("../../controllers/connection");
const query = require('../../controllers/query');
const create = require('../../crud/create');
const CONFIG = require('../../jwtConfig');
const dbConfig = require('../../dbConfig'); 
const jwt= require('jsonwebtoken');
const userQuery = require("../../query_builders/user-query");
const router = express.Router();
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
    

}); 
// [user_name, { toString: () => `SHA1('${user_type}')`}, dob, email, { toString: () => `SHA1('${password}')`}, title, about, p_img, b_img, shows, { toString: () => `SHA1('${payment}')`}, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig]  
// /auth/login
router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    const expTime = parseInt(CONFIG.jwt_expiration);
    const cPass = await cryption.stringEncryption(password);
    // console.log(`log in request data: ${userName} ${password}`)
    const conn = await connection(dbConfig).catch(e => res.send(e));
    const user = await query(
        conn,
        `SELECT id, user_name, user_type, dob, time_stamp FROM users WHERE user_name=? AND password=?`,
        [userName,cPass]
    ).catch(e => res.status(400));

    const theUser = user[0];
    if(theUser === undefined){
        console.log("No Id Error check")
        res.send({valid:false, error: user})
    }
    const token = jwt.sign({id: theUser.id, userName:theUser.user_name}, opts.secretOrKey, {expiresIn: '2d'})
    
    if(theUser.user_type === 'manager'){
        res.send({valid:true, admin: true, host: true, user:true, temp:false, tempm:false, token: token, user_info: {id: theUser.id, user_name: theUser.user_name}} || {user_info:null, token: null });
    }else if(theUser.user_type === 'host'){
        res.send({valid:true, admin: false, host:true, user:true, temp:false, tempm:false, token: token, user_info: {id: theUser.id, user_name: theUser.user_name}} || {user_info:null, token: null });
    }else if(theUser.user_type === 'user'){
        res.send({valid:true, admin: false, host:false, user:true, temp:false, tempm:false, token: token, user_info: {id: theUser.id, user_name: theUser.user_name}} || {user_info:null, token: null });
    }else if(theUser.user_type === 'temp'){
        res.send({valid:true, admin: false, host:false, user:false, temp:true, tempm:false, token: token, user_info: {id: theUser.id, user_name: theUser.user_name}} || {user_info:null, token: null });
    }else if(theUser.user_type === 'tempm'){
        res.send({valid:true, admin: false, host:false, user:false, temp:false, tempm:true, token: token, user_info: {id: theUser.id, user_name: theUser.user_name}} || {user_info:null, token: null });
    }else{
        res.status(400)
        // res.send({valid:false, admin: false, host:false, user:false, temp:false, tempm:false,  token: null, user_info:null} || {user_info:null, token: null });
    }
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