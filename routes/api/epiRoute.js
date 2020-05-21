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
      const {show_id, user_id, epi_name, about, img, video_type, v_link, credits, show_name, host_name, catagory, sub_catagory, paid, price, epi_date, start_time, end_time, eighteen_plus, verified} = req.body;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(
        conn,
        epiQuery.createNew(),
        [show_id, user_id, epi_name, about, img, video_type, v_link, credits, show_name, host_name, catagory, sub_catagory, paid, price, epi_date, start_time, end_time, eighteen_plus, verified]
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