import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
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
const SelectedCourse = (props) => {
    const [showAll, setShowAll] = useState(false);
    const location = useLocation();
  const receivedData = location.state;
  const navigate = useNavigate();
  const theme = useTheme();
  const isMatchsm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
  const tickets = [
    {
      name: "Hands on Machine Learning",
      date: "Steven Hendry",
      price: "60",
    },
    {
        name: "Javascript",
        date: "Dr Trump",
        price: "60",
    },
    {
        name: "Learn Programming",
        date: "Jimmy White",
        price: "60",
    },
    {
        name: "Hands on Machine Learning",
        date: "Steven Hendry",
        price: "60",
    },
    {
        name: "Learn Programming",
        date: "Jimmy White",
        price: "60",
    },
    {
        name: "Hands on Machine Learning",
        date: "Steven Hendry",
        price: "60",
    },
    {
        name: "Hands on Machine Learning",
        date: "Steven Hendry",
        price: "60",
    },
    {
        name: "Hands on Machine Learning",
        date: "Steven Hendry",
        price: "60",
    },
    {
        name: "Hands on Machine Learning",
        date: "Steven Hendry",
        price: "60",
    },
    {
        name: "Hands on Machine Learning",
        date: "Steven Hendry",
        price: "60",
    },
    {
        name: "Hands on Machine Learning",
        date: "Steven Hendry",
        price: "60",
    },
    {
        name: "Hands on Machine Learning",
        date: "Steven Hendry",
        price: "60",
    },
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
  const Billing = (e) =>{
    const dataToSend = { key: 'value', anotherKey: 'anotherValue' };
    navigate('/billing', { state: e });
  }
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
              {visibleCards.map((ticket) => {
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
                                <b>{ticket.name}</b>
                              </Typography>
                              <Typography
                                variant={isMatchmd ? "subtitle2" : "body1"}
                                color="#8b8b8b"
                              >
                                <b>{ticket.date}</b>
                              </Typography>
                            </Stack>
                          </Stack>
                          <Button
                            variant="contained"
                            sx={{
                              background: "#02004D",
                              px: isMatchsm ? null : 3,
                              fontFamily:'Poppins'
                            }}
                            onClick={()=>Billing(ticket.name)}
                          >
                            <b>From ${ticket.price}</b>
                          </Button>
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