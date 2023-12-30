'use client'

import React, { useState } from 'react'
import SearchInput from './inputs/SearchInput'
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [searchText, setSearchText] = useState<string>('');
    return (
        <div className='p-6 border-b w-full flex items-center gap-4 justify-between'>
            <div className='md:max-w-lg w-full'>
                <SearchInput
                    onChange={(value: string) => setSearchText(value)}
                    placeholder='Search anything'
                    value={searchText}
                />
            </div>

            <div className=''>
                <div
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
                </div>
            </div>
        </div>
    )
}

export default Header
