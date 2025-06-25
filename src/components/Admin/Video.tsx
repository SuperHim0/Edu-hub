import { Box, Button, FileInput, Group, Loader, LoadingOverlay, Select, Textarea, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { ConnectVideoToCourseService, getVideoService, uploadVideoService } from "../../Services/VideoService";
import CoursesService from "../../Services/CoursesService";
import { errorNotification, successNotification } from "../../utility/NotificationUtil";

type course ={
  label:string,
  value:string
}
type video ={
  label:string,
  value:string
}

const Video = () => {
    const [course, setCourse] = useState<course[]>([]);
    const [videos, setVideos] = useState<video[]>([]);
    const [loading, setLoading] = useState(false);

    // const [visible, {  open, close  }] = useDisclosure(false);
    const [openCourseForm , setOpenCouseForm]  = useState(false);

    const getVideo = () =>{
       getVideoService().then((response)=>{
         const videoList: video[] = response.data.map((data: any) => ({
          label: data.title,
          value: data.videoId,
         }));
         setVideos(videoList);
       });
       
    }
    const getCourse = () =>{
       CoursesService().then((response)=>{
        // console.log(response);
        const courseList: course[] = response.map((data:any) => ({
          label:data.title,
          value:data.courseId,
        }));
        setCourse(courseList);
       })
    }

    const connectForm = useForm({
      mode:'uncontrolled',
      initialValues:{
        courseId: '',
        videoId: '',
      },

    });

     const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          file: '',
          title:'',
          description:'',          

        },
    
        validate: {
          file: (value) => value ? null : 'requeired', 
    
      //   const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
      //   const maxSizeInMB = 5;
    
      //   if (!allowedTypes.includes(value.type)) {
      //     return 'Only JPG, PNG, or WEBP images are allowed';
      //   }
    
      //   if (value.size > maxSizeInMB * 1024 * 1024) {
      //     return `Image size must be less than ${maxSizeInMB}MB`;
      //   }
    
      //   return null;
      // },
    
       
        title: (value) =>
          value.trim().length >= 3 ? null : 'Title must be at least 3 characters',
    
        description: (value) =>
          value.trim().length >= 10 ? null : 'Description must be at least 10 characters',
    
      },
      });
    
    
    const handleForm=(values : any)=>{
       setLoading(true);
      try {
          uploadVideoService(values).then((response)=>{
            successNotification(response.data?.message || "Video linked to course successfully!");
          });
          form.reset(); // Clear the form after success
        } catch (err) {
          errorNotification("Something went wrong");
          console.error(err);
        } finally {
              setLoading(false);
        }
      }
    const handleConnectForm=(value : any) =>{
      // console.log(value.);

      ConnectVideoToCourseService(value.courseId,value.videoId).then((response)=>{
        successNotification(response.data?.message || "Video linked to course successfully!");
        // connectForm.reset();
      }).catch((error)=>{
        // console.log(error);
        errorNotification(error.response?.data?.message || error.message || "Something went wrong");

      })
      
    }

  return (
    <section className="mt-30 ml-8 md:ml-70 mr-10 ">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Video</h1>
        <div className="flex gap-4">
          <Button w={140} onClick={()=> setOpenCouseForm(true)}>Add Course</Button>
          <Button w={220} onClick={()=> setOpenCouseForm(false)}>Add Video To Course</Button>
        </div>
            {
             openCourseForm &&
             <div className='flex flex-col gap-2'>
               <h1 className="items-center font-semibold text-2xl">Upload Video </h1>
               <Box pos="relative">
               <LoadingOverlay visible={loading} loaderProps={{ children: 'Creating Course...' }} />
                <form onSubmit={form.onSubmit((values) => handleForm(values))}>
                   <FileInput 
                     withAsterisk
                     label="Upload Video"
                     placeholder="Choose video"
                     {...form.getInputProps('file')}
                     accept='video/mp4'
                   />
                  
                   <TextInput
                     withAsterisk
                     label="Title"
                     placeholder="Title of Course"
                     {...form.getInputProps('title')}
                   />
                   <Textarea
                     withAsterisk
                     label="Description"
                     placeholder="description"
                     {...form.getInputProps('description')}
                   />
                   <Group justify="center"  mt="md">
                     <Button 
                     type="submit" 
                     color='green' 
                     loading={loading}   // ✅ shows spinner
                     disabled={loading}  
                     w="48%" >Submit</Button>
                     <Button className='' color='red' onClick={()=>(setOpenCouseForm(false))} w="48%">Close</Button>
                   </Group>
                 </form>
                 </Box>
             </div>
            }

            {
            !openCourseForm &&
             <div className='flex flex-col gap-2'>
                <h1 className="items-center font-semibold text-2xl"> Add Video to Course</h1>
               <Box pos="relative">
               <LoadingOverlay visible={loading} loaderProps={{ children: 'Creating Course...' }}  />
                <form onSubmit={connectForm.onSubmit((values) => handleConnectForm(values))}>

                    <Select
                      onClick={getCourse}
                      data={
                       course
                      }
                      clearable
                     withAsterisk
                     label="Select Course"
                     placeholder="Course"
                     {...connectForm.getInputProps('courseId')}
                   />
                   <Select
                   onClick={getVideo}
                      data={videos}
                     clearable
                     withAsterisk
                     label="Select Video"
                     placeholder="Videos"
                     {...connectForm.getInputProps('videoId')}
                   />
                   <Group justify="center"  mt="md">
                     <Button type="submit" color='green' w="48%" >Submit</Button>
                     <Button className='' color='red' onClick={()=>(setOpenCouseForm(false))} w="48%">Close</Button>
                   </Group>
                 </form>
                 </Box>
             </div>
            }

      </div>
    </section>
  )
}

export default Video