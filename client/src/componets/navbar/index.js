import React, {useState} from "react";
import {Link} from 'react-router-dom'
import {H2} from '../../styles/homeStyle'
import {NavBody,  NavBtnB, NavBtnM, OptionBox} from "../../styles/componentStyles"
import { useAuth, useUser, useManagment, useUserInfo } from "../../context/heart"
// import { UserInfoContext } from "../../App"


function NavBar (props){
    // const [userProps, setUserProps] = useState(props)
    console.log(`navbar data: ${JSON.stringify(props)}`)
    const { setAuthTokens, isAuthenticated, setIsAuthenticated} = useAuth();
    const {isUser, setIsUser} = useUser();
    const {isManager, setIsManager } = useManagment();
    const { userData, setUserData } = useUserInfo();

  
    function logOut() {
        localStorage.clear();
        setAuthTokens();
        setUserData()
        setIsAuthenticated();
        setIsUser();
        setIsManager()
        setIsAuthenticated();
        
        

    }

    return(
        <NavBody>
            <OptionBox>
                <OptionBox>
                    <H2>Shtikr</H2>
                </OptionBox>
                
            </OptionBox>
            <OptionBox>
                <OptionBox>
                    <Link to="/"><NavBtnB>Home</NavBtnB></Link>
                    <Link to="/events"><NavBtnB>events</NavBtnB></Link>
                    <Link to="/schedule"><NavBtnB>Schedule</NavBtnB></Link>
                    {isAuthenticated && isUser && (
                        <div>
                            <Link to="/profile"><NavBtnB>Profile</NavBtnB></Link>
                        </div>
                    )}
                    
                </OptionBox>
                <OptionBox>      
                    {!isAuthenticated && (
                        <div>
                            <Link className="nav-link" to="/signup"><NavBtnM>Sign up</NavBtnM></Link>
                            <Link className="nav-link" to="/login"><NavBtnM>Login</NavBtnM></Link>
                        </div>
                    )}  
                    {isAuthenticated && (
                        <Link to={{pathname:"/", state:{value:userData} }}><NavBtnM onClick={logOut}>Sign Out</NavBtnM></Link> 
                    )}
                    
                </OptionBox>
            </OptionBox>
        </NavBody>
    )
}

export default NavBar;