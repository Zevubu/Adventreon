const Router = require("express").Router();
const connection = require('../../../controllers/connection');
const query = require('../../../controllers/query');
const deleter = require('../../../crud/delete');
const dbConfig = require('../../../dbConfig');


// /api/mreq/episodes/all
Router.route("/all")
    .get(async (req,res)=>{
        const conn = await connection(dbConfig).catch(e=>{})
        const users = await query(
            conn,
            "SELECT * FROM episodes"
        )
        res.send(users)
    })
// /api/mreq/episodes/bysid/:id
Router.route("/bysid/:id")
    .get(async (req,res)=>{
        const {id} = req.params;
        // console.log(`Episode Id Check: ${id}`)
        const conn = await connection(dbConfig).catch(e=>{})
        const shows = await query(
            conn,
            "SELECT * FROM episodes WHERE show_id=?",
            [id]
        )
        res.send(shows) 
    })

// /api/mreq/episodes/byuid/:id
Router.route("/byuid/:id")
    .get(async (req,res)=>{
        const {id} = req.params;
        // console.log(`Episode Id Check: ${id}`)
        const conn = await connection(dbConfig).catch(e=>{})
        const shows = await query(
            conn,
            "SELECT * FROM episodes WHERE user_id=?",
            [id]
        )
        res.send(shows) 
    })
// /api/mreq/episodes/delete
Router.route("/delete")
    .delete(async (req,res)=>{
        if (!req.body) return res.sendStatus(400); 
        const {id} = req.body;
        // console.log(`Delete episode check! #${id}`)
        const conn = await connection(dbConfig).catch(e=>console.log(e));
        const result = await deleter(
            conn,
            "episodes",
            id
        );
        res.send(result)
    })


module.exports = Router;