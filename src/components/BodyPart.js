import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
        type='button'
        alignItems='center'
        justifyContent='center'
        className=''
        sx={{ 
                borderTop: bodyPart === item ? '4px solid red' : '',
                backgroundColor: '#FFFFFF',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '40px'
        }}
    >
        <img src={Icon} alt="icon" styles={{ width: '40px', height: '40px'}} />
    </Stack>
  )
}

export default BodyPart