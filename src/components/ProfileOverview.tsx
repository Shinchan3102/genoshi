import Image from 'next/image'
import React from 'react'

const ProfileOverview = () => {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <div className='relative w-32 h-32 flex justify-center items-center'>
        <Image
          src={'/user.avif'}
          fill
          alt='user'
          className='rounded-full object-cover border-2 border-primary'
        />
        <div className='z-10 -bottom-2 absolute bg-primary text-muted px-3 py-1 rounded-full text-xs'>
          Pro
        </div>
      </div>
      <div className='flex flex-col gap-1 items-center'>
        <div className='font-medium text-lg'>
          Amrish Kumar
        </div>
        <div className='text-sm text-muted-foreground'>
          AI influencer
        </div>
      </div>
      <hr className='w-full' />
    </div>
  )
}

export default ProfileOverview
