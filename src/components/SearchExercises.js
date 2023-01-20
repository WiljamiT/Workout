import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material'; 

const SearchExercises = () => {
  return (
    <Stack 
        alignItems='center' 
        mt='40px' 
        justifyContent='center' 
        p='20px'
    >
        <Typography 
            fontWeight='700px' sx={{ fontSize: { lg: '44px', xs: '30px' }}} 
            mb='50px' 
            textAlign='center'
        >
            Tekstiä <br /> Tekstiä
        </Typography>
        <Box position='relative' mb='72px'>
            <TextField 
                sx={{
                    input: { fontWeight: '700px', borderRadius: '15px' },
                    width: { lg: '700px', xs: '350px'},
                    backgroundColor: '#FFFFFF'
                }}
                height='80px'
                value=''
                onChange={(e) => {}}
                placeholder='Search Exercises'
                type='text'
            />
            <Button 
                variant='contained' 
                sx={{ 
                    textTransform: 'none', 
                    width: { lg: '175px', xs: '80px'}, 
                    fontSize: { lg: '20px', xs: '14px'}, 
                    height: '56px', position: 'absolute', right: '0'
                    }}
                >
                Search
            </Button>
        </Box>

    </Stack>
  )
}

export default SearchExercises