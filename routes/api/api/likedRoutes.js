const router = require("express").Router();
const connection = require('../../../controllers/connection');
const query = require('../../../controllers/query');
const dbConfig = require('../../../dbConfig');

// liked check. Check if show is or isn't liked. 
// takes in user_id and show_id and check if an instance exists. 

// get all liked shows by user ID
// pulls item_id from liked by item_table==="shows" and user id==?.
// makes list of show id. Pull's show in  

// get all liked users by user_ID
// pulls item_id from liked by item_table==="users" and user_id==?.
// makes list of users id. Pull's users based on list in  


// all