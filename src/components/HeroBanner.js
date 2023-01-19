import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
        sx={{
            mt: { lg: '212px', xs: '70px'}, 
            ml: { sm: '50px'}
        }} position='relative' p='20px'
    >
        <Typography 
            color='green' 
            fontWeight='600' 
            fontSize='26px'>
            TEKSTIÄ
        </Typography>

        <Typography 
            fontWeight='700' 
            sx={{fontSize: { lg: '44px', xs: '40px'}}} mb='25px' mt='25px'>
            Tekstiä <br /> Tekstiä
        </Typography>

        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Tekstiä
        </Typography>

        <Button variant='contained' href='#exercises'>
            Explore
        </Button>
        <Typography 
            fontWeight='600px' 
            color='red' 
            sx={{ opacity:0.1, display: { lg: 'block', xs: 'none' }}}
            fontSize='200px'>
            Tekstiä
        </Typography>
        <img src={HeroBannerImage} alt="hero-img" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner