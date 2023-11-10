import React from 'react';
import {useTheme,useMediaQuery,Container, Typography, Stack,TextField, Card, CardContent,CardMedia, Button, Grid} from '@mui/material';
import HomePic from './images/background.gif'
import BG from './images/bg.avif'
import SearchIcon from "@mui/icons-material/Search";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "./images/js.png";
import Image2 from "./images/finance.jpg";
import Image3 from "./images/program.jpg";
import ContactForm from './CONTACTFORM';
import Footer from './Footer';
import './LandingPage.css'
import Navbar from './Navbar';
import "./Navbar.css";
const LandingPage = () => {
  //breakpoints
  const theme = useTheme();
  const isMatchsm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
  //States
  const cards = [
    {
        icon:WorkspacePremiumIcon,
        name:"Certificate",
        desc:"A Google Docs scam that appears to be widespread began landing in Wednesday in what seemed to be a phishing attack."
    },
    {
        icon:SchoolIcon,
        name:"Expert Instructors",
        desc:"A Google Docs scam that appears to be widespread began landing in Wednesday in what seemed to be a phishing attack."
    },{
        icon:GolfCourseIcon,
        name:"Learn from anywhere",
        desc:"A Google Docs scam that appears to be widespread began landing in Wednesday in what seemed to be a phishing attack."
    }
  ];
  const details = [{
    num:"20k",
    name:"Graduated Students"
  },{
    num:"124",
    name:"Expert Instructors"
  },{
    num:"600k",
    name:"Books in our library"
  },{
    num:"15k",
    name:"Students get employed"
  }]
  const trendingEvents = [
    {
      pic: Image,
      name: "JavaScript",
      message:"avaScript is a high-level programming language that is commonly used for creating interactive interface.",
      price: "15$",
    },
    {
      pic: Image2,
      name: "Finance",
      message:"Finance is a field that encompasses the management of money, investments, and financial resources. ",
      price: "45$",
    },
    {
      pic: Image3,
      name: "Programming",
      message:"Programming is the process of creating computer programs or software by using a specialized set of instructions.",
      price: "15$",
    },
    {
      pic: Image,
      name: "JavaScript",
      message:"avaScript is a high-level programming language that is commonly used for creating interactive interface.",
      price: "15$",
    },
    {
      pic: Image2,
      name: "Finance",
      message:"Finance is a field that encompasses the management of money, investments, and financial resources. ",
      price: "45$",
    },
    {
      pic: Image3,
      name: "Programming",
      message:"Programming is the process of creating computer programs or software by using a specialized set of instructions.",
      price: "15$",
    },
    {
      pic: Image,
      name: "JavaScript",
      message:"avaScript is a high-level programming language that is commonly used for creating interactive interface.",
      price: "15$",
    },
    {
      pic: Image2,
      name: "Finance",
      message:"Finance is a field that encompasses the management of money, investments, and financial resources. ",
      price: "45$",
    },
  ];
  //Slider settings
  var settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
    <Navbar/>
    <Container
        maxWidth="xxl"
        sx={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%), url(${HomePic})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="lg" sx={{py:isMatchsm?"100px":"200px",color:"#ffffff"}}>
            <Stack spacing={2}>
            <Typography variant={isMatchsm?"body1":"h3"} textAlign={isMatchsm?"center":null}><strong>Develop a passion for learning</strong></Typography>
            <Typography variant={isMatchsm?"body1":"h3"} textAlign={isMatchsm?"center":null}><b>New things.</b></Typography>
            <Typography className='title_nav' variant={isMatchsm?"body1":"h6"} textAlign={isMatchsm?"center":null}><b>Explore Here</b></Typography>
             </Stack><br />
            <Typography textAlign={isMatchsm?"center":null}>
            <TextField
                      variant="outlined"
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <SearchIcon
                            sx={{
                              color: "green",
                              marginRight: "8px"
                            }}
                          />
                        ),
                        style: {
                          borderRadius: "10px",
                          background: "#fff",
                          width:"150%",
                          paddingRight: "18px",
                          fontSize: "17px",
                        },
                        inputProps: {
                          style: {
                            color: "black",
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "black",
                        },
                      }}
                      placeholder="Search Courses"
                    /></Typography>
        </Container>
      </Container>
      <Container maxWidth="lg" sx={{mt:isMatchmd?null:"-80px"}}>
        <Stack direction={isMatchmd?"column":"row"} spacing={0}>
           {cards.map((card)=>{
            return(
                <>
                <Card sx={{py:"20px",px:"10px"}}>
                    <CardContent>
                        <Stack spacing={2}>
                            <Typography><card.icon sx={{fontSize:42,color:"#31dc89"}}/></Typography>
                            <Typography variant="h6"><b>{card.name}</b></Typography>
                            <Typography variant="body2" sx={{color:"#8a7b9b"}}>{card.desc}</Typography>
                        </Stack>
                    </CardContent>
                </Card>
                </>
            )
           })}
        </Stack>
      </Container>
      <Container maxWidth="md" sx={{my:"60px"}}>
<Typography textAlign="center" variant={isMatchsm?"h6":"h5"}><b>Seekersgate is trusted by 50,000+ student.</b></Typography><br />
<Typography textAlign="center" color="#8a7b9b">Microsoft has spent a lot of time trying to make Windows self-repairing, partly because it generally gets the blame when other programs or users try to improve” it. Given that tens of thousands of expert programmers have worked on the code over the past 30 years.</Typography>
      </Container>
      <Container
        maxWidth="xxl"
        sx={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%), url(${BG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundAttachment:"fixed",
        }}
      >
        <Stack direction={isMatchsm?"column":"row"} justifyContent="space-evenly" sx={{py:"80px"}}>
            {details.map((detail)=>{
                return(
                    <>
                    <Stack spacing={1} sx={{color:"#ffffff",mb:isMatchsm?"60px":null}}>
                 <Typography textAlign={isMatchsm?"center":null} variant="h3" ><b>{detail.num}</b></Typography>
                 <Typography variant="body2" textAlign={isMatchsm?"center":null} ><b>{detail.name}</b></Typography>
            </Stack>
                    </>
                )
            })}
        </Stack>
      </Container><br /><br /><br /><br />
      <Typography variant={isMatchsm?"h6":"h4"} textAlign="center"><b>Our Trending Courses</b></Typography><br /><br />
      <Container maxWidth="xl">
      <div>
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-lg-12 ">
                  <Slider {...settings}>
                    {trendingEvents.map((card) => {
                      return (
                        <>
                          <Card sx={{ borderRadius: "10px", mr: isMatchlg?"20px":"40px",mr:isMatchsm?"0px":"20px" }}>
                            <CardMedia
                              sx={{ height: "240px" }}
                              image={card.pic}
                              title="green iguana"
                            />
                            <CardContent sx={{ background: "#fff" }}>
                              <Typography
                                gutterBottom
                                color="white"
                                variant={isMatchsm ? "body1" : "h6"}
                                component="div"
                            
                              >
                                <span className="caraousalHeadings">
                                  <b>{card.name}</b>
                                </span>
                              </Typography>
                              <Typography color="#000">{card.message}</Typography>
                            </CardContent>
                            <CardContent
                              sx={{ background: "#fff", color: "#000" }}
                            >
                              <Button variant="contained" sx={{borderRadius:"40px",background:"#d3ffea",color:"#31dc89",px:"10px"}}>{card.price}</Button>
                            </CardContent>
                          </Card>
                        </>
                      );
                    })}
                  </Slider>
                  </div>
              </div>
               
            </div>
          </div>
          </Container>
          <br /><br /><br /><br/><br /><br />
          <ContactForm/>
          <Container maxWidth="xxl" sx={{background:"#f8faff"}}>
            <Container maxWidth="lg">
              <Grid container>
                <Grid item lg={6} sm={12}sx={{my:"60px",}}> 
                  <Stack spacing={1} sx={{color:"#000"}}>
                    <Typography variant="h5"><b>Addmission are now open</b></Typography>
                    <Typography color="#9d9d9f">Writers and stars of Veep have responded incredulously to the news an Australian politician required stitches after knocking himself unconscious .</Typography>
                  </Stack><br />
                  <Button variant="contained" sx={{borderRadius:"40px",background:"#31dc89",color:"#fff",px:"10px"}}>Enroll Now</Button>
                </Grid>
              </Grid>
            </Container>
          </Container>
          <Footer/>
    </>
  )
}

export default LandingPage