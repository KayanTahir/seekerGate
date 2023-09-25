import React,{useState, useEffect} from 'react'
import Navbar from './Navbar'
import { Paper, Table, TableHead,Typography,Modal, TableContainer, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { Container } from '@mui/system';
import Footer from '../Footer';
import axios from 'axios';
// function Learners(){
   
// }
const Learners = () => {
    
        const[data, setData] = useState([]);
        useEffect(()=> {
            axios.get('http://127.0.0.1:8000/api/user')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
        })

        //http://127.0.0.1:8000/api/api/users/:id

        const handleDelete = (id) => {
            axios.delete('http://127.0.0.1:8000/api/api/users/' +id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
        
  return (
    <div>
    <Navbar/>
    
    <Container maxWidth="lg" sx={{ textAlign: "center",mt:"20px" }}>
       <br/>
        
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead sx={{ background: "#1769aa" }}>
                                <TableRow>
                                    <TableCell><Typography color="white" variant="h6"><b>Email</b></Typography></TableCell>
                                    {/* <TableCell><Typography color="white" variant="h6"><b>Joining Date</b></Typography></TableCell> */}
                                    <TableCell><Typography color="white" variant="h6"><strong>Username</strong></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Password</b></Typography></TableCell>
                                     <TableCell><Typography color="white" variant="h6"><b>Remove User</b></Typography></TableCell> 
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {data.map((d , i) => {
                                    return (
                                        <>
                                            <TableRow>
                                                <TableCell><Typography><strong>{d.Username}</strong></Typography></TableCell>
                                                <TableCell><Typography>{d.User}</Typography></TableCell>
                                                 <TableCell><Typography>{d.Password}</Typography></TableCell>
                                                {/*<TableCell><Typography>{p.email}</Typography></TableCell> */}
                                                <TableCell><Typography><Button onClick={e => handleDelete(d.id)} variant="contained" sx={{ background: "red" }}>Delete</Button></Typography></TableCell>
                                            </TableRow>
                                        </>
                                    )
                                })}

                            </TableBody>

                        </Table>
                    </TableContainer><br />

                </Container><br/><br/>
                <Footer/>
                </div>
  )

}
export default Learners