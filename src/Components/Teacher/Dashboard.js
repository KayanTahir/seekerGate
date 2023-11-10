import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import './teacher.css';
import Footer from '../Footer';
import Sidebar from './ResponsiveDrawer';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export default function CircularIntegration() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
   <>
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, p: 5, m: 1 }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3, m: 1, display: 'flex', justifyContent: 'center' , gap: 4}}>
        <Card className='CardStyle'>
          <CardContent className='Textstyle'>
            <Typography gutterBottom variant="h6" component="div">
              <b>56</b>
            </Typography>
          </CardContent>
          <CardActions className='btn_sty'>
            <p className='text_p'>Total Videos</p>
          </CardActions>
        </Card>
        <Card className='CardStyle'>
          <CardContent className='Textstyle'>
            <Typography gutterBottom variant="h6" component="div">
              <b>56</b>
            </Typography>
          </CardContent>
          <CardActions className='btn_sty'>
            <p className='text_p'>Total Courses</p>
          </CardActions>
        </Card>
        <Card className='CardStyle'>
          <CardContent className='Textstyle'>
            <Typography gutterBottom variant="h6" component="div">
              <b>5</b>
            </Typography>
          </CardContent>
          <CardActions className='btn_sty'>
            <p className='text_p' >Total lectures</p>
          </CardActions>
        </Card>
      </Box>
    </Box>
    <Footer/>
    </>
  );
}