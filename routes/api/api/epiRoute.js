const router = require("express").Router();
const connection = require('../../../controllers/connection');
const query = require('../../../controllers/query');
const dbConfig = require('../../../dbConfig');
const epiQuery = require("../../../query_builders/epi-query");

// router.get()
//creating a provider profile needs to be restricted. May need to apply "AND userid = {currentuser} OR Management = true"

// Matches with "/api/req/episodes/all"
router.route("/all")
    .get(async (req, res) => {
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, epiQuery.findAll())
      res.send(user)
    })
    // .post(async (req, res) =>{
    //   const {show_id, user_id, epi_name, about, img, video_type, v_link, credits, show_name, host_name, category, sub_category, paid, price, epi_date, start_time, end_time, eighteen_plus, verified} = req.body;
    //   const conn = await connection(dbConfig).catch(e => {});
    //   const user = await query(
    //     conn,
    //     epiQuery.createNew(),
    //     [show_id, user_id, epi_name, about, img, video_type, v_link, credits, show_name, host_name, category, sub_category, paid, price, epi_date, start_time, end_time, eighteen_plus, verified]
    //   )
    //   res.send[user]
    // }); // from .post to here must remove and reconect in host Routes


// Matches with "/api/req/episodes/find/:id"
router.route('/find/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, epiQuery.findById(), [id])
      res.send(user)
  })   

  // Matches with "/api/req/episodes/show/:id"
router.route('/show/:id')
.get(async (req, res) => {
    const { id } = req.params;
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, epiQuery.findByShow(), [id])
    res.send(user)
}) 


// Matches with "/api/req/episodes/host/:id"
  router.route('/host/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, epiQuery.findByHost(), [id])
      res.send(user)
  })


// Matches with "/api/req/episodes/kf"
router.route('/kf/')
.get(async (req, res) => {
    const { id } = req.params;
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, epiQuery.findAllKF());
    res.send(user)
})

  module.exports = router;