import React,{useState, useEffect} from 'react'
import Navbar from './Navbar'
 import { Paper, Table, TableHead,Typography,Modal, TableContainer, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { Container } from '@mui/system';
import Footer from '../Footer';
import UpdateCourses from './UpdateCourse';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { getRequest } from '../../Api';
import { apiRoutes } from '../../Api/apiRoutes';
import handleOpenModal from './teacherAction';

function OurCourses  () {
    
    const [teacherData, setTeacherData]= useState();
    const [teacher_id , setTeacher_id] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const handleClick = async (teacher_id) => {
        // const teacherData = await handleOpenModal(teacher_id);
        // console.log('Teacher Data:', teacherData);
        setTeacherData(teacher_id)
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
    await getRequest('',apiRoutes.teacher,onSuccess,onError)
}
useEffect(()=>{
    getData();
},[])

// const OurCourses = () => {
    
//     const[data, setData] = useState([]);
//         useEffect(()=> {
//             axios.get('http://127.0.0.1:8000/api/teacher')
//             .then(res => setData(res.data))
//             .catch(err => console.log(err));
//         })
    
//delete router

const teachercourse = (teacher_course_id) => {
    if (teacher_course_id === 1) {
      return 'Computer Science';
    }
    // You can add more conditions for other course IDs if needed.
  };

const handleDelete = (teacher_id) => {
    axios.delete('http://127.0.0.1:8000/api/api/teacher/' +teacher_id)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

  return (
    <>
    <Navbar/>
    <Container maxWidth="xl" sx={{ textAlign: "center",mt:"20px" }}>
    <UpdateCourses id={teacher_id} data = {teacherData} open={openModal} handleClose={handleCloseModal} />
                   <TableContainer component={Paper}>
                        <Table>
                            <TableHead sx={{ background: "#1769aa" }}>
                                <TableRow>
                                    <TableCell><Typography color="white" variant="h6"><b>Name</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Teacher Experience</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Teacher Email</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Catogory</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Time Duration</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Teacher Course</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Edit Teacher</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Remove Teacher</b></Typography></TableCell>
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
                                                <TableCell><Typography>{d.teacher_catg}</Typography></TableCell>
                                                <TableCell><Typography><Button  variant="contained" onClick={e => {
                                                    setTeacher_id(d.teacher_id)
                                                    handleClick(d)} } sx={{background:"blue"}}>Update</Button></Typography></TableCell>
                                                <TableCell><Typography><Button onClick={e => handleDelete(d.teacher_id)} variant="contained" sx={{ background: "red" }}>Delete</Button></Typography></TableCell>
                                                
         
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