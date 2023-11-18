import React,{useState} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import {
    Avatar,
    Grid,
    Stack,
    Typography,
    Container,
    useTheme,
    useMediaQuery,
    Button,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
  } from "@mui/material";
  import Footer from '../Footer'
import Navbar from './Navbar';
import business from "./images/business.webp";
import it from "./images/it.webp";
import medicine from "./images/medicine.jpg";
import { useNavigate } from 'react-router-dom';
import './SelectedCourses.css'
import { getRequest } from '../../Api';
import { apiRoutes } from '../../Api/apiRoutes';
import { useEffect } from 'react';
const SelectedCourse = (props) => {
    const [showAll, setShowAll] = useState(false);
    const location = useLocation();
  const receivedData = location.state;
  const navigate = useNavigate();
  const theme = useTheme();
  const isMatchsm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
  const [data, setData] = useState([]);
  const courses_id = localStorage.getItem('CourseID')


  const getData = async () => {
  const onSuccess = (res) => {
  setData(res.data)
    }
    const onError = (err) => {      
    }
    await getRequest('',apiRoutes.Stteachcour +courses_id ,onSuccess,onError)
}
useEffect(()=>{
    getData();
},[])

// const [datas, setDatas] = useState([]);
// const {video_teacher_id} = useParams();
//   const getDatas = async () => {
//     const onSuccess = (res) => {
     
//         setDatas(res.data)
//     }
//     const onError = (err) => {      
//     }

//     await getRequest('', apiRoutes.videodetails +video_teacher_id, onSuccess, onError)
// }

// useEffect(()=>{
//     getDatas();
// })

  const tickets = [
   
  ];
  const visibleCards = showAll ? tickets : tickets.slice(0, 6);
  const games = [
    {
        pic:it,
      name: "Information Technology",
      location: "Dr Smith",
    },
    {
        pic:medicine,
      name: "Medicine",
      location: "Dr Smith",
    },
    {
        pic:business,
      name: "Business",
      location: "Dr Smith",
    },
  ];
  const cardTicket = {
    borderRadius: "10px",
    background: "#E6E5FF",
    px: 1,
    boxShadow: "none",
  };
  const handleShowAll = () => {
    setShowAll(true);
  };
  // const Billing = (e) =>{
    
  //   const dataToSend = { key: 'value', anotherKey: 'anotherValue' };
  //   navigate(``, { state: e });
  // }
  return (
   <>
   <Navbar/><br /><br />
   <Container maxWidth="xl">
   <Grid container sx={{ pb: "50px" }}>
        <Grid item lg={8} md={8} sm={12}>
          <Container maxWidth="xl">
            <Typography
              variant={isMatchmd ? "h6" : "h5"}
              sx={{ color: "#000" }}
            >
              
                <span className="underline">Cour</span>ses
              
            </Typography>
            <hr></hr>
            <br />
            <Typography variant={isMatchmd ? "h6" : "h5"}>
              <b>{receivedData}</b>
            </Typography>
            <br />
            <Stack direction="column" spacing={4}>
              {data.map((ticket) => {
                return (
                  <>
                    <Card sx={cardTicket}>
                      <CardContent>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Stack direction="row" spacing={3}>
                            <Stack direction="column" spacing={1}>
                              <Typography className="caraousalHeadings" variant={isMatchmd ? "body2" : "h6"}>
                                <b>{ticket.teacher_Name}</b>
                                <p>{ticket.teacher_catg}</p>
                                <Typography
                                variant={isMatchmd ? "subtitle2" : "body1"}
                                color="#8b8b8b"
                              >
                                <p>{ticket.teacher_Exp} of Experience</p>
                                </Typography>
                                
                              </Typography>
                              <Typography
                                variant={isMatchmd ? "subtitle2" : "body1"}
                                color="#8b8b8b"
                              >
                                <b>{ticket.teacher_join_date}</b>
                              </Typography>
                            </Stack>
                          </Stack>
                          <Link to={`/videotutorials/${ticket.teacher_id}/${localStorage.getItem('CourseID')}`}><Button
                            variant="contained"
                            sx={{
                              background: "#02004D",
                              px: isMatchsm ? null : 3,
                              fontFamily:'Poppins'
                            }}
                            onClick={() => {
                              // Save teacher_id in local storage
                              localStorage.setItem('teachervideo', ticket.teacher_id);
                              
                              // Trigger the routing to the video tutorials page
                            }}
                          >
                            <b>Free {ticket.price}</b>
                          </Button></Link>
                        </Stack>
                      </CardContent>
                    </Card>
                  </>
                );
              })}
          
              </Stack>
          
            <br />
            {!showAll && (
              <Button
                variant="contained"
                sx={{ borderRadius: "20px", background: "#2cc501" }}
                onClick={handleShowAll}
              >
                View More
              </Button>
            )}
          </Container>
          <br />
          <br />
        </Grid>
        <Grid item lg={4} md={4} sm={12}>
          <Container >
            <Typography
              variant={isMatchmd ? "h6" : "h5"}
              sx={{ color: "#000" }}
            >
              
                <span className="underline">Top T</span>rending Courses
              
            </Typography>
            <br />
            <Stack direction="column" spacing={1}>
              {games.map((game) => {
                return (
                  <>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="196"
                          image={game.pic}
                          alt="green iguana"
                        />
                        <CardContent
                          sx={{ background: "#8886B7", color: "#fff", pl: 2 }}
                        >
                          <Stack direction="row" spacing={2}>
                            <Stack direction="column" spacing={0}>
                              <Typography
                                variant={isMatchsm ? "body1" : "h6"}
                                className="caraousalHeadings"
                              >
                                <b>{game.name}</b>
                              </Typography>
                              <Typography
                                variant={isMatchsm ? "body1" : "h6"}
                                className="caraousalHeadings"
                              >
                                {game.location}
                              </Typography>
                            </Stack>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </>
                );
              })}
            </Stack>
          </Container>
        </Grid>
      </Grid></Container>
      <Footer />
   </>
  )
}

export default SelectedCourse