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
    updatedProfile: function(id, hostData){
        console.log(`Host id: ${id}. Host Data: ${hostData}`)
        return axios.put(`/api/hosts/all/${id}`, hostData).catch(err => console.log(`Host update error:${err}`))
    },
    getHostByID: function(id){
        return axios.get("/api/hosts/all/" + id).catch(err => console.log(`Find hosts by id error:${err}`));
    },
   

}