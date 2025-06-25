import { ActionIcon } from "@mantine/core"
import logo from "../../assets/eduHubLogo.png"
import {  IconDashboard, IconDeviceLaptop,   IconVideo } from "@tabler/icons-react"
import { NavLink } from "react-router-dom"

const SideBar = () => {
    const sidebarComponents = [
        {
            id:1,
            name:"Dashboard",
            url:"dashboard",   
            icon: <IconDashboard className='text-white-100' size={20} stroke={2.5} />
        },
        {
            id:2,
            name:"Course",
            url:"course",   
            icon: <IconDeviceLaptop className='text-white-100' size={20} stroke={2.5} />
        },
        {
            id:3,
            name:"Video",
            url:"video",   
            icon: <IconVideo className='text-white-100' size={20} stroke={2.5} />
        },
        
    ]

  return (
    <div className="w-[250px] hidden md:block h-screen bg-white border border-[var(--color-divider)] overflow-hidden fixed z-50">
        <a className="flex items-center justify-center ">
            <img src={logo} width={70} />
            <h1 className="text-2xl font-bold">EduHub</h1>
        </a>
        <div className="border border-[var(--color-divider)] " />
        <div className="flex  flex-col m-4 gap-2">
            {sidebarComponents.map((link)=>{
                return <NavLink key={link.url} to={link.url} className={({isActive})=>`flex items-center gap-2 p-2 rounded-md cursor-pointer  ${isActive ? "bg-green-500 text text-green-100" :" hover:bg-green-400"} `}>
                     <ActionIcon variant="transparent" color="black"  size="xl" aria-label="profile">
                       {link.icon}
                     </ActionIcon>
                        <span className='text-white-100 font-medium text-lg'>{link.name}</span>
                    </NavLink>
            })}
        </div>
        
    </div>
  )
}

export default SideBar