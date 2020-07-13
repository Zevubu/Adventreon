const router = require("express").Router();
const connection = require('../../../controllers/connection');
const query = require('../../../controllers/query');
const dbConfig = require('../../../dbConfig');
const ManagQuery = require("../../../query_builders/manag-query");

// router.get()
//creating a provider profile needs to be restricted. May need to apply "AND userid = {currentuser} OR Management = true"
// Matches with "/api/managment/all"
router.route("/all")
    .get(async (req, res) => {
      const conn = await connection(dbConfig).catch(e => console.log(e));
      const user = await query(conn, ManagQuery.findAll())
      res.send(user)
    })
    // .post(async (req, res) =>{
    //   const {user_name, user_type,
    //  dob, email, password, title, about, p_img ,  b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig} = req.body;
    //   const conn = await connection(dbConfig).catch(e => {});
    //   const user = await query(
    //     conn,
    //     ManagQuery.createNew(),
    //     [user_name, user_type, dob, email, password, title, about, p_img ,  b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig]
    //   )
    //   res.send[user]
    // });

// Matches with "/api/managment/music"
router.route("/music")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const user = await query(conn, ManagQuery.findAllMuse())
    res.send(user)
}) 

// Matches with "/api/managment/performance"
router.route("/performance")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const user = await query(conn, ManagQuery.findAllPref())
    res.send(user)
})

// Matches with "/api/managment/visual"
router.route("/visual")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const user = await query(conn, ManagQuery.findAllVis())
    res.send(user)
})

// Matches with "/api/managment/life"
router.route("/life")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const user = await query(conn, ManagQuery.findAllLife())
    res.send(user)
})

// Matches with "/api/managment/spirit"
router.route("/spirit")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const user = await query(conn, ManagQuery.findAllSprit())
    res.send(user)
})


// Matches with "/api/managment/all/:id"
router.route('/all/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => console.log(e));
      const user = await query(conn, ManagQuery.findById(), [id])
      res.send(user)
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const {first_name, last_name, user_name, email, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage} = req.body;
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const status = await query(
      conn,
      ManagQuery.updateById(), 
      [first_name, last_name, user_name, email, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, id])
    res.send(status)
  })
  // .delete(async (req, res) => {
  //   const { id } = req.params;
  //   const conn = await connection(dbConfig).catch(e => {});
  //   const status = await query(conn, ManagQuery.deleteById(), [id])
  //   res.send(status)
  // });

  module.exports = router;