import axios from "axios";
// /api/episodes/show/:id
export default {
    createHostAccount: function(userData){
        // console.log(`CREAT CHECK!`);
        // console.log(`userData token: ${JSON.stringify(userData)}`);
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
        // console.log(`CREAT CHECK!`);
        // console.log(`userData token: ${JSON.stringify(userData)}`);
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
        return axios.get("/api/req/hosts/all/" + id).catch(err => console.log(`Find hosts by id error:${err}`));
    },
    deleteUserById: function(id){
        return axios.delete("'/auth/deleteuser/" + id).catch(err => console.log(`Delete user by id error:${err}`));
    },
    getUserNameCheck: function(name){
        return axios.post("/auth/tools/nametest", name).catch(err => console.log(`find email error:${err}`))
    },
    getEmailCheck: function(email){
        return axios.post("/auth/tools/emailtest", email).catch(err => console.log(`find email error:${err}`))
    },
} 
