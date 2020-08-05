import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {Link} from 'react-router-dom';
import {useUserInfo } from "../../context/heart";
import {makeStyles,styled } from '@material-ui/core/styles';
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
  variant:"outlined"
});
export default function SimpleMenu() {
  // const classes = useStyles();
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
        <Link style={{ textDecoration: 'none' ,color: '#353435' }} to={"/profile/"+ userData.id}><MenuItem onClick={handleClose}>Your Profile</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435' }} to={"/puph/"+ userData.id}><MenuItem onClick={handleClose}>Update Profile</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/showbuilder"><MenuItem onClick={handleClose}>Make a Show</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/updateshow"><MenuItem onClick={handleClose}>Update a Show</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/episodebuilder"><MenuItem onClick={handleClose}>Add an episode</MenuItem></Link>
        <Link style={{ textDecoration: 'none' ,color: '#353435'}} to="/updateepisode"><MenuItem onClick={handleClose}>Update an episode</MenuItem></Link>
      </Menu>
    </div>
  );
}
