import axios from "axios";
export default {
    getEpisodesByID: function(id){
        return axios.get("/api/episodes/find/" + id).catch(err => console.log(`Find show by id error:${err}`));
    },
    getEpisodes: function(){
        return axios.get("/api/episodes/all").catch(err => console.log(`Get all shows error:${err}`));
    },
    getEpisByShow: function(){
        return axios.get("/api/episodes/all").catch(err => console.log(`Get all shows error:${err}`));
    },
   

}