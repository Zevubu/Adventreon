import axios from "axios";
// /api/episodes/show/:id
export default {
    getEpisodesByID: function(id){
        return axios.get("/api/req/episodes/find/" + id).catch(err => console.log(`Find by id error:${err}`));
    },
    getEpisByShowID: function(id){
        return axios.get("/api/req/episodes/show/" + id).catch(err => console.log(`Find show by id error:${err}`));
    },
    getShowsByEpisHID: function(id){
        return axios.get("/api/req/shows/epis/" + id).catch(err => console.log(`Find show by host_id and episodical error:${err}`));
    },
    getShowsByHostID: function(id){
        return axios.get("/api/hreq/shows/host/" + id).catch(err => console.log(`Find show by host_id and episodical error:${err}`));
    },
    getEpisodes: function(){
        return axios.get("/api/req/episodes/all").catch(err => console.log(`Get all shows error:${err}`));
    },
    createEpisode: function(token,epiData){
        // console.log(`CREAT CHECK!`);
        // console.log(`userData: ${epiData}`);
        const epiOptions = {
            method: 'POST',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/hreq/episodes/new",
            data:epiData
        };
        
        return axios(epiOptions).catch(err => console.log(`Episode creation error:${err}`));
    },   
    createShow: function(token, showData){
        // console.log(`CREAT CHECK!`);
        // console.log(`userData: ${showData}`);
        const showOptions = {
            method: 'POST',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/hreq/shows/new",
            data:showData
        };
        return axios(showOptions).catch(err => console.log(`Show creation error:${err}`));
    },
    updateShow:function(id,token,showData){
        const sOptions = {
            method: 'PUT',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/hreq/shows/update/" + id,
            data:showData
        };
        return axios(sOptions).catch(err => console.log(`Show Update Error:${err}`))
    },
    updateEpi:function(id,token,epiData){
        const eOptions = {
            method: 'PUT',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/hreq/episodes/update/" + id,
            data:epiData
        };
        return axios(eOptions).catch(err => console.log(`Episode Update Error:${err}`))
    },
    updatedProfile: function(id,token,hostData){
        // console.log(`Host id: ${id}. Host Data: ${hostData}`)
        const pOptions = {
            method: 'PUT',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/auth/hosts/update/" + id,
            data:hostData
        };
        return axios(pOptions).catch(err => console.log(`Host update error:${err}`))
    },
    getHostByID: function(id){
        // console.log("/api/hosts/all/" + id)
        return axios.get("/api/req/hosts/all/" + id).catch(err => console.log(`Find hosts by id error:${err}`));
    },
    videoUpload: function(videoData){
        // console.log(`video data axios call : ${JSON.stringify(videoData)}`);
        return axios.post("/upload", videoData).catch(err => console.log(`Video upload error: ${err}`) );
    },
    videoPatcher: function(videoData){
        console.log(`video patcher axios call : ${JSON.stringify(videoData)}`);
        return axios.post("/patch", videoData).catch(err => console.log(`Video patch error: ${err}`) );
    }

}