module.exports = async (conn, q, params) => new Promise(
    (resolve, reject) => {
        const handler = (error, result) => {
            if (error) {
                console.log(error);
                reject(error);
                return;
            }
            resolve(result);
        }
        console.log(`Query tester: ${conn}, ${q}, ${params}`)
        conn.query(q, params, handler);
    }).catch(e => console.log(e));