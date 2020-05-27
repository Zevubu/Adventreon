const router = require("express").Router();
const connection = require('../../controllers/connection');
const query = require('../../controllers/query');
const dbConfig = require('../../dbConfig');
const hostQuery = require("../../query_builders/host-query");

// router.get()
//creating a provider profile needs to be restricted. May need to apply "AND userid = {currentuser} OR Management = true"
// Matches with "/api/hosts/all"
router.route("/all")
    .get(async (req, res) => {
      const conn = await connection(dbConfig).catch(e => console.log(e));
      const user = await query(conn, hostQuery.findAll())
      res.send(user)
    })
    // .post(async (req, res) =>{
    //   const {user_name, user_type,
    //  dob, email, password, title, about, p_img ,  b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig} = req.body;
    //   const conn = await connection(dbConfig).catch(e => {});
    //   const user = await query(
    //     conn,
    //     hostQuery.createNew(),
    //     [user_name, user_type, dob, email, password, title, about, p_img ,  b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig]
    //   )
    //   res.send[user]
    // });

// Matches with "/api/hosts/entertain"
router.route("/entertain")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const user = await query(conn, hostQuery.findAllEnt())
    res.send(user)
}) 

// Matches with "/api/hosts/couns"
router.route("/couns")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const user = await query(conn, hostQuery.findAllCouns())
    res.send(user)
})

// Matches with "/api/hosts/relig"
router.route("/relig")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const user = await query(conn, hostQuery.findAllRelig())
    res.send(user)
})

// Matches with "/api/hosts/all/:id"
router.route('/all/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => console.log(e));
      const user = await query(conn, hostQuery.findById(), [id])
      res.send(user)
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const {user_name, email, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage} = req.body;
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const status = await query(
      conn,
      hostQuery.updateById(), 
      [user_name, email, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, id])
    res.send(status)
  })
  // .delete(async (req, res) => {
  //   const { id } = req.params;
  //   const conn = await connection(dbConfig).catch(e => {});
  //   const status = await query(conn, hostQuery.deleteById(), [id])
  //   res.send(status)
  // });

  module.exports = router;