import { Avatar } from "@mantine/core"


const Header = () => {
  return (
    <div className='w-full h-[72px] border border-[var(--color-divider)] bg-white fixed z-40'>
        <div className="m-5 flex items-center gap-4 justify-end mr-12">
            <span className="text-[var(--color-Dark)] text-lg font-semibold" >Hi, Himanshu</span>
            <Avatar></Avatar>
        </div>
    </div>
  )
}

export default Header