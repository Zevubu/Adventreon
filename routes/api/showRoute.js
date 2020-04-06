const router = require("express").Router();
const connection = require('../../controllers/connection');
const query = require('../../controllers/query');
const dbConfig = require('../../dbConfig');
const showQuery = require("../../query_builders/show-query");

// router.get()
//creating a provider profile needs to be restricted. May need to apply "AND userid = {currentuser} OR Management = true"
// Matches with "/api/shows/all
router.route("/all")
    .get(async (req, res) => {
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, showQuery.findAll())
      res.send(user)
    })
    .post(async (req, res) =>{
      const {show_name, show_type, about, img, img_b, catagory, sub_catagory, host_id, host_name,  host_img, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, entertain ,couns, relig} = req.body;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(
        conn,
        showQuery.createNew(),
        [show_name, show_type, about, img, img_b, catagory, sub_catagory, host_id, host_name,  host_img, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, entertain ,couns, relig]
      )
      res.send[user]
    });

// Matches with "/api/shows/entertain
router.route("/entertain")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllEnt())
    res.send(user)
}) 

// Matches with "/api/shows/couns
router.route("/couns")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllCouns())
    res.send(user)
})
// Matches with "/api/shows/relig
router.route("/relig")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllRelig())
    res.send(user)
})

// Matches with "/api/shows/host/:id"
router.route('/host/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, showQuery.findByHost(), [id])
      res.send(user)
  })

// Matches with "/api/shows/find/:id"
router.route('/find/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, showQuery.findById(), [id])
      res.send(user)
  })
  // .put(async (req, res) => {
  //   const { id } = req.params;
  //   const vals = req.body;
  //   const values = Object.keys(vals).map(k => `${k}=${vals[k]}`)
  //   const conn = await connection(dbConfig).catch(e => {});
  //   const status = await query(conn, showQuery.updateById, [values,id])
  //   res.send(status)
  // })
  // .delete(async (req, res) => {
  //   const { id } = req.params;
  //   const conn = await connection(dbConfig).catch(e => {});
  //   const status = await query(conn, showQuery.deleteById(), [id])
  //   res.send(status)
  // });

  // Matches with "/api/shows/find/:id"
  router.route('/epis/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, showQuery.findByEpis(), [id])
      res.send(user)
  })
 

  module.exports = router;