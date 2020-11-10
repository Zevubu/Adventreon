// id username title pimg bimg
const hostQuery ={
    createNew: () =>`INSERT INTO users (first_name, last_name, user_name, user_type, mhswitch, dob, email, password, title, about, p_img, b_img, category, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform,verified) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    findAll: () => `SELECT id, user_name, title, p_img, b_img FROM users WHERE user_type='host' OR user_type='manager' AND mhswitch=1`,
    findAllByCat:  () => `SELECT id, user_name, title, about, p_img, b_img FROM users WHERE user_type='host' AND category=? OR user_type='manager' AND mhswitch=1 AND category=?`,
    findAllMuse:  () => `SELECT id, user_name, title, about, p_img, b_img FROM users WHERE user_type='host' AND category='music' OR user_type='manager' AND mhswitch=1 AND category='music'`,
    findAllPref:  () => `SELECT id, user_name, title, about, p_img, b_img FROM users WHERE user_type='host' AND category='performance' OR user_type='manager' AND mhswitch=1 AND category='performance'`,
    findAllVis:  () => `SELECT id, user_name, title, about, p_img, b_img FROM users WHERE user_type='host' AND category='visual' OR user_type='manager' AND mhswitch=1 AND category='visual'`,
    findAllLife:  () => `SELECT id, user_name, title, about, p_img, b_img FROM users WHERE user_type='host' AND category='life' OR user_type='manager' AND mhswitch=1 AND category='life'`,
    findAllSprit:  () => `SELECT id, user_name, title, about, p_img, b_img FROM users WHERE user_type='host' AND category='spiritual' OR user_type='manager' AND mhswitch=1 AND category='spiritual' `,
    findById: () => `SELECT id, user_name, email, title, about, p_img, b_img, category, payment, patreon, wp_title, webpage, rsvp_attend, rsvp_perform, verified, time_stamp FROM users WHERE id = ? AND user_type='host' OR id = ? AND user_type='manager' AND mhswitch=1`,
    updateById: () => `UPDATE users SET user_name=?, email=?, title=?, about=?, p_img=?, b_img=?, category=?, payment=?, patreon=?, wp_title=?, webpage=? WHERE id=?`,
    deleteById: () => `DELETE FROM users WHERE id=? and user_type='host'`
};
// May need to apply "AND userid = {currentuser} OR Management = true"

module.exports = hostQuery;