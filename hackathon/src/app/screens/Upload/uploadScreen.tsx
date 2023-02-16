/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './uploadScreen.css'; // import CSS file
import MultipleSelect from '../Register/components/addList';
import { Grid } from '@mui/material';
import MultipleSelectTypes from './components/addListType';

const UploadScreen = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [chips] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Description:', description);
    console.log('Chips:', chips);
    try {
      fetch('http://localhost:3000/');
    } catch (e) {
      console.log('the error is ' + e);
    }
    navigate('/');
  };

  return (
    <div className="my-form">
      <br />
      <TextField
        label="שם הפרויקט"
        value={name}
        onChange={handleNameChange}
        className="form-field"
      />
      <br />
      <TextField
        label="תיאור קצר"
        value={description}
        onChange={handleDescriptionChange}
        className="form-field"
      />
      <br />
      <Grid item xs={12}>
        <MultipleSelect></MultipleSelect>
      </Grid>
      <Grid item xs={12}>
        <MultipleSelectTypes></MultipleSelectTypes>
      </Grid>
      <br />
      <Button type="submit" className="submit-button" onClick={handleSubmit}>
        הוסיפו שיתוף פעולה!
      </Button>{' '}
    </div>
  );
};

export default UploadScreen;
