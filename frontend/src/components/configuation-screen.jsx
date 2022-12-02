import * as React from "react";
import {useState, useEffect} from 'react'
import axios from "axios" 
import { DataGrid } from '@mui/x-data-grid';  
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
  
function Configuration() {

  const [classes, setClasses] = useState([]);

  const [selectedIds, setSelectedIds] = useState([]);

  const [classNumber, setClassNumber] = useState('');

  const [track, setTrack] = useState('');

  useEffect(() => {
    async function fetchClasses() {
      const URL = 'http://localhost:8000/api/courses/';
      try {
        const res = await axios.get(URL);
        console.log(res.data);
        setClasses(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchClasses();
  }, []);



  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => classes.find((row) => row.id === id));
    console.log(selectedRowsData);
    setSelectedIds(ids);
  };

  const handleClassNumChange = (event) => {
    setClassNumber(event.target.value);
  }

  const handleTrackChange = (event) => {
    setTrack(event.target.value);
  }

  const handleClick = event => {
    axios({
      method: "post",
      url: "http://localhost:8000/api/courses/",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        class_num: classNumber,
        track: track
      }
    })
    .then(function (response) {
        console.log(response);
        window.location.reload();
    })
    .catch(function (response) {
      console.log(response);
    });

    
  }


  const columns =  [  
    { field: 'id', headerName: 'ID', width: 150, editable: false },
    { field: 'class_num', headerName: 'Class Number', width: 260, editable: true },
    { field: 'track', headerName: 'Track', width: 260, editable: true },]  

  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'top',
      height: '100vh',
      backgroundColor:'white',
      marginLeft: 200
      }}>
      <Stack spacing={1}>
       <TextField
          height="150"
          width="200"
          id="ClassNumber"
          label="Class Number"
          value={classNumber}
          onChange={handleClassNumChange}
          margin="normal"
        />
        <TextField
          height="150"
          width="200"
          id="Track"
          label="Track"
          value={track}
          onChange={handleTrackChange}
          margin="normal"
        />
        <Button
        variant="contained"
        onClick={handleClick}>Add Class</Button>
        </Stack>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', 
      height: 780, 
      width: '50%',
      marginLeft: 250,
      marginTop: 33 }}>
        <DataGrid
          rows={classes}
          editMode="row"
          columns={columns}
          pageSize={13}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        />
    </div>  
    </div>
  );
}
  
export default Configuration;