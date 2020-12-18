import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
import {styled } from '@material-ui/core/styles';
import { useAuth, useUser, useHost, useManagment, useUserInfo } from "../../context/heart";
import useMediaQuery from '@material-ui/core/useMediaQuery';

// const useStyles = makeStyles(theme => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
// }));

const BTN = styled(Button)({
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
  color: '#6dd3d6',
  height: 35,
  padding: '0 30px',
  variant:"outlined",
  fontSize:'15px',
});


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const {setAuthTokens, setIsAuthenticated} = useAuth();
  const {setIsUser} = useUser();
  const { setUserData} = useUserInfo();
  const {isHost, setIsHost} = useHost();
  const {isManager, setIsManager} = useManagment();
  const matches = useMediaQuery('(max-width:750px)');
  const small = useMediaQuery('(max-width:485px)')


  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function logOut() {
    localStorage.clear();
    setAuthTokens();
    setUserData()
    setIsAuthenticated();
    setIsUser();
    setIsManager()
    setIsAuthenticated();
    setIsHost();
  }
  return (
    <div>
      <BTN style={small ? {fontSize:'12px', padding:'0 20px'}: matches ? {fontSize:'12px', padding:'0 25px'}: {}} variant="outlined" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Categories
      </BTN>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/"><MenuItem >Home</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/music"><MenuItem onClick={handleClose}>Music</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/performance"><MenuItem onClick={handleClose}>Performance</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435' }} to="/life"><MenuItem onClick={handleClose}>Life</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/spiritual"><MenuItem onClick={handleClose}>Spiritual Respite</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435' }} to="/allcat"><MenuItem onClick={handleClose}>Mix and Match</MenuItem></Link>
        <MenuItem>- - - - - - - - - - - - -</MenuItem>
        {!isHost&&!isManager&&(
          <div> 
            <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/settings"><MenuItem>Setting</MenuItem></Link>
            <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/tools"><MenuItem>Tools</MenuItem></Link>
          </div>
        )}
        {isHost&&(
          <div> 
            <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/hsettings"><MenuItem>Setting</MenuItem></Link>
            <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/htools"><MenuItem>Tools</MenuItem></Link>
          </div>
        )}
        {isManager&&(
          <div> 
            <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/msettings"><MenuItem>Setting</MenuItem></Link>
            <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/mtools"><MenuItem>Tools</MenuItem></Link>
          </div>
        )}
        <MenuItem>- - - - - - - - - - - - -</MenuItem>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} onClick={logOut}><MenuItem>Sign out</MenuItem></Link>
      </Menu>
    </div>
  );
}
