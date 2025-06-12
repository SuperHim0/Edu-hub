import Marquee from "react-fast-marquee";
import Review from '../components/Courses/Review'
import FooterSite from '../components/Home/FooterSite'
import Header from '../components/Home/Header'
import Main from '../components/Home/Main'
import Priceing from '../components/Home/Priceing'
import TotalSales from '../components/Home/TotalSales'

const Home = () => {
  return (
    <div className=' '>
      
        <Marquee speed={50} gradient={false} className="bg-gray-100 h-10 flex items-center justify-center">
       ⚠️ This is an announcement: The server is hosted on Render, so it may take up to 60 seconds to respond. Please be patient.⚠️ Thank you For Visiting the site 🌟 
        </Marquee>
        <Header/>
        <Main />
        <Review />
        <Priceing/>
        <TotalSales />
        <FooterSite/>
    </div>
  )
}

export default Home 