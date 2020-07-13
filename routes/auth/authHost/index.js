const express = require("express");
const cryption = require('../../../controllers/cryption')
const {opts} = require('../../../passport')
const connection = require("../../../controllers/connection");
const query = require('../../../controllers/query');
const create = require('../../../crud/create');
const CONFIG = require('../../../jwtConfig');
const dbConfig = require('../../../dbConfig'); 
const jwt= require('jsonwebtoken');
const userQuery = require("../../../query_builders/host-query");
const router = express.Router();
// Update profile and delete profile only.

// /auth/hosts/update/:id

router.route('/update/:id')
  .put(async (req, res) => {
    const { id } = req.params;
    const {user_name, email, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage} = req.body;
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const status = await query(
      conn,
      userQuery.updateById(), 
      [user_name, email, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, id])
    res.send(status)
  }) // from .put to here must remove and reconect in host Routes
  // .delete(async (req, res) => {
  //   const { id } = req.params;
  //   const conn = await connection(dbConfig).catch(e => {});
  //   const status = await query(conn, hostQuery.deleteById(), [id])
  //   res.send(status)
  // });
  
// /auth/hosts/deleteuser/:id
router.delete('/deleteuser/:id', async (req, res) => {
    const { id } = req.params;
    const conn = await connection(dbConfig).catch(e => {});
    const status = await query(
        conn, 
        userQuery.deleteById(), [id])
    res.send(status)
  });

//  need to add update profile section here.
// update and delete profile only
// if profile deleted all shows and episodes also get deleted. 

module.exports = router;