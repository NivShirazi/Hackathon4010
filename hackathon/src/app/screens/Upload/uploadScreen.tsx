import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';
import './uploadScreen.css'; // import CSS file

const UploadScreen = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [chips, setChips] = useState<string[]>(['das', 'dsad', 'dasddas']);
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChipAdd = (event: any) => {
    if (event.key === 'Enter') {
      setChips([...chips, event.target.value]);
      event.target.value = '';
    }
  };

  const handleChipDelete = (chipToDelete: string) => () => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
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
      <TextField
        label="הוסיפו תגיות"
        onKeyUp={handleChipAdd}
        className="form-field"
      />
      <div>
        {chips.map((chip) => (
          <Chip
            key={chip}
            label={chip}
            onDelete={handleChipDelete(chip)}
            className="chip"
          />
        ))}
      </div>
      <br />
      <Button type="submit" className="submit-button" onClick={handleSubmit}>
        הוסיפו פרויקט!
      </Button>{' '}
    </div>
  );
};

export default UploadScreen;