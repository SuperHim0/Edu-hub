
import { Outlet } from 'react-router-dom';
import Header from '../components/Student/Header';
import SideBar from '../components/Student/SideBar'

const StudentDashboard = () => {
  return (
    <div className=' flex '>
        <SideBar />
        <div className='flex flex-col w-full'>
        <Header />
        <div className='bg-white h-full'>
        <Outlet />
        </div>
        </div>

        {/* <FooterSite /> */}

    </div>
  );
}

export default StudentDashboard