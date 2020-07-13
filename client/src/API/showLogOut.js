import axios from "axios";
export default {
    getShowByID: function(id){
        return axios.get("/api/shows/find/" + id).catch(err => console.log(`Find show by id error:${err}`));
    },
    getShows: function(){
        return axios.get("/api/shows/all").catch(err => console.log(`Get all shows error:${err}`));
    },
    getShowCatNumCheck:function(input){
        return axios.post("/api/shows/catnumcnt/"+ input).catch(err => console.log(`Show Catagory num check error:${err}`))
    },
    getShowSubcatNumCheck:function(input){
        // console.log(`Show count sub input${JSON.stringify(input)}`)
        return axios.post("/api/shows/subnumcnt", input).catch(err => console.log(`Show Sub_Catagory num check error:${err}`))
    },
    getPrefShows: function(){
        return axios.get("/api/shows/performance").catch(err => console.log(`Get preformance shows error:${err}`));
    },
    getPrefStorShows: function(){
        return axios.get("/api/shows/performance/story").catch(err => console.log(`Get preformance shows error:${err}`));
    },
    getPrefPlayShows: function(){
        return axios.get("/api/shows/performance/play").catch(err => console.log(`Get preformance shows error:${err}`));
    },
    getPrefMixShows: function(){
        return axios.get("/api/shows/performance/mixed").catch(err => console.log(`Get preformance shows error:${err}`));
    },
    getPrefVarShows: function(){
        return axios.get("/api/shows/performance/variety").catch(err => console.log(`Get preformance shows error:${err}`));
    },
    getPrefEduShows: function(){
        return axios.get("/api/shows/performance/educate").catch(err => console.log(`Get preformance shows error:${err}`));
    },
    getPrefBlogShows: function(){
        return axios.get("/api/shows/performance/blog").catch(err => console.log(`Get preformance shows error:${err}`));
    },
    getMuseShows: function(){
        return axios.get("/api/shows/music").catch(err => console.log(`Get music shows error:${err}`));
    },
    getMuseAcuShows: function(){
        return axios.get("/api/shows/music/acoustic").catch(err => console.log(`Get music shows error:${err}`));
    },
    getMuseEdmShows: function(){
        return axios.get("/api/shows/music/edm").catch(err => console.log(`Get music shows error:${err}`));
    },
    getMuseDjShows: function(){
        return axios.get("/api/shows/music/dj").catch(err => console.log(`Get music shows error:${err}`));
    },
    getMuseMixShows: function(){
        return axios.get("/api/shows/music/mixed").catch(err => console.log(`Get music shows error:${err}`));
    },
    getMuseVarShows: function(){
        return axios.get("/api/shows/music/variety").catch(err => console.log(`Get music shows error:${err}`));
    },
    getMuseEduShows: function(){
        return axios.get("/api/shows/music/educate").catch(err => console.log(`Get music shows error:${err}`));
    },
    getMuseBlogShows: function(){
        return axios.get("/api/shows/music/blog").catch(err => console.log(`Get music shows error:${err}`));
    },
    getVisShows: function(){
        return axios.get("/api/shows/visual").catch(err => console.log(`Get visual shows error:${err}`));
    },
    getVisAnaShows: function(){
        return axios.get("/api/shows/visual/analog").catch(err => console.log(`Get visual shows error:${err}`));
    },
    getVisDigiShows: function(){
        return axios.get("/api/shows/visual/digital").catch(err => console.log(`Get visual shows error:${err}`));
    },
    getVisMixShows: function(){
        return axios.get("/api/shows/visual/mixed").catch(err => console.log(`Get visual shows error:${err}`));
    },
    getVisVarShows: function(){
        return axios.get("/api/shows/visual/variety").catch(err => console.log(`Get visual shows error:${err}`));
    },
    getVisEduShows: function(){
        return axios.get("/api/shows/visual/educate").catch(err => console.log(`Get visual shows error:${err}`));
    },   
    getVisBlogShows: function(){
        return axios.get("/api/shows/visual/blog").catch(err => console.log(`Get visual shows error:${err}`));
    },
    getLifeShows: function(){
        return axios.get("/api/shows/life").catch(err => console.log(`Get life shows error:${err}`));
    },
    getLifeCounsShows: function(){
        return axios.get("/api/shows/life/counseling").catch(err => console.log(`Get life shows error:${err}`));
    },    
    getLifeCookShows: function(){
        return axios.get("/api/shows/life/cooking").catch(err => console.log(`Get life shows error:${err}`));
    },    
    getLifeLHShows: function(){
        return axios.get("/api/shows/life/lifehack").catch(err => console.log(`Get life shows error:${err}`));
    },    
    getLifeVarShows: function(){
        return axios.get("/api/shows/life/variety").catch(err => console.log(`Get life shows error:${err}`));
    },    
    getLifeEduShows: function(){
        return axios.get("/api/shows/life/educate").catch(err => console.log(`Get life shows error:${err}`));
    },    
    getLifeBlogShows: function(){
        return axios.get("/api/shows/life/blog").catch(err => console.log(`Get life shows error:${err}`));
    },
    getSpritShows: function(){
        return axios.get("/api/shows/spiritual").catch(err => console.log(`Get spiritual shows error:${err}`));
    },
    getSpritGidShows: function(){
        return axios.get("/api/shows/spiritual/guide").catch(err => console.log(`Get spiritual shows error:${err}`));
    },
    getSpritSpelShows: function(){
        return axios.get("/api/shows/spiritual/spells").catch(err => console.log(`Get spiritual shows error:${err}`));
    },
    getSpritReadShows: function(){
        return axios.get("/api/shows/spiritual/readings").catch(err => console.log(`Get spiritual shows error:${err}`));
    },
    getSpritVarShows: function(){
        return axios.get("/api/shows/spiritual/variety").catch(err => console.log(`Get spiritual shows error:${err}`));
    },
    getSpritEduShows: function(){
        return axios.get("/api/shows/spiritual/educate").catch(err => console.log(`Get spiritual shows error:${err}`));
    },
    getSpritBlogShows: function(){
        return axios.get("/api/shows/spiritual/blog").catch(err => console.log(`Get spiritual shows error:${err}`));
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