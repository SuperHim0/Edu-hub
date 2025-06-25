import { Box, Button, FileInput, Group, LoadingOverlay, Modal, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';
import {CreateCourseService, DeleteCourseService} from '../../Services/CreateCourseService';
import { useDisclosure } from '@mantine/hooks';
import { errorNotification, successNotification } from '../../utility/NotificationUtil';
import { useEffect, useState } from 'react';
import CoursesService from '../../Services/CoursesService';
import { IconTagStarred } from '@tabler/icons-react';

type Courses = {
            courseId: string,
            description:string,
            imagePath: string,
            actualPrice:string,
            price: string,
            subject: string,
            title: string
        };

const Course = () => {
  const [courseDetails,setCourseDetails] = useState<Courses[]>([]);
  const [visible, {  open, close  }] = useDisclosure(false);
  const [opened, {  open: openModal, close: closeModal }] = useDisclosure(false);
  
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      thumbnail: '',
      subject:'',
      title:'',
      description:'',
      actualPrice:'',
      price:'',
    },

    validate: {
      thumbnail: (value) => value ? null : 'requeired', 

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

    subject: (value) =>
      value.trim().length > 0 ? null : 'Subject is required',

    title: (value) =>
      value.trim().length >= 3 ? null : 'Title must be at least 3 characters',

    description: (value) =>
      value.trim().length >= 10 ? null : 'Description must be at least 10 characters',

    actualPrice: (value) => {
      if (!value) return 'Actual price is required';
      if (isNaN(Number(value))) return 'Actual price must be a number';
      if (Number(value) <= 0) return 'Actual price must be greater than 0';
      return null;
    },

    price: (value, values) => {
      if (!value) return 'Price is required';
      if (isNaN(Number(value))) return 'Price must be a number';
      if (Number(value) <= 0) return 'Price must be greater than 0';
      if (Number(value) > Number(values.actualPrice)) return 'Price cannot be greater than actual price';
      return null;
    },
    },
  });

  const fetchCourses = () =>{
        CoursesService()
        .then((_data)=>{
            setCourseDetails(_data);
        }).catch((err) =>{
            console.log("error fetching courses: ",err);
            
        });
    };
    useEffect(()=>{
            fetchCourses();
    },[]);

  const [openCourseForm , setOpenCouseForm]  = useState(false);


  const handleForm=(values : any)=>{
    open();
    try {
      CreateCourseService(values).then((response)=>{
        successNotification(response);
      });
      form.reset(); // Clear the form after success
    } catch (err) {
      errorNotification("Something went wrong");
      console.error(err);
    } finally {
      close();
    }
  }

  const handleCourseEdit=(course:any)=>{
    console.log(course);
      
  }
  const handleDeleteCourse=(course:any)=>{
        DeleteCourseService(course.courseId).then((response)=>{
          // console.log(response.data);
          successNotification(response.data)
          fetchCourses();
        }).catch((err)=>{
          console.error(err);
          errorNotification("unable to delete");
        })
  }
  

  return (
    <section className='mt-30 ml-8  md:ml-70 mr-10 flex flex-col gap-2'>
      <h1 className='font-bold text-2xl'>Course</h1>
      <Button onClick={()=> setOpenCouseForm(true)}>Add Course</Button>
      {
      openCourseForm &&
      <div className='flex flex-col gap-2'>
        
        <Box pos="relative">
        <LoadingOverlay visible={visible} loaderProps={{ children: 'Creating Course...' }} />
         <form onSubmit={form.onSubmit((values) => handleForm(values))}>
            <FileInput 
              withAsterisk
              label="Thumbnail of Course"
              placeholder="Choose thumbnail of course"
              {...form.getInputProps('thumbnail')}
              accept='image/*'
            />
            <TextInput
              withAsterisk
              label="Subject"
              placeholder="enter subject"
              {...form.getInputProps('subject')}
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
            <TextInput
              withAsterisk
              label="Actual Price"
              placeholder="purchase price"
              {...form.getInputProps('actualPrice')}
            />
            <TextInput
              withAsterisk
              label="Price"
              placeholder="Price after discount"
              {...form.getInputProps('price')}
            />

            <Group justify="center"  mt="md">
              <Button type="submit" color='green' w="48%" >Submit</Button>
              <Button className='' color='red' onClick={()=>(setOpenCouseForm(false))} w="48%">Close</Button>
            </Group>
          </form>
          </Box>
      </div>
      }
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
      { !openCourseForm && 
        courseDetails.map((course:any) => (
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
                <button className="bg-green-400 w-full px-6 py-2 rounded hover:bg-green-500 cursor-pointer"  onClick={openModal} >Edit</button>
                <button className="bg-red-200 w-full border-4 border-red-500  px-6 py-1 rounded hover:bg-red-500 cursor-pointer" onClick={()=>handleDeleteCourse(course)}>Delete</button>
            </div>
           
          </div>
        )) 
}
      </div>
      <Modal opened={opened} onClose={closeModal} title="Edit Course" centered>
        {/* Modal content */}
        <form onSubmit={form.onSubmit((values) => handleCourseEdit(values))}>
            <FileInput 
              withAsterisk
              label="Thumbnail of Course"
              placeholder="Choose thumbnail of course"
              {...form.getInputProps('thumbnail')}
              accept='image/*'
            />
            <TextInput
              withAsterisk
              label="Subject"
              placeholder="enter subject"
              {...form.getInputProps('subject')}
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
            {/* <TextInput
              withAsterisk
              label="Actual Price"
              placeholder="purchase price"
              {...form.getInputProps('actualPrice')}
            />
            <TextInput
              withAsterisk
              label="Price"
              placeholder="Price after discount"
              {...form.getInputProps('price')}
            /> */}

            <Group justify="center"  mt="md">
              <Button type="submit" color='green' w="100%" >Update</Button>
            </Group>
            </form>
      </Modal>


      {/* <Button variant="default" onClick={openModel}>
        Open centered Modal
      </Button> */}


    </section>
  )
}

export default Course