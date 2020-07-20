import axios from "axios";
export default {
    getShowByID: function(id){
        return axios.get("/api/shows/find/" + id).catch(err => console.log(`Find show by id error:${err}`));
    },
    getShows: function(){
        return axios.get("/api/shows/all").catch(err => console.log(`Get all shows error:${err}`));
    },
    getShowCatNumCheck:function(input){
        return axios.post("/api/req/shows/catnumcnt/"+ input).catch(err => console.log(`Show Catagory num check error:${err}`))
    },
    getShowSubcatNumCheck:function(input){
        // console.log(`Show count sub input${JSON.stringify(input)}`)
        return axios.post("/api/req/shows/subnumcnt", input).catch(err => console.log(`Show Sub_Catagory num check error:${err}`))
    },
    getShowByHost:function(id){
        return axios.get("/api/req/shows/host/" + id).catch(err => console.log(`Find hosts shows by id error:${err}`));
    },
    getHosts: function(){
        return axios.get("/api/req/hosts/all").catch(err => console.log(`Get all hosts error:${err}`));
    },
    getHostByID: function(id){
        return axios.get("/api/req/hosts/all/" + id).catch(err => console.log(`Find hosts by id error:${err}`));
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