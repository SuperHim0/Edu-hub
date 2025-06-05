
import { Outlet } from 'react-router-dom';
import Header from '../components/Student/Header';
import SideBar from '../components/Student/SideBar'
import FooterSite from '../components/Home/FooterSite';

const StudentDashboard = () => {
  return (
    <div className=' flex '>
        <SideBar />
        <div className='flex flex-col w-full'>
        <Header />
        <Outlet />
        </div>

        <FooterSite />

    </div>
  );
}

export default StudentDashboard