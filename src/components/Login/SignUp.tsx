import { Button, Divider, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import { registerUser } from "../../Services/UserServices";
import { useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../../utility/NotificationUtil";
// import {GoogleButton} from 'https://img.icons8.com/clouds/100/google-logo.png';
// import {TwitterButton} from 'https://img.icons8.com/clouds/100/github.png';

// Define a simple TwitterButton component as a placeholder



const SignUp = () => {
 const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name:'',
      email: '',
      phone: '',
      password: '',
      // confirmPassword: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      name: (value) => (!value)? 'Name is required' : null,
      phone:(value) => (!value)? 'phone is required' : null,
      password: (value) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,}$/;
      
        if (!value) return 'Password is required';
        if (!regex.test(value)) {
          return 'Password must contain at least 1 uppercase, 1 lowercase, 1 digit, 1 special character, and be at least 6 characters long';
        }
        return null;
      },
      // confirmPassword: (value, values) => (value !== values.password ? 'Passwords do not match' : null),
    },
  });
  const navigate = useNavigate();
  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
    // Handle form submission here
    registerUser(values).then((data) => {
      navigate('/login')
      successNotification(data.message);
    }
  ).catch((error) => {
      errorNotification(error.response.data.errorMessage);
    
    })
    
    console.log(values);
  };

  return (
    <div className='flex flex-col w-full h-screen justify-center items-center bg-[var(--color-dark)]'>
        <div className='flex flex-col px-10 w-8/10 sm:w-6/10 md:6/10 lg:w-4/12 xl:w-3/12 h-auto bg-[var(--color-DarkBlack)] rounded-lg p-6 shadow-md '>
            <div className='m-1 w-full flex flex-col items-center justify-center gap-2'>
                <h1>logo</h1>
                <h2 className='text-white text-2xl font-bold text-center'>Welcome To SignUp</h2> 
                <p className='text-gray-400 text-sm text-center'>Allready have an account?<a href='/login'>Login</a></p>
                <form onSubmit={form.onSubmit(handleSubmit)} className="w-full">
                  <TextInput
                    
                    placeholder="👤 Name"
                    
                    {...form.getInputProps('name')}
                  />
                  <TextInput
                    mt="sm"
                    placeholder="📧 Email"
                   
                    {...form.getInputProps('email')}
                  />
                  
                  <TextInput
                    mt="sm"
                    placeholder="📞 Phone Number"
                    
                    {...form.getInputProps('phone')}
                  />
                  <PasswordInput
                    mt="sm"
                    placeholder="🔒 Password"
                    
                    {...form.getInputProps('password')}
                   />
                  <Button type="submit" mt="sm" w='100%' className="">
                    Sign Up
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

export default SignUp