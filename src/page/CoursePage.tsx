import { Comment } from "../components/Courses/Comment"
import Header from "../components/Courses/Header"
import Spotlight from "../components/Courses/Spotlight"
import Tranding from "../components/Courses/Tranding"
import FooterSite from "../components/Home/FooterSite"


const CoursePage = () => {
  return (
     <div className=' bg-[var(--color-dark)] min-h-screen overflow-hidden'>
        <Header/>
        <Spotlight/>
        <Tranding />
        <Comment />

        <FooterSite/>
    </div>
  )
}

export default CoursePage