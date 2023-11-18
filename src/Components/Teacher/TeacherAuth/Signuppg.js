import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { apiRoutes } from '../../../Api/apiRoutes';
import { getRequest, postRequest } from '../../../Api';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../ResponsiveDrawer';


const Notesx = () => {
const theme = createTheme();
const [data, setData] = useState([]);
const [teacher_Name, setTeacher_Name] = useState('')
const [teacher_Exp, setTeacher_Exp] = useState('')
const [teacher_catg, setTeacher_catg] = useState('')
const [teacher_email, setTeacher_email] = useState('')
const [teacher_password, setTeacher_password] = useState('')
const [status, setStatus] = useState('')



//Get Course Detail Api 

const getData = async () => {
  const onSuccess = (res) => {
      setData(res.data)
  }
  const onError = (err) => {      
  }

  await getRequest('', apiRoutes.coursedetail, onSuccess, onError)
}

useEffect(()=>{
  getData();
})

async function handleAdd(event) {
  event.preventDefault();

  const onSuccess = (res) =>{
    alert('User created')
   window.location.href = "/teacherSigin";
  }
  const onError =(err) => {
    alert('Please Enter the Complete Detail');
  } 
  
   const body = {
    teacher_Name,
    teacher_Exp,
    teacher_email,
    teacher_password,
    teacher_catg,
    status
  
   }
  
    
  
  await postRequest(body,apiRoutes.teachersignup,onSuccess, onError)
}

  return (
    <>
   
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "success.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
           
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Enter Name"
                  value={teacher_Name}
                  onChange={(e) => setTeacher_Name(e.target.value)}
                  required
                  fullWidth
                  label="Enter Name"
                  autoFocus
                />
              </Grid>
              
             
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Experience</InputLabel>
                <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                label="Experience"
                onChange={(e) => setTeacher_Exp(e.target.value)}
                >
<MenuItem value = "2 years">2 years</MenuItem>
<MenuItem value = "3 years">3 years</MenuItem>
<MenuItem value = "4 years">4 years</MenuItem>
<MenuItem value = "5 years & more">5 years & more</MenuItem>
                </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>

                {/* <TextField
                  required
                  fullWidth
                 value = {teacher_catg}
                 onChange={(e) => setTeacher_catg(e.target.value)}
                  label="Specialty "
                  name="Specialty"
                  autoComplete="Specialty"
                /> */}
<FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Specialty</InputLabel>
                <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                label="Specialty"
                value = {teacher_catg}
                onChange={(e) => setTeacher_catg(e.target.value)}
                >
<MenuItem value = "Computer Sicences">Computer Sicences</MenuItem>
<MenuItem value = "Data Sicence">Data Sicence</MenuItem>
<MenuItem value = "Machine Learning">Machine Learning</MenuItem>
<MenuItem value = "Electrical Eng.">Electrical Eng.</MenuItem>
                </Select>
                </FormControl>

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Email"
                  label="Email"
                  type="Email"
                  value = {teacher_email}
                  onChange={(e) => setTeacher_email(e.target.value)}
                  autoComplete="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={teacher_password}
                  onChange={(e) => setTeacher_password(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleAdd}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="teacherSigin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
    </>
  );
                }

export default Notesx;
