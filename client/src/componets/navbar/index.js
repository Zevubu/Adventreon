import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {H2} from '../../styles/homeStyle';
import {NavBody,  NavBtnB, NavBtnM, OptionBox, Logo} from "../../styles/componentStyles";
import { useAuth, useUser, useManagment, useUserInfo } from "../../context/heart";
import SimpleMenu from './menu.js';
import ResMenu from './resmenu';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import { UserInfoContext } from "../../App"
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    const matches = useMediaQuery('(min-width:600px)');
    const small = useMediaQuery('(max-width:485px)')
  
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
                {matches ?
                <OptionBox>
                    <Link style={{ textDecoration: 'none' }} to="/"><Button variant="outlined" color="secondary">Home</Button></Link>
                    <br></br>
                    <Link style={{ textDecoration: 'none' }} to="/events"><SimpleMenu></SimpleMenu></Link>
                    <br></br>
                    <Link style={{ textDecoration: 'none' }} to="/schedule"><Button variant="outlined" color="secondary">Schedule</Button></Link>
                    {isAuthenticated && isUser && (
                        <div>
                            <Link style={{ textDecoration: 'none' }} to="/profile"><Button variant="contained" color="secondary">Profile</Button></Link>
                        </div>
                    )} 
                </OptionBox>

                :
                
                <ResMenu></ResMenu>
                    
                }
                    

                    {!isAuthenticated && (
                        <OptionBox>
                            <Link  style={{ textDecoration: 'none' }} className="nav-link" to="/signup"><Button style={small ? {fontSize:'6.45px'}: {}} variant="contained" color="secondary">Sign up</Button></Link>
                            <Link style={{ textDecoration: 'none' }} className="nav-link" to="/login"><Button style={small ? {fontSize:'7px'}: {}} variant="contained" color="secondary">Login</Button></Link>
                        </OptionBox>
                    )}  
                    {isAuthenticated && (
                        <Link style={{ textDecoration: 'none' }} to={{pathname:"/", state:{value:userData} }}><Button variant="contained" color="secondary">Sign Out</Button></Link> 
                    )}
            </OptionBox>
        </NavBody>
    )
}

export default NavBar;