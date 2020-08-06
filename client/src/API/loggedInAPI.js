import axios from "axios";
// import { options } from "../../../routes/api";
export default {
    getHostNumCheck:function(token){
        const optionsHN = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/hosts/numcnt"
        };
        return axios(optionsHN).catch(err => console.log(`Host num check error:${err}`))
    },
    getHostCatNumCheck:function(token,category){
        const optionsCN = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/hosts/catnumcnt/"+ category
        };
        return axios(optionsCN).catch(err => console.log(`Host Catagory num check error:${err}`))
    },
    getHostByCat:function(token,input){
        const optionsHC = {
            method: 'POST',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/hosts/category",
            data:input
        };
        return axios(optionsHC).catch(err => console.log(`Host Category num check error:${err}`))
    },
    getHostSubcat:function(token,input){
        const optionsHSC = {
            method: 'POST',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/hosts/subcat",
            data:input
        };
        // console.log(`Show count sub input${JSON.stringify(input)}`)
        return axios(optionsHSC).catch(err => console.log(`Host Sub_Catagory num check error:${err}`))
    },
    getShowCatNumCheck:function(token,input){
        const optionsSCN = {
            method: 'POST',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/shows/catnumcnt/",
            data:input
        };
        return axios(optionsSCN).catch(err => console.log(`Show Catagory num check error:${err}`))
    },
    getShowSubcatNumCheck:function(token,input){
        const optionsSCN = {
            method: 'POST',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/shows/subnumcnt",
            data:input
        };
        // console.log(`Show count sub input${JSON.stringify(input)}`)
        return axios(optionsSCN).catch(err => console.log(`Show Sub_Catagory num check error:${err}`))
    },
    getShowCateg:function(token,input){
        const optionsSC = {
            method: 'POST',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/shows/category",
            data:input
        };
        return axios(optionsSC).catch(err => console.log(`Show Catagory num check error:${err}`))
    },
    getShowSubcat:function(token,input){
        const optionsSSC = {
            method: 'POST',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/shows/subcat",
            data:input
        };
        // console.log(`Show count sub input${JSON.stringify(input)}`)
        return axios(optionsSSC).catch(err => console.log(`Show Sub_Catagory num check error:${err}`))
    },
    getShowByID: function(token,id){
        const optionsSID = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/shows/find/" + id
        };
        return axios(optionsSID).catch(err => console.log(`Find show by id error:${err}`));
    },
    getShows: function(token){
        const optionsS = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/shows/all"
        };
        return axios(optionsS).catch(err => console.log(`Get all shows error:${err}`));
    },
    getShowByHost:function(token,id){
        const optionsSH = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/shows/host/" + id
        };
        return axios(optionsSH).catch(err => console.log(`Find hosts shows by id error:${err}`));
    },
    getHosts: function(token){
        const optionsH = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/hosts/all"
        };
        return axios(optionsH).catch(err => console.log(`Get all hosts error:${err}`));
    },
    getHostByID: function(token,id){
        const optionsHID = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/hosts/all/" + id
        };
        return axios(optionsHID).catch(err => console.log(`Find hosts by id error:${err}`));
    },    
    getEpisodesByID: function(token,id){
        const optionsEID = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/episodes/find/" + id
        };
        return axios(optionsEID).catch(err => console.log(`Find by id error:${err}`));
    },
    getEpisByShowID: function(token,id){
        const optionsESID = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/episodes/show/" + id
        };
        return axios(optionsESID).catch(err => console.log(`Find Epis by show id error:${err}`));
    },
    getEpisodes: function(token){
        const optionsE = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/episodes/all"
        };
        return axios(optionsE).catch(err => console.log(`Get all shows error:${err}`));
    },
} 