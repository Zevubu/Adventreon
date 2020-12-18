const router = require("express").Router();
const connection = require('../../../controllers/connection');
const query = require('../../../controllers/query');
const dbConfig = require('../../../dbConfig');
const showQuery = require("../../../query_builders/logout-query");

// Matches with /api/opening/shows/all
router.route("/all")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const show = await query(conn, showQuery.showFindAll())
    res.send(show)
  })

// Matches with "/api/opening/shows/catnumcnt/cat" 
router.route("/catnumcnt/:category")
  .post( async (req,res) => {
    const {category} = req.params;
    // console.log(`Show category:${category}`);
    const conn = await connection(dbConfig).catch(e => {});
    const catCount = await query(
      conn,
      'SELECT COUNT(*) AS total FROM shows WHERE category=? AND eighteen_plus=0 AND paid=0 AND canceled=0 AND verifide=1',
      [category]
    )
    res.send(catCount)
  })

// Matches with "/api/opening/shows/subnumcnt" 
router.post("/subnumcnt", async (req,res) => {
  const {category, sub_category} = req.body;
  // console.log(`show req: ${JSON.stringify(req.body)} category:${category}, sub_category:${sub_category}`);
  const conn = await connection(dbConfig).catch(e => {});
  const catCount = await query(
    conn,
    'SELECT count(*) AS total FROM shows WHERE category=? AND sub_category=? AND eighteen_plus=0 AND paid=0 AND canceled=0 AND verifide=1',
    [category, sub_category]
  )
  // console.log(`subCatCount:${JSON.stringify(catCount[0])}`)
  res.send(catCount[0])
})
// Matches with "/api/opening/req/shows/category" 
router.post("/category", async (req,res) => {
  const {category} = req.body;
  const conn = await connection(dbConfig).catch(e => {});
  const shows = await query(
    conn,
    'SELECT * FROM shows WHERE category=? AND eighteen_plus=0 AND paid=0 AND canceled=0 AND verifide=1',
    [category]
  )
  res.send(shows)
})
// Matches with "/api/opening/shows/subcat" 
router.post("/subcat", async (req, res) =>{
  const {category, sub_category} = req.body;
  const conn = await connection(dbConfig).catch(e => {});
  const shows = await query(
    conn,
    'SELECT * FROM shows WHERE category=? and sub_category=? AND eighteen_plus=0 AND paid=0 AND canceled=0 AND verifide=1',
    [category, sub_category]
  )
  res.send(shows)
})
// Matches with /api/opening/shows/host/:id
router.route('/host/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const show = await query(conn, showQuery.findShowByHost(), [id])
      res.send(show)
  })
// Matches with "/api/opening/shows/find/:id"
router.route('/find/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const show = await query(conn, showQuery.findShowById(), [id])
      res.send(show)
  })
 
module.exports = router;
