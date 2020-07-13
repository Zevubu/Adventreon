const router = require("express").Router();
const connection = require('../../../controllers/connection');
const query = require('../../../controllers/query');
const dbConfig = require('../../../dbConfig');
const epiQuery = require("../../../query_builders/epi-query");

// /api/hrequest/episodes/new
router.route("/new")
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

// /api/hrequest/episodes/update/:id
router.route('/update/:id')
  .put(async (req, res) => {
    const { id } = req.params;
    const vals = req.body;
    const values = Object.keys(vals).map(k => `${k}=${vals[k]}`)
    const conn = await connection(dbConfig).catch(e => {});
    const status = await query(conn, epiQuery.updateById, [values,id])
    res.send(status)
  })
// /api/hrequest/episodes/delete/:id
router.route('/delete/:id')
  .delete(async (req, res) => {
    const { id } = req.params;
    const conn = await connection(dbConfig).catch(e => {});
    const status = await query(conn, epiQuery.deleteById(), [id])
    res.send(status)
  });

module.exports = router;
