const router = require("express").Router();
const connection = require('../../controllers/connection');
const query = require('../../controllers/query');
const dbConfig = require('../../dbConfig');
const hostQuery = require("../../query_builders/host-query");

// router.get()
//creating a provider profile needs to be restricted. May need to apply "AND userid = {currentuser} OR Management = true"
// Matches with "/api/hosts/all"
router.route("/all")
    .get(async (req, res) => {
      const conn = await connection(dbConfig).catch(e => console.log(e));
      const user = await query(conn, hostQuery.findAll())
      if(user.length <= 0){
        // console.log(`Perf count: ${user.length}`)
        res.status(204)
      }else{
        // console.log(`Perf count: ${user.length}`)
        res.send(user)
      }
    });
    // .post(async (req, res) =>{
    //   const {user_name, user_type,
    //  dob, email, password, title, about, p_img ,  b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig} = req.body;
    //   const conn = await connection(dbConfig).catch(e => {});
    //   const user = await query(
    //     conn,
    //     hostQuery.createNew(),
    //     [user_name, user_type, dob, email, password, title, about, p_img ,  b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig]
    //   )
    //   res.send[user]
    // });

// Matches with "/api/hosts/numcnt" 
router.route("/numcnt")
  .get( async (req,res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const catCount = await query(
      conn,
      'SELECT COUNT(*) AS total FROM users WHERE user_type="host" OR user_type="manager" AND mhswitch=1'
    )
    const theCNT = catCount[0]
    console.log(theCNT)
    res.send(theCNT)
  })
// Matches with "/api/hosts/catnumcnt/:cat" 
router.route("/catnumcnt/:cat")
  .get( async (req,res) => {
    const {cat} = req.params;
    // console.log(`Host catagory:${cat}`);
    const conn = await connection(dbConfig).catch(e => {});
    const catCount = await query(
      conn,
      'SELECT COUNT(*) AS total FROM users WHERE catagory=?',
      [cat]
    )
    const theCNT = catCount[0]
    // console.log(theCNT)
    res.send(theCNT)
  })

// // Matches with "/api/hosts/subnumcnt" 
// router.get("/subnumcnt", async (req,res) => {
//   const {catagory, subcatagory} = req.params;
//   console.log(`catagory:${catagory}`);
//   const conn = await connection(dbConfig).catch(e => {});
//   const catCount = await query(
//     conn,
//     'SELECT count(*) AS total FROM users WHERE catagory=?',
//     [catagory]
//   )
//   res.send(catCount)
// })

// Matches with "/api/hosts/music"
router.route("/music")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const user = await query(conn, hostQuery.findAllMuse())
    if(user.length <= 0){
      // console.log(`Perf count: ${user.length}`)
      res.status(204)
    }else{
      // console.log(`Perf count: ${user.length}`)
      res.send(user)
    }
});

// Matches with "/api/hosts/performance"
router.route("/performance")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const user = await query(conn, hostQuery.findAllPref())
    if(user.length <= 0){
      // console.log(`Perf count: ${user.length}`)
      res.status(204)
    }else{
      // console.log(`Perf count: ${user.length}`)
      res.send(user)
    }
});

// Matches with "/api/hosts/visual"
router.route("/visual")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const user = await query(conn, hostQuery.findAllVis())
    if(user.length <= 0){
      // console.log(`Perf count: ${user.length}`)
      res.status(204)
    }else{
      // console.log(`Perf count: ${user.length}`)
      res.send(user)
    }
});

// Matches with "/api/hosts/life"
router.route("/life")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const user = await query(conn, hostQuery.findAllLife())
    if(user.length <= 0){
      // console.log(`Perf count: ${user.length}`)
      res.status(204)
    }else{
      // console.log(`Perf count: ${user.length}`)
      res.send(user)
    }
});

// Matches with "/api/hosts/spirit"
router.route("/spirit")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const user = await query(conn, hostQuery.findAllSprit())
    if(user.length <= 0){
      // console.log(`Perf count: ${user.length}`)
      res.status(204)
    }else{
      // console.log(`Perf count: ${user.length}`)
      res.send(user)
    }
});


// Matches with "/api/hosts/all/:id"
router.route('/all/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => console.log(e));
      const user = await query(conn, hostQuery.findById(), [id])
      if(user.length <= 0){
        // console.log(`Perf count: ${user.length}`)
        res.status(204)
      }else{
        // console.log(`Perf count: ${user.length}`)
        res.send(user)
      }
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const {first_name, last_name, user_name, email, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage} = req.body;
    const conn = await connection(dbConfig).catch(e => console.log(e));
    const status = await query(
      conn,
      hostQuery.updateById(), 
      [first_name, last_name, user_name, email, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, id])
    res.send(status)
  })
  // .delete(async (req, res) => {
  //   const { id } = req.params;
  //   const conn = await connection(dbConfig).catch(e => {});
  //   const status = await query(conn, hostQuery.deleteById(), [id])
  //   res.send(status)
  // });

  module.exports = router;