import React from 'react'
import {AppBar,Typography,Toolbar,Button} from "@mui/material";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
       <AppBar>
        <Toolbar>
            <Typography variant='h4' sx={{flexGrow:1}}>
                My Navbar
            </Typography>
            <Button variant='contained' to="/create_employee" component={Link}>Create Employee</Button>
                <Button variant='contained' to="/login" component={Link}>Login</Button>
                <Button variant='contained' to="/logout" component={Link}>Logout</Button>
        </Toolbar>
       </AppBar>
      
    </div>
  )
}

export default Navbar
