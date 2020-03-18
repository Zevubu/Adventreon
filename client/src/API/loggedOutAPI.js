import axios from "axios";
export default {
    getProviders: function(){
        return axios.get("/api/opening/").catch(err => console.log(`Get all providers error:${err}`));
    },
    getServices: function(){
        return axios.get("/api/opening/services").catch(err => console.log(`Get all services error:${err}`));
    },
    getProviderByID: function(id){
        return axios.get("/api/opening/" + id).catch(err => console.log(`Find provider by id error:${err}`));
    },
    createAccount: function(userData){
        console.log(`CREAT CHECK!`);
        console.log(`userData: ${userData}`);
        return axios.post("/api/opening", userData).catch(err => console.log(`Account creation error:${err}`));
    },
    postLogIn: function(userData){
        return axios.post("/auth/login", userData).catch(err => console.log(`Login error:${err}`));
    },
    getEmailCheck: function(email){
        console.log(`EmailData: ${email}`);
        return axios.post("/api/opening/emailcheck", email).catch(err => console.log(`find email error:${err}`))
    }

}