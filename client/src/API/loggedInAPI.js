import axios from "axios";
export default {
    getShowCatNumCheck:function(input){
        return axios.post("/api/shows/catnumcnt/"+ input).catch(err => console.log(`Show Catagory num check error:${err}`))
    },
    getShowSubcatNumCheck:function(input){
        // console.log(`Show count sub input${JSON.stringify(input)}`)
        return axios.post("/api/shows/subnumcnt", input).catch(err => console.log(`Show Sub_Catagory num check error:${err}`))
    },
    getShowCateg:function(input){
        return axios.post("/api/shows/category", input).catch(err => console.log(`Show Catagory num check error:${err}`))
    },
    getShowSubcat:function(input){
        // console.log(`Show count sub input${JSON.stringify(input)}`)
        return axios.post("/api/shows/subcat", input).catch(err => console.log(`Show Sub_Catagory num check error:${err}`))
    },
    getHostByCat:function(input){
        return axios.post("/api/hosts/category",input).catch(err => console.log(`Host Category num check error:${err}`))
    },
    getHostSubcat:function(input){
        // console.log(`Show count sub input${JSON.stringify(input)}`)
        return axios.post("/api/hosts/subcat", input).catch(err => console.log(`Host Sub_Catagory num check error:${err}`))
    }
} 