const express = require("express");
const connection = require("../../../controllers/connection");
const query = require('../../../controllers/query');
const dbConfig = require('../../../dbConfig'); 
const router = express.Router();

// email verification here

//   /auth/tools/emailtest
router.post('/emailtest', async (req, res) => {
    const { email } = req.body;
    // console.log(`email:${email}`)
    const conn = await connection(dbConfig).catch(e => {});
    const emailCheck = await query(
        conn,
        'SELECT COUNT(*) AS total FROM users WHERE email = ?', [email]
    )
    // console.log(`Email check results:${JSON.stringify(emailCheck)}`)
    res.send(emailCheck);
});

//   /auth/tools/nametest
router.post('/nametest', async (req, res) => {
    const { user_name } = req.body;
    const conn = await connection(dbConfig).catch(e => {});
    const nameCheck = await query(
        conn,
        'SELECT COUNT(*) AS total FROM users WHERE user_name = ?', [user_name]
    )
    // console.log(`Name check results:${JSON.stringify(nameCheck)}`)
    res.send(nameCheck);
});


// const isEmailInUse = async (email) => {
//     console.log(`email:${email}`)
//     const conn = await connection(dbConfig).catch(e => {});
//     const emailCheck = await query(
//         conn,
//         'SELECT COUNT(*) AS total FROM users WHERE user_email = ?',
//         [email]
//     )
//     return emailCheck;
// }


module.exports = router;