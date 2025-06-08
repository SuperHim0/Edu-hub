import { Button, Container, Title } from "@mantine/core"
import { IconBooks, IconCornerUpLeft } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"



export const Bookmarks = () => {
    const navigator = useNavigate();

    const backToStudy = () =>{
        navigator("/student/study");
    }
  return (
    <div className="flex w-full bg-white h-screen">
        
        <div  className=" ml-90 mr-20  mb-5 mt-30 w-full">
        <Button color="green" onClick={backToStudy} ><IconCornerUpLeft size={30}/> Back</Button>
        <div className="m-6 flex flex-col gap-12">
            <Title>My Courses</Title>
            <div className="bg-gray-100 shadow-md rounded-xl w-full h-[200px] flex">
                <Container className="flex gap-4 items-center justify-center ">
                    <IconBooks />
                    No Course Avilable
                </Container>
            </div>
        </div>
        </div>

    </div>
  )
}
