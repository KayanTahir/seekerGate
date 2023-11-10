import React, { useEffect, useState } from "react";
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
import { getRequest, postRequest } from "../../Api";
import { apiRoutes } from "../../Api/apiRoutes";

//Data type
const amount = 1;
function AddCourse({ open, handleClose }) {
  const navigate = useNavigate();
  const [course_name, setCourse_name] = useState()
  const [course_catg , setCourse_catg] = useState()
  const [total_video, setTotal_video] = useState()
  const [course_rel_date, setCourse_rel_date] = useState()
  const [course_dur_time, setCourse_dur_time] = useState()
  const [course_teacher_id, setCourse_teacher_id] = useState()
  const ID = localStorage.getItem('teacher_id')
  const [status, setStatus] = useState()
  const [data, setData] = useState([])
  const [course_id, setCourse_id] = useState()
  const [teacher_id, setTeacher_id] = useState()
  
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

  async function handleAdd(event) {
    event.preventDefault();

    const onSuccess = (res) => {
      alert('User created')
    //  window.location.href = "/";
    }
    const onError =(err) => {
      console.log(err)
    } 
    
   
    const body = {
      // course_catg,
      // course_name,
      // total_video,
      // course_rel_date,
      // course_dur_time,
      // course_teacher_id: ID,
      // status : 0
      course_id,
      teacher_id : ID
       

    }
    
   

    await postRequest(body, apiRoutes.TeachCourse, onSuccess, onError)
  }

  
  const getData = async () => {
    const onSuccess = (res) => {
        setData(res.data)
    }
    const onError = (err) => {      
    }
  const body = {
    course_name : data,
    
  }
    await getRequest(body, apiRoutes.coursedetail, onSuccess, onError)
  }
  
  useEffect(()=>{
    getData();
  })
  


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
                <b>Select Course to Seekarsgate</b>
              </Typography>
              <br />
              
              
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Courses</InputLabel>
                <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                label="Experience"
                onChange={(e) =>setCourse_id(e.target.value)}

                
                >
                {data.map((d,i) => 
              <MenuItem value = {d.course_id}>{d.course_name}</MenuItem>
              )}
                </Select>
                </FormControl>
                <TextField
                  type="text"
                  value={ID}
                  onChange={(e) => setTeacher_id(e.target.value)}
                  autoComplete="off"
                  sx={inputField}
                  style={{display:'none'}}
                  required
                  size="small"
                />
              {/* <Stack spacing={1}>
                <label >
                  <b>Video total</b>
                </label>
                <TextField
                  type="email"
                  value={total_video}
                  onChange={(e) => setTotal_video(e.target.value)}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
              </Stack>
              <Stack spacing={1}>
                <label >
                  <b>Course Catogory</b>
                </label>
                <TextField
                  type="email"
                  value={course_catg}
                  onChange={(e) => setCourse_catg(e.target.value)}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
              </Stack>
              <Stack spacing={1}>
                
                <TextField
                  type="text"
                  value={ID}
                  onChange={(e) => setCourse_teacher_id(e.target.value)}
                  autoComplete="off"
                  sx={inputField}
                  style={{display:'none'}}
                  required
                  size="small"
                />
              </Stack>
              <Stack spacing={1}>
                <label>
                  Coure Dur Time
                </label>
                <TextField
                  type="text"
                  value={course_dur_time}
                  onChange={(e) => setCourse_dur_time(e.target.value)}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
              </Stack>
              <Stack spacing={1}>
               
              </Stack>
              <Stack spacing={1}>
                <label >
                  <b>Choose Image</b>
                </label>
                <input
                  type="file"
                  onChange={''}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
              </Stack> */}
              
              <br />
              <Stack spacing={1}>
               
                <Button variant="contained" onClick={handleAdd} type="submit" sx={signUpButton}>
                  Select Course
                </Button>
                
              </Stack>
            </Stack>
          
        </Container>
      </Box>
    </Modal>
  );
}

export default AddCourse;
