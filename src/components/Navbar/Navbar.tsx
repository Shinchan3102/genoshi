'use client'

import Logo from '../Logo'
import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import clsx from 'clsx'
import { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

    return (
        <div className='fixed inset-x-0 top-0 backdrop-blur-md z-10'>
            <div className='main-container border-b h-20 flex items-center justify-between gap-6'>

                {/* logo section  */}
                <Logo
                    dimension={120}
                />

                <div className='flex items-center gap-2'>
                    <Link href={'/'} className='px-4 transition hover:bg-[rgba(255,255,255,0.1)] rounded py-1.5'>
                        Home
                    </Link>
                    <Link href={`/`} className='px-4 transition hover:bg-[rgba(255,255,255,0.1)] rounded py-1.5'>
                        Pricing
                    </Link>
                    <Link href={`/`} className='px-4 transition hover:bg-[rgba(255,255,255,0.1)] rounded py-1.5'>
                        Contact
                    </Link>
                </div>

                {/* sign in/ sign up section  */}
                {
                    !isSignedIn ?
                        <div className='flex items-center gap-4'>
                            <Button onClick={() => setIsSignedIn(true)} className={clsx(buttonVariants({ variant: 'outline' }), 'rounded text-muted-foreground')}>
                                Sign Up
                            </Button>
                            <Button onClick={() => setIsSignedIn(true)} className={'rounded'}>
                                Sign In
                            </Button>
                        </div>
                        :
                        <Link
                            href={'/profile'}
                            className='flex items-center gap-2 '
                        >
                            <div className='relative w-8 h-8'>
                                <Image
                                    src={'/user.avif'}
                                    fill
                                    className='relative object-cover rounded-full'
                                    alt='user'
                                />
                            </div>
                            <div className=''>
                                Amrish
                            </div>
                        </Link>
                }
            </div>
        </div>
    )
}

export default Navbar
