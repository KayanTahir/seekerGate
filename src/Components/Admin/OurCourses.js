import React,{useState} from 'react'
import Navbar from './Navbar'
import { Paper, Table, TableHead,Typography,Modal, TableContainer, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { Container } from '@mui/system';
import Footer from '../Footer';
import AddCourse from './AddCourse';
const OurCourses = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };
    const ourCourses = [{
        catogory:"Computer Science",
        name:"hands on machine learning",
        releasedDate:"20-5-2023",
        totalVideos:"8",
        totalDuration:"156 minutes"
    },{
        catogory:"Computer Science",
        name:"hands on machine learning",
        releasedDate:"20-5-2023",
        totalVideos:"8",
        totalDuration:"156 minutes"
    },{
        catogory:"Data Science",
        name:"Fundamentals of Computer Vision",
        releasedDate:"20-5-2023",
        totalVideos:"12",
        totalDuration:"216 minutes"
    },{
        catogory:"Computer Science",
        name:"hands on machine learning",
        releasedDate:"20-5-2023",
        totalVideos:"8",
        totalDuration:"156 minutes"
    },{
        catogory:"Data Science",
        name:"Fundamentals of Computer Vision",
        releasedDate:"20-5-2023",
        totalVideos:"12",
        totalDuration:"216 minutes"
    },{
        catogory:"Computer Science",
        name:"hands on machine learning",
        releasedDate:"20-5-2023",
        totalVideos:"8",
        totalDuration:"156 minutes"
    },{
        catogory:"Computer Science",
        name:"hands on machine learning",
        releasedDate:"20-5-2023",
        totalVideos:"8",
        totalDuration:"156 minutes"
    }]
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
                                    <TableCell><Typography color="white" variant="h6"><b>Name</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>released Date</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>total Videos</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Time Duration</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Remove Course</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Update Course</b></Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {ourCourses.map((p) => {
                                    return (
                                        <>
                                            <TableRow>
                                                <TableCell><Typography>{p.catogory}</Typography></TableCell>
                                                <TableCell><Typography>{p.name}</Typography></TableCell>
                                                <TableCell><Typography>{p.releasedDate}</Typography></TableCell>
                                                <TableCell><Typography>{p.totalVideos}</Typography></TableCell>
                                                <TableCell><Typography>{p.totalDuration}</Typography></TableCell>
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