// import { BackgroundImage } from '@mantine/core'
import { Carousel } from '@mantine/carousel';
import { BackgroundImage } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
// import type Autoplay from 'embla-carousel-autoplay';

const Spotlight = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
    const spotlightDetails = [
        {id:1, 
            title: "One Piece",
            description:"Gold Roger was known as the the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King. Enter Monkey Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece",
            image:"https://i.pinimg.com/736x/06/35/bf/0635bf6e3bbbe6d85b0f167c3ade5614.jpg",
            releaseDate:"11-may",
            totalVideo:"5",
            purchaseLink:"https://via.placeholder.com",
            details:"af"
        },
        {id:2, 
            title: "Sword of the Demon Hunter: Kijin Gentosho",
            description:"In the Edo period, there was a shrine maiden called in the mountain village of Kadono. Jinta, a young man who acts as...",
            image:"https://i.pinimg.com/736x/1d/50/43/1d5043f74eda1308f852d0a3384e634c.jpg",
            releaseDate:"Apr 29, 2024",
            totalVideo:8,
            purchaseLink:"https://via.placeholder.com",
            details:""
        },
    ];

  return (

  
       <section className='h-[650px]'>

       <Carousel
      slideSize="100%"
      height={600}
      slideGap="md"
      controlsOffset="xl"
      controlSize={40}
      withControls
      withIndicators
      emblaOptions={{
        loop: true,
        dragFree: true,
        align: 'center'
      }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
       >

        {spotlightDetails.map((spotlightDetails) =>{
          return (

            <Carousel.Slide  key={spotlightDetails.id}>
                <BackgroundImage
                src={spotlightDetails.image}
                radius="sm"
                style={{ 
                  height: 600 ,
                  backgroundImage: `linear-gradient(to right, rgba(15, 15, 15, 1) 14%, transparent)`,
                }}
                className='' 
                
  >
    <div
    className="absolute top-0 left-0 w-full h-full"
    style={{
      backgroundImage: `linear-gradient(to right, rgba(15, 15, 15, 1) 28%, transparent)`,
    }}
  />
          <div className=" mb-20 ml-2 md:ml-12 flex flex-col gap-6 absolute bottom-0 left-0 z-10">
            <div className='mt-68 max-w-xl flex flex-col gap-6 overflow-hidden'>
                <span className="text-green-500">#{spotlightDetails.id} Spotlight</span>
                <h1 className="text-white text-4xl font-bold">{spotlightDetails.title}</h1>
                <p className="text-gray-400 text-md">{spotlightDetails.description.slice(0,201)+"..." }</p>
            </div>
            <div className='flex  gap-6 justify-between  mr-10'>
                  <div className="flex gap-4 flex-col sm:flex-row">
                        <button className="bg-green-500 text-white  px-2 sm:px-3 md:px-8 py-2  text-sm  rounded">Buy Now</button>
                        <button className="bg-gray-500 text-white   px-2 sm:px-3  md:px-8 py-2  text-sm rounded">View Details</button>
                  </div>
            </div>
          </div>
          <div className='w-full h-10 md:h-20  absolute bottom-0 left-0' 
              style={{
                backgroundImage: `linear-gradient(to top, rgba(15, 15, 15, 1) 14%, transparent)`,
              }}
              >
          </div>
                </BackgroundImage>
          </Carousel.Slide>
              )
            })}   
           </Carousel>
            </section>
    )
}

export default Spotlight