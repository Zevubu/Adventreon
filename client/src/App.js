import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalFonts from "./fonts/fonts";
import {GlobalStyle} from "./styles/universal-styles";

// private routes
import UserRoute from './PrivateRoutes/UserRoutes';
import LogOutRoute from './PrivateRoutes/LogOutRoute';
import TempRoute from './PrivateRoutes/TempRoute';
import TempMRoute from './PrivateRoutes/TempMRoute';
import ManagmentRoute from './PrivateRoutes/ManagmentRoute';
import HostRoute from './PrivateRoutes/HostRoute';

///temp component for uploads
import Uploader from './componets/upload'
////

import { AuthContext, UserContext, HostContext, ManagmentContext, TempContext,TempMContext, UserInfoContext} from "./context/heart";

import NavBar from "./componets/navbar";
import Footer from './componets/footer';

import HomePage from "./pages/home/index";
import Login from "./pages/login";
import SignUp from './pages/sign_up';
import profile from './pages/profile';

import HostsPage from './pages/hosts';
import ShowPage from "./pages/shows"
import MusicPage from "./pages/home/music-home"
import EnterPage from './pages/home/perf-home';
import LifePage from './pages/home/life-home';
import SpirtPage from './pages/home/sp-home';
import AllCatPage from './pages/catagory/allCat';

// tools
import InviteHost from './pages/tools/Management/invite_host';
import InviteManeg from './pages/tools/Management/invite_manager';
import HostSignUp from './pages/tools/host-sign-up';
import UpHost from './pages/tools/upHost';
import ShowBuilder from './pages/tools/show-builder';
import AddEpisode from './pages/tools/add_episode';
import ManegSignUp from './pages/tools/Management/maneg-sign-up' 


import HostProfile from './pages/profiles/host'
import ShowProfile from './pages/profiles/show'
import EpisodeProfile from './pages/profiles/episode'
// import Show from './pages/profiles/show';

function App() {
  const [authTokens, setAuthTokens] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [isUser,setIsUser] = useState();
  const [isHost,setIsHost] = useState();
  const [isManager, setIsManager] = useState();
  const [isTempP, setIsTempP] = useState();
  const [isTempM, setIsTempM] = useState();
  // userdata hold
  const [userData, setUserData] = useState();
  const [isData, setIsData] = useState();

  const setTokens = (data) => {
    if(JSON.stringify(data) !== undefined){
      // console.log(`Token Test: ${JSON.stringify(data) !== undefined}`)
      // console.log(`Token Data: ${JSON.stringify(data)}`)
      localStorage.setItem("tokens", JSON.stringify(data));
      setAuthTokens(data);
    }else{
      setAuthTokens(false);
      // console.log(`Token Test Fail: ${JSON.stringify(data) !== undefined}`)
      // console.log(`Token Data Fail: ${JSON.stringify(data)}`)
    } 
  }

  const setAuth = (data) => {
      // console.log(` Is authenticated: ${data}`)
      setIsAuthenticated(data)
  }

  const setUser =(data) => {
    // console.log(`Is user: ${data}`)
    setIsUser(data)
  }

  const setHost =(data) => {
    // console.log(`Is Host: ${data}`)
    setIsHost(data)
  }

  const setManager = (data) => {
    // console.log(`Manager data: ${data}`)
    setIsManager(data)
  }

  const setTempP = (data) => {
    // console.log(`Is Temp: ${data}`)
    setIsTempP(data);
  }

  const setTempM = (data) => {
    // console.log(`Is Temp: ${data}`)
    setIsTempM(data);
  }

  const setData = (data) =>{
    setIsData(data)
  }
  
  const UserDataSet= (data) => {
    if(JSON.stringify(data) !== undefined){
      localStorage.setItem("user", JSON.stringify(data));
      // console.log(`user data: ${userData.user_name}`)
      localStorage.setItem("user_type",JSON.stringify(data.user_type) )
      setUserData(data);
      setIsData(true);
    }else{
      setIsData(true);
    } 
  }
  useEffect(() => {
    const checkLS = () =>{
      const user =  window.localStorage.getItem('user');
      const token =  window.localStorage.getItem('tokens');
      const userType =  window.localStorage.getItem('user_type');
      console.log(`local storage check: User type:${userType}, User token: ${token}, User data:${user} `)
      if(!user || !token || !userType){
        console.log(`User null check! ${user}`)
      }else{
        setAuthTokens(token);
        setIsAuthenticated(true);
        setUserData(JSON.parse(user))
        setIsData(true)
        // console.log(`IS USER CHECK: ${userType === "8KdWkYINFSD81fI"}`)
        if(userType === "8KdWkYINFSD81fI"){
          // console.log(`IS USER CHECK: ${userType}`)
          setIsUser(true);
        }else if(userType === "20nH54g9NSK90W"){
          setIsHost(true);
        }else if(userType === "80CDswONc34RI8"){
          setIsManager(true);
        }
      }
    };
    checkLS();  

  },[]);

// I need to build and impliment an 18 and up context.

  return (
    <TempMContext.Provider value={{isTempM, setIsTempM:setTempM }}>
      <TempContext.Provider value={{isTempP, setIsTempP:setTempP}}>
        <ManagmentContext.Provider value={{isManager, setIsManager:setManager}}>
            <HostContext.Provider value={{isHost, setIsHost:setHost}}>
              <UserContext.Provider value={{isUser, setIsUser: setUser}}>
                <UserInfoContext.Provider value={{userData, setUserData: UserDataSet, isData, setIsData: setData }}>
                  <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, isAuthenticated, setIsAuthenticated: setAuth}}>
                    <Router>
                    <GlobalFonts/>  
                    <GlobalStyle />
                      <div>
                        <NavBar value={userData}/>
                        <Switch>
                          <Route exact path="/" component={HomePage} />
                          <LogOutRoute exact path="/login" component={Login} />
                          <LogOutRoute exact path="/signup" component={SignUp} />
                          <UserRoute path="/profile/:id" state={{value:userData}}  component={profile}/>
                          <Route exact path="/hosts" component={HostsPage} />
                          <Route exact path="/hosts/:id" component={HostProfile} />
                          <Route exact path="/shows" component={ShowPage} />
                          <Route exact path="/shows/:id" component={ShowProfile} />
                          <Route exact path="/episodes/:id" component={EpisodeProfile} />
                          <Route exact path="/episodes" component={HostsPage} />
                          <Route exact path="/entertain" component={EnterPage} />
                          <Route exact path="/counseling" component={LifePage} />
                          <Route exact path="/religious" component={SpirtPage} />
                          <Route exact path="/music" component={MusicPage} />
                          <Route exact path="/allcat" component={AllCatPage} />
                          <Route exact path="/uploads" component={Uploader} />
                          <TempMRoute exact path="/tempsum/:id" component={ManegSignUp} />
                          <TempRoute exact path="/tempsu/:id" component={HostSignUp} />
                          <ManagmentRoute path="/profilem/:id" state={{value:userData}}  component={profile}/>
                          <ManagmentRoute exact path="/inviteh" component={InviteHost}/>
                          <ManagmentRoute exact path="/hostsum/:id" component={HostSignUp} />
                          <ManagmentRoute exact path="/invitem" component={InviteManeg} />
                          <ManagmentRoute exact path="/manegsu/:id" component={ManegSignUp} />
                          <ManagmentRoute exact path="/pupm/:id" state={{value:userData}} component={UpHost} />
                          <ManagmentRoute exact path="/showbuilderm" state={{value:userData}} component={ShowBuilder}/>
                          <ManagmentRoute exact path="/episodebuilderm" state={{value:userData}} component={AddEpisode}/>
                          <HostRoute exact path="/pup/:id" state={{value:userData}} component={UpHost} />
                          <HostRoute exact path="/showbuilder" component={ShowBuilder}/>
                          <HostRoute exact path="/episodebuilder" component={AddEpisode}/>
                        </Switch>
                        <Footer/>
                        </div>
                    </Router>
                  </AuthContext.Provider>
                </UserInfoContext.Provider>
              </UserContext.Provider>
            </HostContext.Provider>
          </ManagmentContext.Provider>
        </TempContext.Provider>
      </TempMContext.Provider>
  );
}

export default App;
