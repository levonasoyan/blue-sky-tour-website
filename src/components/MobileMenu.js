import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div className='mobile__menu'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <MenuIcon sx={{fontSize:"45px",color:"white",}}></MenuIcon>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem><Link className='mobile__link' to="/">Home</Link></MenuItem>
        <MenuItem><Link className='mobile__link'to="/tours">Tours</Link></MenuItem>
        <MenuItem><Link className='mobile__link'to="/dailytours">Daily tours</Link></MenuItem>
        <MenuItem><Link className='mobile__link'to="/aboutus">About Us</Link></MenuItem>
        <MenuItem><Link className='mobile__link'to="/contactus">Contact Us</Link></MenuItem>
      
      </Menu>
    </div>
  );
};

export default MobileMenu;
