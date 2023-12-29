'use client'

import Image from "next/image"
import Link from "next/link"

interface Props {
    dimension?: number
}

const Logo = ({ dimension=30 }: Props) => {
    return (
        <Link href={`/`} className='relative flex items-center'>
            <Image
                src={'/logo.svg'}
                width={dimension}
                height={dimension}
                className="object-contain"
                alt="genoshi logo"
            />
        </Link>
    )
}

export default Logo
