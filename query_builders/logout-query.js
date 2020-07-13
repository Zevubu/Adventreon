const logoutQuery ={
    showFindAll: () => `SELECT * FROM shows`,
    findShowById: () => `SELECT * FROM shows WHERE id = ?`,
    findByHost: () => `SELECT * FROM shows WHERE host_id = ?`,
};
// need to add log out specification ie WHERE paid=false AND 18+= false verifide=true
module.exports = logoutQuery;