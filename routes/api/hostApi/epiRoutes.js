const router = require("express").Router();
const connection = require('../../../controllers/connection');
const query = require('../../../controllers/query');
const dbConfig = require('../../../dbConfig');
const epiQuery = require("../../../query_builders/epi-query");

  // Matches with "/api/hreq/episodes/show/:id"
  router.route('/show/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, epiQuery.findFullByShow(), [id])
      res.send(user)
  }) 

// /api/hreq/episodes/new
router.route("/new")
    .post(async (req, res) =>{
      const {show_id, user_id, epi_name, about, img, video_type, v_link, credits, show_name, host_name, category, sub_category, paid, price, epi_date, start_time, end_time, eighteen_plus, verified} = req.body;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(
        conn,
        epiQuery.createNew(),
        [show_id, user_id, epi_name, about, img, video_type, v_link, credits, show_name, host_name, category, sub_category, paid, price, epi_date, start_time, end_time, eighteen_plus, verified]
      )
      res.send[user]
    });

// /api/hreq/episodes/update/:id
router.route('/update/:id')
  .put(async (req, res) => {
    //  console.log(`Episode Update requested.`)
    const { id } = req.params;
    const {show_id, user_id, epi_name, about, img, video_type, v_link, credits, show_name, category, sub_category, paid, price, epi_date, start_time, end_time, eighteen_plus} = req.body;
    // const values = Object.keys(vals).map(k => `${k}=${vals[k]}`)
    const conn = await connection(dbConfig).catch(e => {});
    const status = await query(
      conn,
      epiQuery.updateById(),
      [show_id, epi_name, about, img, video_type, v_link, credits, show_name, category, sub_category, paid, price, epi_date, start_time, end_time, eighteen_plus, id, user_id]
    )
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
