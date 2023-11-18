import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import CloseIcon from '@mui/icons-material/Close';
import { ToggleButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      
      <ToggleButton aria-describedby={id} variant="contained" onClick={handleClick} value="web"> <NotificationsActiveTwoToneIcon/></ToggleButton>
      
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
         <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor : '#F5F5F5',
        borderBottom: 'solid',
        borderTop: 'solid',
        borderRadius: 2,
        borderColor: '#8E8888',
      }}
    >
        
        <Typography sx={{ p: 2 }}>
            Teacher Issue of have life issues
       
        <CloseIcon
        onClick={''}
        style={{
        borderRadius: '2px',
        border:'outset',
        borderColor:'#C4C2C2',
        marginLeft:'12px',
        float:'right',
        marginTop:'-14px',
        width:'20px',
        color:'#8B8989',
        cursor:'pointer'        
        
       }}
        />
      
        </Typography>
        </Box>
      </Popover>
    </div>
  );
}