import React from 'react'

interface Props {
    name: string,
    value: string,
    type: string
    isEdit: boolean
}

const UserInput = ({ name, value, type, isEdit }: Props) => {
    return (
        <div className='flex flex-col gap-1.5'>
            <label htmlFor={name} className='text-muted-foreground text-sm'>
                {name}
            </label>
            {
                !isEdit ?
                    <div className=''>
                        {value}
                    </div>
                    :
                    <input
                        type={type}
                        value={value}
                        id={name}
                        name={name}
                        className='outline-none bg-transparent border px-2.5 rounded py-1.5'
                    />
            }
        </div>
    )
}

export default UserInput
