const router = require("express").Router();
const connection = require('../../../controllers/connection');
const query = require('../../../controllers/query');
const dbConfig = require('../../../dbConfig');
const showQuery = require("../../../query_builders/show-query");

// Matches with /api/hreq/shows/host/:id
router.route('/host/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const show = await query(conn, showQuery.findByHostFull(), [id])
      res.send(show)
  })
// /api/hreq/shows/new
router.route("/new")
    .post(async (req, res) =>{
        const {show_name, show_type, about, img, img_b, category, sub_category, video_type, v_link, host_id, host_name, host_img, credits, show_date, start_time, end_time, price, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, verified} = req.body;
        const conn = await connection(dbConfig).catch(e => {});
        const user = await query(
        conn,
        showQuery.createNew(),
        [show_name, show_type, about, img, img_b, category, sub_category, video_type, v_link, host_id, host_name, host_img, credits, show_date, start_time, end_time, price, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, verified]
        )
        res.send[user]
    });
// /api/hreq/shows/update/:id
router.route('/update/:id')
    .put(async (req, res) => {
        const { id } = req.params;
        const vals = req.body;
        const values = Object.keys(vals).map(k => `${k}=${vals[k]}`)
        const conn = await connection(dbConfig).catch(e => {});
        const status = await query(conn, showQuery.updateById, [values,id])
        res.send(status)
    })
// /api/hreq/shows/delete/:id
router.route('/delete/:id')  
    .delete(async (req, res) => {
        const { id } = req.params;
        const conn = await connection(dbConfig).catch(e => {});
        const status = await query(conn, showQuery.deleteById(), [id])
        res.send(status)
    });

module.exports = router;