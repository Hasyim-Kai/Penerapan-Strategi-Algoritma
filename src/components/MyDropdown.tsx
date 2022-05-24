import { Menu } from '@headlessui/react'

export default function MyDropdown() {
    return <Menu>
            <Menu.Button className='mx-auto p-3 bg-blue-300 rounded-lg'>More</Menu.Button>
            <Menu.Items className='flex flex-col'>
                <Menu.Item>
                    <a href="#">Account</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="#">Documentation</a>
                </Menu.Item>
            </Menu.Items>
        </Menu>
}