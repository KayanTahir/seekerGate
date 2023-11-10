import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableContainer,
  Table,
} from '@mui/material';
import { getRequest } from '../../Api';
import { apiRoutes } from '../../Api/apiRoutes';
import './OurCourses.css'
import { useParams } from 'react-router-dom';

const Notes = () => {
  const [data, setData] = useState([]);
  //routering the ID as per the validation 
  const user_id = localStorage.getItem('ID')
  const getData = async () => {
    const onSuccess = (res) => {
        setData(res.data)
    }
    const onError = (err) => {      
    }

    await getRequest('', apiRoutes.getnotes +user_id, onSuccess, onError)
}

useEffect(()=>{
    getData();
})
  

  return (
    <>
    <Navbar/>

    <Container>
     
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
       
      
    
    <TableContainer component={Paper}>
      <Table  sx={{ minWidth: 100, border: 0 }} aria-label="simple table">
        <TableHead className='Notes_box'>
          <TableRow>
           
            <TableCell align=""><h5><b>Notes Title</b></h5></TableCell>
            <TableCell align=""><h5><b>Notes desc</b></h5></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => (
            <TableRow>
              
              <TableCell ><h6 className='upperx'><li>{d.notes_tle}</li></h6></TableCell>
              <TableCell align=""><textarea id="outlined-error"  readOnly={true} className='text_dump'>{d.note_paragh}</textarea></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Container>
    </>
  );
        }

export default Notes;
