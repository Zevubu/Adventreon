const epiQuery ={
    createNew: () => `INSERT INTO episodes (show_id, user_id, epi_name, about, img, video_type, v_link, credits, show_name, host_name, catagory, sub_catagory, paid, price, epi_date, start_time, end_time, eighteen_plus, verified) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
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