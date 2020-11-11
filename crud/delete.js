const query = require('../controllers/query');

/**
 * @param  {} conn MySQL Connection reference
 * @param  {String} table Table to insert the values
 * @param  {[String]} columns Array of column names
 * @param  {[String]} values Array of values for those column names, can be multidientional
 */
module.exports = async (conn, table, id) => {
  try {
    console.log(`Id check: ${id}`)
    const deleter = await query(conn, `DELETE FROM ${table} WHERE id=?`,[id]);
    if (deleter.affectedRows === 0) {
        console.log(deleter)
        // const delFail = {}
    }
    return deleter;
  } catch(e) { console.log(e)}
}