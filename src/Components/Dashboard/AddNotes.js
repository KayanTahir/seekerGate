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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './OurCourses.css'
import { postRequest } from "../../Api";
import { apiRoutes } from "../../Api/apiRoutes";

function Notespad({ open, handleClose }) {
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

  const [notes_tle, setNotes_tle] = useState('')
  const [note_paragh, setNote_paragh] = useState('')
   const [user_id, setUser_id] = useState('')

   const id = localStorage.getItem('ID');

  async function handleAdd(event) {
    event.preventDefault();

    const onSuccess = (res) =>{
      alert('Data inserted')

     window.location.href = `/Notes/${localStorage.getItem('ID')}`;
    }

    const onError =(err) => {
      alert('Please Enter the Complete Detail');
    } 

    const body = {
      notes_tle,
      note_paragh,
      user_id: id 
      
    }
    await postRequest(body,apiRoutes.note,onSuccess, onError)
  
  }


 
  const handleAdds = (e) => {
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

//   const [file, setFile] = useState(null);

//   const handleFile = (e) => {
//     // Assuming you want to upload a single file
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   }


//   const handleUpload = () => {
//     const formData = new FormData();
//     formData.append('tutorials', file);

//     axios.post('http://127.0.0.1:8000/api/upload', formData)
//       .then(res => {
//         if (res.data.status === 'Success') {
//           console.log('Upload success');
//         } else {
//           alert('Successfully Uploaded')
//         }
//       })
//       .catch(err => console.log('Upload error:', err));
//   }



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
                <b>Add Notes Related Your Video</b>
              </Typography>
              <br />
              <Stack spacing={1}>
                <label >
                  <b>Notes Title</b>
                </label>
                <TextField
                  type="email"
                  name="email"
                  value={notes_tle}
                  onChange={(e) => setNotes_tle(e.target.value)}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
              </Stack>
              <Stack spacing={1}>
                <label >
                  <b>Add Notes</b>
                </label>
               <textarea 
               value={note_paragh}
               onChange={(e) => setNote_paragh(e.target.value)}
               sx={inputField}
               className="Pagh"
               />
              </Stack>
             
              <Stack spacing={1}>
                <label >
                  <b>Your ID is autoselected</b>
                </label>
                <TextField
                  type="email"
                  name="email"
                  value={id}
                  onChangeCapture={(e) => setUser_id(e.target.value)}
                  autoComplete="off"
                  style={{ display: 'none' }}
                  // sx={{
                  //   ...inputField,
                  //   display: 'none'  // Hide the TextField
                  // }}

                  required
                  size="small"
                />
              </Stack>
             
              <br />
              <Stack spacing={1}>
                <Button variant="contained" onClick={handleAdd} type="submit" sx={signUpButton}>
                  Add Notes
                </Button>
              </Stack>
            </Stack>
          
        </Container>
      </Box>
    </Modal>
  );
}

export default Notespad;
