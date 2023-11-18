import React, { useState } from "react";
import {
  Grid,
  useTheme,
  useMediaQuery,
  Container,
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  InputAdornment,
  styled,
  MenuItem,
  IconButton,
  Modal,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function VideoUpload({ open, handleClose }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    catogory: "",
    name: "",
    pic:"",
    zipFile:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleAdd = (e) => {
    // if (user.email == "") {
    //   alert("Please Enter Your Name");
    // } else if (user.password == "") {
    //   alert("Please Enter Your Password");
    // } else {
    //   e.preventDefault();
    //   axios.post("enterUrl", {
    //     email: user.email,
    //     password: user.password,
    //   }).then((response) => {
    //     if (response.data.message) {
    //       alert("wrong password or User Name");
    //     } else {
    //       const userData = response.data;
    //       console.log(userData);
    //       window.location.href = "/home";
    //       localStorage.setItem("UsersData", JSON.stringify(userData))
    //     }
    //   })
    //   user.name = "";
    //   user.password = "";
    //}
  };

  const [file, setFile] = useState(null);
  const [course_name, setCourse_name] = useState([]);
  const [total_video, setTotal_video] = useState([]);
  const [course_dur_time, setCourse_dur_time] =  useState([]);
  const [course_teacher_id, setCourse_teacher_id] = useState([]);
  const [status, setStatus] = useState([]);

  const handleFile = (e) => {
    // Assuming you want to upload a single file
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  }


  const handleUpload = () => {
    const formData = new FormData();
    formData.append('upload', file);
    formData.append('course_name', course_name);
    formData.append('total_video', total_video);
    formData.append('course_dur_time', course_dur_time);
    formData.append('course_teacher_id', course_teacher_id);
    formData.append('status', status);

    axios.post('http://127.0.0.1:8000/api/imgupload', formData)
      .then(res => {
        if (res.data.status === 'Success') {
          console.log('Upload success');
        } else {
          alert('Successfully Uploaded')
        }
      })
      .catch(err => console.log('Upload error:', err));
  }

// if(!status){
//   return status = 1
// }

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const countries = [
    { code: "+1", label: "USA" },
    { code: "+44", label: "UK" },
    // Add more countries as needed
  ];

  const handleCountryCodeChange = (event) => {
    // Handle country code change
  };

  //CSS
  const theme = useTheme();
  const isMatchsm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  const containerStyle = {};
  const signupFormContainer = {
    paddingTop: isMatchmd ? "10px" : "20px",
    display: "flex",
    justifyContent: "center",
  };

  const signupForm = {
    width: "100%",
  };

  const inputField = {
    width: isMatchsm ? "90vw" : "100%",
    borderRadius: "5px",
    background: "#fff",
  };

  const signUpButton = {
    width: isMatchsm ? null : "100%",
    background:"#31dc89",
    textTransform: "capitalize",
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#ffffff",
    borderRadius: "10px",
    boxShadow: 24,
    pt: 4,
    pb: 12,
    px: 4,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          textAlign="end"
          variant="h5"
          sx={{ cursor: "pointer" }}
          onClick={handleClose}
          component="h2"
        >
          x
        </Typography>
        <br />
        <br />
        <Container sx={signupFormContainer}>
       
            <Stack sx={signupForm} direction="column" spacing="20px">
              <Typography variant={isMatchsm ? "h6" : "h4"} textAlign="center">
                <b>Add Course to Seekersgate</b>
              </Typography>
              <br />
              <Stack spacing={1}>
                <label >
                  <b>Course Name</b>
                </label>
                <TextField
                  type="Text"
                  value={course_name}
                  onChange={(e)=>setCourse_name(e.target.value)}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
              </Stack>
              <Stack spacing={1}>
                <label >
                  <b>Total Video</b>
                </label>
                <TextField
                  type="email"
                  value={total_video}
                  
                  onChange={(e)=>setTotal_video(e.target.value)}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
              </Stack>
              <Stack spacing={1}>
                <label >
                  <b>Course Duration</b>
                </label>
                <TextField
                  type="email"
                  value={course_dur_time}
                  name="email"
                  onChange={(e) =>setCourse_dur_time(e.target.value)}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
              </Stack>
              <Stack spacing={1}>
                <label >
                  <b>teacher_id</b>
                </label>
                <TextField
                  type="email"
                  value={course_teacher_id}
                  name="email"
                  onChange={(e) =>setCourse_teacher_id(e.target.value)}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
              </Stack>
              <FormControl>
              <InputLabel id="demo-simple-select-label">Active Status</InputLabel>
              <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                label="Active Status"
                onChange={(e) =>setStatus(e.target.value)}
                >
                  <MenuItem value = '1'>Yes</MenuItem>
                  <MenuItem value = '0'>No</MenuItem>
                </Select>
              </FormControl>
              <Stack spacing={1}>
                <label >
                  <b>Upload Image</b>
                </label>
                <input
                  type="file"
                  onChange={handleFile}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
              </Stack>
             
              <br />
              <Stack spacing={1}>
                <Button variant="contained" onClick={handleUpload} type="submit" sx={signUpButton}>
                  Add Video
                </Button>
              </Stack>
            </Stack>
          
        </Container>
      </Box>
    </Modal>
  );
}

export default VideoUpload;
