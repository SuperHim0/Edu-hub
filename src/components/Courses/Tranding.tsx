import { Carousel } from "@mantine/carousel";
import { Group, HoverCard, Text } from "@mantine/core"
import { IconVideo } from "@tabler/icons-react"
import { useEffect } from "react";

const Tranding = () => {
   const courseDetails = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript to start building websites.",
    image: "https://i.pinimg.com/736x/06/35/bf/0635bf6e3bbbe6d85b0f167c3ade5614.jpg",
    releaseDate: "",
    totalVideo: "",
    purchaseLink: "https://via.placeholder.com",
    details: ""
  },
  {
    id: 2,
    title: "Mastering React.js",
    description: "Deep dive into modern React features including hooks, context, and more.",
    image: "https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
    releaseDate: "Apr 29, 2024",
    totalVideo: 8,
    purchaseLink: "https://via.placeholder.com",
    details: ""
  },
  {
    id: 3,
    title: "Spring Boot Essentials",
    description: "A beginner's guide to building RESTful APIs with Spring Boot.",
    image: "https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
    releaseDate: "Apr 29, 2024",
    totalVideo: 8,
    purchaseLink: "https://via.placeholder.com",
    details: ""
  },
  {
    id: 4,
    title: "PostgreSQL for Developers",
    description: "Master relational database concepts and write advanced SQL queries.",
    image: "https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
    releaseDate: "Apr 29, 2024",
    totalVideo: 8,
    purchaseLink: "https://via.placeholder.com",
    details: ""
  },
  {
    id: 5,
    title: "Advanced Java Programming",
    description: "Cover core and advanced Java concepts for enterprise-grade applications.",
    image: "https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
    releaseDate: "Apr 29, 2024",
    totalVideo: 8,
    purchaseLink: "https://via.placeholder.com",
    details: ""
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    description: "Design clean, intuitive user interfaces using modern design principles.",
    image: "https://i.pinimg.com/736x/06/35/bf/0635bf6e3bbbe6d85b0f167c3ade5614.jpg",
    releaseDate: "",
    totalVideo: "",
    purchaseLink: "https://via.placeholder.com",
    details: ""
  },
  {
    id: 7,
    title: "Docker and DevOps Basics",
    description: "Understand containers, Dockerfiles, and CI/CD pipelines from scratch.",
    image: "https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
    releaseDate: "Apr 29, 2024",
    totalVideo: 8,
    purchaseLink: "https://via.placeholder.com",
    details: ""
  },
  {
    id: 8,
    title: "Machine Learning Starter Kit",
    description: "Learn supervised and unsupervised learning using Python and scikit-learn.",
    image: "https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
    releaseDate: "Apr 29, 2024",
    totalVideo: 8,
    purchaseLink: "https://via.placeholder.com",
    details: ""
  },
  {
    id: 9,
    title: "Building APIs with Node.js",
    description: "Create powerful APIs using Express.js and connect with MongoDB.",
    image: "https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
    releaseDate: "Apr 29, 2024",
    totalVideo: 8,
    purchaseLink: "https://via.placeholder.com",
    details: ""
  }
];


// const getItemsPerPage = () => {
//   if (window.innerWidth < 640) return 2;
//   if (window.innerWidth < 768) return 3;
//   if (window.innerWidth < 1024) return 4;
//   if (window.innerWidth < 1400) return 5;
//   if(window.innerWidth < 1600) return 6;
//   return 7;
// };

// const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

useEffect(() => {
  const handleResize = () => {
    // setItemsPerPage(getItemsPerPage());
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
    //  const [startIndex ,setStartIndex] = useState(0);
    //  const [direction ,setDirection] = useState(0);

    //  const handleNext =()=>{
    //     if(startIndex + itemsPerPage < 10 ){
    //         setDirection(-1);
    //         setStartIndex(startIndex+ 1);
    //     }
    // }
    
    // const handlePrev = () =>{
    //     if(startIndex > 0){
    //         setDirection(1);
    //         setStartIndex(startIndex - 1);
    //     } 
    //  }
  return (
      <section className="w-full h-[400px] md:ml-6 ml-1 flex flex-col gap-4">
    {/* Header */}
    <div className="w-full flex justify-between items-center">
      <h1 className="text-green-500 text-2xl font-bold">Trending</h1>
    </div>

    <div className="flex "> 
    {/* Carousel */}

    <Carousel
      slideSize={{ base: '50%', sm: '33.333%', md: '25%', xl:'20%' }}
      slideGap={{ base: 0, sm: 'md' }}
      controlsOffset="xl"
      controlSize={40}
      withControls
      height={280}
      className="mr-8 xl:mr-2 [&_.mantine-Carousel-controls]:block 
             sm:[&_.mantine-Carousel-controls]:hidden 
             md:[&_.mantine-Carousel-controls]:flex"
    >
      {courseDetails
        .map((tranding, index) => (
          <Carousel.Slide key={index}>
            <div className="h-[280px] flex flex-row md:gap-2 overflow-hidden">
              {/* Vertical label */}
              <div className="text-green-500 flex flex-col items-center justify-center">
                <span
                  className="text-white text-sm font-semibold"
                  style={{
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                  }}
                >
                  {tranding.title}
                </span>
                <span className="font-bold text-lg mt-2">
                  {tranding.id < 10 ? '0' + tranding.id : tranding.id}
                </span>
              </div>

              {/* HoverCard Image */}
              <Group>
                <HoverCard
                  width={280}
                  shadow="md"
                  position="top"
                  openDelay={100}
                  closeDelay={100}
                  transitionProps={{ duration: 200 }}
                >
                  <HoverCard.Target>
                    <img
                      src={tranding.image}
                      className="h-full   object-cover"
                      alt={tranding.title}
                    />
                  </HoverCard.Target>
                  <HoverCard.Dropdown
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(2px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '8px',
                    }}
                  >
                    <div className="text-white flex flex-col gap-2">
                      <Text
                        size="sm"
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '16px',
                          letterSpacing: '1px',
                        }}
                      >
                        {tranding.title}
                      </Text>
                      <div className="flex gap-3">
                        <span>{tranding.releaseDate}</span>
                        <span className="flex gap-2 bg-green-500 rounded-xl px-4 items-center">
                          <IconVideo />
                          {tranding.totalVideo}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{tranding.description.slice(0,300)+"...."}</p>
                      <p>{tranding.details}</p>
                    </div>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </div>
          </Carousel.Slide>
        ))}
    </Carousel>        
        </div>
  </section>
  )
}

export default Tranding