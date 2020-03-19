import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function ResMenu() {
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
        Services
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > 
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Schedule</MenuItem>
        <MenuItem onClick={handleClose}>Religous Services</MenuItem>
        <MenuItem onClick={handleClose}>Companionship</MenuItem>
        <MenuItem onClick={handleClose}>Entertainment</MenuItem>
        <MenuItem onClick={handleClose}>Other</MenuItem>
      </Menu>
    </div>
  );
}
