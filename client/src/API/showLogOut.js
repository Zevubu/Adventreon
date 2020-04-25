import axios from "axios";
export default {
    getShowByID: function(id){
        return axios.get("/api/shows/find/" + id).catch(err => console.log(`Find show by id error:${err}`));
    },
    getShows: function(){
        return axios.get("/api/shows/all").catch(err => console.log(`Get all shows error:${err}`));
    },
    getPrefShows: function(){
        return axios.get("/api/shows/performance").catch(err => console.log(`Get preformance shows error:${err}`));
    },
    getPrefStorShows: function(){
        return axios.get("/api/shows/performance/story").catch(err => console.log(`Get preformance shows error:${err}`));
    },
    getMuseShows: function(){
        return axios.get("/api/shows/music").catch(err => console.log(`Get music shows error:${err}`));
    },
    getVisShows: function(){
        return axios.get("/api/shows/visual").catch(err => console.log(`Get visual shows error:${err}`));
    },
    getLifeShows: function(){
        return axios.get("/api/shows/life").catch(err => console.log(`Get life shows error:${err}`));
    },
    getSpritShows: function(){
        return axios.get("/api/shows/spiritual").catch(err => console.log(`Get spiritual shows error:${err}`));
    },
    getEntShows: function(){
        return axios.get("/api/shows/entertain").catch(err => console.log(`Get Entertain shows error:${err}`));
    },
    getCounsShows: function(){
        return axios.get("/api/shows/couns").catch(err => console.log(`Get Counseler shows error:${err}`));
    },
    getReligShows: function(){
        return axios.get("/api/shows/relig").catch(err => console.log(`Get all Relig shows error:${err}`));
    },
    getShowByHost:function(id){
        return axios.get("/api/shows/host/" + id).catch(err => console.log(`Find hosts shows by id error:${err}`));
    },
    getHosts: function(){
        return axios.get("/api/hosts/all").catch(err => console.log(`Get all hosts error:${err}`));
    },
    getHostByID: function(id){
        return axios.get("/api/hosts/all/" + id).catch(err => console.log(`Find hosts by id error:${err}`));
    },
    getEntHosts: function(){
        return axios.get("/api/hosts/entertain").catch(err => console.log(`Get all Entertain hosts error:${err}`));
    },
    getCounsHosts: function(){
        return axios.get("/api/hosts/couns").catch(err => console.log(`Get all Counseler hosts error:${err}`));
    },
    getReligHosts: function(){
        return axios.get("/api/hosts/relig").catch(err => console.log(`Get all Relig host error:${err}`));
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