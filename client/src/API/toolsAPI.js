import axios from "axios";
export default {
    postEmailCheck: function(email){
        // stays in log out
        // console.log(`EmailData: ${email}`);
        return axios.post("/auth/opening/emailcheck", email).catch(err => console.log(`find email error:${err}`))
    },
    getHostNumCheck:function(){
        return axios.get("/api/hosts/numcnt").catch(err => console.log(`Host num check error:${err}`))
    },
    getHostCatNumCheck:function(catagory){
        return axios.get("/api/hosts/catnumcnt/"+ catagory).catch(err => console.log(`Host Catagory num check error:${err}`))
    },
    tokenValidate: function(token){
        console.log(`Token:${token}`)
        const options = {
            method: 'GET',
            headers: { 
                'content-Type': 'application/json',
                'connection': 'keep-alive',
                'authorization': `bearer ${token.replace(/\"/g, '')}` 
            },
            url:'/validate'
        };
        console.log(options)
        return axios(options).catch(err => console.log(`Validate user by id error:${err}`));
    }
}