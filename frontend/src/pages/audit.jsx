import * as React from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRef } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import fileDownload from "js-file-download";

function Audit() {
  const [degreeTrack, setDegreeTrack] = React.useState("");

  const [levelingCourses, setLevelingCourses] = React.useState("");

  const [fileObj, setFileobj] = React.useState("");

  const inputRef = useRef(null);

  const handleCourseChange = (event) => {
    setLevelingCourses(event.target.value);
    console.log(fileObj);
  };

  const handleChange = (event) => {
    setDegreeTrack(event.target.value);
  };

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    setFileobj(event.target.files[0]);
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log("fileObj is", fileObj);

    // 👇️ reset file input
    event.target.value = null;
  };

  const handleAuditClick = (event) => {
    var formData = new FormData();
    formData.append("track", degreeTrack.toString());
    formData.append("leveling_courses", levelingCourses.toString());
    formData.append("file", fileObj);

    axios({
      method: "post",
      url: "http://localhost:8000/api/audit/",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
      responseType: "blob",
    })
      .then(function (response) {
        //handle success
        console.log(response);
        fileDownload(response.data, "transcript_audit.pdf");
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <div
      id="page-wrap"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <p> </p>
      <Stack spacing={2}>
        <input
          style={{ display: "none" }}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
        />
        <Button variant="contained" onClick={handleClick}>
          Select Transcript File
        </Button>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Degree Track</InputLabel>
          <Select value={degreeTrack} label="Track" onChange={handleChange}>
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
        <TextField
          id="LevelingCourses"
          label="Leveling Courses"
          value={levelingCourses}
          onChange={handleCourseChange}
          margin="normal"
        />
        <Button variant="contained" onClick={handleAuditClick}>
          Audit Transcript
        </Button>
      </Stack>
    </div>
  );
}

export default Audit;
