const Router = require("express").Router();
const connection = require('../../../controllers/connection');
const query = require('../../../controllers/query');
const deleter = require('../../../crud/delete');
const dbConfig = require('../../../dbConfig');


// /api/mreq/shows/all
Router.route("/all")
    .get(async (req,res)=>{
        const conn = await connection(dbConfig).catch(e=>{})
        const users = await query(
            conn,
            "SELECT show_name, show_type, about, img, img_b, category, sub_category, video_type, v_link, host_id, host_name, host_img, credits, show_date, start_time, end_time, price, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, verified FROM shows"
        )
        res.send(users)
    })
// /api/mreq/shows/byuid/:id
Router.route("/byuid/:id")
    .get(async (req,res)=>{
        const {id} = req.params;
        console.log(`Show Id Check: ${id}`)
        const conn = await connection(dbConfig).catch(e=>{})
        const shows = await query(
            conn,
            "SELECT * FROM shows WHERE host_id=?",
            [id]
        )
        res.send(shows)
    })
// /api/mreq/shows/delete
Router.route("/delete")
    .delete(async (req,res)=>{
        if (!req.body) return res.sendStatus(400); 
        const {id} = req.body;
        console.log(`Delete show check! #${id}`)
        const conn = await connection(dbConfig).catch(e=>console.log(e));
        const result = await deleter(
            conn,
            "shows",
            id
        );
        res.send(result)
    })


module.exports = Router;