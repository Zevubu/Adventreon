const router = require("express").Router();
const connection = require('../../controllers/connection');
const query = require('../../controllers/query');
const dbConfig = require('../../dbConfig');
const showQuery = require("../../query_builders/show-query");

// router.get()
//creating a provider profile needs to be restricted. May need to apply "AND userid = {currentuser} OR Management = true"
// Matches with "/api/shows/
router.route("/")
    .get(async (req, res) => {
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, showQuery.findAll())
      res.send(user)
    })
    .post(async (req, res) =>{
      const {event_name, host_name, host_id, provider_info, payment, patreon, wpTitle, webpage, video_links, show_date, start_time, end_time} = req.body;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(
        conn,
        showQuery.createNew(),
        [event_name, host_name, host_id, provider_info, payment, patreon, wpTitle, webpage, video_links, show_date, start_time, end_time]
      )
      res.send[user]
    });

// Matches with "/api/shows/:id"
router.route('/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, showQuery.findById(), [id])
      res.send(user)
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const vals = req.body;
    const values = Object.keys(vals).map(k => `${k}=${vals[k]}`)
    const conn = await connection(dbConfig).catch(e => {});
    const status = await query(conn, showQuery.updateById, [values,id])
    res.send(status)
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const conn = await connection(dbConfig).catch(e => {});
    const status = await query(conn, showQuery.deleteById(), [id])
    res.send(status)
  });

  module.exports = router;