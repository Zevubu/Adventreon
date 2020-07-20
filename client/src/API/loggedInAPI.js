import axios from "axios";
export default {
    getHostNumCheck:function(){
        return axios.get("/api/req/hosts/numcnt").catch(err => console.log(`Host num check error:${err}`))
    },
    getHostCatNumCheck:function(category){
        return axios.get("/api/req/hosts/catnumcnt/"+ category).catch(err => console.log(`Host Catagory num check error:${err}`))
    },
    getShowCatNumCheck:function(input){
        return axios.post("/api/req/shows/catnumcnt/"+ input).catch(err => console.log(`Show Catagory num check error:${err}`))
    },
    getShowSubcatNumCheck:function(input){
        // console.log(`Show count sub input${JSON.stringify(input)}`)
        return axios.post("/api/req/shows/subnumcnt", input).catch(err => console.log(`Show Sub_Catagory num check error:${err}`))
    },
    getShowCateg:function(input){
        return axios.post("/api/req/shows/category", input).catch(err => console.log(`Show Catagory num check error:${err}`))
    },
    getShowSubcat:function(input){
        // console.log(`Show count sub input${JSON.stringify(input)}`)
        return axios.post("/api/req/shows/subcat", input).catch(err => console.log(`Show Sub_Catagory num check error:${err}`))
    },
    getHostByCat:function(input){
        return axios.post("/api/req/hosts/category",input).catch(err => console.log(`Host Category num check error:${err}`))
    },
    getHostSubcat:function(input){
        // console.log(`Show count sub input${JSON.stringify(input)}`)
        return axios.post("/api/req/hosts/subcat", input).catch(err => console.log(`Host Sub_Catagory num check error:${err}`))
    }
} 