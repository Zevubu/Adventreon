import React, {useState, useEffect, createContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserRoute from './PrivateRoutes/UserRoutes';
import { AuthContext, UserContext, HostContext, ManagmentContext, UserInfoContext} from "./context/heart";

import NavBar from "./componets/navbar";
import HomePage from "./pages/home/index";
import Login from "./pages/login";
import SignUp from './pages/sign_up';
import profile from './pages/profile';
import Footer from './componets/footer'

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
      console.log(`user data: ${userData.user_name}`)
      localStorage.setItem("user_type",JSON.stringify(data.user_type) )
      setUserData(data);
      setIsData(true);
    }else{
      setIsData(true);
    } 
  }

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
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/signup" component={SignUp} />
                      <UserRoute path="/profile" state={{value:userData}}  component={profile}/>
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
