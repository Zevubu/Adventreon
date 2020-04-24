import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {styled } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {useUserInfo } from "../../context/heart";

const BTN = styled(Button)({
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
  color: '#6dd3d6',
  height: 35,
  padding: '0 30px',
  variant:"outlined"
});

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {userData} = useUserInfo();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <BTN variant="outlined" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Tools
      </BTN>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > 
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/inviteh"><MenuItem onClick={handleClose}>Invite Host</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to={"/hostsum/" + userData.id}><MenuItem onClick={handleClose}>Make a Host</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/showbuilderm"><MenuItem onClick={handleClose}>Make a Show</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/episodebuilderm"><MenuItem onClick={handleClose}>Make an episode</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/invitem"><MenuItem onClick={handleClose}>Invite Manager</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to={"/manegsu/" + userData.id}><MenuItem onClick={handleClose}>Make a Manager</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435' }} to={"/profilem/" + userData.id}><MenuItem onClick={handleClose}>Your Profile</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435' }} to={"/pupm/" + userData.id}><MenuItem onClick={handleClose}>Update Profile</MenuItem></Link>
      </Menu>
    </div>
  );
}
