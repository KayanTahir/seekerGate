import {
    AppBar,
    Grid,
    Stack,
    TextField,
    Toolbar,
    InputAdornment,
    styled,
    Typography,
    IconButton,
    Select,
    MenuItem,
    Menu,
    Button,
    FormControl,
    InputLabel,
    Container
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
  import { useTheme, useMediaQuery, Divider } from "@mui/material";
  import DrawerComp from "./DrawerComp";
  import "./Navbar.css";
  import LoginModal from "./Authentication/LoginModal";
  import SignupModal from "./Authentication/SignupModal";
  import { useNavigate } from "react-router-dom";
  const Navbar = () => {
    // CSS AND STATES
    const theme = useTheme();
    const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
    const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
   
    const [openModal, setOpenModal] = useState(false);
    const Navigate = useNavigate();
    const handleOpenModal = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };
    // const gotologin = () => {
    //   Navigate('/Login')
    // }
    const [openModal1, setOpenModal1] = useState(false);
  
    const handleOpenModal1 = () => {
      setOpenModal1(true);
    };
  
    const handleCloseModal1 = () => {
      setOpenModal1(false);
    };
     const goToAdmin = () =>{
      Navigate('/adminourcourses')
     }
    return (
      <>
      
        <AppBar
          elevation={0}
          position="absolute"
          sx={{
            background: "transparent",
            pt: isMatchmd ? "4px" : "10px",
          }}
        >
            <Container maxWidth="lg">
          <Toolbar>
            {isMatchlg ? (
              <>
                <DrawerComp />
              </>
            ) : (
              <Grid container>
                {isMatchmd ? null : (
                  <Grid item lg={6} md={6}>
                    <Stack direction="row" spacing={3}>
                     <Typography variant="h5" ml="-20px"><b>SeekersGate</b></Typography>
                      {/* <TextField
                        variant="outlined"
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <SearchIcon
                              sx={{
                                color: "white",
                                marginRight: "8px",
                              }}
                            />
                          ),
                          style: {
                            borderRadius: "5px",
                            background: "rgba(255, 255, 255, 0.12)",
                            paddingRight: "18px",
                            fontSize: "17px",
                          },
                          inputProps: {
                            style: {
                              color: "white",
                            },
                          },
                        }}
                        InputLabelProps={{
                          style: {
                            color: "white",
                          },
                        }}
                        placeholder="Search by team, artist, event, or venue"
                      /> */}
                    </Stack>
                  </Grid>
                )}
  
               
  
                <Grid lg={6} md={6}>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ display: "flex", alignItems: "center",justifyContent:"end" }}
                  >
                    
                      <Button
                        variant="text"
                        size="small"
                        sx={{
                          color: "#fff",
                          textTransform: "capitalize",
                        }}
                      >
                        <b>Home</b>
                      </Button>
                    
                    <div
                      className="vl"
                      style={{ borderLeft: "1px solid #979497", height: "34px" }}
                    ></div>
  
                    <Button
                      onClick={handleOpenModal}
                      variant="text"
                      size="small"
                      sx={{
                        color: "#fff",
                        textTransform: "capitalize",
                      }}
                    >
                      <b>Login</b>
                    </Button>
                    <LoginModal open={openModal} handleClose={handleCloseModal} />
                    <Button
                        variant="text"
                        onClick={handleOpenModal1}
                        sx={{
                          color: "#fff",
                          textTransform: "capitalize",
                          background: "transparent",
                          border: "1px solid white",
                          px: 3,
                        }}
                      >
                        <b>Get Started</b>
                      </Button>
                      <Button
                        variant="text"
                        onClick={goToAdmin}
                        sx={{
                          color: "#fff",
                          textTransform: "capitalize",
                          background: "transparent",
                          border: "1px solid white",
                          px: 3,
                        }}
                      >
                        <b>Admin</b>
                      </Button>
                      <SignupModal open={openModal1} handleClose={handleCloseModal1} />
                  </Stack>
                </Grid>
              </Grid>
            )}
          </Toolbar>
          </Container>
        </AppBar>
      </>
    );
  };
  
  export default Navbar;
  