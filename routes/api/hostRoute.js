const router = require("express").Router();
const connection = require('../../controllers/connection');
const query = require('../../controllers/query');
const dbConfig = require('../../dbConfig');
const hostQuery = require("../../query_builders/host-query");

// router.get()
//creating a provider profile needs to be restricted. May need to apply "AND userid = {currentuser} OR Management = true"
// Matches with "/api/hosts"
router.route("/")
    .get(async (req, res) => {
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, hostQuery.findAll())
      res.send(user)
    })
    .post(async (req, res) =>{
      const {user_name, user_type, dob, email, password, title, about, p_img ,  b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform} = req.body;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(
        conn,
        hostQuery.createNew(),
        [uuser_name, user_type, dob, email, password, title, about, p_img ,  b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform]
      )
      res.send[user]
    });

// Matches with "/api/hosts/:id"
router.route('/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, hostQuery.findById(), [id])
      res.send(user)
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const vals = req.body;
    const values = Object.keys(vals).map(k => `${k}=${vals[k]}`)
    const conn = await connection(dbConfig).catch(e => {});
    const status = await query(conn, hostQuery.updateById, [values,id])
    res.send(status)
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const conn = await connection(dbConfig).catch(e => {});
    const status = await query(conn, hostQuery.deleteById(), [id])
    res.send(status)
  });

  module.exports = router;