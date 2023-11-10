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
  import './login.css'
  import SignupModal from "./SignupModal";
import { Link } from "react-router-dom";


function SelectorModel({ open, handleClose }) {

    const [openModal, setOpenModal] = useState(false);
   
    
    const handleOpenModal = () => {
      setOpenModal(true);
    };
  
   
    const handleCloseModal = () => {
      setOpenModal(false);
    };



    // const gotologin = () => {
    //   Navigate('/Login')
    // }

    const signupFormContainer = {
        
        display: "flex",
        justifyContent: "center",
      };
    
      const signupForm = {
        width: "100%",
      };
    
      const inputField = {
       
        borderRadius: "5px",
        background: "#fff",
      };
    
      const signUpButton = {
        width: "100%",
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
                          
                <br />
                <Stack spacing={1}>
                  <Button
                    variant="contained"
                    onClick={handleOpenModal}
                    type="submit"
                    sx={signUpButton}
                  >
                   Start as Learner
                  </Button>
                  <SignupModal open={openModal} handleClose={handleCloseModal} />
                  <Stack spacing={1}>
                  <div className="mange">
                    <h6><b>OR</b></h6>
                    </div>
                    </Stack>
                    
                  
                 <a href="teacherSigup" ><Button
                    variant="contained"
                    sx={signUpButton}
                    type="submit"
                    
                  > 
                   Start as Teacher
                  </Button></a> 
                 
                  
                  <Typography variant="subtitle2" textAlign="center">
                    <b>Wellcome to Seekarsgate E-Learner Platform</b>
                    <span style={{ color: "#3E39D1" }}>
                     
                    </span>
                  </Typography>
                </Stack>
            
            </Container>
          </Box>
        </Modal>
      );
    
}


export default SelectorModel
