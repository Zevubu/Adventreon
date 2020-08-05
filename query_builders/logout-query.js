const logoutQuery ={
    showFindAll: () => `SELECT * FROM shows WHERE eighteen_plus=0 AND paid=0 AND canceled=0 AND verifide=1`,
    findShowById: () => `SELECT * FROM shows WHERE id = ? AND eighteen_plus=0 AND paid=0 AND canceled=0 AND verifide=1`,
    findShowByHost: () => `SELECT * FROM shows WHERE host_id = ? AND eighteen_plus=0 AND paid=0 AND canceled=0 AND verifide=1`,


};
//  eighteen_plus, booked, paid, canceled, verified
// need to add log out specification ie WHERE eighteen_plus=0 AND paid=0 AND canceled=0 AND verifide=1 
module.exports = logoutQuery;