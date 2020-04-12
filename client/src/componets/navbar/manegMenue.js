import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Tools
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link style={{ textDecoration: 'none' ,color: '#f50057'}} to="/inviteh"><MenuItem onClick={handleClose}>Invite Host</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#f50057'}} to="/tempsum"><MenuItem onClick={handleClose}>Make a Host</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#f50057'}} to="/showbuilderm"><MenuItem onClick={handleClose}>Make a Show</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#f50057'}} to="/episodebuilderm"><MenuItem onClick={handleClose}>Make an episode</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#f50057' }} to="/profilem"><MenuItem onClick={handleClose}>Your Profile</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#f50057' }} to="/pup"><MenuItem onClick={handleClose}>Update Profile</MenuItem></Link>
      </Menu>
    </div>
  );
}
