import axios from "axios";
// /api/episodes/show/:id
export default {
    getEpisodesByID: function(token, id){
        const options = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/episodes/find/"+id,
        };
        return axios(options).catch(err => console.log(`Find by id error:${err}`));
    },
    getEpisByShowID: function(token, id){
        const options = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/episodes/show/"+id,
        };
        return axios(options).catch(err => console.log(`Find show by id error:${err}`));
    },
    getShowsByEpisHID: function(token, id){
        const options = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/shows/epis/" + id,
        };
        return axios(options).catch(err => console.log(`Find show by host_id and episodical error:${err}`));
    },
    getShowsByHostID: function(token, id){
        const options = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/hreq/shows/host/" + id,
        };
        return axios(options).catch(err => console.log(`Find show by host_id and episodical error:${err}`));
    },
    getFullEpisBySId: function(token, id){
        const options = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/hreq/episodes/show/" + id,
        };
        return axios(options).catch(err => console.log(`Find show by id error:${err}`));
    },
    getEpisodes: function(token){
        const options = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/req/episodes/all",
        };
        return axios(options).catch(err => console.log(`Get all shows error:${err}`));
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
        console.log(`Show update api id:${id}`)
        console.log(`Show update api token:${token}`)
        console.log(`Show update api data:${showData}`)
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
    deleteEpi:function(id,token,epiData){
        const eOptions ={
            method: 'DELETE',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/hrequest/episodes/delete",
            data:epiData
        };
        return axios(eOptions).catch(err => console.log(`Episode delete error:${err}`))
    },
    deleteShow:function(id,token,showData){
        const sOptions ={
            method: 'DELETE',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/api/hreq/shows/delete",
            data:showData
        };
        return axios(sOptions).catch(err => console.log(`Show delete error:${err}`))
    },
    deleteHProfile:function(id,token,userData){
        const pOptions ={
            method: 'DELETE',
            headers: { 
                'content-Type': 'application/json',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:"/auth/hosts/deleteuser/"+id,
            data:userData
        };
        return axios(pOptions).catch(err => console.log(`Host delete error:${err}`))
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
    },
    imgUploader:function(imgData){
        console.log('Img upload router ping')
        return axios.post("/img/uploader",imgData).catch(err => console.log('Img upload router error'))
    }


}