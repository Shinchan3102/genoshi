'use client'

import { Check, Squircle } from "lucide-react"
import { PriceProperty } from "./PricingCard"

interface Props {
    id: number
    name: string
    price: string
    properties: PriceProperty[]
    isActive: boolean
    onClick: (value: number) => void
}

const SubscriptionCard = ({ name, properties, isActive, onClick, price, id }: Props) => {
    return (
        <div className="flex items-start gap-4">
            <div className="cursor-pointer relative flex items-center justify-center" onClick={() => onClick(id)}>
                {
                    isActive ?
                        <>
                            <Squircle className="text-primary" />
                            <Check className="text-primary absolute" size={15} />
                        </>
                        :
                        <Squircle />
                }
            </div>

            <div className="flex flex-col gap-4">
                <h1 className="text-xl font-medium">
                    {name} ({price} {id !== 3 && 'per month'})
                </h1>

                <div className="flex flex-col gap-4">
                    {
                        properties.map((item, index) => (
                            <div key={item.name+`${id}`+price+index} className="text-sm font-light text-muted-foreground">
                                {item.isActive && item.name}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SubscriptionCard
