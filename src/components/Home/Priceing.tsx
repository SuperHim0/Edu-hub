
import { Button, Divider } from '@mantine/core'
import { IconTag } from '@tabler/icons-react'


const Priceing = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
        <div className='mt-10 md:w-4/10 flex flex-col items-center justify-center gap-4'>
            <div className='bg-black px-5 py-1  rounded-full text-white flex justify-center items-center'>
                <span className='flex justify-center items-center gap-1'><IconTag size={18} /> Pricing</span>
            </div>
            <h1 className='text-4xl font-bold text-center'>Plans and Pricing</h1>
            <span className='text-center'>Choose a plan that fits yours invenstment goals, whether you're just starting or scaling your education</span>
        </div>
            {/* <Switch className='mt-8' size="xl" onLabel="Month" offLabel="OFF" />  */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 p-4 sm:px-30 md:px-10 lg:px-20">
            {/* Card 1 */}
            <div className='bg-black rounded-lg overflow-hidden p-6'>
              <h2 className='text-2xl font-bold text-white'>Basic</h2>
              <span className='text-gray-400'>For beginners</span>
              <div className='mt-4'>
                <span className='text-3xl font-bold text-white'>$19
                  <span className='text-sm text-gray-400'>/Month</span>
                </span>
                <p className='text-gray-400 mt-2'>
                  For beginners to explore our platform and start their investment journey.
                </p>
              </div>
              <Button className='mt-6 w-full' color='gray' size='md'>Start Free 7 Days Trial</Button>
              <Divider mt={18} my="xs" label="STAND OUT FEATURES" labelPosition="center" />
              <ul className='text-gray-400 mt-4 space-y-2'>
                <li className='flex items-center gap-2'><span className='text-green-500'>✔</span> Access to all courses</li>
                <li className='flex items-center gap-2'><span className='text-green-500'>✔</span> 24/7 Support</li>
                <li className='flex items-center gap-2'><span className='text-green-500'>✔</span> Community Access</li>
              </ul>
            </div>

            {/* Repeat Card 2 & 3 similarly... */}
            <div className='bg-black rounded-lg overflow-hidden p-6'>
              <h2 className='text-2xl font-bold text-white'>Basic</h2>
              <span className='text-gray-400'>For beginners</span>
              <div className='mt-4'>
                <span className='text-3xl font-bold text-white'>$19
                  <span className='text-sm text-gray-400'>/Month</span>
                </span>
                <p className='text-gray-400 mt-2'>
                  For beginners to explore our platform and start their investment journey.
                </p>
              </div>
              <Button className='mt-6 w-full' color='gray' size='md'>Start Free 7 Days Trial</Button>
              <Divider mt={18} my="xs" label="STAND OUT FEATURES" labelPosition="center" />
              <ul className='text-gray-400 mt-4 space-y-2'>
                <li className='flex items-center gap-2'><span className='text-green-500'>✔</span> Access to all courses</li>
                <li className='flex items-center gap-2'><span className='text-green-500'>✔</span> 24/7 Support</li>
                <li className='flex items-center gap-2'><span className='text-green-500'>✔</span> Community Access</li>
              </ul>
            </div>
            <div className='bg-black rounded-lg overflow-hidden p-6'>
              <h2 className='text-2xl font-bold text-white'>Basic</h2>
              <span className='text-gray-400'>For beginners</span>
              <div className='mt-4'>
                <span className='text-3xl font-bold text-white'>$19
                  <span className='text-sm text-gray-400'>/Month</span>
                </span>
                <p className='text-gray-400 mt-2'>
                  For beginners to explore our platform and start their investment journey.
                </p>
              </div>
              <Button className='mt-6 w-full' color='gray' size='md'>Start Free 7 Days Trial</Button>
              <Divider mt={18} my="xs" label="STAND OUT FEATURES" labelPosition="center" />
              <ul className='text-gray-400 mt-4 space-y-2'>
                <li className='flex items-center gap-2'><span className='text-green-500'>✔</span> Access to all courses</li>
                <li className='flex items-center gap-2'><span className='text-green-500'>✔</span> 24/7 Support</li>
                <li className='flex items-center gap-2'><span className='text-green-500'>✔</span> Community Access</li>
              </ul>
            </div>
        </div>


    </div>
  )
}

export default Priceing     