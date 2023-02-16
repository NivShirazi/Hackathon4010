import * as React from 'react';
import Box from '@mui/material/Box';

export interface BoxProps {
    title : string;
}

export default function BoxSx(props: BoxProps) {
  return (
    <Box
      sx={{
        width: "20%",
        height: 150,
        backgroundColor: '#F8D17D',
        '&:hover': {
          backgroundColor: '#FFF390',
          opacity: [0.9, 0.8, 0.7],
        },
      }}      
    >
        <h2 style = {{position : "relative" , right: "25%", top:"20%", width : "100%"}}> {props.title} </h2>
        </Box>
  );
}