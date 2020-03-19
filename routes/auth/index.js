const express = require("express");
const connection = require("../../controllers/connection");
const query = require('../../controllers/query');
const router = express.Router();
const dbConfig = require('../../dbConfig');
const create = require('../../crud/create');
const CONFIG = require('../../jwtConfig');
const jwt= require('jsonwebtoken');

// const {jwtOptions, strategy, passport} = require("../../middleware/passport");
// /register is not built out for this api yet.
router.post('/register', async (req, res) => {
    const {username, password} = req.body;
    const conn = await connection(dbConfig).catch(e => {});
    const result = await create(
        conn,
        'users',
        ['userName', 'password'],
        [username, { toString: () => `SHA1('${password}')`}]  
    );

    const [user = {}] = result;
    res.send({
        id: user.id || null,
        username: user.username || null
    });
}); 

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    const expTime = parseInt(CONFIG.jwt_expiration);
    console.log(`log in request data: ${userName} ${password}`)
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(
        conn,
        `SELECT id, user_name, user_type, dob, email, password, about, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, time_stamp FROM users WHERE user_name=? AND password=?`,
        [userName, password]
    );
    res.send({user_info: user[0], token: jwt.sign({user_id: this.id}, CONFIG.jwt_encryption, {expiresIn: expTime})} || {id: null, userName: null })
    
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
        'SELECT COUNT(*) AS total FROM users WHERE user_email = ?', [email])
        return emailCheck;
}





module.exports = router;