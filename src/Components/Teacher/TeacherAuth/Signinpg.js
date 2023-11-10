import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PasswordIcon from '@mui/icons-material/Password';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Avatar } from "@mui/material";
import { postRequest } from "../../../Api";
import { apiRoutes } from "../../../Api/apiRoutes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
const navigate = useNavigate();
const [teacher_email, setTeacher_email] = useState('')
const [teacher_password, setTeacher_password] = useState('')
const [status , setStatus] = useState('')

async function handleLogin(event) {
    
  event.preventDefault();
  

  const onSuccess = (res) => {
    
    localStorage.setItem('teacher_id',res.teacher_id)
    localStorage.setItem('teacher_name', res.teacher_Name)
    navigate('/teacherdashboard')
    
  }
  const onError =(res) => {
    alert(res.msg);
    
  } 

  await postRequest({teacher_email,teacher_password},apiRoutes.teacherlogin,onSuccess, onError)  

}
return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "success.main" }}>
            <PasswordIcon />
          </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
           value={teacher_email}
           onChange={(e) => setTeacher_email(e.target.value)}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={teacher_password}
            onChange={(e) => setTeacher_password(e.target.value)}
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
 <Link href="teacherdashboard" variant="body2">        
  <Button
   
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
    onClick={handleLogin}
  >
    
             
    Sign In
  </Button>
  </Link>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="teacherSigup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
      

}