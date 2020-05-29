import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
import {styled } from '@material-ui/core/styles';
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

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <BTN variant="outlined" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Catagories
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
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/spirtualrespite"><MenuItem onClick={handleClose}>Spirtual Respite</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435' }} to="/allcat"><MenuItem onClick={handleClose}>All</MenuItem></Link>
      </Menu>
    </div>
  );
}
