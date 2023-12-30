import React from 'react'
interface Props {
    placeholder: string
    value: string
    onChange: (value: string) => void
}

const SearchInput = ({ placeholder, value, onChange }: Props) => {
    return (
        <div className='flex justify-between items-center gap-2 rounded border px-4 py-2 w-full'>
            <input
                placeholder={placeholder}
                type='text'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className='w-full outline-none border-0 bg-transparent'
            />
        </div>
    )
}

export default SearchInput
