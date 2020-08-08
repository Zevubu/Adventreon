const showQuery ={
    createNew: () => `INSERT INTO shows (show_name, show_type, about, img, img_b, category, sub_category, video_type, v_link, host_id, host_name, host_img, credits, show_date, start_time, end_time, price, payment, patreon, wp_title, webpage, eighteen_plus, booked, paid, canceled, verified) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    findAll: () => `SELECT * FROM shows`,
    findByEpis: () => `SELECT id, show_name, host_id, category, sub_category, eighteen_plus FROM shows WHERE host_id = ? AND show_type = 'episodical' OR show_type = "live_show_epis"`,
    findById: () => `SELECT * FROM shows WHERE id=?`,
    findByHost: () => `SELECT * FROM shows WHERE host_id = ?`,// need to converthis call to only relivant data
    findByHostFull: () => `SELECT * FROM shows WHERE host_id = ?`,
    findAllKF: () =>`SELECT * FROM shows WHERE eighteen_plus = 0`,
    findKFById: () =>`SELECT * FROM shows WHERE eighteen_plus = 0 and id=?`,
    findAllKFFree: () =>`SELECT * FROM shows WHERE eighteen_plus = 0 and paid = 0 `,
    findNumOfCat: () =>'SELECT COUNT(*) AS total FROM shows WHERE category=?',
    findNumOfSubCat: () =>'SELECT count(*) AS total FROM shows WHERE category=? and sub_category=?',
    findRandByCat: () =>'SELECT * FROM shows WHERE category=? ORDER BY RAND() LIMIT 12',
    findRandbySubCat: () =>'SELECT * FROM shows WHERE category=? AND sub_category=? ORDER BY RAND() LIMIT 12',
    findNewByCat: () =>'SELECT * FROM shows WHERE category=? ORDER BY time_stamp DESC LIMIT 12',
    findNewBySubCat: () =>'SELECT * FROM shows WHERE category=? AND sub_category=? ORDER BY time_stamp DESC LIMIT 12',
    findAllByCat: ()=>'SELECT * FROM shows WHERE category=? ORDER BY time_stamp DESC',
    findAllbySubCat: () =>'SELECT * FROM shows WHERE category=? AND sub_category=? ORDER BY time_stamp DESC',
    updateById: () => `UPDATE shows SET show_name=?, show_type=?, about=?, img=?, img_b=?, category=?, sub_category=?, video_type=?, v_link=?, credits=?, price=?, payment=?, patreon=?, wp_title=?, webpage=?, eighteen_plus=?, booked=?, paid=?, canceled=? WHERE id=? AND host_id=?`,
    deleteById: () => `DELETE FROM shows WHERE id=? AND host_id=?`
};
// show_name=?, about=?, img=?, img_b=?, category=?, sub_category=?, video_type=?, v_link=?, host_id=?, host_name=?, host_img=?, credits=?, show_date=?, start_time=?, end_time=?, price=?, payment=?, patreon=?, wp_title=?, webpage=?, eighteen_plus=?, booked=?, paid=?, canceled=? 
// May need to apply "AND userid = {currentuser} OR Management = true"

module.exports = showQuery; 