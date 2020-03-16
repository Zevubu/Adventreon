require("dotenv").config();
const mysql = require('mysql');
const keys = require("../keys");

module.exports = async (params) => new Promise(
    (resolve, reject) => {
        const connection = mysql.createConnection(params);
        connection.connect(error => {
            if (error) {
                console.log(error)
                reject(error)
                return;
            }
            resolve(connection);
        })
});