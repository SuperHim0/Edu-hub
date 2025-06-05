// import { BackgroundImage } from '@mantine/core'
import { IconChevronCompactLeft, IconChevronCompactRight } from '@tabler/icons-react'
 import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Spotlight = () => {
  const [direction,setDirection] = useState(0);
    const spotlightDetails = [
        {id:1, 
            title: "course",
            description:"this is a course",
            image:"https://i.pinimg.com/736x/06/35/bf/0635bf6e3bbbe6d85b0f167c3ade5614.jpg",
            releaseDate:"",
            totalVideo:"",
            purchaseLink:"https://via.placeholder.com",
            details:""
        },
        {id:2, 
            title: "course",
            description:"this is a course",
            image:"https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
            releaseDate:"Apr 29, 2024",
            totalVideo:8,
            purchaseLink:"https://via.placeholder.com",
            details:""
        },
    ];
    const [activeIndex,setActiveIndex] = useState(0);
    useEffect(()=>{
        setDirection(1);
        const interval = setInterval(()=>{
            setActiveIndex((prev)=>
                prev === spotlightDetails.length - 1 ? 0 : prev+1
            
            );
        },5000);
        return () => clearInterval(interval);

    },[spotlightDetails.length])
     const variants = {
        enter: (direction:any) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8 },
        },
        exit: (direction:any) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            transition: { duration: 0.8 },
        }),  
    };

  return (
    // <section className='absolute top-0 left-0'>
        // spotlightDetails.map((spotlight,index) => (
        //     <div
        //         className={`absolute top-0 left-0 bg-cover w-full bg-linear-to-r from-black to-transparent transition ease-in-out duration-1000 $ ${
        //     index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        //         style={{ backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 1) 34%, transparent), url(${spotlight.image})` }}
        //         key={index}
        //     >

        //     {/* <BackgroundImage key={index} src={spotlight.image} className='absolute top-0 left-0 bg-linear-to-r from-black to-blue-500'> */}
        //     <div className='mt-75 mb-10'>
        //         <div className="ml-12 flex flex-col gap-8">
        //             <span className='text-green-500'>#{spotlight.id} Spotlight</span>
        //             <h1 className='text-white text-3xl'>{spotlight.title}</h1>
        //             <div className='text-white flex flex-row gap-4'>
        //                 <span className='text-gray-400 flex gap-2'><IconCalendarMonth /> {spotlight.releaseDate}</span>
        //                 <span className='text-gray-400 flex gap-2'><IconPlayCard /> {spotlight.totalVideo}</span>
                        
        //             </div>
        //             <p className='text-white'>{spotlight.description}</p>
        //             <div className='flex gap-4'>
        //                 <button className='bg-green-500 text-white px-8 py-2 rounded-4xl'>Buy Now</button>
        //                 <button className='bg-gray-500 text-white px-8 py-2 rounded-4xl'>View Details</button>  
        //             </div>
        //         </div>
        //     </div>
        // {/* </BackgroundImage> */}
        //     </div>
        // ))

    // </section>
  
       <section className='h-[650px]'>

      <AnimatePresence custom={direction}>
        <motion.div
          key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          className="absolute top-0 left-0 w-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(15, 15, 15, 1) 28%, transparent), url(${spotlightDetails[activeIndex].image})`,
          }}
        >
        
          <div className="mt-68 mb-20 ml-12 flex flex-col gap-6 ">
            <div className='max-w-xl flex flex-col gap-6'>
                <span className="text-green-500">#{spotlightDetails[activeIndex].id} Spotlight</span>
                <h1 className="text-white text-4xl font-bold">{spotlightDetails[activeIndex].title}</h1>
                <p className="text-white">{spotlightDetails[activeIndex].description}</p>
            </div>
            <div className='flex  gap-6 justify-between  mr-10'>

            <div className="flex gap-4 flex-col sm:flex-row">
                  <button className="bg-green-500 text-white px-8 py-2 rounded">Buy Now</button>
                  <button className="bg-gray-500 text-white px-8 py-2 rounded">View Details</button>

            </div>

                

            </div>


          </div>
          
          <div className='w-full h-10 md:h-20  ' 
              style={{
                backgroundImage: `linear-gradient(to top, rgba(15, 15, 15, 1) 14%, transparent)`,
              }}
              >
          </div>
        </motion.div>
        </AnimatePresence>
        <div className="gap-4 justify-end mt-5 mr-2 hidden sm:flex">
                      <button
                        className="bg-black text-white hover:bg-green-500   rounded-full py-4 px-4 z-30  transition duration-300 ease-in hover:shadow-md hover:border-green-400 hover:border-2"
                        onClick={() => {
                          setActiveIndex((prev) =>
                            prev === 0 ? spotlightDetails.length - 1 : prev - 1
                    
                        )
                        setDirection(-1);
                      }
                    }
                      >
                        <IconChevronCompactLeft />
                      </button>
                      
                      <button
                        className="bg-black text-white rounded-full px-4 z-50 transition duration-300 ease-in hover:shadow-md hover:border-green-400 hover:border-2 hover:bg-green-500"
                        onClick={() => {
                          setActiveIndex((prev) =>
                            prev === spotlightDetails.length - 1 ? 0 : prev + 1
                      
                        )
                        setDirection(1);
                    }
                    }
                      >
                        <IconChevronCompactRight />
                      </button>
                </div>
        

            </section>
    )
}

export default Spotlight