import axios from "axios";
// /api/episodes/show/:id
export default {
    createAccount: function(userData){
        console.log(`CREAT CHECK!`);
        console.log(`userData: ${userData}`);
        return axios.post("/auth/register", userData).catch(err => console.log(`Account creation error:${err}`));
    },
    getUserByID: function(id){
        return axios.get("/api/hosts/all/" + id).catch(err => console.log(`Find hosts by id error:${err}`));
    },
    deleteUserById: function(id){
        return axios.delete("'/auth/deleteuser/" + id).catch(err => console.log(`Delete user by id error:${err}`));
    }
} 
