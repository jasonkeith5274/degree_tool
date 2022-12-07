import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";

const Planning = () => {
  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor:'white',
      }}>
    
    <stack spacing={2}>
     <h1>Degree Planning</h1>
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
            <MenuItem value={10}>Data Science</MenuItem>
            <MenuItem value={20}>Cyber Security</MenuItem>
            <MenuItem value={30}>Intelligent Systems</MenuItem>
            <MenuItem value={40}>Interactive Computing</MenuItem>
            <MenuItem value={50}>Networks and Telecommunications</MenuItem>
            <MenuItem value={60}>Systems</MenuItem>
            <MenuItem value={70}>Traditional Computer Science</MenuItem>
          </Select>
     </FormControl>
     <h2>Core Courses</h2>
     <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            //value={}
            label="Track"
            //onChange={}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem> </MenuItem>
          </Select>
          <FormHelperText>Enter a Core Course</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            //value={}
            label="Track"
            //onChange={}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem> </MenuItem>
          </Select>
          <FormHelperText>Enter a Core Course</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            //value={}
            label="Track"
            //onChange={}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem> </MenuItem>
          </Select>
          <FormHelperText>Enter a Core Course</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            //value={}
            label="Track"
            //onChange={}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem> </MenuItem>
          </Select>
          <FormHelperText>Enter a Core Course</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            //value={}
            label="Track"
            //onChange={}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem> </MenuItem>
          </Select>
          <FormHelperText>Enter a Core Course</FormHelperText>
        </FormControl>


        <h2>Elective Courses</h2>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            //value={}
            label="Track"
            //onChange={}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem> </MenuItem>
          </Select>
          <FormHelperText>Enter Elective Course</FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            //value={}
            label="Track"
            //onChange={}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem> </MenuItem>
          </Select>
          <FormHelperText>Enter Elective Course</FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            //value={}
            label="Track"
            //onChange={}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem> </MenuItem>
          </Select>
          <FormHelperText>Enter Elective Course</FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            //value={}
            label="Track"
            //onChange={}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem> </MenuItem>
          </Select>
          <FormHelperText>Enter Elective Course</FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            //value={}
            label="Track"
            //onChange={}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem> </MenuItem>
          </Select>
          <FormHelperText>Enter Elective Course</FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel>Select Course</InputLabel>
          <Select
            //value={}
            label="Track"
            //onChange={}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem> </MenuItem>
          </Select>
          <FormHelperText>Enter Elective Course</FormHelperText>
        </FormControl>
        <h2></h2>
        <Button
          variant="contained"
          onClick={handleGeneratePlan}>
            Generate Plan</Button>
    </stack>
    </div>
  );
};

export default Planning;
