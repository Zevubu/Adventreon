const epiQuery ={
    createNew: () => `INSERT INTO episodes (epi_name, about, show_id, show_name, img, catagory, sub_catagory, host_id, host_name, b_img, credits, price, payment, patreon, wp_title, webpage, v_link, show_date, start_time, end_time, eighteen_plus, booked, paid, canceled, entertain ,couns, relig) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    findAll: () => `SELECT * FROM episodes`,
    findById: () => `SELECT * FROM episodes WHERE id = ?`,
    findByHost: () => `SELECT * FROM episodes WHERE host_id = ?`,
    findByShow: () => `SELECT * FROM episodes WHERE show_id = ?`,
    findAllKF: () =>`SELECT * FROM episodes WHERE eighteen_plus = 0`,
    findAllKFFree: () =>`SELECT * FROM episodes WHERE eighteen_plus = 0 and paid = 0 `,
    findKFById: () =>`SELECT * FROM episodes WHERE eighteen_plus = 0 and id=?`,
    updateById: () => `UPDATE episodes SET ? WHERE ? AND host_id = ?`,
    deleteById: () => `DELETE FROM episodes WHERE id=? AND host_id = ?`
};
// May need to apply "AND userid = {currentuser} OR Management = true"

module.exports = epiQuery; 