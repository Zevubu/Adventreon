const router = require("express").Router();
const connection = require('../../../controllers/connection');
const query = require('../../../controllers/query');
const dbConfig = require('../../../dbConfig');
const showQuery = require("../../../query_builders/show-query");

// router.get()
//creating a provider profile needs to be restricted. May need to apply "AND userid = {currentuser} OR Management = true"
// Matches with "/api/req/shows/all 
router.route("/all")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const show = await query(conn, showQuery.findAll())
    res.send(show)
  })

// Matches with "/api/req/shows/catnumcnt/cat" 
router.route("/catnumcnt/:category")
  .post( async (req,res) => {
    const {category} = req.params;
    console.log(`Show category:${category}`);
    const conn = await connection(dbConfig).catch(e => {});
    const catCount = await query(
      conn,
      'SELECT COUNT(*) AS total FROM shows WHERE category=?',
      [category]
    )
    res.send(catCount)
  })

// Matches with "/api/req/shows/subnumcnt" 
router.post("/subnumcnt", async (req,res) => {
  const {category, sub_category} = req.body;
  console.log(`show req: ${JSON.stringify(req.body)} category:${category}, sub_category:${sub_category}`);
  const conn = await connection(dbConfig).catch(e => {});
  const catCount = await query(
    conn,
    'SELECT count(*) AS total FROM shows WHERE category=? and sub_category=?',
    [category, sub_category]
  )
  console.log(`subCatCount:${JSON.stringify(catCount[0])}`)
  res.send(catCount[0])
})
// Matches with "/api/req/shows/category" 
router.post("/category", async (req,res) => {
  const {category} = req.body;
  const conn = await connection(dbConfig).catch(e => {});
  const shows = await query(
    conn,
    'SELECT * FROM shows WHERE category=?',
    [category]
  )
  res.send(shows)
})
// Matches with "/api/shows/subcat" 
router.post("/subcat", async (req, res) =>{
  const {category, sub_category} = req.body;
  const conn = await connection(dbConfig).catch(e => {});
  const shows = await query(
    conn,
    'SELECT * FROM shows WHERE category=? and sub_category=?',
    [category, sub_category]
  )
  res.send(shows)
})


// Matches with /opening/shows/host/:id
router.route('/host/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const show = await query(conn, showQuery.findByHost(), [id])
      res.send(show)
  })

// Matches with "/opening/shows/find/:id"
router.route('/find/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const show = await query(conn, showQuery.findById(), [id])
      res.send(show)
  })

  // Matches with "/api/req/shows/epis/:id"
  router.route('/epis/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const show = await query(conn, showQuery.findByEpis(), [id])
      res.send(show)
  })
 

  module.exports = router;