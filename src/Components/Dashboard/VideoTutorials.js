import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom';
import { Container, Typography,Stack,CardMedia,Card,CardActionArea, Paper, Table, TableHead, TableContainer, TableRow, TableCell, TableBody } from '@mui/material';
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
  const getData = async () => {
    const onSuccess = (res) => {
        setData(res.data)
    }
    const onError = (err) => {      
    }

    await getRequest('', apiRoutes.videodetail, onSuccess, onError)
}

useEffect(()=>{
    getData();
})
 

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
        <Typography variant="h5"><b><span className="underline">Video Tuto</span>rials of {receivedData}</b></Typography>
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
                                            <TableCell> <video controls className='Video_style'><source src={`http://127.0.0.1:8000/` +d.video_filename } type="video/mp4" /></video>
                                            <Typography><b>{d.video_realname}</b></Typography></TableCell>
                                           
                                          
                                            <TableCell> <TableCell><Typography>{d.video_size}</Typography></TableCell></TableCell>
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