import React,{useEffect, useState} from 'react'
import Sidebar from './ResponsiveDrawer';
import AddCourse from './Addcoursemodel';
import { Paper, Table, TableHead,Typography,Modal, TableContainer, TableRow, TableCell, TableBody, Button, Box } from '@mui/material';
import { Container } from '@mui/system';
import Footer from '../Footer';
import { apiRoutes } from '../../Api/apiRoutes';
import { getRequest } from '../../Api';
const TeacherCourses = () => {
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

        await getRequest('', apiRoutes.courses, onSuccess, onError)
    }

    useEffect(()=>{
        getData();
    })

    
  return (
    <>
<Box component="main" sx={{ flexGrow: 3, p: 4 }}>
    <Sidebar />
 
    <Box component="main" sx={{ flexGrow: 10, p: 4 }}>
    <Container maxWidth="xl" sx={{ textAlign: "center",mt:"20px" }}>
        <Typography textAlign="start"><Button variant="contained" onClick={handleOpenModal} sx={{background:"#62c929"}}>Select Course</Button></Typography><br/> 
        <AddCourse open={openModal} handleClose={handleCloseModal} />
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead sx={{ background: "#1769aa" }}>
                                <TableRow>
                                    <TableCell><Typography color="white" variant="h6"><b>Catogory</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Course Name</b></Typography></TableCell>
                                  
                                    <TableCell><Typography color="white" variant="h6"><b>Total Videos</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Course Upload Date</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Released Time</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Update Course</b></Typography></TableCell>
                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {data.map((d, i) => {
                                    return (
                                        <>
                                            <TableRow>
                                                <TableCell><Typography>{d.course_catg}</Typography></TableCell>
                                                <TableCell><Typography>{d.course_name}</Typography></TableCell>
                                                <TableCell><Typography>{d.total_video}</Typography></TableCell>
                                                <TableCell><Typography>{d.course_rel_date}</Typography></TableCell>
                                                <TableCell><Typography>{d.course_dur_time}</Typography></TableCell>
                                                <TableCell><Typography><Button variant="contained" sx={{ background: "red" }}>Update</Button></Typography></TableCell>
                                            </TableRow>
                                        </>
                                    )
                                })}

                            </TableBody>

                        </Table>
                    </TableContainer><br />

                </Container><br/><br/>
               
                </Box>
                </Box>

                <Footer/>
    </>
  )
}

export default TeacherCourses