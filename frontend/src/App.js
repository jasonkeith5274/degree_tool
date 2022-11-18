import * as React from 'react';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { display } from '@mui/system';
import { Grid } from '@mui/material';
import {useState} from 'react';
import {useRef} from 'react';
import Stack from '@mui/material/Stack';

function App() {

  const [degreeTrack, setDegreeTrack] = React.useState('');

  const inputRef = useRef(null);


  const handleChange = (event) => {
    setDegreeTrack(event.target.value);
  };

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    console.log(fileObj);
    console.log(fileObj.name);
    
  }

  /*
  return (
    <div 
      style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      }}>
      <input
        style={{display: 'none'}}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />

      <button onClick={handleClick}>Open file upload box</button>
    </div>
  );
  */
  
  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      }}>
      <p> </p>
      <Stack spacing={2}>
        <Button variant="contained">Select Transcript File</Button>
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
          <FormHelperText>Enter the Degree Track</FormHelperText>
        </FormControl>
      </Stack>
    </div>
  );
  
}

export default App;
