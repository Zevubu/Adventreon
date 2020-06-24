const router = require("express").Router();
const connection = require('../../controllers/connection');
const query = require('../../controllers/query');
const dbConfig = require('../../dbConfig');
const showQuery = require("../../query_builders/show-query");

// router.get()
//creating a provider profile needs to be restricted. May need to apply "AND userid = {currentuser} OR Management = true"
// Matches with "/api/shows/all
router.route("/all")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAll())
    res.send(user)
  })
  .post(async (req, res) =>{
    const {show_name, show_type, about, img, img_b, catagory, sub_catagory, video_type, v_link, host_id, host_name, host_img, credits, show_date, start_time, end_time, price, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, verified} = req.body;
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(
      conn,
      showQuery.createNew(),
      [show_name, show_type, about, img, img_b, catagory, sub_catagory, video_type, v_link, host_id, host_name, host_img, credits, show_date, start_time, end_time, price, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, verified]
    )
    res.send[user]
  });

// Matches with "/api/shows/catnumcnt/cat" 
router.route("/catnumcnt")
  .post( async (req,res) => {
    const {catagory} = req.params;
    console.log(`Show catagory:${catagory}`);
    const conn = await connection(dbConfig).catch(e => {});
    const catCount = await query(
      conn,
      'SELECT COUNT(*) AS total FROM shows WHERE catagory=?',
      [catagory]
    )
    res.send(catCount)
  })

// Matches with "/api/shows/subnumcnt" 
router.post("/subnumcnt", async (req,res) => {
  const {catagory, sub_catagory} = req.body;
  console.log(`show req: ${JSON.stringify(req.body)} catagory:${catagory}, sub_catagory:${sub_catagory}`);
  const conn = await connection(dbConfig).catch(e => {});
  const catCount = await query(
    conn,
    'SELECT count(*) AS total FROM shows WHERE catagory=? and sub_catagory=?',
    [catagory, sub_catagory]
  )
  console.log(`subCatCount:${JSON.stringify(catCount[0])}`)
  res.send(catCount[0])
})

  // Performance routes
  // Matches with /api/shows/performance
router.route("/performance")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllPref())
    res.send(user)
  }) 
// Matches with /api/shows/performance/story
router.route("/performance/story")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllPrefStor())
    res.send(user)
  }) 
// Matches with /api/shows/performance/play
router.route("/performance/play")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllPrefPlay())
    res.send(user)
  }) 
// Matches with /api/shows/performance/play
router.route("/performance/mixed")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllPrefMixed())
    res.send(user)
  }) 
// Matches with /api/shows/performance/play
router.route("/performance/variety")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllPrefVar())
    res.send(user)
  }) 
// Matches with /api/shows/performance/educate
router.route("/performance/educate")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllPrefEdu())
    res.send(user)
  })
// Matches with /api/shows/performance/educate
router.route("/performance/blog")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllPrefBlog())
    res.send(user)
  })  

// Music Routes
// Matches with /api/shows/music
router.route("/music")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllMuse())
    res.send(user)
  }) 
// Matches with /api/shows/music/acoustic
router.route("/music/acoustic")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllMuseAcu())
    res.send(user)
  })
// Matches with /api/shows/music/edm
router.route("/music/edm")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllMuseEdm())
    res.send(user)
  })  
// Matches with /api/shows/music/dj
router.route("/music/dj")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllMuseDj())
    res.send(user)
  }) 
// Matches with /api/shows/music/mixed
router.route("/music/mixed")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllMuseMix())
    res.send(user)
  }) 
// Matches with /api/shows/music/variety
router.route("/music/variety")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllMuseVar())
    res.send(user)
  }) 
// Matches with /api/shows/music/educate
router.route("/music/educate")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllMuseEdu())
    res.send(user)
  }) 
// Matches with /api/shows/music/blog
router.route("/music/blog")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllMuseBlog())
    res.send(user)
  }) 

// Visual routes
// Matches with /api/shows/visual
router.route("/visual")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllVis())
    res.send(user)
  })
// Matches with /api/shows/visual/analog
router.route("/visual/analog")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllVisAna())
    res.send(user)
  })
// Matches with /api/shows/visual/digital
router.route("/visual/digital")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllVisDig())
    res.send(user)
  })  
// Matches with /api/shows/visual/mixed
router.route("/visual/mixed")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllVisMix())
    res.send(user)
  })  
// Matches with /api/shows/visual/variety
router.route("/visual/variety")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllVisVar())
    res.send(user)
  })  
// Matches with /api/shows/visual/educate
router.route("/visual/educate")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllVisEdu())
    res.send(user)
  })  
// Matches with /api/shows/visual/blog
router.route("/visual/blog")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllVisBlog())
    res.send(user)
  })    
// Life Routes
// Matches with /api/shows/life
router.route("/life")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllLife())
    res.send(user)
  }) 
// Matches with /api/shows/life/counseling
router.route("/life/counseling")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllLifeCouns())
    res.send(user)
  }) 
// Matches with /api/shows/life/cooking
router.route("/life/cooking")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllLifeCook())
    res.send(user)
  }) 
// Matches with /api/shows/life/counseling
router.route("/life/lifehack")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllLifeLH())
    res.send(user)
  }) 
// Matches with /api/shows/life/variety
router.route("/life/variety")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllLifeVar())
    res.send(user)
  }) 
// Matches with /api/shows/life/educate
router.route("/life/educate")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllLifeEdu())
    res.send(user)
  }) 
// Matches with /api/shows/life/blog
router.route("/life/blog")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllLifeBlog())
    res.send(user)
  }) 

// Spiritual Routes
// Matches with /api/shows/spiritual
router.route("/spiritual")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllSpirt())
    res.send(user)
  }) 
// Matches with /api/shows/spiritual/guide
router.route("/spiritual/guide")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllSpirtGuid())
    res.send(user)
  }) 
// Matches with /api/shows/spiritual/spells
router.route("/spiritual/spells")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllSpirtSpell())
    res.send(user)
  }) 
// Matches with /api/shows/spiritual/readings
router.route("/spiritual/readings")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllSpirtRead())
    res.send(user)
  }) 
// Matches with /api/shows/spiritual/variety
router.route("/spiritual/variety")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllSpirtVar())
    res.send(user)
  }) 
// Matches with /api/shows/spiritual/educate
router.route("/spiritual/educate")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllSpirtEdu())
    res.send(user)
  }) 
// Matches with /api/shows/spiritual/blog
router.route("/spiritual/blog")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllSpirtBlog())
    res.send(user)
  }) 


// Matches with "/api/shows/entertain
router.route("/entertain")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllEnt())
    res.send(user)
  }) 



// Matches with "/api/shows/couns
router.route("/couns")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllCouns())
    res.send(user)
  })
// Matches with "/api/shows/relig
router.route("/relig")
  .get(async (req, res) => {
    const conn = await connection(dbConfig).catch(e => {});
    const user = await query(conn, showQuery.findAllRelig())
    res.send(user)
  }) 

// Matches with "/api/shows/host/:id"
router.route('/host/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, showQuery.findByHost(), [id])
      res.send(user)
  })

// Matches with "/api/shows/find/:id"
router.route('/find/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, showQuery.findById(), [id])
      res.send(user)
  })
  // .put(async (req, res) => {
  //   const { id } = req.params;
  //   const vals = req.body;
  //   const values = Object.keys(vals).map(k => `${k}=${vals[k]}`)
  //   const conn = await connection(dbConfig).catch(e => {});
  //   const status = await query(conn, showQuery.updateById, [values,id])
  //   res.send(status)
  // })
  // .delete(async (req, res) => {
  //   const { id } = req.params;
  //   const conn = await connection(dbConfig).catch(e => {});
  //   const status = await query(conn, showQuery.deleteById(), [id])
  //   res.send(status)
  // });

  // Matches with "/api/shows/find/:id"
  router.route('/epis/:id')
  .get(async (req, res) => {
      const { id } = req.params;
      const conn = await connection(dbConfig).catch(e => {});
      const user = await query(conn, showQuery.findByEpis(), [id])
      res.send(user)
  })
 

  module.exports = router;