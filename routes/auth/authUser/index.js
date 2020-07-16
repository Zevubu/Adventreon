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
// Update profile and delete profile only.
// Still needs update profile. And update password settings.
// For all setting must confirm password.

// /auth/user/deleteuser/:id
router.delete('/deleteuser/:id', async (req, res) => {
    const { id } = req.params;
    const conn = await connection(dbConfig).catch(e => {});
    const status = await query(
        conn, 
        userQuery.deleteById(), [id])
    res.send(status)
  });

// /auth/user/
router.route('/update/:id')
  .put(async (req, res) => {
    const { id } = req.params;
    const {first_name, last_name, user_name, email, title, about, p_img, b_img, category, payment, patreon, wp_title, webpage} = req.body;
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const status = await query(
      conn,
      userQuery.updateById(), 
      [first_name, last_name, user_name, email, title, about, p_img, b_img, category, payment, patreon, wp_title, webpage, id])
    res.send(status)
  })
//  Add update profile section here.

module.exports = router;