'use client'

import UserInput from '@/components/inputs/UserInput';
import { userPersonalDetail } from '@/util/constants';
import { Edit, Save } from 'lucide-react'
import React, { useState } from 'react'

const PersonalDetails = () => {

    const [isEdit, setIsEdit] = useState<boolean>(false);

    const [personalData, setPersonalData] = useState(userPersonalDetail);
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4 justify-between'>
                <h2 className='text-lg'>
                    Personal Information
                </h2>
                <div className='transition hover:text-white text-muted-foreground cursor-pointer' onClick={() => setIsEdit(!isEdit)}>
                    {
                        isEdit ?
                            <Save />
                            :
                            <Edit />
                    }
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    personalData.map((item) => (
                        <UserInput
                            key={item.name}
                            name={item.name}
                            type={item.type}
                            value={item.value}
                            isEdit={isEdit}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PersonalDetails
