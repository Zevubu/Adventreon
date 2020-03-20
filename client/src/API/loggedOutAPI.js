import axios from "axios";
export default {
    getShows: function(){
        return axios.get("/api/shows").catch(err => console.log(`Get all shows error:${err}`));
    },
    getShowByID: function(id){
        return axios.get("/api/shows/" + id).catch(err => console.log(`Find show by id error:${err}`));
    },
    getHosts: function(){
        return axios.get("/api/hosts/all").catch(err => console.log(`Get all hosts error:${err}`));
    },
    getHostByID: function(id){
        return axios.get("/api/hosts/all/" + id).catch(err => console.log(`Find hosts by id error:${err}`));
    },
    getEntHosts: function(){
        return axios.get("/api/hosts/entertain").catch(err => console.log(`Get all hosts error:${err}`));
    },
    getCounsHosts: function(){
        return axios.get("/api/hosts/couns").catch(err => console.log(`Get all hosts error:${err}`));
    },
    getReligHosts: function(){
        return axios.get("/api/hosts/relig").catch(err => console.log(`Get all hosts error:${err}`));
    },
    createAccount: function(userData){
        console.log(`CREAT CHECK!`);
        console.log(`userData: ${userData}`);
        return axios.post("/api/users", userData).catch(err => console.log(`Account creation error:${err}`));
    },
    postLogIn: function(userData){
        return axios.post("/auth/login", userData).catch(err => console.log(`Login error:${err}`));
    },
    getEmailCheck: function(email){
        console.log(`EmailData: ${email}`);
        return axios.post("/api/opening/emailcheck", email).catch(err => console.log(`find email error:${err}`))
    }

}