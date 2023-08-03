import React from 'react';
import { AppBar,Toolbar,styled } from '@mui/material';

const Container=styled(AppBar)
(
{
    background: 'black',
height:'9vh',
  

}
)
const logo="https://cdn.dribbble.com/users/299/screenshots/5648722/codepen-logo-gifc2.gif"
   


const Header = () => {
  return (
  <>
  <Container position='static'>
    <Toolbar>
        <img src={logo} alt='codepen ' width="65 px"></img>
    </Toolbar>
  </Container>
  </>
  );
}

export default Header;
