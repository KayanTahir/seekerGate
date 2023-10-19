import { useState } from 'react';

import { Container } from '@mui/system';
import axios from 'axios';
import AddCourse from './Addvideo';
import { Typography, Button } from '@mui/material';

const Coursevideo = () => {
 

  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    // Assuming you want to upload a single file
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  }

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('tutorials', file);

    axios.post('http://127.0.0.1:8000/api/upload', formData)
      .then(res => {
        if (res.data.status === 'Success') {
          console.log('Upload success');
        } else {
          alert('Successfully Uploaded')
        }
      })
      .catch(err => console.log('Upload error:', err));
  }

  return (
    <>
   
      <div className='container'>
        <input type="file" onChange={handleFile} />
        <button onClick={handleUpload}>Upload</button>
      </div>

     





    </>
  );
}

export default Coursevideo;
