import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';  
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Button } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";


const Planning = () => {

  const [coreClasses, setCoreClasses] = React.useState([]);

  const [electiveClasses, setElectiveClasses] = React.useState([]);

  const [degreeTrack, setDegreeTrack] = React.useState("");


  const [core1, setCore1] = React.useState("");
  const [core2, setCore2] = React.useState("");
  const [core3, setCore3] = React.useState("");
  const [core4, setCore4] = React.useState("");
  const [core5, setCore5] = React.useState("");
  
  const [elec1, setElec1] = React.useState("");
  const [elec2, setElec2] = React.useState("");
  const [elec3, setElec3] = React.useState("");
  const [elec4, setElec4] = React.useState("");
  const [elec5, setElec5] = React.useState("");
  const [elec6, setElec6] = React.useState("");


  const handleCore1 = (event) => {
    setCore1(event.target.value);
  };
  const handleCore2 = (event) => {
    setCore2(event.target.value);
  };
  const handleCore3 = (event) => {
    setCore3(event.target.value);
  };
  const handleCore4 = (event) => {
    setCore4(event.target.value);
  };
  const handleCore5 = (event) => {
    setCore5(event.target.value);
  };


  const handleElec1 = (event) => {
    setElec1(event.target.value);
  };
  const handleElec2 = (event) => {
    setElec2(event.target.value);
  };
  const handleElec3 = (event) => {
    setElec3(event.target.value);
  };
  const handleElec4 = (event) => {
    setElec4(event.target.value);
  };
  const handleElec5 = (event) => {
    setElec5(event.target.value);
  };
  const handleElec6 = (event) => {
    setElec6(event.target.value);
  };

  const handleChange = (event) => {
    setDegreeTrack(event.target.value);

    const URL = "http://localhost:8000/api/course/core/" + event.target.value;

    try {
        const options = {
          url: URL,
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }

        axios(options)
        .then(response => {
          console.log(response.data);
          setCoreClasses(response.data);
        })
    }
    catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    async function fetchElectiveClasses() {
      // set up api call to elective classes
      const URL = "http://localhost:8000/api/course/elective";

      try {
        const options = {
          url: URL,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }
        axios(options)
          .then(response  => {
            console.log(response.data);
            setElectiveClasses(response.data);
          })
      } catch (error) {
        console.log(error);
      }
    }
    fetchElectiveClasses();
  }, [])

  // this function will handle generating the pdf
  const handleGeneratePlan = (event) => {

  };


  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      }}>
    
    <stack spacing={2}>
     <h2>Degree Track</h2>
     <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Degree Track</InputLabel>
          <Select
            value={degreeTrack}
            label="Track"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"ds"}>Data Science</MenuItem>
            <MenuItem value={"cs"}>Cyber Security</MenuItem>
            <MenuItem value={"is"}>Intelligent Systems</MenuItem>
            <MenuItem value={"ic"}>Interactive Computing</MenuItem>
            <MenuItem value={"nat"}>Networks and Telecommunications</MenuItem>
            <MenuItem value={"sys"}>Systems</MenuItem>
            <MenuItem value={"trad"}>Traditional Computer Science</MenuItem>
          </Select>
     </FormControl>
     <h2>Core Courses</h2>
     <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            value={core1}
            label="core1"
            onChange={handleCore1}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {coreClasses.map((course, index) => {
              return (
                <MenuItem value={course}>{course}</MenuItem>
              )
            })}
          </Select>
          <FormHelperText>Enter a Core Course</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            value={core2}
            label="core2"
            onChange={handleCore2}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {coreClasses.map((course, index) => {
              return (
                <MenuItem value={course}>{course}</MenuItem>
              )
            })}
          </Select>
          <FormHelperText>Enter a Core Course</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            value={core3}
            label="core3"
            onChange={handleCore3}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {coreClasses.map((course, index) => {
              return (
                <MenuItem value={course}>{course}</MenuItem>
              )
            })}
          </Select>
          <FormHelperText>Enter a Core Course</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            value={core4}
            label="core4"
            onChange={handleCore4}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {coreClasses.map((course, index) => {
              return (
                <MenuItem value={course}>{course}</MenuItem>
              )
            })}
          </Select>
          <FormHelperText>Enter a Core Course</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            value={core5}
            label="core5"
            onChange={handleCore5}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {coreClasses.map((course, index) => {
              return (
                <MenuItem value={course}>{course}</MenuItem>
              )
            })}
          </Select>
          <FormHelperText>Enter a Core Course</FormHelperText>
        </FormControl>


        <h2>Elective Courses</h2>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            value={elec1}
            label="elec1"
            onChange={handleElec1}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {electiveClasses.map((course, index) => {
              return (
                <MenuItem value={course}>{course}</MenuItem>
              )
            })}
          </Select>
          <FormHelperText>Enter Elective Course</FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            value={elec2}
            label="elec2"
            onChange={handleElec2}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {electiveClasses.map((course, index) => {
              return (
                <MenuItem value={course}>{course}</MenuItem>
              )
            })}
          </Select>
          <FormHelperText>Enter Elective Course</FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            value={elec3}
            label="elec3"
            onChange={handleElec3}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {electiveClasses.map((course, index) => {
              return (
                <MenuItem value={course}>{course}</MenuItem>
              )
            })}
          </Select>
          <FormHelperText>Enter Elective Course</FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            value={elec4}
            label="elec4"
            onChange={handleElec4}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {electiveClasses.map((course, index) => {
              return (
                <MenuItem value={course}>{course}</MenuItem>
              )
            })}
          </Select>
          <FormHelperText>Enter Elective Course</FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            value={elec5}
            label="elec5"
            onChange={handleElec5}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {electiveClasses.map((course, index) => {
              return (
                <MenuItem value={course}>{course}</MenuItem>
              )
            })}
          </Select>
          <FormHelperText>Enter Elective Course</FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            value={elec6}
            label="elec6"
            onChange={handleElec6}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {electiveClasses.map((course, index) => {
              return (
                <MenuItem value={course}>{course}</MenuItem>
              )
            })}
          </Select>
          <FormHelperText>Enter Elective Course</FormHelperText>
        </FormControl>
        <h2> </h2>
        <Button
          variant="contained"
          onClick={handleGeneratePlan}>
            Generate Plan</Button>
    </stack>
    </div>
  );
};

export default Planning;
