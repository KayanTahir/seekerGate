import React,{useEffect, useState} from 'react'
import { TableRow, Paper, Table, TableHead,Modal,Typography, Button, TableContainer, TableCell, TableBody, Box,} from '@mui/material'
import { Container } from '@mui/system';
import AddCourse from '../Teacher/VideoupldModel';
import Sidebar from './ResponsiveDrawer';
import { getRequest } from '../../Api';
import { apiRoutes } from '../../Api/apiRoutes';
export default function Ourvideosteacher () {
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };

   
    
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

    // const video_courseID = (video_course_id) => {
    //     if (video_course_id == 43) {
    //       return 'Computer Science';
    //     }
    //     if(video_course_id == 44) { 
    //         return 'Machine Learning';
    //     }
    //     if(video_course_id == 45) {
    //        return 'database' 
    //     }
    //     if (video_course_id == 48) { 
    //         return 'Blockchain'
    //     }
    //     // You can add more conditions for other course IDs if needed.
    //   };

return (
    <>
    <Sidebar/>
    <Box component="main" sx={{ flexGrow: 10, p: 4 }}>
    <Container maxWidth="xl" sx={{ textAlign: "center",mt:"20px" }}>
    <Box component="main" sx={{ flexGrow: 10, p: 6 }}>
        <Typography textAlign="start"><Button variant="contained" onClick={handleOpenModal} sx={{background:"#62c929"}}>Add Video</Button></Typography><br/>
        <AddCourse open={openModal} handleClose={handleCloseModal} />
    
        <TableContainer component={Paper}> 
                        <Table>
                            <TableHead sx={{ background: "#1769aa" }}>
                                <TableRow>
                                    <TableCell><Typography color="white" variant="h6"><b>Course Video</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b> Video Catogory</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Video Name</b></Typography></TableCell>
                                  
                                    <TableCell><Typography color="white" variant="h6"><b>Description Videos</b></Typography></TableCell>
                                    {/* <TableCell><Typography color="white" variant="h6"><b>Course Upload Date</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>released Time</b></Typography></TableCell> */}
                                    {/* <TableCell><Typography color="white" variant="h6"><b>Remove Video</b></Typography></TableCell> */}
                                    <TableCell><Typography color="white" variant="h6"><b>Video Size</b></Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {data.map((d, i) => {
                                    return (
                                        <>
                                            <TableRow>
                                                <TableCell><Typography>{d.video_course_id}</Typography></TableCell>
                                                <TableCell><Typography>{d.video_title}</Typography></TableCell>
                                                <TableCell><Typography>{d.video_realname}</Typography></TableCell>
                                                <TableCell><Typography>{d.video_despt}</Typography></TableCell>
                                                <TableCell><Typography><Button variant="contained" sx={{ background: "red" }}>Update</Button></Typography></TableCell>
                                            </TableRow>
                                        </>
                                    )
                                })}

                            </TableBody>

                          
         </Table>
                 </TableContainer>
                 </Box>   
        </Container>
   <div>
   
   </div>
  
   </Box>
    </>
)






}
