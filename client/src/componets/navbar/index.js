import React from "react";
import {Link, useHistory} from 'react-router-dom';
// import {Btn} from '../../styles/homeStyle';
import {NavBody,H2, OptionBox,PullBox, LogoImage, BackBtn} from "../../styles/componentStyles";


import { useAuth, useUser, useHost, useManagment, useTemp, useTempM, useUserInfo } from "../../context/heart";
import Logo from "../../img/masked-logo-Adventreon-blue.png"
import SimpleMenu from './menu.js';
// import ResMenu from './resmenu';
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



function NavBar (){
    let history = useHistory();
    const classes = useStyles();
    const {setAuthTokens, isAuthenticated, setIsAuthenticated} = useAuth();
    const {setIsUser} = useUser();
    const {isHost, setIsHost} = useHost();
    const {isTempP, setIsTempP} = useTemp();
    const {isTempM, setIsTempM} = useTempM();
    const {isManager, setIsManager} = useManagment();
    const {userData, setUserData} = useUserInfo();
    const matches = useMediaQuery('(max-width:750px)');
    const small = useMediaQuery('(max-width:485px)')

    // useEffect(()=>{
    //     console.log(`Is host check:${isHost}`)
    //     console.log(`Is Athenticated check:${isAuthenticated}`)

    // },[])

    const BTN = styled(Button)({
        background: '#6dd3d6',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        color: 'black',
        height: 35,
        padding: '0 30px',
        fontSize:'15px',
    });
    const BTNS = styled(Button)({
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        color: '#000000',
        height: 35,
        padding: '0px 0px',
        variant:"outlined",
        fontSize:'35px',
    });

    // const ClearBTN = styled(Button)({
    //     border: 0,
    //     borderRadius: 3,
    //     boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    //     color: '#6dd3d6',
    //     height: 35,
    //     padding: '0 30px',
    //     variant:"outlined"
    // });
  
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
           <OptionBox>
                <BackBtn onClick={() => history.goBack()}>{"\<"}</BackBtn>
                <Link style={{ textDecoration: 'none', color:'black' }} to="/">
                    <PullBox>
                        <PullBox>
                            <LogoImage src={Logo} alt="Logo" />
                            <H2>ADVENTREON</H2>
                        </PullBox>
                    </PullBox>
                </Link>
            </OptionBox>
            
             {isAuthenticated &&(
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
                </OptionBox>
            )}
            <OptionBox>
                {/* {matches ? <div></div>:<div></div> }  */}
                    <OptionBox>
                        {isAuthenticated &&(
                            <SimpleMenu></SimpleMenu>
                        )}
                        {/* <Link style={{ textDecoration: 'none' }} to="/schedule"><Button variant="outlined" color="secondary">Schedule</Button></Link> */}
                    </OptionBox>
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
                {/* && isHost || isAuthenticated && isManager */}
                 {isAuthenticated && isHost && (
                    <div>
                        <Link style={{ textDecoration: 'none' }} to={"/profile/" + userData.id}><BTN style={matches ? {fontSize:'12px', padding:'0 20px'}: {}} variant="contained">Profile</BTN></Link>
                    </div>
                )} 
                 {isAuthenticated && isManager && (
                    <div>
                        <Link style={{ textDecoration: 'none' }} to={"/profilem/" + userData.id}><BTN style={matches ? {fontSize:'12px', padding:'0 20px'}: {}} variant="contained">Profile</BTN></Link>
                    </div>
                )} 

                {!isAuthenticated && (
                    <OptionBox>
                        <Link  style={{ textDecoration: 'none' }} className="nav-link" to="/signup"><BTN style={matches ? {fontSize:'12px', padding:'0 20px'}: {}} variant="contained">Sign up</BTN></Link>
                        <Link style={{ textDecoration: 'none' }} className="nav-link" to="/login"><BTN style={matches ? {fontSize:'12px', padding:'0 20px'}: {}} variant="contained">Login</BTN></Link>
                    </OptionBox>
                )}  
                {isAuthenticated && (
                    <Link style={{ textDecoration: 'none' }} to={{pathname:"/", state:{value:userData} }}><BTN style={small ? {fontSize:'12px', padding:'0 20px'}: matches ? {fontSize:'12px', padding:'0 25px'}: {}} variant="contained" onClick={logOut}>Sign Out</BTN></Link> 
                    
                )}
            </OptionBox>
        </NavBody>
    )
}

export default NavBar;