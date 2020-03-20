const showQuery ={
    createNew: () => `INSERT INTO shows (show_name, img, img_b, catagory, sub_catagory, host_id, host_name, host_img, payment, patreon, wpTitle, webpage, eighteen_plus, booked, paid, canceled) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    findAll: () => `SELECT id, show_name, img, img_b, catagory, sub_catagory, host_id, host_name, host_img, payment, patreon, wpTitle, webpage, eighteen_plus, booked, paid, canceled, time_stamp FROM shows`,
    findById: () => `SELECT id, show_name, img, img_b, catagory, sub_catagory, host_id, host_name, host_img, payment, patreon, wpTitle, webpage, eighteen_plus, booked, paid, canceled, time_stamp FROM shows WHERE id = ?`,
    findByHost: () => `SELECT * FROM shows WHERE host_id = ?`,
    findAllKF: () =>`SELECT * FROM shows WHERE eighteen_plus = 0`,
    findKFById: () =>`SELECT * FROM shows WHERE eighteen_plus = 0 and id=?`,
    findAllKFFree: () =>`SELECT * FROM shows WHERE eighteen_plus = 0 and paid = 0 `,
    updateById: () => `UPDATE shows SET ? WHERE ? AND host_id = ?`,
    deleteById: () => `DELETE FROM shows WHERE id=? AND host_id = ?`
};
// May need to apply "AND userid = {currentuser} OR Management = true"

module.exports = showQuery;