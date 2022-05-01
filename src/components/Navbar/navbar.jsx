import {React} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import classes from './navbar.module.css'
// import Logo from 'Components/Logo'
// import NavItems from '../Navigation/NavItems';
import Logo from "components/Logo"
import NavItems from "components/NavItems"


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  className={classes.navbar} position="static">
        <Toolbar className={classes.toolbar}>
          <Logo srcPath={"/logo.png"} className={classes.logo}/>
          
          <NavItems/>
          {/* <Button color="inherit">Login</Button> */}
          {/* <Logo srcPath={"/fst_logo.svg"} className={classes.logo}/> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar