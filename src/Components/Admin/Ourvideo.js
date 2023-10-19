import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'
import { TableRow, Paper, Table, TableHead,Modal,Typography, Button, TableContainer, TableCell, TableBody,} from '@mui/material'
import { Container } from '@mui/system';
import AddCourse from './Addvideo';

function Ourvideo () {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };

return (
    <>
    <Navbar/>
    <Container maxWidth="xl" sx={{ textAlign: "center",mt:"20px" }}>
        <Typography textAlign="start"><Button variant="contained" onClick={handleOpenModal} sx={{background:"#62c929"}}>Add Video</Button></Typography><br/>
        <AddCourse open={openModal} handleClose={handleCloseModal} />
    
        <TableContainer component={Paper}> 
                        <Table>
                            <TableHead sx={{ background: "#1769aa" }}>
                                <TableRow>
                                    <TableCell><Typography color="white" variant="h6"><b> Video Catogory</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Video Name</b></Typography></TableCell>
                                  
                                    <TableCell><Typography color="white" variant="h6"><b>Description Videos</b></Typography></TableCell>
                                    {/* <TableCell><Typography color="white" variant="h6"><b>Course Upload Date</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>released Time</b></Typography></TableCell> */}
                                    {/* <TableCell><Typography color="white" variant="h6"><b>Remove Video</b></Typography></TableCell> */}
                                    <TableCell><Typography color="white" variant="h6"><b>Video Size</b></Typography></TableCell>
                                </TableRow>
                            </TableHead>
                          
         </Table>
                            </TableContainer>
        </Container>
   <div>
    
   </div>
    </>
)






}

export default Ourvideo