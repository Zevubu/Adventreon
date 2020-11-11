const Router = require("express").Router();
const connection = require('../../../controllers/connection');
const query = require('../../../controllers/query');
const deleter = require('../../../crud/delete');
const dbConfig = require('../../../dbConfig');


// /api/mreq/profiles/all
Router.route("/all")
    .get(async (req,res)=>{
        const conn = await connection(dbConfig).catch(e=>{})
        const users = await query(
            conn,
            "SELECT id, first_name, last_name, user_name, user_type, mhswitch, dob, title, about, p_img, b_img, verified FROM users"
        )
        res.send(users)
    })
//  /api/mreq/profiles/allsm
Router.route("/allsm")
    .get(async (req,res)=>{
        const conn = await connection(dbConfig).catch(e=>{})
        const users = await query(
            conn,
            "SELECT id, first_name, last_name, user_name, user_type, mhswitch, dob, title, about, p_img, verified FROM users WHERE user_type='host' OR user_type='manager'"
        )
        res.send(users)
    })
     
     
// /api/mreq/profiles/delete
Router.route("/delete")
    .delete(async (req,res)=>{
        if (!req.body) return res.sendStatus(400); 
        const {id} = req.body;
        console.log(`Delete User check! #${JSON.stringify(req)}`)
        const conn = await connection(dbConfig).catch(e=>console.log(e));
        const result = await deleter(
            conn,
            "users",
            id
        );
        res.send(result)
    })


module.exports = Router;