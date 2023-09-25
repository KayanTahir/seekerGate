import React from "react";
import Navbar from "./Navbar";
import {
  Card,
  CardContent,
  Container,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HiveOutlinedIcon from "@mui/icons-material/HiveOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import "./OurCourses.css";
import Cs from "./images/CS.webp";
import health from "./images/health.webp";
import medicine from "./images/medicine.jpg";
import it from "./images/it.webp";
import arts from "./images/arts.webp";
import business from "./images/business.webp";
import data from "./images/data.webp";
import math from "./images/math.webp";
import personal from "./images/personal.webp";
import Footer from "../Footer";
import { useNavigate } from 'react-router-dom';
const OurCourses = () => {
    const navigate = useNavigate();
  const theme = useTheme();
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  //State
  const cards = [
    {
      num: "5129+",
      name: "Learners",
      logo: SchoolOutlinedIcon,
      color: "#ffbb36",
    },
    {
      num: "Professional",
      name: "Customer Support",
      logo: HiveOutlinedIcon,
      color: "#e92424",
    },
    {
      num: "3120+",
      name: "Teachers",
      logo: PeopleAltOutlinedIcon,
      color: "#6cc1ff",
    },
    {
      num: "7139+",
      name: "Happy Clients",
      logo: ThumbUpAltOutlinedIcon,
      color: "#78b203",
    },
  ];
  const courses = [
    {
      pic: Cs,
      name: "Computer Science",
    },
    {
      pic: arts,
      name: "Arts & Humanities",
    },
    {
      pic: business,
      name: "Business",
    },
    {
      pic: data,
      name: "Data Science",
    },
    {
      pic: it,
      name: "Information Technology",
    },
    {
      pic: it,
      name: "Health",
    },
    {
      pic: math,
      name: "Math & Logic",
    },
    {
      pic: personal,
      name: "Personal Development",
    },
    {
      pic: medicine,
      name: "Medicine",
    },
  ];
  //Handlers
  const SelectedCourse = (e) =>{
    const dataToSend = { key: 'value', anotherKey: 'anotherValue' };
    navigate('/selectedcourse', { state: e });
  }
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Typography textAlign="center" variant="h4">
        <b>SeekersGate</b>
      </Typography>
      <br />
      <Container maxWidth="lg">
        <Typography textAlign="center" color="#9d9d9f">
          Seekers Gate is an online platform offering course purchases and
          teacher hiring services. Discover a wide array of courses and connect
          <br />
          with experienced teachers for personalized learning experiences.
        </Typography>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <Container sx={{ display: "flex", justifyContent: "center", px: "20px" }}>
        <Stack
          direction="row"
          sx={{ display: "flex", flexWrap: "wrap" }}
          justifyContent="space-around"
        >
          {cards.map((card) => {
            return (
              <>
                <Card
                  className="card"
                  sx={{
                    width: 275,
                    m: "5px",
                    border: "none",
                    boxShadow: "10px 10px 40px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography textAlign="center">
                        <card.logo sx={{ fontSize: 62, color: card.color }} />
                      </Typography>
                      <Typography textAlign="center" variant="h6">
                        <b>{card.num}</b>
                      </Typography>
                      <Typography textAlign="center" variant="body1">
                        {card.name}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </>
            );
          })}
        </Stack>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <Container maxWidth="xxl" sx={{ background: "#fbfbfb", py: "80px" }}>
        <Typography textAlign="center" variant="h5">
          <b>
            <span className="underline">Our C</span>ourses
          </b>
        </Typography>
        <br />
        <Typography textAlign="center" variant="body2" color="#9d9d9f">
          Select Your Required Course
        </Typography>
        <br />
        <br />
        <Container maxWidth="lg">
          <Stack
            direction="row"
            sx={{ display: "flex", flexWrap: "wrap" }}
            justifyContent="space-around"
          >
            {courses.map((course) => {
              return (
                <>
                  <Stack>
                    <Card sx={{ maxWidth: 345, my: "10px" }} onClick={()=>SelectedCourse(course.name)}  className="course">
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="240"
                          image={course.pic}
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
                      {course.name}
                    </Typography>
                  </Stack>
                </>
              );
            })}
          </Stack>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default OurCourses;
