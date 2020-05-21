const hostQuery ={
    createNew: () =>`INSERT INTO users (user_name, user_type, mhswitch, dob, email, password, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform,verified) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    findAll: () => `SELECT id, user_name, user_type, mhswitch, dob, email, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform,verified, time_stamp FROM users WHERE user_type='host'`,
    findAllEnt:  () => `SELECT id, user_name, user_type, mhswitch, dob, email, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform,verified, time_stamp FROM users WHERE user_type='host' AND entertain=1`,
    findAllCouns:  () => `SELECT id, user_name, user_type, mhswitch, dob, email, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform, verified, time_stamp FROM users WHERE user_type='host' AND couns=1`,
    findAllRelig:  () => `SELECT id, user_name, user_type, mhswitch, dob, email, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform, verified, time_stamp FROM users WHERE user_type='host' AND relig=1`,
    findById: () => `SELECT id, user_name, user_type, mhswitch, dob, email, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform, verified, time_stamp FROM users WHERE id = ?`,
    updateById: () => `UPDATE users SET user_name=?, dob=?, email=?, title=?, about=?, p_img=?, b_img=?, catagory=?, payment=?, patreon=?, wp_title=?, webpage=?, rsvp_attend=?, rsvp_perform=?, verified=?, WHERE id=?`,
    deleteById: () => `DELETE FROM users WHERE id=?`
};
// May need to apply "AND userid = {currentuser} OR Management = true"

module.exports = hostQuery;