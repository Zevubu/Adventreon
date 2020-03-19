import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {H2} from '../../styles/homeStyle';
import {NavBody,  NavBtnB, NavBtnM, OptionBox, Logo} from "../../styles/componentStyles";
import { useAuth, useUser, useManagment, useUserInfo } from "../../context/heart";
import SimpleMenu from './menu.js';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import { UserInfoContext } from "../../App"

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  


function NavBar (props){
    const classes = useStyles();
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
        
        <NavBody  className={classes.root}>
            <OptionBox>
                <OptionBox>
                    <Logo>Cantina</Logo>
                </OptionBox>
                
            </OptionBox>
            <OptionBox>
                <OptionBox>
                    <Link to="/"><Button variant="outlined" color="secondary">Home</Button></Link>
                    <br></br>
                    <Link to="/events"><SimpleMenu></SimpleMenu></Link>
                    <br></br>
                    <Link to="/schedule"><Button variant="outlined" color="secondary">Schedule</Button></Link>
                    {isAuthenticated && isUser && (
                        <div>
                            <Link to="/profile"><Button variant="contained" color="secondary">Profile</Button></Link>
                        </div>
                    )}
                    
                </OptionBox>
                <OptionBox>      
                    {!isAuthenticated && (
                        <div>
                            <Link className="nav-link" to="/signup"><Button variant="contained" color="secondary">Sign up</Button></Link>
                            <Link className="nav-link" to="/login"><Button variant="contained" color="secondary">Login</Button></Link>
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