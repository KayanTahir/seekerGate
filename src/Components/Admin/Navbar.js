import { AppBar, Button, Grid, Stack, Toolbar, Typography,useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DrawerComp from "./DrawerComp";
import {Link} from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
    const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
  //Routes
  const routes = [{
    name:"Our Courses",
    link:"/adminourcourses"
  },{
    name:"Teachers",
    link:"/adminteacher"
  },{
    name:"Learners",
    link:"/adminlearners"
  }]
  return (
    <AppBar sx={{background:"white",color:"#000"}} position="sticky">
        <Toolbar>
        {isMatchlg ? (
              <>
                <DrawerComp />
              </>
            ) : (
            <Grid container sx={{px:"30px"}}>
                <Grid item lg={4}>
                <Typography variant="h5"><b>Seekers<span style={{color:"#62c929"}}>Gate</span></b></Typography>
                </Grid>
               
                <Grid item lg={4}>
                    <Stack direction="row" justifyContent="space-around">
                        {routes.map((route)=>{
                            return(
                                <>
                               <Link to={route.link} style={{textDecoration:"none"}}> <Button variant="text" sx={{color:"#000"}}><b>{route.name}</b></Button></Link>
                                </>
                            )
                        })}
                    </Stack>
                </Grid>
                <Grid item lg={4} sx={{display:"flex",justifyContent:"end"}}>
                    <Button variant="contained" onClick={()=>navigate('/')} sx={{background:"#62c929",textTransform: "capitalize"}}>logout</Button>
            </Grid>
            </Grid>
            )}
        </Toolbar>
    </AppBar>
  )
}

export default Navbar