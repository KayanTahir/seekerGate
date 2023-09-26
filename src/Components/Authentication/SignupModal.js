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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios';
function SignupModal({ open, handleClose }) {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    confirmpassword: "",
    address:"",
    city:"",
    gender:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [mobile_number, setMobile_number] = useState('')
  const [users, setUsers] = useState('')
  const [city, setCity] = useState('')
  const handleAdd = (event) => {
    event.preventDefault();
    Axios.post("http://127.0.0.1:8000/api/Signup", {username, users, password, mobile_number, city})
    .then(res => {
      window.location.href = "/";
    })
    .catch(err => console.log(err))
    
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
    background: "#31dc89",
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
    pt: 1,
    pb: 4,
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
        <Container sx={signupFormContainer}>
          <Stack sx={signupForm} direction="column" spacing="20px">
            <Typography variant={isMatchsm ? "h6" : "h4"} textAlign="center">
              <b>Sign Up For Seekersgate</b>
            </Typography>

            <Stack spacing={1}>
              <label>
                <b>Enter Email</b>
              </label>

              <TextField
                type="name"
                placeholder="Enter Enter"
                value={username}
                name="name"
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
                sx={inputField}
                required
                size="small"
              />
               <label>
                <b>Enter Password</b>
              </label>

              <TextField
                type="password"
                placeholder="Enter Password"
                value={password}
                name="name"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                sx={inputField}
                required
                size="small"
              />
               <label>
               <strong> Enter Name </strong> 
               </label>
               <TextField
                type="name"
                placeholder="Enter Name"
                value={users}
                name="name"
                onChange={(e) => setUsers(e.target.value)}
                autoComplete="off"
                sx={inputField}
                required
                size="small"
              />
            </Stack>
            
             <Grid container>
            <Grid item lg={6} md={6} sm={6} sx={{pr:"4px"}}>
            <Stack spacing={1}>
              <label>
                <b>Enter City</b>
              </label>
              <TextField
                type="City"
                placeholder="Enter City"
                value={city}
                name="City"
                onChange={(e)=>setCity(e.target.value)}
                autoComplete="off"
                sx={inputField}
                required
                size="small"
              />
            </Stack>
            </Grid>
            <Grid item lg={6} md={6} sm={6}>
            <Stack spacing={1}>
              <label>
                <b>Enter Phone</b>
              </label>
              <TextField
                // text='+92'
                type="number"
                value={mobile_number}
                name="number"
                onChange={(e) => setMobile_number(e.target.value)}
                autoComplete="off"
                sx={inputField}
                required
                size="small"
                
              />         
      {/* <MenuItem value="male">Male</MenuItem>
      <MenuItem value="female">Female</MenuItem>
              </TextField>
            </Stack>
            </Grid>
           </Grid> 
           <Grid container>
            <Grid item lg={6} md={6} sm={6} sx={{pr:"4px"}}>
            <Stack spacing={1}>
              {/* <label> */}
               {/* <b>password</b>
              </label> */}
              {/* <TextField
                type="Password"
                value={user.password}
                name="address"
                onChange={(e)=>setPassword(e.target.value)}
                autoComplete="off"
                sx={inputField}
                required
                size="small"
              /> */}
            </Stack>
            </Grid>
            <Grid item lg={6} md={6} sm={6} sx={{pt:isMatchsm?"4px":null}}>
            <Stack spacing={1}>
              {/* <label>
                <b>City</b>
              </label>
              <TextField
                type="city"
                value={city}
                name="city"
                onChange={(e)=>setCity(e.target.value)}
                autoComplete="off"
                sx={inputField}
                required
                size="small"
              /> */}
            </Stack>
            </Grid>
           </Grid>
           <Grid container>
            <Grid item lg={6} md={6} sm={6} sx={{pr:"4px"}}>
              
            <Stack spacing={1}>
              {/* <label>
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
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />*/}
            </Stack>
            </Grid>
            <Grid item lg={6} md={6} sm={6} sx={{pt:isMatchsm?"4px":null}}>
            <Stack spacing={1}>
              {/* <label>
                <b>Confirm Password</b>
              </label>
              <TextField
                sx={inputField}
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="off"
                required
                value={user.confirmpassword}
                name="confirmpassword"
                onChange={handleChange}
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleToggleConfirmPassword}
                        sx={{ color: "#3E39D1" }}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              /> */}
            </Stack>
            </Grid>
           </Grid>
           

           
            <br />
            <Stack spacing={1}>
              <Button
                variant="contained"
                onClick={handleAdd}
                type="submit"
                sx={signUpButton}
              >
                Sign Up
              </Button>

              <Typography variant="subtitle2" textAlign="center">
                <b>Already have an account? </b>
                <span style={{ color: "#3E39D1" }}>
                  <b>Log in here</b>
                </span>
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Modal>
  );
}

export default SignupModal;
