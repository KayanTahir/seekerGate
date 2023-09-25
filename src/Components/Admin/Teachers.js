import React,{useState, useEffect} from 'react'
import Navbar from './Navbar'
 import { Paper, Table, TableHead,Typography,Modal, TableContainer, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { Container } from '@mui/system';
import Footer from '../Footer';
import AddCourse from './AddCourse';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const OurCourses = () => {
    
    const[data, setData] = useState([]);
        useEffect(()=> {
            axios.get('http://127.0.0.1:8000/api/teacher')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
        })
    
//delete router

const handleDelete = (teacher_id) => {
    axios.delete('http://127.0.0.1:8000/api/api/teacher/' +teacher_id)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

  return (
    <>
    <Navbar/>
    <Container maxWidth="xl" sx={{ textAlign: "center",mt:"20px" }}>
        {/* <Typography textAlign="start"><Button variant="contained" onClick={handleOpenModal} sx={{background:"#62c929"}}>Add Course</Button></Typography><br/> */}
        {/* <AddCourse open={openModal} handleClose={handleCloseModal} /> */}
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead sx={{ background: "#1769aa" }}>
                                <TableRow>
                                    <TableCell><Typography color="white" variant="h6"><b>Name</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Teacher Experience</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Teacher Email</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Catogory</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Time Duration</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Remove Course</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Update Course</b></Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {data.map((d , i) => {
                                    return (
                                        <>
                                            <TableRow>
                                                <TableCell><Typography>{d.teacher_Name}</Typography></TableCell>
                                                <TableCell><Typography>{d.teacher_Exp}</Typography></TableCell>
                                                <TableCell><Typography>{d.teacher_email}</Typography></TableCell>
                                                <TableCell><Typography>{d.teacher_catg}</Typography></TableCell>
                                                <TableCell><Typography>{d.teacher_join_date}</Typography></TableCell>
                                                <TableCell><Typography><Button onClick={e => handleDelete(d.teacher_id)} variant="contained" sx={{ background: "red" }}>Delete</Button></Typography></TableCell>
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