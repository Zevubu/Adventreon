import React, {useState, useEffect, createContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// private routes
import UserRoute from './PrivateRoutes/UserRoutes';
import LogOutRoute from './PrivateRoutes/LogOutRoute';

import { AuthContext, UserContext, HostContext, ManagmentContext, UserInfoContext} from "./context/heart";

import NavBar from "./componets/navbar";
import HomePage from "./pages/home/index";
import Login from "./pages/login";
import SignUp from './pages/sign_up';
import profile from './pages/profile';
import Footer from './componets/footer'
import HostsPage from './pages/hosts'
import EnterPage from './pages/catagory.js/entertainment'
import CounsPage from './pages/catagory.js/counseling'
import ReligPage from './pages/catagory.js/religious';
import AllCatPage from './pages/catagory.js/allCat';

function App() {
  const [authTokens, setAuthTokens] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [isUser,setIsUser] = useState();
  const [isHost,setIsHost] = useState();
  const [isManager, setIsManager] = useState();
  // userdata hold
  const [userData, setUserData] = useState();
  const [isData, setIsData] = useState();

  const setTokens = (data) => {
    if(JSON.stringify(data) !== undefined){
      console.log(`Token Test: ${JSON.stringify(data) !== undefined}`)
      console.log(`Token Data: ${JSON.stringify(data)}`)
      localStorage.setItem("tokens", JSON.stringify(data));
      setAuthTokens(data);
    }else{
      setAuthTokens(false);
      console.log(`Token Test Fail: ${JSON.stringify(data) !== undefined}`)
      console.log(`Token Data Fail: ${JSON.stringify(data)}`)
    } 
  }

  const setAuth = (data) => {
    if(!isAuthenticated){
      console.log(` Is authenticated: ${data}`)
      setIsAuthenticated(data)
    }else{
      setIsAuthenticated(false)
    }
  }

  const setUser =(data) => {
    console.log(`Is user: ${data}`)
    setIsUser(data)
  }

  const setHost =(data) => {
    console.log(`Is Host: ${data}`)
    setIsHost(data)
  }

  const setManager = (data) => {
    console.log(`Manager data: ${data}`)
    setIsManager(data)
  }

  const setData = (data) =>{
    setIsData(true)
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
        console.log(`IS USER CHECK: ${userType === "8KdWkYINFSD81fI"}`)
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
    <ManagmentContext.Provider value={{isManager, setIsManager:setManager}}>
        <HostContext.Provider value={{isHost, setIsHost:setHost}}>
          <UserContext.Provider value={{isUser, setIsUser: setUser}}>
            <UserInfoContext.Provider value={{userData, setUserData: UserDataSet, isData, setIsData: setData }}>
              <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, isAuthenticated, setIsAuthenticated: setAuth}}>
                <Router>
                  <div>
                    <NavBar value={userData}/>
                    <Switch>
                      <Route exact path="/" component={HomePage} />
                      <LogOutRoute exact path="/login" component={Login} />
                      <LogOutRoute exact path="/signup" component={SignUp} />
                      <UserRoute path="/profile" state={{value:userData}}  component={profile}/>
                      <Route exact path="/hosts" component={HostsPage} />
                      <Route exact path="/shows" component={HostsPage} />
                      <Route exact path="/episodes" component={HostsPage} />
                      <Route exact path="/entertain" component={EnterPage} />
                      <Route exact path="/counseling" component={CounsPage} />
                      <Route exact path="/religious" component={ReligPage} />
                      <Route exact path="/allcat" component={AllCatPage} />
                    </Switch>
                    <Footer/>
                    </div>
                </Router>
            </AuthContext.Provider>
          </UserInfoContext.Provider>
        </UserContext.Provider>
      </HostContext.Provider>
  </ManagmentContext.Provider>

  );
}

export default App;
