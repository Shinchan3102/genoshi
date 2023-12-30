'use client'

import { navbarItems } from "@/util/constants"
import Link from "next/link"

const MenuItems = () => {
    return (
        <>
            {
                navbarItems.map((item) => (
                    <Link href={item.redirectTo} key={item.name} className='px-4 transition hover:bg-[rgba(255,255,255,0.1)] rounded py-1.5'>
                        {item.name}
                    </Link>

                ))
            }
        </>
    )
}

export default MenuItems
