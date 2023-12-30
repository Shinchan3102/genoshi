import React from 'react'
import PersonalDetails from './PersonalDetails'
import Subscriptions from './Subscriptions'

const page = () => {
    return (
        <div className='flex-1 flex flex-col overflow-y-auto gap-5'>
            <h2 className='text-xl font-medium'>
                My Profile
            </h2>

            <div className='border rounded p-6'>
                <PersonalDetails />
            </div>

            <div className='border rounded p-6'>
                <Subscriptions />
            </div>
        </div>
    )
}

export default page
