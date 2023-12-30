import { Check, Phone } from 'lucide-react'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import clsx from 'clsx'

export type PriceProperty = {
    name: string
    isActive: boolean
}

interface Props {
    title: string
    price: string
    properties: PriceProperty[]
    subtitle: string
    id: number
    isMonthly?: boolean
    isActive?: boolean
    onClick: (value: number) => void
}

const PricingCard = ({ title, price, properties, subtitle, id, isMonthly = false, isActive = false, onClick }: Props) => {
    return (
        <div className={`p-6 border ${isActive && 'border-primary'} rounded-xl flex flex-col gap-4 bg-[rgba(255,255,255,0.025)] hover:bg-[rgba(255,255,255,0.0125)] transition group ${isActive ? 'border-primary' : 'hover:border-muted-foreground'} shadow-sm duration-300 hover:shadow-lg translate-y-0 scale-100 hover:-translate-y-2 hover:scale-[1.01]`}>
            <h2 className='sm:text-2xl text-xl font-semibold'>
                {title}
            </h2>
            <h3 className='-mt-2 text-gray-500 text-sm sm:text-base'>
                {subtitle}
            </h3>
            {
                id != 3 ?
                    <div className='flex items-end gap-2'>
                        <h1 className='md:text-4xl text-2xl font-bold'>
                            {
                                isMonthly ?
                                    price
                                    :
                                    price[0] + (parseInt(price.slice(1)) * 10)
                            }
                        </h1>
                        <div className='text-sm md:text-base text-gray-500'>
                            {
                                isMonthly ?
                                    'monthly'
                                    :
                                    'annually'
                            }
                        </div>
                    </div>
                    :
                    <div className='flex items-center gap-2 px-4 py-2 justify-center rounded border cursor-pointer border-primary text-primary'>
                        <Phone
                            size={15}
                        />
                        <div className=''>
                            Contact Us
                        </div>
                    </div>
            }
            <Button disabled={isActive} onClick={() => onClick(id)} className={clsx(buttonVariants({ variant: 'default' }), 'rounded font-semibold')}>
                {isActive ? 'Subscribed' : 'Subscribe Now'}
            </Button>
            <div className='border-b border-dashed' />

            <div className='mt-2 flex flex-col gap-4'>
                <h2 className='text-xl font-medium text-primary'>
                    Benefits
                </h2>

                <div className='flex flex-col gap-3'>
                    {
                        properties.map((item) => (
                            <div className={`flex items-center gap-4 ${item.isActive ? 'text-muted-foreground' : 'text-muted'}`} key={item.name}>
                                <Check size={14} />
                                <div className='text-sm'>
                                    {item.name}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PricingCard
