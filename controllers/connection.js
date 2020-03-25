require("dotenv").config();
const mysql = require('mysql');
const keys = require("../keys");
// let connection
module.exports = async (params) => new Promise(
    
    (resolve, reject) => {
        // if (process.env.JAWSDB_URL) {
        //     // Database is JawsDB on Heroku
        //     connection = mysql.createConnection(process.env.JAWSDB_URL);
        // } else {
        const connection = mysql.createConnection(params);
        // }
        connection.connect(error => {
            if (error) {
                console.log(error)
                reject(error)
                return;
            }
            resolve(connection);
        })
    }

);