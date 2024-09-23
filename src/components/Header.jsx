import React from 'react';
import {AppBar,Toolbar,styled} from "@mui/material"
import logo from "./Images/logo.gif"
const Container = styled(AppBar)`
 background-color:black;
`
const Header = () => {
  return(
    <Container position="static">
      <Toolbar>
          <img src={logo} alt="logo" style={{width:80}}/>
      </Toolbar>
    </Container>
  )
}

export default Header