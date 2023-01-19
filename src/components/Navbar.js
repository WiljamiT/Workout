import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{ gap: { sm: '122px', xs: '40px' }, 
      mt: { sm: '32px', xs: '20px'}, justifyContent:'none'}} px='20px'
    >
      <Link to="/">
        <img src={Logo} alt="Logo-img" style={{
          width: '50px',
          height: '50px',
          margin: '0 25px'
        }}/>
      </Link>

      <Stack
        direction='row'
        gap='50px'
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{
          textDecoration: 'none',
          color: 'cyan',
          borderBottom: '3px solid black'
        }}>Home</Link>
        <a href="#exercises" style={{
          textDecoration: 'none',
          color: 'blue'
        }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar