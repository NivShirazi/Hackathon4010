import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export interface ButtonProps {
    title: string;
}

export default function ColorButtons(props:ButtonProps) {
  return (
    <Stack direction="row" spacing={2} justifyContent = {"center"} sx = {{width: "100%"}}>
      <Button variant="contained"  style={{backgroundColor: "#F7A08B" , width : "40%"}}>
        {props.title}
      </Button>
    </Stack>
  );
}
