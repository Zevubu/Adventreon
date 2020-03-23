import React,{useState} from "react";
import { Link, Redirect } from "react-router-dom";
import { Card, Form, Input, Button,Error } from '../styles/signUpOutStyles';
import {FillerDiv} from "../styles/homeStyle";
import { useAuth, useUser, useHost, useManagment, useTemp, useUserInfo} from "../context/heart";
import API from "../API/loggedOutAPI";

function Login (){
    // hooks
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [thisTemp, setThisTemp] = useState(false);
    // context pulls
    const { setAuthTokens, isAuthenticated, setIsAuthenticated } = useAuth();
    const {isUser,setIsUser} = useUser();
    const {isHost, setIsHost} = useHost();
    const {setIsManager,isManager } = useManagment();
    const {setUserData, setIsData, isData} = useUserInfo();
    const {setIsTempP, isTempP} = useTemp();
    
  
    const referer = '/';

    function postLogin(event){
        event.preventDefault()
        API.postLogIn({
             userName,
             password
        }).then(result => {
            // console.log(`login result${JSON.stringify(result)}`)
            if (result.status === 200) {
              console.log(`User type: ${JSON.stringify(result.data.user_info.user_type)}`)
              console.log(`User type test:${JSON.stringify(result.data.user_info.user_type) === "\"temp\""} `)
              localStorage.setItem("tokens", JSON.stringify(result.data.token));
              localStorage.setItem("user", JSON.stringify(result.data.user_info));
              setAuthTokens(result.data.token);
              setUserData(result.data.user_info);
              setIsAuthenticated(true);
              if(JSON.stringify(result.data.user_info.user_type) === "\"user\""){
                localStorage.setItem("user_type","8KdWkYINFSD81fI");
                setIsUser(true)
              }else if (JSON.stringify(result.data.user_info.user_type)  === "\"host\""){
                localStorage.setItem("user_type","20nH54g9NSK90W");
                setIsHost(true);
              }else if (JSON.stringify(result.data.user_info.user_type) === "\"manager\""){
                localStorage.setItem("user_type","80CDswONc34RI8");
                setIsManager(true);
              }else if (JSON.stringify(result.data.user_info.user_type) === "\"temp\""){
                localStorage.setItem("user_type","97yLn756tQb58uyThk0ujn");
                console.log(`TEMP TEST TRUE!`)
                setThisTemp(true)
                setIsTempP(true)
              }
            } else {
              setIsError(true);
              console.log("loggin error")
            }
          }).then(i =>{
              setLoggedIn(true);          
          }).catch(e => {
            setIsError(true);
            console.log(e)
          });
    }

    if (isLoggedIn) {
      if(thisTemp === true){
        console.log("THIS TEMP CONFIRM!")
        return <Redirect to='/tempsu'/>
      }else{
        console.log("THIS TEMP FAIL!")
         return <Redirect to='/' />
      }  
    }
    
    return(
        <Card>
        <FillerDiv/>
        <Form>
          <Input type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="UserName" 
          />
          <Input 
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <Button onClick={postLogin}>Sign In</Button>
        </Form>
        <Link to="/signup">Don't have an account yet?</Link>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
      </Card>
    )
}

export default Login;