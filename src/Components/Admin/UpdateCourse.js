import React, { useEffect, useState , setState } from "react";
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
import { Link, useNavigate, useParams} from "react-router-dom";
import axios from 'axios'
import { apiRoutes } from "../../Api/apiRoutes";
import { getRequest } from "../../Api";
import handleOpenModal from "./teacherAction";


const useForceUpdate = () => {
  const [, updateState] = React.useState();
  return React.useCallback(() => updateState({}), []);
}
function Updateteacher({ open, id, handleClose,data }) {

  console.log('data___',data?.teacher_Name)
  const forceUpdate = useForceUpdate();
  const navigate = useNavigate();
  const [teacher_Name, setTeacher_name] = useState(data?.teacher_Name)
  const [teacher_Exp, setTeacher_Exp] = useState('')
  const [teacher_email, setTeacher_email] = useState('')
  const [teacher_catg, setTeacher_catg] = useState('')
  const {teacher_id} = useParams('');
  const [teacherData] = useState('')
  
  console.log('teacher_name',teacher_Name)

  async function getdata () {
    
    const teacherData = await handleOpenModal(id);
    console.log('here is data ',teacherData)
    setTeacher_name(teacherData?.data?.teacher_Name);
    forceUpdate();
    
  

  }
  
  useEffect(()=>{
    setTeacher_name(data?.teacher_Name)
  //  getdata()
   },[data])
  
  const [user, setUser] = useState({
    // catogory: "",
    // name: "",
    // pic:"",
    // zipFile:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  
  // sync function handleAdd(event) {
  //   event.preventDefault();

  //   const onSuccess = (res) =>{
  //     alert('Update the users')
  //    //window.location.href = "/";
  //   }
  //   const onError =(err) => {
  //     alert('Please Enter the Complete Detail');
  //   } 
    
  //    caonst body = {
  //     teacher_Name,
  //     teacher_Exp,
  //     teacher_email,
  //     teacher_catg
  //    }
    
      
    
  //   await putRequest(body,apiRoutes.tupdate,onSuccess, onError)
  // }

//console.log("hellworld")




 
  function handleAdd(e) {
    e.preventDefault();
    
    const payload = {
      teacher_Name,
      teacher_Exp,
      teacher_email,
      teacher_catg
    };
  
    axios.put(`http://127.0.0.1:8000/api/tupdate/` +teacher_id, payload)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }


  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/api/edit/' +teacher_id)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));
  // },[])  
    // axios.put('http://127.0.0.1:8000/api/tu')
    // .then(res => {
    //       //window.location.href = "/";
    //       console.log(res)
    //      })
    //      .catch(err => console.log(err))
        
     


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
        <Container  sx={signupFormContainer}>
        
            <Stack sx={signupForm} direction="column" spacing="20px">
              <Typography variant={isMatchsm ? "h6" : "h4"} textAlign="center">
                <b>Update Teacher Detail in Seekersgate</b>
              </Typography>
              <br />
             
              <Stack spacing={1}>
                <label >
                  <b>Teacher Name</b>
                </label>
              
                <TextField
                  type="text"
                  value={teacher_Name}
                  name="email"
                  onChange={(e) => setTeacher_name(e.target.value)}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
             
              </Stack>
              
              <Stack spacing={1}>
                {/* <label >
                  <b>ID</b>
                </label>
                <TextField
                  type="text"
                  value={teacher_id}
                  name="text"
                  onChange={(e) => setTeacher_id(e.target.value)}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                /> */}
                  <label >
                  <b>Teacher Experience</b>
                </label>
                <TextField
                  type="text"
                  value={teacher_Exp}
                  name="text"
                  onChange={(e) => setTeacher_Exp(e.target.value)}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
              </Stack>
              <Stack spacing={1}>
                <label >
                  <b>Teacher Catogory</b>
                </label>
                <TextField
                  type="text"
                  value={teacher_catg}
                  name="email"
                  onChange={(e) => setTeacher_catg(e.target.value)}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
              </Stack>
              <Stack spacing={1}>
                <label >
                  <b>Teacher Email</b>
                </label>
                <TextField
                  type="email"
                  value={teacher_email}
                  name="email"
                  onChange={(e) => setTeacher_email(e.target.value)}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
              </Stack>
              <br />
              <Stack spacing={1}>
                <Button onClick={handleAdd} variant="contained" type="submit" sx={signUpButton}>
                  Update Record
                </Button>
              </Stack>
            </Stack>

        </Container>
      </Box>
    </Modal>
  );

              }  


export default Updateteacher;
