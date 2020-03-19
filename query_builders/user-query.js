const userQuery ={
    createNew: () => `INSERT INTO users (user_name, user_type, dob, email, password, title, about, p_img, b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    findAll: () => `SELECT id,user_name, user_type, dob, email, title, about, p_img, b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, time_stamp FROM users WHERE user_type='user'`,
    findById: () => `SELECT id,user_name, user_type, dob, email, title, about, p_img, b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, time_stamp FROM users WHERE id = ? AND user_type='user'`,
    updateById: () => `UPDATE users SET ? WHERE ? AND user_type='user'`,
    deleteById: () => `DELETE FROM users WHERE id=? AND user_type='user'`
};
// May need to apply "AND userid = {currentuser} OR Management = true"

module.exports = userQuery;