const express = require("express");
const jwt= require('jsonwebtoken');
const cryption = require('../../../controllers/cryption')
const {opts} = require('../../../passport')
const connection = require("../../../controllers/connection");
const query = require('../../../controllers/query');
const create = require('../../../crud/create');
const CONFIG = require('../../../jwtConfig');
const dbConfig = require('../../../dbConfig'); 
const userQuery = require("../../../query_builders/user-query");
const router = express.Router();
// has user register and login. email verification and username verification only


// const {jwtOptions, strategy, passport} = require("../../middleware/passport");
// /auth/opening/register
router.post('/register', async (req, res) => {
    if (!req.body) return res.sendStatus(400);    
    const {first_name, last_name, user_name, dob, email, password,verified} = req.body;

        const cryptPass = await cryption.stringEncryption(password);
        // console.log(`cryptPass: ${cryptPass}`) 
        // const decryptPass = await cryption.stringDecryption(cryptPass);
        // console.log(`decryptPass: ${decryptPass}`)
        
        const conn = await connection(dbConfig).catch(e => console.log(e));
        const result = await create(
            conn,
            'users',
            ['first_name, last_name, user_name, user_type, mhswitch, dob, email, password, title, about, p_img, b_img, category,sub_category, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform, verified'],
            [first_name, last_name, user_name, 'user', false, dob, email, cryptPass, '', '','', '', '', '', '','', '', '', '', '', verified]  
        );
        const user = result;
        // console.log(`register user:${JSON.stringify(user)}`)
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
// register user:{"fieldCount":0,"affectedRows":1,"insertId":29,"serverStatus":2,"warningCount":0,"message":"","protoco
// l41":true,"changedRows":0}
// [user_name, { toString: () => `SHA1('${user_type}')`}, dob, email, { toString: () => `SHA1('${password}')`}, title, about, p_img, b_img, shows, { toString: () => `SHA1('${payment}')`}, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig]  
// /auth/opening/login X
router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    const expTime = parseInt(CONFIG.jwt_expiration);
    const cPass = await cryption.stringEncryption(password);
    // console.log(`log in request data: ${userName} ${password}`)
    const errLog=(err)=>{
        console.log(`Login Error:${err}`);
        res.send({valid:false,err:err})   
    }
    const conn = await connection(dbConfig).catch(e => errLog(e));
    const user = await query(
        conn,
        `SELECT id, user_name, user_type, dob, time_stamp FROM users WHERE user_name=? AND password=? OR email=? AND password=?`,
        [userName,cPass,userName,cPass]
    ).catch(e => errLog(e));

    const theUser = user[0];
    if(theUser === undefined){
        // console.log("No Id Error check")
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
// /auth/opening/deleteuser/:id 
// router.delete('/deleteuser/:id', async (req, res) => {
//     const { id } = req.params;
//     const conn = await connection(dbConfig).catch(e => {});
//     const status = await query(
//         conn, 
//         userQuery.deleteById(), [id])
//     res.send(status)
//   });

//   /auth/opening/emailtest
router.post('/emailtest', async (req, res) => {
    const { email } = req.body;
    // console.log(`email:${email}`)
    const errLog=(err)=>{
        console.log(`Emailtest Error:${err}`);
        res.send({valid:false,err:err})   
    }
    const conn = await connection(dbConfig).catch(e => errLog(e));
    const emailCheck = await query(
        conn,
        'SELECT COUNT(*) AS total FROM users WHERE email = ?', [email]
    )
    // console.log(`Email Check length:${emailCheck.length}`)
    // console.log(`Email check results:${JSON.stringify(emailCheck)}`)
    if(emailCheck.length > 0){
        res.send({valid:true, checker:emailCheck});
    }else{
        res.send({valid:false,})
    } 

});

//   /auth/opening/nametest
router.post('/nametest', async (req, res) => {
    const { user_name } = req.body;
    let error;
    const errLog=(err)=>{
        error = err;
        console.log(`Nametest Error:${err}`);
        res.send({valid:false,err:err})
        
    }
    const conn = await connection(dbConfig).catch(e => errLog(e));
    const nameCheck = await query(
        conn,
        'SELECT COUNT(*) AS total FROM users WHERE user_name = ?', [user_name]
    )
    // console.log(`Name check length:${nameCheck.length}`)
    // console.log(`Name check results:${JSON.stringify(nameCheck)}`)
    if(nameCheck.length > 0){
        res.send({valid:true, checker:nameCheck,err:error});
    }else{
        res.send({valid:false,err:error})
    } 
});

module.exports = router;