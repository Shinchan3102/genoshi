'use client'

import Image from "next/image"
import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"
import clsx from "clsx"
import { useState } from "react"

const UserMenu = () => {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    return (
        <>
            {
                !isSignedIn ?
                    <div className='grid grid-cols-2 gap-4 w-full'>
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
        </>
    )
}

export default UserMenu
