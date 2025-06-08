import { Avatar, Menu } from "@mantine/core"
import { IconSignLeft, IconUser } from "@tabler/icons-react"



const Header = () => {
  return (
    <div className='w-full h-[72px] border border-[var(--color-divider)] bg-white fixed z-40'>
        <div className="m-5 flex items-center gap-4 justify-end mr-12">
            <span className="text-[var(--color-Dark)] text-lg font-semibold" >Hi, Himanshu</span>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Avatar></Avatar>
              </Menu.Target>
              <Menu.Dropdown>
                    <Menu.Item leftSection={<IconUser size={14} />}>
                      Profile
                    </Menu.Item>
                    <Menu.Item leftSection={<IconSignLeft size={14} />}>
                      Log out
                    </Menu.Item>
              </Menu.Dropdown>
            </Menu>
        </div>
    </div>
  )
}

export default Header