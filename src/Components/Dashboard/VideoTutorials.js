import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom';
import { Container, Typography,Stack,CardMedia,Card,CardActionArea } from '@mui/material';
import './VideoTutorials.css'
import Cs from './images/CS.webp';
import Footer from '../Footer';
const VideoTutorials = () => {
    const location = useLocation();
  const receivedData = location.state;
  const tutorials = [{
    pic: Cs,
    name: "Video1",
  },{
    pic: Cs,
    name: "Video2",
  },{
    pic: Cs,
    name: "Video3",
  },{
    pic: Cs,
    name: "Video4",
  },{
    pic: Cs,
    name: "Video5",
  },{
    pic: Cs,
    name: "Video6",
  },{
    pic: Cs,
    name: "Video7",
  },{
    pic: Cs,
    name: "Video8",
  },]
  return (
    <>
    <Navbar/>
    <br/><br/>
    <Container maxWidth="lg">
        <Typography variant="h5"><b><span className="underline">Video Tuto</span>rials of {receivedData}</b></Typography>
    </Container>
    <br/><br/>
    <Container maxWidth="lg">
          <Stack
            direction="row"
            sx={{ display: "flex", flexWrap: "wrap" }}
            justifyContent="space-between"
          >
            {tutorials.map((tutorial) => {
              return (
                <>
                  <Stack>
                    <Card sx={{ maxWidth: 345, my: "10px" }} className="course">
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="240"
                          image={tutorial.pic}
                          alt="green iguana"
                        />
                      </CardActionArea>
                    </Card>
                    <Typography
                      textAlign="center"
                      gutterBottom
                      variant="h6"
                      mb="10px"
                      component="div"
                    >
                     <b> {tutorial.name}</b>
                    </Typography>
                  </Stack>
                </>
              );
            })}
          </Stack>
        </Container><br/><br/>
        <Footer/>
    </>
  )
}

export default VideoTutorials