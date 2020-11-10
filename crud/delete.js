const query = require('../controllers/query');
const {valuesForQuery} = require('../controllers/values-for-insert');

/**
 * @param  {} conn MySQL Connection reference
 * @param  {String} table Table to insert the values
 * @param  {[String]} columns Array of column names
 * @param  {[String]} values Array of values for those column names, can be multidientional
 */
module.exports = async (conn, table, id) => {
  try {
    const deleter = await query(conn, `DELETE FROM ${table} WHERE id=?`,[id] );
    if (deleter.insertId = 0) {
        console.log(deleter)
    }
    return deleter;
  } catch(e) { console.log(e)}
}