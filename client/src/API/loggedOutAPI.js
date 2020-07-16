import axios from "axios";
export default {
    getShowByID: function(id){
        return axios.get("/api/shows/find/" + id).catch(err => console.log(`Find show by id error:${err}`));
    },
    getShows: function(){
        return axios.get("/api/shows/all").catch(err => console.log(`Get all shows error:${err}`));
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
    getEpisodesByID: function(id){
        return axios.get("/api/episodes/find/" + id).catch(err => console.log(`Find show by id error:${err}`));
    },
    getEpisodes: function(){
        return axios.get("/api/episodes/all").catch(err => console.log(`Get all shows error:${err}`));
    },
    getEpisByShow: function(){
        return axios.get("/api/episodes/all").catch(err => console.log(`Get all shows error:${err}`));
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
    getMuseHosts: function(){
        return axios.get("/api/hosts/music").catch(err => console.log(`Get all Music hosts error:${err}`));
    },
    getPerfHosts: function(){
        return axios.get("/api/hosts/performance").catch(err => console.log(`Get all Performance hosts error:${err}`));
    },
    getVisHosts: function(){
        return axios.get("/api/hosts/visual").catch(err => console.log(`Get all Visual host error:${err}`));
    },
    getLifeHosts: function(){
        return axios.get("/api/hosts/life").catch(err => console.log(`Get all Life host error:${err}`));
    },
    getSpritHosts: function(){
        return axios.get("/api/hosts/spirit").catch(err => console.log(`Get all spirit host error:${err}`));
    },
    createAccount: function(userData){
        // stays in log out
        // console.log(`CREAT CHECK!`);
        // console.log(`userData: ${userData}`);
        return axios.post("/auth/opening/register", userData).catch(err => console.log(`Account creation error:${err}`));
    },
    postLogIn: function(userData){
        return axios.post("/auth/opening/login", userData).catch(err => console.log(`Login error:${err}`));
    },
    getEmailCheck: function(email){
        // stays in log out
        console.log(`EmailData: ${email}`);
        return axios.get("/auth/opening/emailcheck", email).catch(err => console.log(`find email error:${err}`))
    },
    getHostNumCheck:function(){
        return axios.get("/api/hosts/numcnt").catch(err => console.log(`Host num check error:${err}`))
    },
    getHostCatNumCheck:function(category){
        return axios.get("/api/hosts/catnumcnt/"+ category).catch(err => console.log(`Host Catagory num check error:${err}`))
    },
    deleteUserById: function(id){
        return axios.delete("/auth/deleteuser/" + id).catch(err => console.log(`Delete user by id error:${err}`));
    },
    tokenValidate: function(token){
        console.log(`Token:${token}`)
        const options = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:'/validate'
        };
        console.log(options)
        return axios(options).catch(err => console.log(`Validate user by id error:${err}`));
    }


}