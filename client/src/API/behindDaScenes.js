import axios from "axios";
// /api/episodes/show/:id
export default {
    createHostAccount: function(userData){
        console.log(`CREAT CHECK!`);
        console.log(`userData token: ${JSON.stringify(userData)}`);
        const options = {
            method: 'POST',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${userData.token.replace(/\"/g, '')}` 
            },
            url:"/auth/temph/register",
            data:userData.data
        };
        return axios(options).catch(err => console.log(`Account creation error:${err}`));
    },
    createManagAccount: function(userData){
        console.log(`CREAT CHECK!`);
        console.log(`userData token: ${JSON.stringify(userData)}`);
        const options = {
            method: 'POST',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${userData.token.replace(/\"/g, '')}` 
            },
            url:"/auth/tempm/register",
            data:userData.data
        };
        return axios(options).catch(err => console.log(`Account creation error:${err}`));
    },
    getUserByID: function(id){
        return axios.get("/api/hosts/all/" + id).catch(err => console.log(`Find hosts by id error:${err}`));
    },
    deleteUserById: function(id){
        return axios.delete("'/auth/deleteuser/" + id).catch(err => console.log(`Delete user by id error:${err}`));
    }
} 
