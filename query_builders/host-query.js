// id username title pimg bimg
const hostQuery ={
    createNew: () =>`INSERT INTO users (first_name, last_name, user_name, user_type, mhswitch, dob, email, password, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform,verified) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    findAll: () => `SELECT id, user_name, title, p_img, b_img FROM users WHERE user_type='host' OR user_type='manager' AND mhswitch=1`,
    findAllMuse:  () => `SELECT id, user_name, title, about, p_img, b_img FROM users WHERE user_type='host' AND catagory='music' OR user_type='manager' AND mhswitch=1 AND catagory='music'`,
    findAllPref:  () => `SELECT id, user_name, title, about, p_img, b_img FROM users WHERE user_type='host' AND catagory='performance' OR user_type='manager' AND mhswitch=1 AND catagory='performance'`,
    findAllVis:  () => `SELECT id, user_name, title, about, p_img, b_img FROM users WHERE user_type='host' AND catagory='visual' OR user_type='manager' AND mhswitch=1 AND catagory='visual'`,
    findAllLife:  () => `SELECT id, user_name, title, about, p_img, b_img FROM users WHERE user_type='host' AND catagory='life' OR user_type='manager' AND mhswitch=1 AND catagory='life'`,
    findAllSprit:  () => `SELECT id, user_name, title, about, p_img, b_img FROM users WHERE user_type='host' AND catagory='spiritual' OR user_type='manager' AND mhswitch=1 AND catagory='spiritual' `,
    findById: () => `SELECT id, user_name, email, title, about, p_img, b_img, catagory, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform, verified, time_stamp FROM users WHERE id = ? AND user_type='host' OR id = ? AND user_type='manager' AND mhswitch=1`,
    updateById: () => `UPDATE users SET user_name=?, email=?, title=?, about=?, p_img=?, b_img=?, catagory=?, payment=?, patreon=?, wp_title=?, webpage=? WHERE id=?`,
    deleteById: () => `DELETE FROM users WHERE id=?`
};
// May need to apply "AND userid = {currentuser} OR Management = true"

module.exports = hostQuery;