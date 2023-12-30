'use client'

import Logo from '../Logo'
import MenuItems from './MenuItems'
import NavSheet from './NavSheet'
import UserMenu from './UserMenu'

const Navbar = () => {

    return (
        <div className='fixed inset-x-0 top-0 backdrop-blur-md z-10'>
            <div className='main-container border-b h-20 flex items-center justify-between gap-6'>

                {/* logo section  */}
                <Logo
                    dimension={120}
                />

                <div className='hidden items-center gap-2 md:flex'>
                    <MenuItems />
                </div>

                {/* sign in/ sign up section  */}
                <div className='hidden items-center md:block'>
                    <UserMenu />
                </div>

                <div className='block md:hidden'>
                    <NavSheet />
                </div>
            </div>
        </div>
    )
}

export default Navbar
