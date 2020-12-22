const router = require("express").Router();
const connection = require('../../../controllers/connection');
const query = require('../../../controllers/query');
const dbConfig = require('../../../dbConfig');
const hostQuery = require("../../../query_builders/host-query");

// router.get()
//creating a provider profile needs to be restricted. May need to apply "AND userid = {currentuser} OR Management = true"
// Matches with "/api/req/hosts/all"
router.route("/all")
    .get(async (req, res) => {
      const errLog=(err)=>{
        console.log(`All Host Error:${err}`);
        res.send({valid:false,err:err})   
      } 
      const conn = await connection(dbConfig).catch(e => errLog(e));
      const hosts = await query(conn, hostQuery.findAll()).catch(e => errLog(e))
      if(hosts.length > 0){
        res.send({valid:true,hosts:hosts})
      }else{
        // console.log(`Perf count: ${user.length}`)
        res.send({valid:false,hosts:hosts})
      }
    });

// Matches with "/api/req/hosts/numcnt" 
router.route("/numcnt")
  .get( async (req,res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const catCount = await query(
      conn,
      'SELECT COUNT(*) AS total FROM users WHERE user_type="host" OR user_type="manager" AND mhswitch=1'
    )
    const theCNT = catCount[0]
    // console.log(theCNT)
    res.send(theCNT)
  })

// Matches with "/api/req/hosts/catnumcnt/:cat" 
router.route("/catnumcnt/:cat")
  .get( async (req,res) => {
    const {cat} = req.params;
    // console.log(`Host category:${cat}`);
    const conn = await connection(dbConfig).catch(e => {});
    const catCount = await query(
      conn,
      'SELECT COUNT(*) AS total FROM users WHERE user_type="host" AND category=? OR user_type="manager" AND mhswitch=1 AND category=?',
      [cat, cat]
    )
    const theCNT = catCount[0]
    // console.log(theCNT)
    res.send(theCNT)
  });
  // Matches with "/api/req/hosts/category" 
router.post("/category", async (req,res) => {
  const {category} = req.body;
  const errLog=(err)=>{
    console.log(`Host Category Error:${err}`);
    res.send({valid:false,err:err})   
  } 
  const conn = await connection(dbConfig).catch(e => errLog(e));
  const hosts = await query(
    conn,
    hostQuery.findAllByCat(),
    [category, category]
  )
  if(hosts.length > 0){
    res.send({valid:true,hosts:hosts})
  }
  else{
    res.send({valid:false,hosts:hosts})
  }
});

// Matches with "/api/req/hosts/all/:id"
router.route('/all/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => console.log(e));
      const user = await query(conn, hostQuery.findById(), [id,id])
      if(user.length <= 0){
        // console.log(`Perf count: ${user.length}`)
        res.status(204)
      }else{
        // console.log(`profile data${JSON.stringify(user)}`)
        res.send(user)
      }
  });



  module.exports = router;