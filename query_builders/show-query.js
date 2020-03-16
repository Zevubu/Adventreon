const showQuery ={
    createNew: () => `INSERT INTO users (user_name, user_email, user_phone, password, user_type, title, bio_lg, bio_sm, img_wd, img_lg, img_sm, services, connections, appointments, availability, screened) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    findAll: () => `SELECT id, user_name, user_email, user_phone, user_type, title, bio_lg, bio_sm, img_wd, img_lg, img_sm, services, connections, appointments, availability, screened, time_stamp FROM users WHERE user_type='provider'`,
    findById: () => `SELECT id, user_name, user_email, user_phone, user_type, title, bio_lg, bio_sm, img_wd, img_lg, img_sm, services, connections, appointments, availability, screened, time_stamp FROM users WHERE id = ? AND user_type='provider'`,
    updateById: () => `UPDATE users SET ? WHERE ? AND user_type='provider'`,
    deleteById: () => `DELETE FROM users WHERE id=? AND user_type='provider'`
};
// May need to apply "AND userid = {currentuser} OR Management = true"

module.exports = showQuery;