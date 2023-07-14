import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [language, changeLanguage] = React.useState('Suomi')
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (lang) => {
    changeLanguage(lang);
    setAnchorEl(null);
  };

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Hakemus
              </Typography>
              <Button
               id="basic-button"
               aria-controls={open ? 'basic-menu' : undefined}
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
               onClick={handleClick} 
               endIcon={<ExpandMoreIcon />} color="inherit"
               >
                {language}</Button>
                <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>handleClose('Suomi')}>Suomi</MenuItem>
        <MenuItem onClick={()=>handleClose('Svenska')}>Svenska</MenuItem>
        <MenuItem onClick={()=>handleClose('English')}>English</MenuItem>
      </Menu>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default NavBar