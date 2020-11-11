import axios from "axios";
export default {    
updatedProfile: function(id,token,userData){
    // console.log(`Host id: ${id}. Host Data: ${hostData}`)
    const options = {
        method: 'PUT',
        headers: { 
            'content-Type': 'application/json',
            'authorization': `bearer ${token.replace(/\"/g, '')}` 
        },
        url:"/auth/managment/update/" + id,
        data:userData
    };
    return axios(options).catch(err => console.log(`Host update error:${err}`))
},
getManagByID: function(id, token){
    const options = {
        method: 'GET',
        headers: { 
            'content-Type': 'application/json',
            'authorization': `bearer ${token.replace(/\"/g, '')}` 
        },
        url:"/auth/managment/info/" + id,
    };
    // console.log("/api/hosts/all/" + id)
    return axios(options).catch(err => console.log(`Find hosts by id error:${err}`));
},
getAllUsers: function(token){
    const options = {
        method: 'GET',
        headers: { 
            'content-Type': 'application/json',
            'authorization': `bearer ${token.replace(/\"/g, '')}` 
        },
        url:"/api/mreq/profiles/all",
    };
    // console.log("/api/hosts/all/" + id)
    return axios(options).catch(err => console.log(`Find hosts by id error:${err}`));
},
getAllUsersSm: function(token){
    const options = {
        method: 'GET',
        headers: { 
            'content-Type': 'application/json',
            'authorization': `bearer ${token.replace(/\"/g, '')}` 
        },
        url:"/api/mreq/profiles/allsm",
    };
    return axios(options).catch(err => console.log(`Find all users err:${err}`));
},
getAllShows: function(token){
    const options = {
        method: 'GET',
        headers: { 
            'content-Type': 'application/json',
            'authorization': `bearer ${token.replace(/\"/g, '')}` 
        },
        url:"/api/mreq/shows/all",
    };
    return axios(options).catch(err => console.log(`Find all shows:${err}`));
},
getAllShowsByUId: function(id,token){
    const options = {
        method: 'GET',
        headers: { 
            'content-Type': 'application/json',
            'authorization': `bearer ${token.replace(/\"/g, '')}` 
        },
        url:"/api/mreq/shows/byuid/"+ id,
    };
    return axios(options).catch(err => console.log(`Find all shows by user id error:${err}`));
},
deleteUser:function(token,userData){
    console.log(`User data check${JSON.stringify(userData)}`)
    const options ={
        method: 'DELETE',
        headers: { 
            'content-Type': 'application/json',
            'authorization': `bearer ${token.replace(/\"/g, '')}` 
        },
        url:"/api/mreq/profiles/delete",
        data:userData
    };
    return axios(options)
},
// .replace(/\"/g, '')
deleteShow:function(token,userData){
    const pOptions ={
        method: 'DELETE',
        headers: { 
            'content-Type': 'application/json',
            'authorization': `bearer ${token.replace(/\"/g, '')}` 
        },
        url:"/api/mreq/shows/delete",
        data:userData
    };
    return axios(pOptions).catch(err => console.log(`Host delete error:${err}`))
},
deleteEpi:function(id,token,userData){
    const pOptions ={
        method: 'DELETE',
        headers: { 
            'content-Type': 'application/json',
            'authorization': `bearer ${token.replace(/\"/g, '')}` 
        },
        url:"",
        data:userData
    };
    return axios(pOptions).catch(err => console.log(`Host delete error:${err}`))
},


}