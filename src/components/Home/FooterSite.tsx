

const FooterSite = () => {
  return (
    <div className='h-[180px] w-full'>
      <div className='flex flex-row gap-5 justify-between m-8'>
        <div>
            <a href='/'>
              <h1 className='font-primary text-3xl font-semibold uppercase' >Edu.Hub</h1>
            </a>
        </div>
        <div className='flex flex-row gap-15 font-primary '>
            <div className='flex flex-col gap-2'>
            <h1 className='font-semibold text-md'>Link</h1>
              <ul className='text-gray-500'>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/project'>Project</a></li>
                <li><a href='/contact'>Contact</a></li>
              </ul>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='font-semibold text-md'>Social</h1>
              <ul className='text-gray-500'>
                <li><a href="">Linkedin</a></li>
                <li><a href="">GitHub</a></li>
              </ul>
            </div>
        </div>
    </div>

      <div className='mt-8 mb-8'>
        <p className='text-center text-gray-500 py-4'>© 2025 Edu.Hub . All rights reserved.</p>
      </div>

    </div>
  )
}

export default FooterSite