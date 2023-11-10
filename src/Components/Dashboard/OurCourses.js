import React, { useEffect } from "react";
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
import { getRequest, postRequest } from "../../Api";
import { apiRoutes } from "../../Api/apiRoutes";
import { useState } from "react";
const OurCourses = () => {

    const navigate = useNavigate();
  const theme = useTheme();
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  const [data , setData] = useState([])

  const getData = async () => {
    const onSuccess = (res) => {
        setData(res.data)
    }
    const onError = (err) => {      
    }
  
    await getRequest('', apiRoutes.courses, onSuccess, onError)
  }
  
  useEffect(()=>{
    getData();
  },[])
  //Handlers
  const SelectedCourse = () => {
    navigate(`/selectedcourse/${localStorage.getItem('CourseID')}`);
  }
  return (
    <>
      <Navbar />
     
      
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
            {data.map((d) => {
              return (
                <>
                  <Stack>
                    <Card sx={{ maxWidth: 345, my: "10px" }} onClick={()=>{
                       {localStorage.setItem('CourseID',d.course_id)}
                       {localStorage.setItem('CourseName',d.course_name)}
                      SelectedCourse() 
                    }}
                      className="course">
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="240"
                          src={`http://127.0.0.1:8000/` +d.course_img }
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
                      value = {d.course_name}
                    >
                      {d.course_name}
                     
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
