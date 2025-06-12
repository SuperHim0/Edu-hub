import { Avatar, Burger, Menu } from "@mantine/core"
import { IconSignLeft, IconUser } from "@tabler/icons-react"
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeJwt } from "../../Slice/JwtSlice";
import { removeUser } from "../../Slice/UserSlice";


const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogout = () =>{
  Cookies.remove('token', { path: '/' });
  Cookies.remove('userData', { path: '/' });
  Cookies.remove('role', { path: '/' });

  // Optional: remove with other paths if used
  Cookies.remove('token');
  Cookies.remove('userData');
  Cookies.remove('role');

  // Clear Redux
  dispatch(removeJwt());
  dispatch(removeUser());

  navigate('/');
    
  }
  // const handleProfile = () =>{
      
  // }

  const openSideBar =() =>{

  }


  return (
    <div className='w-full h-[72px] border border-[var(--color-divider)] bg-white fixed z-40'>
        <div className="m-5 flex items-center gap-4 justify-between md:justify-end mr-12">
            <Burger className="md:hidden" onClick={openSideBar}  />
            
            <div className="flex items-center justify-between gap-4">

            <span className="text-[var(--color-Dark)] text-lg font-semibold" >Hi, Himanshu</span>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Avatar></Avatar>
              </Menu.Target>
              <Menu.Dropdown>
                    <Menu.Item leftSection={<IconUser size={14} />}>
                      Profile
                    </Menu.Item>
                    <Menu.Item leftSection={<IconSignLeft size={14} />} onClick={()=>handleLogout}>
                      <span className="" onClick={handleLogout}>
                        Log out
                        </span>
                    </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            </div>
        </div>
    </div>
  )
}

export default Header