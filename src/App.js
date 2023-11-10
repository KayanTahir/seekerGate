import LandingPage from './Components/LandingPage';
import Updateteacher from './Components/Admin/UpdateCourse';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import OurCourses from './Components/Dashboard/OurCourses'
import SelectedCourse from './Components/Dashboard/SelectedCourse';
import Billing from './Components/Dashboard/Billing';
import MyCourses from './Components/Dashboard/MyCourses';
import VideoTutorials from './Components/Dashboard/VideoTutorials';
import TeachingStaff from './Components/Dashboard/TeachingStaff';
import AdminLearners from './Components/Admin/Learners';
import AdminOurCourses from './Components/Admin/OurCourses';
import AdminTeacher from './Components/Admin/Teachers';
import Login from './Components/Authentication/LoginModal';
import NotificationAd from './Components/Admin/NotificationsAdmin';
import Ourvideo from './Components/Admin/Ourvideo';
import Notes from './Components/Dashboard/Notes';
import Scheduler from './Components/Dashboard/Scheduler';
import Notesx from './Components/Teacher/TeacherAuth/Signuppg';
import SignIn from './Components/Teacher/TeacherAuth/Signinpg';
import TeacherCourses from './Components/Teacher/Addcourse';
import CircularIntegration from './Components/Teacher/Dashboard';
import Ourvideosteacher from './Components/Teacher/Videoupload';


//Adding Secure Routers

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/ourcourses" element={<OurCourses />} />
    <Route path="/selectedcourse/:course_id" element={<SelectedCourse />} />
    <Route path="/billing" element={<Billing />} />
    <Route path="/mycourses" element={<MyCourses />} />
    <Route path="/videotutorials/:video_teacher_id/:video_course_id" element={<VideoTutorials />} />
    <Route path="/teachingStaff" element={<TeachingStaff />} />
    <Route path="/adminlearners" element={<AdminLearners />} />
    <Route path="/adminourcourses" element={<AdminOurCourses />} />
    <Route path="/adminteacher" element={<AdminTeacher />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Notfication" element={< NotificationAd />}></Route>
    <Route path="/UpdateCourse/:teacher_id" element={<Updateteacher />} />
    <Route path="/ourvideo" element={<Ourvideo />} />
    <Route path='/Notes/:id' element={<Notes/>} />
    <Route path='/Scheduler' element={<Scheduler/>} />
    <Route path='/teacherSigup' element={<Notesx/>} />
    <Route path='/teacherSigin' element={<SignIn/>} />
    <Route path='/teachercourses' element={<TeacherCourses/>}></Route>
    <Route path='/teacherdashboard' element={<CircularIntegration/>}></Route>
    <Route path='/teachvideoupd' element={<Ourvideosteacher/>}></Route>
    
  
    


    
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
