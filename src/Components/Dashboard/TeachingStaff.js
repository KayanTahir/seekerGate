import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Footer from '../Footer';
import { Button, Grid } from '@mui/material';
import { useTheme, useMediaQuery,Stack,Card,CardContent,Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import p1 from './images/p1.jpg'
import p2 from './images/p2.jpg'
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const courses = [
      {
        id: 0,
        name: "Computer Science",
      },
      {
        id: 1,
        name: "Arts & Humanities",
      },
      {
        id: 2,
        name: "Business",
      },
      {
        id: 3,
        name: "Data Science",
      },
      {
        id: 4,
        name: "Information Technology",
      },
      {
        id: 5,
        name: "Health",
      },
      {
        id: 6,
        name: "Math & Logic",
      },
      {
        id: 7,
        name: "Personal Development",
      },
      {
        id: 8,
        name: "Medicine",
      },
    ];
    const theme = useTheme();
    const isMatchsm = useMediaQuery(theme.breakpoints.down("sm"));
    const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
    const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
    const cardTicket = {
      borderRadius: "10px",
      background: "#E6E5FF",
      px: 1,
      boxShadow: "none",
    };
    const tickets = [
      {
        pic:p1,
        name: "Mark Hendry",
        role: "Computer Scientist",
        desc: "As a computer science graduate with a profound passion for teaching, I am driven to inspire others in the fields of Object-Oriented Programming, data structures, and databases.",
        price:"80$"
      },
      {
        pic:p2,
        name: "Finn Holland",
        role: "Computer Scientist",
        desc: "I am a dedicated educator with a strong foundation in computer science, eager to share my knowledge and foster a dynamic learning environment for students to excel in OOP, data structures, and databases",
        price:"20$"
      },
      {
        pic:p1,
        name: "Mark Hendry",
        role: "Computer Scientist",
        desc: "As a computer science graduate with a profound passion for teaching, I am driven to inspire others in the fields of Object-Oriented Programming, data structures, and databases.",
        price:"80$"
      },
      {
        pic:p2,
        name: "Finn Holland",
        role: "Computer Scientist",
        desc: "I am a dedicated educator with a strong foundation in computer science, eager to share my knowledge and foster a dynamic learning environment for students to excel in OOP, data structures, and databases",
        price:"20$"
      },
      {
        pic:p1,
        name: "Mark Hendry",
        role: "Computer Scientist",
        desc: "As a computer science graduate with a profound passion for teaching, I am driven to inspire others in the fields of Object-Oriented Programming, data structures, and databases.",
        price:"80$"
      },
      {
        pic:p2,
        name: "Finn Holland",
        role: "Computer Scientist",
        desc: "I am a dedicated educator with a strong foundation in computer science, eager to share my knowledge and foster a dynamic learning environment for students to excel in OOP, data structures, and databases",
        price:"20$"
      },
    ];
    const avatarStyle = {
      mt: "-30px",
      ml: "auto",
      mr: isMatchlg ? "30px" : "50px",
      mr: isMatchsm ? "10px" : "30px",
      width: 60,
      height: 60,
    }
    return (
        <>
           <Navbar/>
            <Container maxWidth="lg" sx={{ mt: "30px" }}>
                <Box
                    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', }}
                >
                    <Grid container>
                        <Grid item sm={12} lg={3} md={12}>
                       
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                sx={{ border: 1, borderColor: 'divider', width: isMatchsm ? "92vw" : "300px" }}
                            > {courses.map((course)=>{
                              return(
                                <>
                              
                                   <Tab label={course.name} {...a11yProps(course.id)} />
                                   </>)
                              })}
                               
                            </Tabs> 
                        </Grid>
                        <Grid item sm={12} lg={9} md={12}>
                          {tickets.map((card)=>{
                            return(
                              <>
 <TabPanel value={value} index={0}>
 <Card
                            sx={{
                              mr: isMatchlg ? "20px" : "40px",
                              pt: "20px",
                              mr: isMatchsm ? "0px" : "20px",
                            }}
                          >
                            <CardContent>
                              <Stack direction="column" spacing={1}>
                                <Typography
                                  variant="body1"
                                  color="#09233f"
                                  textAlign="center"
                                >
                                  {card.desc}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="#09233f"
                                  textAlign="center"
                                >
                                  <b>{card.name}</b>
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="#09233f"
                                  textAlign="center"
                                >
                                  <b>{card.role}</b>
                                </Typography>
                              </Stack>
                              <Typography><Button variant="contained" sx={{background:"#62c929",color:"white"}}>Hire me</Button></Typography>
                            </CardContent>
                          </Card>
                          <Avatar
                            src={card.pic}
                            sx={avatarStyle}
                          />
                            
                        </TabPanel>
                              </>
                            )
                          })}
                           
                        </Grid>
                    </Grid>


                </Box>
            </Container>
            <Footer />
        </>
    );
}