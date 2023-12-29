'use client'

import PricingCard from '@/components/cards/PricingCard';
import { Switch } from '@/components/ui/switch'
import { pricingPlan } from '@/util/constants';
import React, { useCallback, useState } from 'react'

const PrincingSection = () => {
    const [isMonthy, setIsMonthly] = useState<boolean>(true);

    const togglePlan = useCallback((value: boolean) => {
        setIsMonthly(value)
    }, [isMonthy]);

    return (
        <section className='flex flex-col gap-6 items-center'>

            <h1 className='text-4xl font-semibold'>
                Our Pricing Plans
            </h1>

            <div className='flex font-medium text-lg items-center gap-4 mt-6'>
                <div className={`transition cursor-pointer ${isMonthy ? 'text-muted-foreground' : 'text-muted'}`} onClick={() => togglePlan(true)}>
                    Monthly Plans
                </div>
                <div className='flex items-center pt-0.5'>
                    <Switch
                        onClick={() => togglePlan(!isMonthy)}
                        checked={!isMonthy}
                    />
                </div>
                <div className={`transition cursor-pointer ${isMonthy ? 'text-muted' : 'text-muted-foreground'}`} onClick={() => togglePlan(false)}>
                    Annual Plans
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2'>
                {
                    pricingPlan.map((item) => (
                        <PricingCard
                            key={item.id}
                            title={item.name}
                            price={item.price}
                            properties={item.properties}
                            subtitle={item.subtitle}
                            id={item.id}
                            isMonthly={isMonthy}
                        />
                    ))
                }
            </div>

        </section>
    )
}

export default PrincingSection
