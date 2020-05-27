import React from "react";
import {Link} from 'react-router-dom';
// import {H2} from '../../styles/homeStyle';
import {NavBody,H2, OptionBox,PullBox, LogoImage} from "../../styles/componentStyles";

import { useAuth, useUser, useHost, useManagment, useTemp, useTempM, useUserInfo } from "../../context/heart";
import Logo from "../../img/masked-logo-Adventreon-blue.png"
import SimpleMenu from './menu.js';
import ResMenu from './resmenu';
import HostMenue from './hostMenu';
import ManagerMenue from './manegMenue';

import Button from '@material-ui/core/Button';
import { makeStyles, styled } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import { UserInfoContext } from "../../App"
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { isStyledComponent } from "styled-components";

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
    console.log(`navbar data 1: ${JSON.stringify(props)}`)
    const { setAuthTokens, isAuthenticated, setIsAuthenticated} = useAuth();
    const {isUser, setIsUser} = useUser();
    const {isHost, setIsHost} = useHost();
    const {isTempP, setIsTempP} = useTemp();
    const {isTempM, setIsTempM} = useTempM();
    const {isManager, setIsManager} = useManagment();
    const {userData, setUserData} = useUserInfo();
    const matches = useMediaQuery('(min-width:600px)');
    const small = useMediaQuery('(max-width:485px)')

    const BTN = styled(Button)({
        background: '#6dd3d6',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        color: 'black',
        height: matches ? 35 : 20,
        padding: '0 30px',
      });
  
    function logOut() {
        localStorage.clear();
        setAuthTokens();
        setUserData()
        setIsAuthenticated();
        setIsUser();
        setIsManager()
        setIsAuthenticated();
        setIsHost();
        setIsTempP();
        setIsTempM();
    }
    // && isTempP
    return(
        <NavBody  className={classes.root}>
            <Link style={{ textDecoration: 'none', color:'black' }} to="/">
                <PullBox>
                    <PullBox>
                            <LogoImage src={Logo} alt="Logo" />
                    </PullBox>
                        <H2>ADVENTREON</H2>
                </PullBox>
            </Link>
            <OptionBox>
                {matches ?
                <OptionBox>
                    {isAuthenticated && isTempP &&(
                        <div>
                            <Link style={{ textDecoration: 'none' }} to={"/tempsu/" + userData.id}><Button variant="contained" color="secondary">MAKE YOUR HOST PROFILE HERE!</Button></Link>
                        </div>
                    )} 
                       {isAuthenticated && isTempM &&(
                        <div>
                            <Link style={{ textDecoration: 'none' }} to={"/tempsum/" + userData.id}><Button variant="contained" color="secondary">MAKE YOUR MANAGEMENT PROFILE HERE!</Button></Link>
                        </div>
                    )} 
                    {/* <Link style={{ textDecoration: 'none' }} to="/"><Button variant="outlined" color="secondary">Home</Button></Link> */}
                    <br></br>
                    <SimpleMenu></SimpleMenu>
                    <br></br>
                    {/* <Link style={{ textDecoration: 'none' }} to="/schedule"><Button variant="outlined" color="secondary">Schedule</Button></Link> */}
                </OptionBox>
                :
                <ResMenu></ResMenu>           
                }      
                { isAuthenticated && isHost &&(
                    <div>
                        <HostMenue/>
                    </div>
                )}
                { isAuthenticated && isManager &&(
                    <div>
                        <ManagerMenue/>
                    </div>
                )}
                 {isAuthenticated && isHost || isAuthenticated && isManager && (
                    <div>
                        <Link style={{ textDecoration: 'none' }} to={"/profile/" + userData.id}><BTN variant="contained" >Profile</BTN></Link>
                    </div>
                )} 
                {!isAuthenticated && (
                    <OptionBox>
                        <Link  style={{ textDecoration: 'none' }} className="nav-link" to="/signup"><BTN style={small ? {fontSize:'6.45px'}: {}} variant="contained">Sign up</BTN></Link>
                        <Link style={{ textDecoration: 'none' }} className="nav-link" to="/login"><BTN style={small ? {fontSize:'7px'}: {}} variant="contained">Login</BTN></Link>
                    </OptionBox>
                )}  
                {isAuthenticated && (
                    <Link style={{ textDecoration: 'none' }} to={{pathname:"/", state:{value:userData} }}><BTN variant="contained" onClick={logOut}>Sign Out</BTN></Link> 
                    
                )}
            </OptionBox>
        </NavBody>
    )
}

export default NavBar;