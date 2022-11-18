import * as React from 'react';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function App() {

  const [degreeTrack, setDegreeTrack] = React.useState('');

  const handleChange = (event) => {
    setDegreeTrack(event.target.value);
  };

  return (
    <div>
      <p> Form </p>
      <Button variant="contained">Hello World</Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Degree Track</InputLabel>
        <Select
          value={degreeTrack}
          label="Track"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Data Science</MenuItem>
          <MenuItem value={20}>Cyber Security</MenuItem>
          <MenuItem value={30}>Intelligent Systems</MenuItem>
          <MenuItem value={40}>Interactive Computing</MenuItem>
          <MenuItem value={50}>Networks and Telecommunications</MenuItem>
          <MenuItem value={60}>Systems</MenuItem>
          <MenuItem value={70}>Traditional Computer Science</MenuItem>
        </Select>
        <FormHelperText>Enter your Degree Track</FormHelperText>
      </FormControl>
    </div>
  );
}

export default App;
