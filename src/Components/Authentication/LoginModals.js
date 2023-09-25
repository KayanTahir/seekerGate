import React, { useState } from "react";
import './login.css'
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
import { Http, Style, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { header } from "express-validator";
function SignupModal({ open, handleClose }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // const handleAdd = async (e) => {
    
  //   e.preventDefault();
  
  //   if (user.username === "") {
  //     alert("Please Enter Your Name");
  //     return;
  //   }
  
  //   if (user.password === "") {
  //     alert("Please Enter Your Password");
  //     return;
  //   }
  
  //   try {
  //     const response = await axios.post("http://127.0.0.1:8000/api/login", {
  //       Username: user.username,
  //       Password: user.password,
  //     });
  
  //     const userData = response.data;
  
  //     if (userData.response.data) {
       
  //       // console.log(userData);
  //       // Navigate to the desired page
  //       navigate('/ourcourses');
  //     } else {
  //       alert("Wrong password or Username");
        
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //     // Handle other errors here if needed
  //   } finally {
  //     // Reset the user data
  //     user.username = "";
  //     user.password = "";
  //   }
  // };
  
  
  // const Login = () => { 

  //   const [username, setUsername] = React.useState('');
  //   const [password, setPassword] = React.useState('');
  
  
  //    const handleLogin = async () => {
  //      console.warn("username, passowrd", username, password)
  //      let  result  = await  fetch('http://127.0.0.1:8000/api/login', 
  //      {
  //       method:'Post',
  //       maxBodyLength: Infinity,
  //       body:JSON.stringify({username,password}),
  //       headers: { 
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       },

  //        });

  //        result = await  result.json();
  //        console.warn(result)

  //      }
   
  
  //    return (
  //     <dir class="Login">
  //       <h1>Login</h1>
  //       <input type='text' className="" placeholder="Enter Email " onChange={(e) => setUsername(e.target.value)} value={username} ></input>
  //        <input type='password' className="" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
  //        <button  onClick={handleLogin} type="button">Login</button>
  //     </dir>

  //    ) 
  
  //import React, { useState } from 'react';

  function Login() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   function handleLogin(event) {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/api/login ' , {email, password})
    .then(res => console.log(res))
    .catch(err => console.log(err));
   }
   


//   return (
//   //   <div>
//   //     <form onSubmit={handleLogin}>
//   //       <label>
//   //         Username:
//   //         <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//   //       </label>
//   //       <label>
//   //         Password:
//   //         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//   //       </label>
//   //       <button type="submit">Login</button>
//   //     </form>   
//   //   </div>
//    <div class="modal" id="popupLogin" tabindex="-1">
//     <div class="modal-dialog modal-sm modal-dialog-centered">
//    <div class="modal-content">
//     <div class="modal-body">
//       <div class="" >
//         <div class="">
//           <div id="brandLogoOuter">
//             <div id="brandLogoInner">
//               <i class="fas fa-lock"></i>
//             </div>
//           </div>
//           <form action="#">
//             <div class="input-group my-3">
//               <span class="input-group-text"><i class="fas fa-at"></i></span>
//               <input class="form-control" placeholder="Email ID" name="username" id="username" type="email" />
//             </div>
//             <div class="input-group my-3">
//               <span class="input-group-text"><i class="fas fa-key"></i></span>
//               <input class="form-control" placeholder="Password" name="password" id="password" type="password" />
//             </div>
//             <div class="mt-3 text-center">
//               <input type="checkbox" class="me-2" /> Remember me
//             </div>
//             <div id="btnHolder">
//               <button class="btn btn-lg btn-warning text-white mt-3 w-100">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//    </div>
//   </div>
//   </div>
//    );
// };

//export default Login;

  
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
                <b>Log in to Seekersgate</b>
              </Typography>
              <br />
              <Stack spacing={1}>
                <label >
                  <b>Email Address or Phone Number</b>
                </label>
                <TextField
                  type="email"
                  value={user.username}
                  name="username"
                  onChange={handleChange}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
              </Stack>

              <Stack spacing={1}>
                <label >
                  <b>Password</b>
                </label>
                <TextField
                  sx={inputField}
                  type={showPassword ? "text" : "password"}
                  value={user.password}
                  name="password"
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePassword}
                          sx={{ color: "#3E39D1" }}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              <br />
              <Stack spacing={1}>
                <Button variant="contained" onClick={handleLogin} type="submit">
                  ACSSES
                </Button>

                <Typography variant="subtitle2" textAlign="center">
                  <b>Need a Seekersgate account? </b>
                  <span style={{ color: "#3E39D1" }}>
                    <b>Sign up here</b>
                  </span>
                </Typography>
              </Stack>
            </Stack>
          
        </Container>
      </Box>
    </Modal>
  );             
                 
     }    
    }    
export default Login;

            