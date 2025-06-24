import { Button, Container, Title } from "@mantine/core"
import { IconBooks, IconCornerUpLeft, IconPlayerPlayFilled } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"
import { getStudentPurchaseCourses } from "../../Services/StudentService";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

interface Course {
  course: {
    actualPrice: string;
    courseId: string;
    description: string;
    imagePath: string;
    price: string;
    subject: string;
    title: string;
    videoId: string[];
  };
  endDate: string;
  startDate: string;
  status: string;
  subscriptionId: string;
}

export const MyCourses = () => {
    const navigate = useNavigate();
    const [mycourses,setmycourses] = useState<Course[]>([]);
    

    const backToStudy = () =>{
        navigate("/student/study");
    }
    const user = useSelector((state : any)=> state.user);
    
    

    const fetchAllPurchasedCourses = () => {
        getStudentPurchaseCourses(user.userId).then((data) =>{
            setmycourses(data);
        })
    }
    

    const handlePay = (index : any) =>{
        navigate('/student/study/watch-video', {
      state: {
        videoIds: mycourses[index].course.videoId,
        courseId: mycourses[index].course.courseId,
        title: mycourses[index].course.title,
      },
    });
    }

    useEffect(()=>{
        fetchAllPurchasedCourses();
        // fetchVideoData();
    },[]);


  return (
    <div className="flex w-full bg-white h-screen">
        
        <div  className="m-4 md:ml-70 xl:ml-90 xl:mr-20 mt-30 mb-5 w-full">
        <Button color="green" onClick={backToStudy} ><IconCornerUpLeft size={30}/> Back</Button>
        <div className="m-6 flex flex-col gap-12">
            <Title>My Courses</Title>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

            { mycourses && mycourses.map((items,index)=>(
                 <div key={items.course.courseId} className="border border-gray-200 rounded p-4 shadow flex flex-col overflow-hidden gap-4">
            <div>

                    <img src={items.course.imagePath} alt={items.course.title} className="w-full h-48 object-cover mb-2" />
                    <h3 className="text-lg font-bold">{items.course.title}</h3>
                    <p>{items.course.description.length>50?items.course.description.slice(0,42)+"...":items.course.description}</p>
                    {/* <p className="line-through text-gray-500">₹{course.actualPrice}</p> */}
            </div>
            <div className="flex justify-between">
            {/* <p className="text-green-600 font-semibold">Now ₹{course.price}</p> */}
            </div>
            <div className="flex gap-4 justify-between w-full items-center">
                <button className="bg-green-400 w-full px-6 py-2 rounded hover:bg-green-500 cursor-pointer flex gap-2 items-center justify-center"  onClick={()=>handlePay(index)} ><IconPlayerPlayFilled />  <span className="font-bold text-md">Play</span></button>
                {/* <button className="bg-blue-200 w-full border-4 border-blue-500  px-6 py-1 rounded hover:bg-blue-500 cursor-pointer" onClick={()=>handleModel(course)}>Exploar</button> */}
            </div>
           
          </div>
            ) )
            }
            </div>
            {
                mycourses.length === 0 &&
            <div className="bg-gray-100 shadow-md rounded-xl w-full h-[200px] flex">
                <Container className="flex gap-4 items-center justify-center ">
                    <IconBooks />
                    No Course Avilable
                </Container>
            </div>
            }
        </div>
        </div>

    </div>
  )
}
