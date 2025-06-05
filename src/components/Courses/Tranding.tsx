import { Button, Group, HoverCard, Text } from "@mantine/core"
import { IconChevronCompactLeft, IconChevronCompactRight, IconVideo } from "@tabler/icons-react"
import { AnimatePresence,motion } from "framer-motion";
import { useEffect, useState } from "react";

const Tranding = () => {
//     if (window.matchMedia("(max-width: 768px)").matches) {
//   console.log("Mobile screen");
// } else {
//   console.log("Desktop screen");
// }
    const courseDetails = [
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
        {id:3, 
            title: "course",
            description:"this is a course",
            image:"https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
            releaseDate:"Apr 29, 2024",
            totalVideo:8,
            purchaseLink:"https://via.placeholder.com",
            details:""
        },
        {id:4, 
            title: "course",
            description:"this is a course",
            image:"https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
            releaseDate:"Apr 29, 2024",
            totalVideo:8,
            purchaseLink:"https://via.placeholder.com",
            details:""
        },
        {id:5, 
            title: "course",
            description:"this is a course",
            image:"https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
            releaseDate:"Apr 29, 2024",
            totalVideo:8,
            purchaseLink:"https://via.placeholder.com",
            details:""
        },
          {id:6, 
            title: "course",
            description:"this is a course",
            image:"https://i.pinimg.com/736x/06/35/bf/0635bf6e3bbbe6d85b0f167c3ade5614.jpg",
            releaseDate:"",
            totalVideo:"",
            purchaseLink:"https://via.placeholder.com",
            details:""
        }, {id:7, 
            title: "course",
            description:"this is a course",
            image:"https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
            releaseDate:"Apr 29, 2024",
            totalVideo:8,
            purchaseLink:"https://via.placeholder.com",
            details:""
        },
        {id:7, 
            title: "course",
            description:"this is a course",
            image:"https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
            releaseDate:"Apr 29, 2024",
            totalVideo:8,
            purchaseLink:"https://via.placeholder.com",
            details:""
        },
        {id:7, 
            title: "course",
            description:"this is a course",
            image:"https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
            releaseDate:"Apr 29, 2024",
            totalVideo:8,
            purchaseLink:"https://via.placeholder.com",
            details:""
        },
        {id:7, 
            title: "course",
            description:"this is a course",
            image:"https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
            releaseDate:"Apr 29, 2024",
            totalVideo:8,
            purchaseLink:"https://via.placeholder.com",
            details:""
        },
    ]

const getItemsPerPage = () => {
  if (window.innerWidth < 640) return 2;
  if (window.innerWidth < 768) return 3;
  if (window.innerWidth < 1024) return 4;
  if (window.innerWidth < 1400) return 5;
  if(window.innerWidth < 1600) return 6;
  return 7;
};

const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

useEffect(() => {
  const handleResize = () => {
    setItemsPerPage(getItemsPerPage());
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
     const [startIndex ,setStartIndex] = useState(0);
     const [direction ,setDirection] = useState(0);

     const handleNext =()=>{
        if(startIndex + itemsPerPage < 10 ){
            setDirection(-1);
            setStartIndex(startIndex+ 1);
        }
    }
    
    const handlePrev = () =>{
        if(startIndex > 0){
            setDirection(1);
            setStartIndex(startIndex - 1);
        } 
     }

    const variants = {
        enter: (direction:any) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
        exit: (direction:any) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            transition: { duration: 0.5 },
        }),  
    };


  return (
    <section className='w-full h-[400px] md:ml-6 ml-1 flex flex-col gap-4'>
        <div className="w-full flex justify-between">
            <h1 className="text-green-500 text-2xl font-bold">Tranding</h1>
             <div className="flex flex gap-4 sm:ml-1 mr-8 xl:hidden">
                <Button  color="green" onClick={(handlePrev)} ><IconChevronCompactLeft size={40} /> </Button>
                <Button  color="green" onClick={(handleNext)} ><IconChevronCompactRight size={40} /> </Button> 
            </div>
        </div>
        <div className="flex flex-row gap-4 mr-8 xl:mr-2">


        {
            courseDetails.slice(startIndex,startIndex+itemsPerPage).map((tranding,index)=>(
                    

                <div className={`flex flex-row  h-[280px] w-[240px] sm:w-[240px]  gap-2 overflow-hidden `} key={index}>
                <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={startIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-row gap-1 md:gap-4"
              >
            <div className="text-green-500 flex flex-col items-center justify-center ">
                <span
                    className="text-white text-sm font-semibold"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                    One Piece
                </span>
                <span className="font-bold text-lg mt-2">{tranding.id < 10 ? "0"+tranding.id : tranding.id}</span>
            </div>
            <Group className="">
                <HoverCard 
                    
                    width={280}
                    shadow="md"
                    position="top"
                    openDelay={100}
                    closeDelay={100}
                    transitionProps={{duration:200}}
                >

                    <HoverCard.Target>
                        <img src={tranding.image}  className="h-full object-cover" ></img>
                    </HoverCard.Target>
                    <HoverCard.Dropdown
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',  // semi-transparent white
                            backdropFilter: 'blur(2px)',                 
                            border: '1px solid rgba(255, 255, 255, 0.3)',  
                            borderRadius: '8px',
                        }}
                    >
                        <div className="text-white flex flex-col gap-2">

                        <Text size="sm" style={{
                            color:'white',
                            fontWeight:'bold',
                            fontSize:'16px',
                            letterSpacing:'1px'
                        }}>
                            {tranding.title}
                        </Text>
                        <div className="flex gap-3">
                            <span className="">{tranding.releaseDate}</span>
                            <span className="flex gap-2 bg-green-500 rounded-xl px-4 items-center"><IconVideo/>{tranding.totalVideo}</span>
                        </div>
                        <p className="text-sm text-gray-400">{tranding.description}</p>
                        <p>{tranding.details}</p>
                        </div>
                    </HoverCard.Dropdown>
                </HoverCard>
            
            </Group>
     </motion.div>
        </AnimatePresence>
        </div>
        ))
    }
    <div className="xl:flex  flex-col gap-4 justify-end sm:ml-1 hidden mr-6">
        <Button h={132} w={60} color="green" onClick={(handleNext)} ><IconChevronCompactRight size={30} /> </Button> 
        <Button h={132} w={60} color="green" onClick={(handlePrev)} ><IconChevronCompactLeft size={30} /> </Button>
    </div>
    </div>
    </section>
  )
}

export default Tranding