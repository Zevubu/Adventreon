const showQuery ={
    createNew: () => `INSERT INTO shows (show_name, show_type, about, img, img_b, catagory, sub_catagory, host_id, host_name, host_img, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, entertain ,couns, relig) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    findAll: () => `SELECT * FROM shows`,
    findAllEnt:  () => `SELECT * FROM shows WHERE entertain=1`,
    findAllCouns:  () => `SELECT * FROM shows WHERE couns=1`,
    findAllRelig: () => `SELECT * FROM shows WHERE relig=1`,
    findById: () => `SELECT * FROM shows WHERE id = ?`,
    findByHost: () => `SELECT * FROM shows WHERE host_id = ?`,
    findAllKF: () =>`SELECT * FROM shows WHERE eighteen_plus = 0`,
    findKFById: () =>`SELECT * FROM shows WHERE eighteen_plus = 0 and id=?`,
    findAllKFFree: () =>`SELECT * FROM shows WHERE eighteen_plus = 0 and paid = 0 `,
    updateById: () => `UPDATE shows SET ? WHERE ? AND host_id = ?`,
    deleteById: () => `DELETE FROM shows WHERE id=? AND host_id = ?`
};
// May need to apply "AND userid = {currentuser} OR Management = true"

module.exports = showQuery; 