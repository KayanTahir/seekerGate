import React from 'react'
import Navbar from './Navbar'
import Footer from '../Footer'
import {useTheme,useMediaQuery,Container, Typography, Stack,TextField, Card, CardContent,CardMedia, Button, Grid} from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "./images/CS.webp";
import Image2 from "./images/arts.webp";
import Image3 from "./images/business.webp";
import { useNavigate } from 'react-router-dom';
const MyCourses = () => {
    const navigate = useNavigate();
    const theme = useTheme();
  const isMatchsm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
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
      const trendingEvents = [
        {
          pic: Image,
          name: "Hands on JS",
          message:"JavaScript is a high-level programming language that is commonly used for creating interactive interface.",
          price: "15$",
        },
        {
          pic: Image2,
          name: "Arts Of Financing",
          message:"Finance is a field that encompasses the management of money, investments, and financial resources. ",
          price: "45$",
        },
        {
          pic: Image3,
          name: "How do Programming works",
          message:"Programming is the process of creating computer programs or software by using a specialized set of instructions.",
          price: "15$",
        },
        {
          pic: Image,
          name: "JavaScript",
          message:"avaScript is a high-level programming language that is commonly used for creating interactive and dynamic web pages.",
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
          message:"avaScript is a high-level programming language that is commonly used for creating interactive and dynamic web pages.",
          price: "15$",
        },
        {
          pic: Image2,
          name: "Finance",
          message:"Finance is a field that encompasses the management of money, investments, and financial resources. ",
          price: "45$",
        },
      ];
      const tutorials = (e) =>{
        navigate('/videotutorials', { state: e });
      }
  return (
    <>
    <Navbar/><br/><br/>
    <Typography variant={isMatchsm?"h6":"h5"} textAlign="center"><b><span className='underline'>My C</span>ourses</b></Typography><br /><br />
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
                                color="#000"
                              >
                                <span className="caraousalHeadings">
                                  <b>{card.name}</b>
                                </span>
                              </Typography>
                              <Button variant="contained" onClick={()=>tutorials(card.name)} sx={{borderRadius:"40px",background:"#d3ffea",color:"#31dc89",px:"10px"}}>View Course</Button>
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
          </Container><br/><br/>
    <Footer/>
    </>
  )
}

export default MyCourses