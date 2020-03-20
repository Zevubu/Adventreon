const showQuery ={
    createNew: () => `INSERT INTO shows (show_name, about, img, img_b, catagory, sub_catagory, host_id, host_name, host_img, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, entertain ,couns, relig) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    findAll: () => `SELECT id, show_name, about, img, img_b, catagory, sub_catagory, host_id, host_name, host_img, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, entertain ,couns, relig, time_stamp FROM shows`,
    findAllEnt:  () => `SELECT id, show_name, about, img, img_b, catagory, sub_catagory, host_id, host_name, host_img, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, entertain ,couns, relig, time_stamp FROM shows WHERE entertain=1`,
    findAllCouns:  () => `SELECT id, show_name, about, img, img_b, catagory, sub_catagory, host_id, host_name, host_img, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, entertain ,couns, relig, time_stamp FROM shows WHERE couns=1`,
    findAllRelig: () => `SELECT id, show_name, about, img, img_b, catagory, sub_catagory, host_id, host_name, host_img, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, entertain ,couns, relig, time_stamp FROM shows WHERE relig=1`,
    findById: () => `SELECT id, show_name, about, img, img_b, catagory, sub_catagory, host_id, host_name, host_img, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, entertain ,couns, relig, time_stamp FROM shows WHERE id = ?`,
    findByHost: () => `SELECT * FROM shows WHERE host_id = ?`,
    findAllKF: () =>`SELECT * FROM shows WHERE eighteen_plus = 0`,
    findKFById: () =>`SELECT * FROM shows WHERE eighteen_plus = 0 and id=?`,
    findAllKFFree: () =>`SELECT * FROM shows WHERE eighteen_plus = 0 and paid = 0 `,
    updateById: () => `UPDATE shows SET ? WHERE ? AND host_id = ?`,
    deleteById: () => `DELETE FROM shows WHERE id=? AND host_id = ?`
};
// May need to apply "AND userid = {currentuser} OR Management = true"

module.exports = showQuery; 