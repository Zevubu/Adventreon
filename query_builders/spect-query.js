const spectQuery ={
    createNew: () => `INSERT INTO users (user_name, user_type, email, password, about, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    findAll: () => `SELECT id, user_name, user_type, email, about, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, time_stamp FROM users WHERE user_type='spect'`,
    findById: () => `SELECT id, user_name, user_type, email, about, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, time_stamp FROM users WHERE id = ? AND user_type='spect'`,
    updateById: () => `UPDATE users SET ? WHERE ? AND user_type='spect'`,
    deleteById: () => `DELETE FROM users WHERE id=? AND user_type='spect'`

};
// May need to apply "AND userid = {currentuser} OR Management = true"

module.exports = spectQuery;