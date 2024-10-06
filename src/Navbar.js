import React from 'react';
import './Styles/Navbar.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Import relevant icons from Material UI
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#282c34',  // Match background color of the page
        height: '100%',
        color: '#fff', // White text color
      }}
      role="presentation"
      onClick={toggleDrawer(false)}  // Close the drawer after clicking any item
    >
      <List>
        {/* Updated to use href for navigation */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemIcon sx={{ color: '#FFD700' }}>
              <HomeIcon /> {/* Home Icon */}
            </ListItemIcon>
            <ListItemText
              primary="Domů"
              sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/pricing">
            <ListItemIcon sx={{ color: '#FFD700' }}>
              <AttachMoneyIcon /> {/* Pricing Icon */}
            </ListItemIcon>
            <ListItemText
              primary="Ceny"
              sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/contact">
            <ListItemIcon sx={{ color: '#FFD700' }}>
              <ContactMailIcon /> {/* Contact Icon */}
            </ListItemIcon>
            <ListItemText
              primary="Kontakt"
              sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/about">
            <ListItemIcon sx={{ color: '#FFD700' }}>
              <InfoIcon /> {/* About Us Icon */}
            </ListItemIcon>
            <ListItemText
              primary="O nás"
              sx={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ backgroundColor: '#FFD700' }} />  {/* Yellow divider for contrast */}
    </Box>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Add the "Firminium" text on the left */}
        <div className="navbar-logo">
          <a href="/">Firminium</a>
        </div>
        
        {/* Navbar menu for larger screens */}
        <ul className="navbar-menu">
          <li><a href="/">Domů</a></li>
          <li><a href="/pricing">Ceny</a></li>
          <li><a href="/contact">Kontakt</a></li>
          <li><a href="/about">O nás</a></li>
        </ul>

        {/* Menu icon for smaller screens */}
        <MenuIcon onClick={toggleDrawer(true)} className="menu-icon" sx={{ cursor: 'pointer' }} />
      </div>

      {/* Drawer Button */}
      <div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
