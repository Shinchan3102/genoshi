'use client'

import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface Props {
    name: string
    Icon: LucideIcon
    value: number
}

const GraphCard = ({ name, Icon, value }: Props) => {
    return (
        <Link href={'/profile/graphs'} className="flex px-6 py-4 shadow transition hover:shadow-lg translate-y-0 hover:-translate-y-1 rounded items-start gap-4 border">
            <Icon size={35} className="" />
            <div className="">
                <h1 className="font-semibold text-lg">
                    {value}
                </h1>
                <h2 className="text-sm text-muted-foreground">
                    {name}
                </h2>
            </div>
        </Link>
    )
}

export default GraphCard
