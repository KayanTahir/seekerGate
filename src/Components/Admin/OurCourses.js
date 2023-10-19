import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'
import { Paper, Table, TableHead,Typography,Modal, TableContainer, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { Container } from '@mui/system';
import Footer from '../Footer';
import AddCourse from './Addvideo';
import { getRequest } from '../../Api';
import { apiRoutes } from '../../Api/apiRoutes';
const OurCourses = () => {
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
    <Navbar/>
    <Container maxWidth="xl" sx={{ textAlign: "center",mt:"20px" }}>
        <Typography textAlign="start"><Button variant="contained" onClick={handleOpenModal} sx={{background:"#62c929"}}>Add Course</Button></Typography><br/>
        <AddCourse open={openModal} handleClose={handleCloseModal} />
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead sx={{ background: "#1769aa" }}>
                                <TableRow>
                                    <TableCell><Typography color="white" variant="h6"><b>Catogory</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Course Name</b></Typography></TableCell>
                                  
                                    <TableCell><Typography color="white" variant="h6"><b>total Videos</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Course Upload Date</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>released Time</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Remove Course</b></Typography></TableCell>
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
                                                <TableCell><Typography><Button variant="contained" sx={{ background: "red" }}>Delete</Button></Typography></TableCell>
                                                <TableCell><Typography><Button variant="contained" sx={{ background: "blue" }}>Update</Button></Typography></TableCell>
                                            </TableRow>
                                        </>
                                    )
                                })}

                            </TableBody>

                        </Table>
                    </TableContainer><br />

                </Container><br/><br/>
                <Footer/>
    </>
  )
}

export default OurCourses