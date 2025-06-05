import { Avatar } from "@mantine/core"
import {IconHome, IconPlayerPlayFilled} from "@tabler/icons-react"
import home from "../../assets/spotlightImg/home.png"

const Main = () => {
  return (
    <div className='flex flex-col items-center text-center justify-center mt-10 gap-4 md:gap-8'>
        <span className='text-4xl md:text-6xl lg:text-6xl font-public-sans font-extrabold text-gray-300'> Unlock Your Career Potential</span>
        <span className="text-4xl md:text-6xl font-public-sans font-extrabold text-black">Turn Knowledge Into <span className="text-green-500">Opportunity</span></span>
        <div className="flex flex-col gap-2 md:gap-4 mt-2 md:mt-4  items-center text-center">
            <span className="text-xl  md:text-3xl ">Learn in-demand skills with expert-led courses.</span>
            <span className="text-xl  md:text-3xl ">Start learning today and transform your future.</span>
        </div>
        <div className="flex items-center gap-4 font-bold text-gray-400">
             <Avatar.Group>
                    <Avatar src="image.png" />
                    <Avatar src="image.png" />
                    <Avatar src="image.png" />
                    {/* <Avatar>+5</Avatar> */}
            </Avatar.Group>
            <span className="text-xl">500+ Happy Students</span>
        </div>
        <div className="flex items-center gap-4"> 
            <button className="bg-green-500 text-white px-4 py-2 rounded flex gap-2 cursor-pointer"><IconHome stroke={2.5} /> Get Started</button>
            <button className="bg-black text-white px-4 py-2 rounded flex gap-2 cursor-pointer"><IconPlayerPlayFilled stroke={2.5} /> <span className="font-semibold"> Find Courses</span></button>
        </div>
        <div className="transition-all duration-500 ease-in-out 
                mt-8 border-8 border-black rounded-2xl 
                w-[90%] sm:w-[85%] md:w-[75%] lg:w-[70%] xl:w-[70%]
                h-[200px] sm:h-[350px] md:h-[500px] lg:h-[600px]
                mx-auto overflow-hidden">
                  <img src={home}   className="w-full h-full object-fit border-6 border-black rounded-md"/>
        </div>    
    </div>
  )
}

export default Main 