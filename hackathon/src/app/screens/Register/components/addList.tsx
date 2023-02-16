import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const interests = [
  'אוכלוסיות בסיכון',
  'בריאות הנפש',
  'אקלים ואיכות הסביבה',
  'קהילה',
  'רפואה',
  'תזונה וספורט',
  'תרבות',
  'היסטוריה',
  'חינוך והשכלה',
  'כלכלה',
  'שוויון זכויות',
  'צרכים מיוחדים'
];

function getStyles(interests: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(interests) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">תחומי עניין</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="תחומי עניין" />}
          MenuProps={MenuProps}
        >
          {interests.map((interests) => (
            <MenuItem
              key={interests}
              value={interests}
              style={getStyles(interests, personName, theme)}
            >
              {interests}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
