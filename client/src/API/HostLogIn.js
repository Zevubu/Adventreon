import axios from "axios";
// /api/episodes/show/:id
export default {
    getEpisodesByID: function(id){
        return axios.get("/api/episodes/find/" + id).catch(err => console.log(`Find by id error:${err}`));
    },
    getEpisByShowID: function(id){
        return axios.get("/api/episodes/show/" + id).catch(err => console.log(`Find show by id error:${err}`));
    },
    getShowsByEpisHID: function(id){
        return axios.get("/api/shows/epis/" + id).catch(err => console.log(`Find show by host_id and episodical error:${err}`));
    },
    getEpisodes: function(){
        return axios.get("/api/episodes/all").catch(err => console.log(`Get all shows error:${err}`));
    },
    createEpisode: function(epiData){
        // console.log(`CREAT CHECK!`);
        // console.log(`userData: ${epiData}`);
        
        return axios.post("/api/episodes/all", epiData).catch(err => console.log(`Episode creation error:${err}`));
    },
    updatedProfile: function(id,token,hostData){
        // console.log(`Host id: ${id}. Host Data: ${hostData}`)
        const options = {
            method: 'PUT',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/auth/hosts/update/" + id,
            data:hostData
        };
        return axios(options).catch(err => console.log(`Host update error:${err}`))
    },
    getHostByID: function(id){
        // console.log("/api/hosts/all/" + id)
        return axios.get("/api/hosts/all/" + id).catch(err => console.log(`Find hosts by id error:${err}`));
    },
    videoUpload: function(videoData){
        // console.log(`video data axios call : ${JSON.stringify(videoData)}`);
        return axios.post("/upload", videoData).catch(err => console.log(`Video upload error: ${err}`) );
    },
    videoPatcher: function(videoData){
        console.log(`video patcher axios call : ${JSON.stringify(videoData)}`);
        return axios.post("/patch", videoData).catch(err => console.log(`Video patch error: ${err}`) );
    }, 
    createShow: function(showData){
        console.log(`CREAT CHECK!`);
        console.log(`userData: ${showData}`);
        return axios.post("/api/shows/all", showData).catch(err => console.log(`Show creation error:${err}`));
    }
}