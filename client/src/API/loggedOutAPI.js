import axios from "axios";
export default {
    createAccount: function(userData){
        // stays in log out
        // console.log(`CREAT CHECK!`);
        // console.log(`userData: ${userData}`);
        return axios.post("/auth/opening/register", userData).catch(err => console.log(`Account creation error:${err}`));
    },
    postLogIn: function(userData){
        return axios.post("/auth/opening/login", userData).catch(err => console.log(`Login error:${err}`));
    },
    getUserNameCheck: function(name){
        // stays in log out
        // console.log(`EmailData: ${email}`);
        return axios.post("/auth/opening/nametest", name).catch(err => console.log(`find email error:${err}`))
    },
    getEmailCheck: function(email){
        // stays in log out
        // console.log(`EmailData: ${email}`);
        return axios.post("/auth/opening/emailtest", email).catch(err => console.log(`find email error:${err}`))
    },
    getHostNumCheck:function(){
        return axios.get("/api/req/hosts/numcnt").catch(err => console.log(`Host num check error:${err}`))
    },
    getHostCatNumCheck:function(category){
        return axios.get("/api/req/hosts/catnumcnt/"+ category).catch(err => console.log(`Host Catagory num check error:${err}`))
    },
    deleteUserById: function(id){
        return axios.delete("/auth/deleteuser/" + id).catch(err => console.log(`Delete user by id error:${err}`));
    },
    tokenValidate: function(token){
        // console.log(`Token:${token}`)
        const options = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:'/validate'
        };
        // console.log(options)
        return axios(options).catch(err => console.log(`Validate user by id error:${err}`));
    }


}