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
        <Link style={{ textDecoration: 'none' ,color: '#f50057'}} to="/inviteh"><MenuItem onClick={handleClose}>Invite</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#f50057'}} to="/showbuilder"><MenuItem onClick={handleClose}>Entertainment</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#f50057'}} to="/episodebuilder"><MenuItem onClick={handleClose}>Counseling</MenuItem></Link>
      </Menu>
    </div>
  );
}
