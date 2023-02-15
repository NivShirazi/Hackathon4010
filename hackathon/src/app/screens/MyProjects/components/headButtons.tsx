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
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}      
    >
        <h2> {props.title} </h2>
        </Box>
  );
}