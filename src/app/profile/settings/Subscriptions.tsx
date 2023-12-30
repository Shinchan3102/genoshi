'use client'

import SubscriptionCard from '@/components/cards/SubscriptionCard'
import { pricingPlan } from '@/util/constants'
import React, { useState } from 'react'

const Subscriptions = () => {

    const [activePlan, setActivePlan] = useState<number>(2);
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4 justify-between'>
                <h2 className='text-lg'>
                    Subscriptions
                </h2>
            </div>

            <div className='flex flex-col gap-6'>
                {
                    pricingPlan.map((item) => (
                        <SubscriptionCard
                            key={item.id}
                            isActive={item.id === activePlan}
                            onClick={((value: number) => setActivePlan(value))}
                            name={item.name}
                            price={item.price}
                            properties={item.properties}
                            id={item.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Subscriptions
