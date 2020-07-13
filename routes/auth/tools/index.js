const express = require("express");
const connection = require("../../../controllers/connection");
const query = require('../../../controllers/query');
const dbConfig = require('../../../dbConfig'); 
const router = express.Router();

// email verification here
//   /auth/emailtest
router.post('/emailtest', async (req, res) => {
    const { email } = req.body;
    console.log(`email:${email}`)
    const conn = await connection(dbConfig).catch(e => {});
    const emailCheck = await query(
        conn,
        'SELECT COUNT(*) AS total FROM users WHERE user_email = ?', 
        [email]
    )
    res.send(emailCheck);
});

// username verification here
//   /auth/nametest
router.post('/nametest', async (req, res) => {
    const { user_name } = req.body;
    console.log(`email:${email}`)
    const conn = await connection(dbConfig).catch(e => {});
    const nameCheck = await query(
        conn,
        'SELECT COUNT(*) AS total FROM users WHERE user_name = ?',
        [user_name]
    )
    res.send(nameCheck);
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