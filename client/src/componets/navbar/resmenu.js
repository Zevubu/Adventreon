import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

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
      <Button style={{fontSize: '8px'}}variant="outlined" color="secondary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Services
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > 
        <Link style={{ textDecoration: 'none' ,color: '#f50057' }} to="/"><MenuItem onClick={handleClose}>Home</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#f50057' }} to="/schedule"><MenuItem onClick={handleClose}>Schedule</MenuItem></Link>
        <hr></hr>
        <Link style={{ textDecoration: 'none' ,color: '#f50057' }} to="/religious"><MenuItem onClick={handleClose}>Religous Services</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#f50057' }} to="/companionship"><MenuItem onClick={handleClose}>Companionship</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#f50057' }} to="/Entertainment"><MenuItem onClick={handleClose}>Entertainment</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#f50057' }} to="/other"><MenuItem onClick={handleClose}>Other</MenuItem></Link>
      </Menu>
    </div>
  );
}
