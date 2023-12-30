'use client'

import React from 'react'
import Logo from '../Logo'
import ProfileOverview from '../ProfileOverview'
import { sidebarMenu } from '@/util/constants'
import SidebarMenu from './SidebarMenu'
import { LogOut } from 'lucide-react'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className='w-full flex-col flex-1 p-6 gap-4 overflow-y-auto flex'>
            <div className='flex justify-center items-center'>
                <Logo
                    dimension={150}
                />
            </div>

            {/* profile overview */}
            <div className='mt-8'>
                <ProfileOverview />
            </div>
            <div className='flex flex-1 flex-col gap-4 justify-between'>
                <div className='flex-1 my-4 flex flex-col gap-2'>
                    {
                        sidebarMenu.map((item) => (
                            <SidebarMenu
                                key={item.name}
                                name={item.name}
                                redirectTo={item.redirectTo}
                                Icon={item.Icon}
                            />
                        ))
                    }
                </div>

                <Link href={'/'} className='border border-red-600 justify-center text-red-600 hover:bg-red-600 hover:text-white transition cursor-pointer rounded px-4 py-2 flex items-center gap-3'>
                    <LogOut />
                    <div className=''>
                        Logout
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
