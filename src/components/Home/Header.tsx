import { Burger, Button, Divider } from "@mantine/core"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo1 from "../../assets/image.png";


const Header = () => {
    // const [opened, {toggle}] = useDisclosure();
    const active = useLocation().pathname;
    const [opened, setOpened] = useState(false);
  const toggle = () => setOpened((prev) => !prev);
  return (
    <div className='flex justify-between items-center shadow-md p-2 font-primary'>
        <div className=" md:hidden block">
            <div className="relative">
      {/* Burger Icon */}
      <Burger opened={opened} onClick={toggle} size="md" aria-label="Toggle navigation" />

      {/* Slide-in Menu */}
      <div className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg transform transition-transform duration-300 z-50 ${opened ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Close Button */}
        <button onClick={toggle} className="absolute top-4 right-4 text-2xl font-bold">&times;</button>

        {/* Menu Items */}
        <ul className="flex flex-col items-start p-6 pt-12 space-y-4">
          <li><a href='/' className={`${active==='/'?'text-green-400':'text-black'} text-lg`}>Home</a></li>
          <li><a href='/courses' className={`${active==='/course'?'text-green-400':'text-black'} text-lg`}>Courses</a></li>
          <li><a href='/about' className={`${active==='/about'?'text-green-400':'text-black'} text-lg`}>About Us</a></li>
          <li><a href='/contact' className={`${active==='/contact'?'text-green-400':'text-black'} text-lg`}>Contact Us</a></li>
        </ul>
      </div>

      {/* Overlay for background click to close */}
      {opened && (
        <div
          onClick={toggle}
          className="fixed inset-0 bg-gray-100 bg-opacity-900 z-40"
        />
      )}
    </div>
        </div>
        <div className="">
            <a href='/' className='bg-green-500'><img  width="78px" src={logo1}></img></a>
        </div>
        <div className='flex items-center '>
            <ul className="hidden md:flex gap-4">
                <li className={`inline-block mr-4 ${active==='/'?'text-green-400':'text-black'}`}><a href='/'>Home</a></li>
                <li className={`inline-block mr-4 ${active==='/course'?'text-green-400':'text-black'}`}><a href='/courses'>Courses</a></li>
                <li className={`inline-block mr-4 ${active==='/about'?'text-green-400':'text-black'}`}><a href='/about'>About Us</a></li>
                <li className={`inline-block mr-4 ${active==='/contact'?'text-green-400':'text-black'}`}><a href='/contact'>Contact Us</a></li>
            </ul>
            <Divider orientation="vertical" size="md"  className="hidden md:block"/>
            <div className="flex items-center gap-2">
                <div className="hidden md:flex">

                <Button  className='ml-4 ' color="green">Login</Button>
                </div>
                <Button color="black" ><a href='/signup'>Sign Up</a></Button>
                
            </div>
        </div>
    </div>
  )
}

export default Header