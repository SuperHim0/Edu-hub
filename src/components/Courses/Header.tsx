import { Burger, Button, Input, Popover, TextInput } from "@mantine/core"
import logo from "../../assets/eduHub.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";


const Header = () => {
    // const [opened, {toggle}] = useDisclosure();
    const active = useLocation().pathname;
    const [opened, setOpened] = useState(false);
  const toggle = () => setOpened((prev) => !prev);
  return (
    <section className="">

    <div className='flex justify-between items-center p-2 font-primary bg-transparent backdrop-blur-md  sticky top-0 z-50'>
        <div className="block flex flex-row justify-center items-center gap-4">
            <div className="relative">
    
                <Burger opened={opened} onClick={toggle} color="white" size="md" aria-label="Toggle navigation" />


                <div className={`fixed top-0 left-0 h-screen w-3/4 max-w-xs bg-white shadow-lg transform transition-transform duration-300 z-50 ${opened ? 'translate-x-0' : '-translate-x-full'}`}>

                  <button onClick={toggle} className="absolute top-4 right-4 text-2xl font-bold">&times;</button>

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
                    className=""
                    />
                  )}
                </div>
                <div className="">
                    <a href='/' className='bg-green-500  '><img  width="48px" src={logo}></img></a>
                </div>
                <div className=" hidden sm:block sm:w-70 md:w-100 h-10 flex items-center justify-between ">
                    <Input type="text" className="w-full h-full bg-transparent outline-none text-gray-400 placeholder-gray-400 px-2" placeholder="Search your Course..." rightSection={<IconSearch onClick={()=>console.log("search Clicked")}  className="mr-3 cursor-pointer"/>}>
                    </Input>
                </div>
                <Popover  trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <IconSearch className="block sm:hidden" color="white"  onClick={()=> console.log("button clikde")
                }/>
      </Popover.Target>
      <Popover.Dropdown className="flex gap-2 overflow-hidden">
        <TextInput placeholder="Search your courses" size="xs" />
        <Button color="black" size="xs"><IconSearch onClick={()=> console.log("button clikde")} /></Button>
      </Popover.Dropdown>
    </Popover>
                
        </div>
        
        {/* <div className='flex items-center '>
            <ul className="hidden md:flex gap-4">
            <li className={`inline-block mr-4 ${active==='/'?'text-green-400':'text-black'}`}><a href='/'>Home</a></li>
            <li className={`inline-block mr-4 ${active==='/course'?'text-green-400':'text-black'}`}><a href='/courses'>Courses</a></li>
            <li className={`inline-block mr-4 ${active==='/about'?'text-green-400':'text-black'}`}><a href='/about'>About Us</a></li>
            <li className={`inline-block mr-4 ${active==='/contact'?'text-green-400':'text-black'}`}><a href='/contact'>Contact Us</a></li>
            </ul>
            <Divider orientation="vertical" size="md"  className="hidden md:block"/>
            <div className="flex items-center gap-2">
            <div className="hidden md:flex"> */}

                <Button  className='ml-4 '  color="green">Login</Button>
                {/* </div> */}
                {/* <Button color="black" ><a href='/signup'>Sign Up</a></Button> */}
                
            {/* </div> */}
        {/* </div> */}
    </div>
            </section>
  )
}

export default Header