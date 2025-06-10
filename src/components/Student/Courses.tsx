import { useEffect, useState } from "react";
import CoursesService from "../../Services/CoursesService"
import {  Button, Divider, Modal, TextInput } from "@mantine/core";
import {  IconSearch, IconTagStarred } from "@tabler/icons-react";
import notfound from '../../assets/notfound.jpg';
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

type Courses = {
            courseId: string,
            description:string,
            imagePath: string,
            actualPrice:string,
            price: string,
            subject: string,
            title: string
        };
const Courses = () => {
    
    const [courseDetails,setCourseDetails] = useState<Courses[]>([]);
    //model open close
    const [opened, { open, close }] = useDisclosure(false);

    //used in popup model
    const [courseId ,setCourseId] = useState("");
    const [description,setDescription] = useState('');
    const [subject , setSubject] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    
  const [selectedCourses, setSelectedCourse] = useState<Courses | null>(null);
    //end

    //fetch all course from data base
    const fetchCourses = () =>{
        CoursesService()
        .then((_data)=>{
            console.log(_data);
            setCourseDetails(_data);
        }).catch((err) =>{
            console.log("error fetching courses: ",err);
            
        });
    };

    useEffect(()=>{
        fetchCourses();

    },[]); // empty array means run only once (on mount)
    const [search,setSearch] = useState('');

     // searching the student on the basis of there roll number and name
    const filteredCourses = courseDetails.filter((courseInfo) =>
    courseInfo.title.toLowerCase().includes(search.toLowerCase())
    // course..toLowerCase().includes(serach.toLowerCase())
    );

    //open close popup model
    const handleModel = (course : Courses) =>{
        setSelectedCourse(course);
        setCourseId(course.courseId);
        setTitle(course.title);
        setDescription(course.description);
        setPrice(course.price);
        setSubject(course.subject);
        open();
    }
    const navigate = useNavigate();
    const handleBuyNow = (course:any) =>{
        navigate("/student/order-summary",{state:{course}});
    }

  return (
    <div className=''>
        <div className='m-4 md:ml-70 xl:ml-90 xl:mr-20 mt-30 mb-5 flex flex-col gap-4 overflow-hidden'>
                <div className=" w-full">
                    <TextInput onChange={(e)=>setSearch(e.currentTarget.value)} value={search} placeholder="Search for courses.." leftSection={<IconSearch />}/>
                </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredCourses.map((course:any) => (
          <div key={course.courseId} className="border rounded p-4 shadow flex flex-col overflow-hidden gap-4">
            <div>

            <img src={course.imagePath} alt={course.title} className="w-full h-48 object-cover mb-2" />
            <h3 className="text-lg font-bold">{course.title}</h3>
            <p>{course.description.length>50?course.description.slice(0,42)+"...":course.description}</p>
            <p className="line-through text-gray-500">₹{course.actualPrice}</p>
            </div>
            <div className="flex justify-between">
            <p className="text-green-600 font-semibold">Now ₹{course.price}</p>
            <div className="bg-green-200 px-4 py-1 rounded-md font-semibold flex items-center gap-1">
                <IconTagStarred /> {Math.floor(100-(course.price/course.actualPrice)*100)}% Discount 
            </div>
            </div>
            <div className="flex gap-4 justify-between w-full items-center">
                <button className="bg-green-400 w-full px-6 py-2 rounded hover:bg-green-500 cursor-pointer"  onClick={()=>handleBuyNow(course)} >Buy Now</button>
                <button className="bg-blue-200 w-full border-4 border-blue-500  px-6 py-1 rounded hover:bg-blue-500 cursor-pointer" onClick={()=>handleModel(course)}>Exploar</button>
            </div>
           
          </div>
        )) 
        }
      </div>
                <Modal key={courseId}
                className=""
                opened={opened} onClose={close} title="Course Details" >
                    {/* Modal content */}
                    <Divider/>

                    <div className="m-2 flex gap-4 flex-col">
                        <div>
                            <h1 className="text-2xl font-semibold">{title}</h1>
                        </div>
                        <div className="flex flex-col">
                            <span>⭐ Validity: 6 Months</span>
                            <span>⭐ Mentorship on Telegram Groups</span>
                            <span>⭐ One-to-one emotional well-being support by EduHub</span>
                            <span>⭐ Recored Videos & Live </span>
                        </div>
                        <div>
                            <p>description: {description}</p>
                            <p className="text-red-400">Subject: {subject}</p>
                        </div>
                        <span className="text-xl font-semibold text-green-400">Only ₹{price}</span>
                        <Button color="green" onClick={()=>handleBuyNow(selectedCourses)}>Buy Now</Button>

                    </div>

                </Modal>
        {
            (filteredCourses.length==0) && <div className="flex justify-center items-center"> 
                    <div className="w-full h-[420px] rounded p-4 shadow flex flex-col justify-center items-center">
                        <img src={notfound} alt="Not found" width={270} />
                        <h1 className="text-xl font-semibold" >Not Found!</h1>
                    </div>
            </div>
        }
        </div>
    </div>
  )
}

export default Courses