import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
import {useUserInfo } from "../../context/heart";
import {styled } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {userData} = useUserInfo();
  const matches = useMediaQuery('(max-width:750px)');
  const small = useMediaQuery('(max-width:485px)')

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <BTN style={small ? {fontSize:'12px', padding:'0 20px'}: matches ? {fontSize:'12px', padding:'0 25px'}: {}} variant="outlined" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Tools
      </BTN>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link style={{ textDecoration: 'none' ,color: '#353435' }} to={"/pupm/" + userData.id}><MenuItem onClick={handleClose}>Update Profile</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/showbuilderm"><MenuItem onClick={handleClose}>Make a Show</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/episodebuilderm"><MenuItem onClick={handleClose}>Add an episode</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/updateshowm"><MenuItem onClick={handleClose}>Update a Show</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/updateepisodem"><MenuItem onClick={handleClose}>Update an episode</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/inviteh"><MenuItem onClick={handleClose}>Invite Host</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/invitem"><MenuItem onClick={handleClose}>Invite Manager</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to={"/hostsum/" + userData.id}><MenuItem onClick={handleClose}>Make a Host</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to={"/manegsu/" + userData.id}><MenuItem onClick={handleClose}>Make a Manager</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to={"/upduallm"}><MenuItem onClick={handleClose}>Update any users Profile</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to={"/updsallm"}><MenuItem onClick={handleClose}>Update any show</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to={"/updeallm"}><MenuItem onClick={handleClose}>Update any episode</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to={"/imgupload"}><MenuItem onClick={handleClose}>Image upload tester</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to={"/uploads"}><MenuItem onClick={handleClose}>Base upload and chat tester</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to={"/vupload"}><MenuItem onClick={handleClose}>Video upload tester</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to={"/delusm"}><MenuItem onClick={handleClose}>Delete a users Profile</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to={"/delshm"}><MenuItem onClick={handleClose}>Delete any show</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to={"/delepm"}><MenuItem onClick={handleClose}>Delete any episode</MenuItem></Link>
      </Menu>
    </div>
  );
}
