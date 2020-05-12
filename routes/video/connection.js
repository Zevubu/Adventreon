require("dotenv").config();
let Vimeo = require('vimeo').Vimeo;

module.exports = async (params) => new Promise(

    (resolve,reject) => {
        const client = new Vimeo(params);
        client.connect(error => {
            if (error) {
                console.log(error)
                reject(error)
                return;
            }
            resolve(client);
        })
    }
);