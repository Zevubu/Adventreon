import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

import { styled } from '@material-ui/core/styles';

export default function ResMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const BTN = styled(Button)({
    background: '#6dd3d6',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    color: 'black',
    height: 20, 
    padding: '0 30px',
  });

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <BTN style={{fontSize: '8px'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Services
      </BTN>
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
        <Link style={{ textDecoration: 'none' ,color: '#f50057' }} to="/counseling"><MenuItem onClick={handleClose}>counseling</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#f50057' }} to="/Entertain"><MenuItem onClick={handleClose}>Entertainment</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#f50057' }} to="/allcat"><MenuItem onClick={handleClose}>Veiw all</MenuItem></Link>
      </Menu>
    </div>
  );
}
