import { Contact, Facebook, Linkedin, Mail, Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='border-t px-4 py-4 bg-[rgba(255,255,255,0.025)] mt-4'>
            <div className='main-container flex justify-between items-center gap-4'>
                <div className=''>
                    © genoshi.
                </div>
                <div className='flex items-center gap-4'>
                    <div className='text-muted-foreground hover:text-white cursor-pointer'>
                        <Phone />
                    </div>
                    <div className='text-muted-foreground hover:text-white cursor-pointer'>
                        <Mail />
                    </div>
                    <div className='text-muted-foreground hover:text-white cursor-pointer'>
                        <Linkedin />
                    </div>
                    <div className='text-muted-foreground hover:text-white cursor-pointer'>
                        <Facebook />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
