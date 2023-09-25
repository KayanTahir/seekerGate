import LandingPage from './Components/LandingPage';
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
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/ourcourses" element={<OurCourses />} />
    <Route path="/selectedcourse" element={<SelectedCourse />} />
    <Route path="/billing" element={<Billing />} />
    <Route path="/mycourses" element={<MyCourses />} />
    <Route path="/videotutorials" element={<VideoTutorials />} />
    <Route path="/teachingStaff" element={<TeachingStaff />} />
    <Route path="/adminlearners" element={<AdminLearners />} />
    <Route path="/adminourcourses" element={<AdminOurCourses />} />
    <Route path="/adminteacher" element={<AdminTeacher />} />
    <Route path="/Login" element={<Login />} />
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
