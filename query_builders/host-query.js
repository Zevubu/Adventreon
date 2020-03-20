const hostQuery ={
    createNew: () =>`INSERT INTO users (user_name, user_type, dob, email, password, title, about, p_img, b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    findAll: () => `SELECT id, user_name, user_type, title, about, p_img, b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig, time_stamp FROM users WHERE user_type='host'`,
    findAllEnt:  () => `SELECT id, user_name, user_type, title, about, p_img, b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig, time_stamp FROM users WHERE user_type='host' AND entertain=1`,
    findAllCouns:  () => `SELECT id, user_name, user_type, title, about, p_img, b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig, time_stamp FROM users WHERE user_type='host' AND couns=1`,
    findAllRelig:  () => `SELECT id, user_name, user_type, title, about, p_img, b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig, time_stamp FROM users WHERE user_type='host' AND relig=1`,
    findById: () => `SELECT id, user_name, user_type, title, about, p_img, b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform, entertain ,couns, relig, time_stamp FROM users WHERE id = ? AND user_type='host'`,
    updateById: () => `UPDATE users SET ? WHERE ? AND user_type='host'`,
    deleteById: () => `DELETE FROM users WHERE id=? AND user_type='host'`
};
// May need to apply "AND userid = {currentuser} OR Management = true"

module.exports = hostQuery;