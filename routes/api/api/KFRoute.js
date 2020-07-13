const router = require("express").Router();
const connection = require('../../../controllers/connection');
const query = require('../../../controllers/query');
const dbConfig = require('../../../dbConfig');
const epiQuery = require("../../../query_builders/epi-query");
const showQuery = require("../../../query_builders/show-query")

// Matches with "/api/kidfriendly/shows"
router.route("/shows")
    .get(async (req, res) => {
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, showQuery.findAllKF())
      res.send(user)
    })

// Matches with "/api/kidfriendly/shows/:id"
router.route('/shows/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, showQuery.findKFById(), [id])
      res.send(user)
  })

// Matches with "/api/kidfriendly/episodes"
router.route("/episodes")
    .get(async (req, res) => {
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, epiQuery.findAllKF())
      res.send(user)
    })
// Matches with "/api/kidfriendly/episodes/:id"
  router.route('/episodes/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, epiQuery.findKFById(), [id])
      res.send(user)
      
  })



  module.exports = router;