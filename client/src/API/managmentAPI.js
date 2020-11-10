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
deleteUser:function(id,token,userData){
    const pOptions ={
        method: 'DELETE',
        headers: { 
            'content-Type': 'application/json',
            'authorization': `bearer ${token.replace(/\"/g, '')}` 
        },
        url:"/auth/managment/delete/"+id,
        data:userData
    };
    return axios(pOptions).catch(err => console.log(`Host delete error:${err}`))
},
deleteShow:function(id,token,userData){
    const pOptions ={
        method: 'DELETE',
        headers: { 
            'content-Type': 'application/json',
            'authorization': `bearer ${token.replace(/\"/g, '')}` 
        },
        url:"/auth/managment/delete/"+id,
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
        url:"/auth/managment/delete/"+id,
        data:userData
    };
    return axios(pOptions).catch(err => console.log(`Host delete error:${err}`))
},


}