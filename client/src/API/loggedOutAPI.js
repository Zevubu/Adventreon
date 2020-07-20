import axios from "axios";
export default {
    getShowByID: function(id){
        return axios.get("/api/req/shows/find/" + id).catch(err => console.log(`Find show by id error:${err}`));
    },
    getShows: function(){
        return axios.get("/api/req/shows/all").catch(err => console.log(`Get all shows error:${err}`));
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
    getMuseHosts: function(){
        return axios.get("/api/req/hosts/music").catch(err => console.log(`Get all Music hosts error:${err}`));
    },
    getPerfHosts: function(){
        return axios.get("/api/req/hosts/performance").catch(err => console.log(`Get all Performance hosts error:${err}`));
    },
    getVisHosts: function(){
        return axios.get("/api/req/hosts/visual").catch(err => console.log(`Get all Visual host error:${err}`));
    },
    getLifeHosts: function(){
        return axios.get("/api/req/hosts/life").catch(err => console.log(`Get all Life host error:${err}`));
    },
    getSpritHosts: function(){
        return axios.get("/api/req/hosts/spirit").catch(err => console.log(`Get all spirit host error:${err}`));
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
        return axios.get("/api/req/hosts/numcnt").catch(err => console.log(`Host num check error:${err}`))
    },
    getHostCatNumCheck:function(category){
        return axios.get("/api/req/hosts/catnumcnt/"+ category).catch(err => console.log(`Host Catagory num check error:${err}`))
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