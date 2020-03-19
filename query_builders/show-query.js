const showQuery ={
    createNew: () => `INSERT INTO shows (event_name, host_name, host_id, provider_info, payment, patreon, wpTitle, webpage, video_links, show_date, start_time, end_time) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`,
    findAll: () => `SELECT id, event_name, host_name, host_id, provider_info, payment, patreon, wpTitle, webpage, video_links, show_date, start_time, end_time, time_stamp FROM shows`,
    findById: () => `SELECT id, event_name, host_name, host_id, provider_info, payment, patreon, wpTitle, webpage, video_links, show_date, start_time, end_time, time_stamp FROM shows WHERE id = ?`,
    findByHost: () => `SELECT * shows WHERE host_id = ?`,
    updateById: () => `UPDATE shows SET ? WHERE ? AND host_id = ?`,
    deleteById: () => `DELETE FROM shows WHERE id=? AND host_id = ?`
};
// May need to apply "AND userid = {currentuser} OR Management = true"

module.exports = showQuery;