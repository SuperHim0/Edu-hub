
import { Outlet } from 'react-router-dom';
import SideBar from '../components/Admin/SideBar';
import Header from '../components/Admin/Header';

const AdminDashboard = () => {
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

export default AdminDashboard