import { Button, Divider, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import { loginUser } from "../../Services/UserServices";
import { errorNotification, successNotification } from "../../utility/NotificationUtil";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setJwt } from "../../Slice/JwtSlice";
import { setUser } from "../../Slice/UserSlice";
// import {GoogleButton} from 'https://img.icons8.com/clouds/100/google-logo.png';
// import {TwitterButton} from 'https://img.icons8.com/clouds/100/github.png';

// Define a simple TwitterButton component as a placeholder



const Login = () => {


  const dispatch = useDispatch();
 const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password:'',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleSubmit = (values: typeof form.values) => {

    // Handle form submission here
    loginUser(values).then((_data) => {
      console.log(_data);
      const token = (_data.jwtToken);
      
      dispatch(setJwt(token));        // ✅ stores token string in localStorage
      dispatch(setUser(_data)); 
       Cookies.set('token',_data.jwtToken,{expires:1 , path:'/'})
       Cookies.set('userData',_data,{expires:1,path:'/'})
       Cookies.set('role',_data.role,{expires:1,path:'/'})
       console.log(Cookies.get('userData'));
       

      // ✅ stores user info in Redux only
      
      
      
      //show the success notification
      successNotification("Login Successful");
      

    } ).catch((error) => {
      errorNotification(error?.response?.data?.errorMessage);
    })
  }
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center bg-[var(--color-dark)]'>
        <div className='flex flex-col px-10 w-8/10 sm:w-6/10 md:6/10 lg:w-4/12 xl:w-3/12 h-auto bg-[var(--color-DarkBlack)] rounded-lg p-6 shadow-md '>
            <div className='m-1 w-full flex flex-col items-center justify-center gap-2'>
                <h1>logo</h1>
                <h2 className='text-white text-2xl font-bold text-center'>Welcome Back</h2> 
                <p className='text-gray-400 text-sm text-center'>Don't have an account? <a href='/signup'>Sign up</a></p>
                <form onSubmit={form.onSubmit(handleSubmit)} className="w-full">
                  
                  <TextInput
                    mt="sm"
                    placeholder="📧 Email"
                  
                    {...form.getInputProps('email')}
                  />
                  <PasswordInput
                    mt="sm"
                    placeholder="🔒 Password"
                    
                    {...form.getInputProps('password')}
                   />
                  <Button type="submit" mt="sm" w='100%' className="">
                    Login
                  </Button>
                </form>
                <Divider mt="sm" labelPosition="center" label="Or Continue with" my="sm" />

                <Group>
                  <Button   color="black"><img width="30" height="30" src="https://img.icons8.com/color/96/google-logo.png" alt="google-logo"/> </Button>
                  <Button   color="black"><img width="30" height="30" src="https://img.icons8.com/officel/16/github.png" alt="github"/></Button>
                </Group>


            </div>
        </div>
    </div>
  )
}

export default Login