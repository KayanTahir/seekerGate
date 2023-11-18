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
import Axios from 'axios';
import cityNames from "./cityname";
import { postRequest } from "../../Api";
import { apiRoutes } from "../../Api/apiRoutes";
import './signup.css'
// Adding meta tags
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
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
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');  
  //States for SignUp 
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [mobile_number, setMobile_number] = useState('')
  const [users, setUsers] = useState('')
  const [city, setCity] = useState('')
  const [gender, setGender] = useState('')
  const [user_relig, setUser_relig] = useState('')
  const [user_date, setUser_date] = useState('')
  const [user_ethnicity, setUser_ethnicity] = useState('')
  const [user_status, setUser_status] =useState('')


  

  async function handleAdd(event) {
    event.preventDefault();

    const onSuccess = (res) =>{
      alert('User created')
     window.location.href = "/";
    }
    const onError =(err) => {
      alert('Please Enter the Complete Detail');
    } 
    
     const body = {
      username,
      password,
      mobile_number,
      gender,
      user_relig,
      user_ethnicity,
      user_date,
      user_status,
      users,
      city
    
     }
    
      
    
    await postRequest(body,apiRoutes.Signup,onSuccess, onError)
  }

//Password Validation Check
const passwordMatch = password === confirmPassword;


  // const handleAdd = (event) => {
  //   event.preventDefault();
  //   Axios.post("http://127.0.0.1:8000/api/Signup", {username, users, password, mobile_number, city})
  //   .then(res => {
  //     window.location.href = "/";
  //   })
  //   .catch(err => console.log(err))
    
  // };
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  // const handleToggleConfirmPassword = () => {
  //   setShowConfirmPassword(!showConfirmPassword);
  // };
  //CSS
  const theme = useTheme();
  const isMatchsm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  const containerStyle = {};
  const signupFormContainer = {
    paddingTop: isMatchmd ? "0px" : "0px",
    display: "flex",
    justifyContent: "center",
    
  };

  const signupForm = {
    width: "100%",
  };

  const inputField = {
    width: isMatchsm ? "90vw" : "100%",
    borderRadius: "20px",
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
    maxHeight: '95%', // Set the maximum height for the content
    overflowY: 'auto'
    
    
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
            <Typography variant={isMatchsm ? "h6" : "h5"} textAlign="center">
              <b>Sign Up For Seekersgate</b>
            </Typography>

            <Stack spacing={1}>
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
              </Stack>

              
          {/* My Code  */}

          <Grid container>
            <Grid item lg={6} md={6} sm={6} sx={{pr:"4px"}}>
            <Stack spacing={1}>
              <label>
                <b>Enter Password</b>
              </label>
              <TextField
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                name="name"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                sx={inputField}
                required
                size="small"
                // helperText={!passwordMatch && 'Passwords do not match'}
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
              />
            </Stack>
            </Grid>

            <Grid item lg={6} md={6} sm={6}>
            <Stack spacing={1}>
              <label>
                <b>Confirm Password</b>
              </label>
              <TextField
                // text='+92'
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                name="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="off"
                sx={inputField}
                required
                size="small"
                error={!passwordMatch}
                helperText={
                  !passwordMatch && (
                    <Typography color="error">
                      Passwords do not match
                    </Typography>
                  )
                }
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
              />  
               </Stack>
            </Grid>       
            </Grid>
            
             <Grid container>
            <Grid item lg={6} md={6} sm={6} sx={{pr:"4px"}}>
            <Stack spacing={1}>
              <label>
                <b>Enter City</b>
              </label>
              <FormControl fullWidth>
              <Select
                 id="City"
                 className="form-control"
                onChange={(e)=>setCity(e.target.value)}
                >
                  {cityNames.map((city, index) => (
        <MenuItem value = {city} >{city}</MenuItem>
        ))}
                </Select>
                
              </FormControl>
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
              </Stack>  
              </Grid>
              </Grid>
              <Grid container>
            <Grid item lg={6} md={6} sm={6}>
            <Stack spacing={1}>
              <label>
                <b>Date of Brith</b>
              </label>
              <TextField
                type="date"
                value={user_date}
                name="date"
                onChange={(e)=>setUser_date(e.target.value)}
                autoComplete="off"
                style={{
                  width:'272px'
                }}
                required
                size="small"
              />
            </Stack>
            </Grid>

            <Grid item lg={6} md={6} sm={6} sx={{pr:"4px"}}>
            <Stack spacing={1}>
              <label>
                <b>Ethnicity </b>
              </label>
              <TextField
                type="text"
                value={user_ethnicity}
                name="ate"
                placeholder="Ethnicity "
                onChange={(e)=>setUser_ethnicity(e.target.value)}
                autoComplete="off"
               
                sx={inputField}
                required
                size="small"
              />
            </Stack>
            </Grid>
            </Grid>
            <Grid container>
            <Grid item lg={6} md={6} sm={6}>
            <Stack spacing={1}>
            <label>
                <b>Religion</b>
              </label>
             <FormControl fullWidth> 
            
             <Select
                 id="Religion"
                style = {{
                width:'272px',
                height: '40px',
                borderRadius: '10px'
                  }}
                onChange={(e)=>setUser_relig(e.target.value)}
                >
        <MenuItem value = "Islam">Islam</MenuItem>
        <MenuItem value = "Christianity">Christianity</MenuItem>
        <MenuItem value = "Hinduism">Hinduism</MenuItem>
        <MenuItem value = "Buddhism">Buddhism</MenuItem>
        <MenuItem value = "Sikhism">Sikhism</MenuItem>
        <MenuItem value = "Judaism">Judaism</MenuItem>
        <MenuItem value = "Bahá'í Faith">Bahá'í Faith</MenuItem>
        <MenuItem value = "Jainism">Jainism</MenuItem>
                </Select>
                </FormControl>
             </Stack>
             </Grid>

             <Grid item lg={6} md={6} sm={6} sx={{pr:"4px"}}>
            <Stack spacing={1}>
            <label>
                <b>Gender</b>
              </label>
             <FormControl fullWidth> 
            
             <Select
                 id="Gender"
                style = {{
                  width:'272px',
                height: '40px',
                borderRadius: '10px'
                  }}
                onChange={(e)=>setGender(e.target.value)}
                >
<MenuItem value = "Male">Male</MenuItem>
<MenuItem value = "Female">Female</MenuItem>
                </Select>
                </FormControl>
             
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
                <b>If you have don't Account? </b>
                <span style={{ color: "#3E39D1" }}>
                  <b>SignUp here</b>
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
