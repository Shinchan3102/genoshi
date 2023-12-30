'use client'

import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
    name: string,
    redirectTo: string
    Icon: LucideIcon
}

const SidebarMenu = ({ name, redirectTo, Icon }: Props) => {
    const pathname = usePathname()
    return (
        <Link href={redirectTo} className={`px-4 py-2 flex gap-2 items-center transition ${pathname === redirectTo ? 'text-white' : 'text-muted-foreground hover:text-primary'}`}>
            <Icon />
            <div className=''>
                {name}
            </div>
        </Link>
    )
}

export default SidebarMenu
