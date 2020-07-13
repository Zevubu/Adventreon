const router = require("express").Router();
const connection = require('../../../controllers/connection');
const query = require('../../../controllers/query');
const dbConfig = require('../../../dbConfig');
const showQuery = require("../../../query_builders/show-query");


// Matches with "/loapi/shows/catnumcnt/cat" 
router.route("/catnumcnt/:category")
  .post( async (req,res) => {
    const {category} = req.params;
    console.log(`Show catagory:${category}`);
    const conn = await connection(dbConfig).catch(e => {});
    const catCount = await query(
      conn,
      'SELECT COUNT(*) AS total FROM shows WHERE catagory=?',
      [category]
    )
    res.send(catCount)
  })

// Matches with "/loapi/shows/subnumcnt" 
router.post("/subnumcnt", async (req,res) => {
  const {category, sub_category} = req.body;
  console.log(`show req: ${JSON.stringify(req.body)} category:${catagory}, sub_category:${sub_catagory}`);
  const conn = await connection(dbConfig).catch(e => {});
  const catCount = await query(
    conn,
    'SELECT count(*) AS total FROM shows WHERE catagory=? and sub_catagory=?',
    [category, sub_category]
  )
  console.log(`subCatCount:${JSON.stringify(catCount[0])}`)
  res.send(catCount[0])
})

module.exports = router;
