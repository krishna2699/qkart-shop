import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {

  const history =useHistory();
  const username = localStorage.getItem('username')

  const handleLogout = () =>{
    history.push('/');
    localStorage.clear();
    history.go();

  }

    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>

      {hasHiddenAuthButtons
        ?(<Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={()=>history.push('/')}
        >
          Back to explore
        </Button>
      )
      : !username 
      ?<Box> 
      <Button onClick={()=>history.push('/login')}>Login</Button>
      <Button variant='contained' onClick={()=>history.push('/register')}>Register</Button>
      </Box>

      :<Box>
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
      <Avatar alt={username} src="../../public/avatar.png" />
      <p>{username}</p>
      <Button onClick={handleLogout}>Logout</Button>
      </Stack>
      </Box>
      }

    </Box>
      
    );   
};

export default Header;
