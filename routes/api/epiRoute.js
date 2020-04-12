const router = require("express").Router();
const connection = require('../../controllers/connection');
const query = require('../../controllers/query');
const dbConfig = require('../../dbConfig');
const epiQuery = require("../../query_builders/epi-query");

// router.get()
//creating a provider profile needs to be restricted. May need to apply "AND userid = {currentuser} OR Management = true"

// Matches with "/api/episodes/all"
router.route("/all")
    .get(async (req, res) => {
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, epiQuery.findAll())
      res.send(user)
    })
    .post(async (req, res) =>{
      const {epi_name, about, show_id, show_name, img, catagory, sub_catagory, host_id, host_name, b_img, credits, price, payment, patreon, wp_title, webpage, v_link, show_date, start_time, end_time, eighteen_plus, booked, paid, canceled, entertain ,couns, relig} = req.body;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(
        conn,
        epiQuery.createNew(),
        [epi_name, about, show_id, show_name, img, catagory, sub_catagory, host_id, host_name, b_img, credits, price, payment, patreon, wp_title, webpage, v_link, show_date, start_time, end_time, eighteen_plus, booked, paid, canceled, entertain ,couns, relig]
      )
      res.send[user]
    });


// Matches with "/api/episodes/find/:id"
router.route('/find/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, epiQuery.findById(), [id])
      res.send(user)
  })   
  // .put(async (req, res) => {
  //   const { id } = req.params;
  //   const vals = req.body;
  //   const values = Object.keys(vals).map(k => `${k}=${vals[k]}`)
  //   const conn = await connection(dbConfig).catch(e => {});
  //   const status = await query(conn, epiQuery.updateById, [values,id])
  //   res.send(status)
  // })
  // .delete(async (req, res) => {
  //   const { id } = req.params;
  //   const conn = await connection(dbConfig).catch(e => {});
  //   const status = await query(conn, epiQuery.deleteById(), [id])
  //   res.send(status)
  // });

  // Matches with "/api/episodes/show/:id"
router.route('/show/:id')
.get(async (req, res) => {
    const { id } = req.params;
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, epiQuery.findByShow(), [id])
    res.send(user)
}) 


// Matches with "/api/episodes/host/:id"
  router.route('/host/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, epiQuery.findByHost(), [id])
      res.send(user)
  })
//   .put(async (req, res) => {
//     const { id } = req.params;
//     const vals = req.body;
//     const values = Object.keys(vals).map(k => `${k}=${vals[k]}`)
//     const conn = await connection(dbConfig).catch(e => {});
//     const status = await query(conn, epiQuery.updateById, [values,id])
//     res.send(status)
//   })
//   .delete(async (req, res) => {
//     const { id } = req.params;
//     const conn = await connection(dbConfig).catch(e => {});
//     const status = await query(conn, epiQuery.deleteById(), [id])
//     res.send(status)
//   });

// Matches with "/api/episodes/kf"
router.route('/kf/')
.get(async (req, res) => {
    const { id } = req.params;
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, epiQuery.findAllKF());
    res.send(user)
})

  module.exports = router;