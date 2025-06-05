
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from '../page/Home';
import SignUp from '../components/Login/SignUp';
import Login from '../components/Login/Login';
import CoursePage from '../page/CoursePage';
import Testing from '../Layout/Testing';


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Home />} />
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/courses' element={<CoursePage />}/>
            <Route path='/test' element={<Testing />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes