
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import Home from '../page/Home';
import SignUp from '../components/Login/SignUp';
import Login from '../components/Login/Login';
import CoursePage from '../page/CoursePage';
import Testing from '../Layout/Testing';
import StudentDashboard from '../page/StudentDashboard';
import QuickAccess from '../components/Student/QuickAccess';
import Library from '../components/Student/Library';
import Store from '../components/Student/Store';
import ContactUs from '../components/Student/ContactUs';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import { Bookmarks } from '../components/Study/Bookmark';
import { Dahsboard } from '../components/Study/Dashboard';
import { Doubt } from '../components/Study/Doubt';
import { History } from '../components/Study/History';
import Courses from '../components/Student/Courses';
import {MyCourses} from '../components/Study/MyCourses';
import OrderSummary from '../components/Student/OrderSummary';


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<PublicRoutes><Home/></PublicRoutes>} />
            <Route path='/signup' element={<PublicRoutes><SignUp/></PublicRoutes>}/>
            <Route path='/login' element={<PublicRoutes><Login /></PublicRoutes>} />
            <Route path='/courses' element={<PublicRoutes><CoursePage /></PublicRoutes>}/>
            <Route path='/test' element={<PublicRoutes><Testing /></PublicRoutes>} />
            <Route path='/student' element={<ProtectedRoutes><StudentDashboard/></ProtectedRoutes>} >
                <Route index element={<Navigate to="study" replace />} />
                <Route path='study' element={<QuickAccess />} >
                  <Route path='mycourse' element={<MyCourses />} />
                  <Route path='mybookmarks' element={<Bookmarks />} />
                  <Route path='mydashboard' element={<Dahsboard />} />
                  <Route path='mydoubts' element={<Doubt />} />
                  <Route path='myhistory' element={<History />} />
                </Route>
                <Route path='order-summary'element={<OrderSummary/>} />
                <Route path='courses'element={<Courses />} />
                <Route path='library' element={<Library/>} />
                <Route path='store' element={<Store/>} />
                <Route path='phone' element={<ContactUs />} />

            </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes