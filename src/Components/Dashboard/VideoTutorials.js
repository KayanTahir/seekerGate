import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom';
import { Container, Typography,Stack,CardMedia,Card,CardActionArea, Paper, Table, TableHead, TableContainer, TableRow, TableCell, TableBody, Box } from '@mui/material';
import './VideoTutorials.css'
import Cs from './images/CS.webp';
import Footer from '../Footer';
import { getRequest, postRequest } from '../../Api';
import { apiRoutes } from '../../Api/apiRoutes';
import { useState } from 'react';
import { useEffect } from 'react';
import Note from '../images/notes.png';
import Notespad from './AddNotes';

const VideoTutorials = () => {
    const location = useLocation();
  const receivedData = location.state;
  const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };

  const [data, setData] = useState([]);
  const video_teacher_id = localStorage.getItem('teachervideo')
  const video_course_id = localStorage.getItem('CourseID')
  const getData = async () => {
    const onSuccess = (res) => {
     
        setData(res.data)
    }
    const onError = (err) => {      
    }

    await getRequest('', apiRoutes.videodetails + video_teacher_id  + '/' + video_course_id , onSuccess, onError)
}

useEffect(()=>{
    getData();
},[])
 
const descriptionStyle = {
  backgroundColor: '#f0f0f0',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  marginTop: '-10px',
};

const textContainerStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
};

  return (
    <>
    <Navbar/>
    <br/><br/>
    <div className='Notes_video'>
    <img onClick={handleOpenModal} src={Note} alt="logo" />
    <Notespad open={openModal} handleClose={handleCloseModal} />
    <h6>Notes</h6> 
    </div>
    <Container maxWidth="lg">
        <Typography variant="h5"><b><span className="underline">Video Tuto</span>rials of {localStorage.getItem('CourseName')}</b></Typography>
    </Container>
    <br/><br/>
    <TableContainer component={Paper}>
                        <Table>
                            <TableHead sx={{ background: "#1769aa" }}>
                                <TableRow>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {/* <TableCell><source src={''} type="video/mp4" /></TableCell> */}
                          
                            {data.map((d) => {
                                    return (
                                        <>
                                            <TableRow>

                                            {/* <TableCell><Typography>{d.video_filename}</Typography></TableCell> */}
                                            <TableCell>
                                            <Box sx={textContainerStyle}>
                                            <Paper elevation={3} sx={descriptionStyle}>
                                             <video controls className='Video_style'><source  src={`http://127.0.0.1:8000/` +d.video_filename } type="video/mp4" /></video>
                                            <Typography variant="h5" onClick={handleOpenModal}><b>{d.video_realname}</b></Typography>
                                           
                                            <Typography  variant= "body1"
                                color="#8b8b8b"  gutterBottom>
                                            Video Description
                                            </Typography>
                                            <Typography variant="body2" backgroundColor="#f7f5f5">
                                            {d.video_despt}
                                            </Typography>
                                            </Paper>
                                            </Box>
                                            </TableCell>
                                            </TableRow>
                                        </>
                                    )
                                })}

                            </TableBody>

                        </Table>
                    </TableContainer><br />




    <dir>
      
        
          
         
        
    
    </dir>
    
    <Container maxWidth="lg">
          <Stack
            direction="row"
            sx={{ display: "flex", flexWrap: "wrap" }}
            justifyContent="space-between"
          >
            {((d) => {
              return (
                <>
                  <Stack>
                    <Card sx={{ maxWidth: 345, my: "10px" }} className="course">
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="240"
                          value={d.video_filename}
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
                     <b> {data.video_title}</b>
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