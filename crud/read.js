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
    const selecter = await query(conn, `SELECT * FROM ${table} WHERE id=?`,[id]);
    if (selecter.affectedRows === 0) {
        console.log(selecter)

    }
    return selecter;
  } catch(e) { console.log(e)}
}