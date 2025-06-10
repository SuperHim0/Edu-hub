
import Review from '../components/Courses/Review'
import FooterSite from '../components/Home/FooterSite'
import Header from '../components/Home/Header'
import Main from '../components/Home/Main'
import Priceing from '../components/Home/Priceing'
import TotalSales from '../components/Home/TotalSales'

const Home = () => {
  return (
    <div className=' '>
      
      
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