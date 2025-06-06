
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import Home from '../page/Home';
import SignUp from '../components/Login/SignUp';
import Login from '../components/Login/Login';
import CoursePage from '../page/CoursePage';
import Testing from '../Layout/Testing';
import StudentDashboard from '../page/StudentDashboard';
import MyCourses from '../components/Student/MyCourses';
import Library from '../components/Student/Library';
import Store from '../components/Student/Store';
import ContactUs from '../components/Student/ContactUs';


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Home />} />
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/courses' element={<CoursePage />}/>
            <Route path='/test' element={<Testing />} />
            <Route path='/student' element={<StudentDashboard />} >
                <Route index element={<Navigate to="study" replace />} />
                <Route path='study' element={<MyCourses />} />
                <Route path='courses'element={<MyCourses />} />
                <Route path='library' element={<Library/>} />
                <Route path='store' element={<Store/>} />
                <Route path='phone' element={<ContactUs />} />

            </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes