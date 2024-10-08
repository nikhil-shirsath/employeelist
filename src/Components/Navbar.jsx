import React from 'react'
import {AppBar,Typography,Toolbar,Button} from "@mui/material";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const buttonStyle ={marginRight:"20px", fontWeight:"600"}
  return (
    <div>
       <AppBar>
        <Toolbar>
            <Typography variant='h4' sx={{flexGrow:1}}>
                My Navbar
            </Typography>
            <Button style={buttonStyle} variant='contained' to="/create_employee" component={Link}>Create Employee</Button>
                <Button style={buttonStyle} variant='contained' to="/login" component={Link}>Login</Button>
                <Button variant='contained' to="/logout" component={Link}>Logout</Button>
        </Toolbar>
       </AppBar>
      
    </div>
  )
}

export default Navbar
