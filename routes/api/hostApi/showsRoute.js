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
        const conn = await connection(dbConfig).catch(e => console.log(e));
        const user = await query(
        conn,
        showQuery.createNew(),
        [show_name, show_type, about, img, img_b, category, sub_category, video_type, v_link, host_id, host_name, host_img, credits, show_date, start_time, end_time, price, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, verified]
        )
        res.send[user]
    });
// /api/hreq/shows/upd/:id
router.route('/update/:id')
    .put(async (req, res) => {
        // console.log(`Show Update requested.`)
        const { id } = req.params;
        const {show_name,show_type, about, img, img_b, category, sub_category, video_type, v_link, host_id, credits,  price, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled} = req.body;
        const conn = await connection(dbConfig).catch(e => console.log(e));
        const status = await query(
            conn, 
            showQuery.updateById(), 
            [show_name, show_type, about, img, img_b, category, sub_category, video_type, v_link, credits, price, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, id, host_id]
        )
        res.send(status)
    })
// /api/hreq/shows/delete
router.route('/delete')  
    .delete(async (req, res) => {
        const { id, user_id } = req.body;
        const conn = await connection(dbConfig).catch(e => console.log(e));
        const status = await query(conn, showQuery.deleteById(), [id, user_id])
        res.send(status)
    });

module.exports = router;