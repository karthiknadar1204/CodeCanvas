import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';

const Container = styled(AppBar)`
  background-color: #060606;
  height:9vh;
`; 

const Header = () => {
  return (
    
    <Container position='static' >
      <Toolbar>
      PixelPen
      </Toolbar>
    </Container>
  );
};

export default Header;
