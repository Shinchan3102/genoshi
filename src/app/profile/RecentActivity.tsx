import { activityChart } from '@/util/constants'
import { Clock } from 'lucide-react'
import React from 'react'

const RecentActivity = () => {
    return (
        <div className='border rounded p-4 '>
            <h1 className='text-lg font-medium'>
                Recent Activity
            </h1>

            <div className='flex flex-col gap-2 mt-4'>
                {
                    activityChart.map((item, index) => (
                        <div className={`flex items-center justify-between gap-4 ${index !== activityChart.length - 1 && 'border-b'} py-2`}>
                            <div className='flex-1 line-clamp-1 text-sm text-muted-foreground'>
                                {item.name}
                            </div>
                            <div className='text-[10px] font-light text-gray-500 flex items-center gap-1.5'>
                              <Clock size={10} />  {item.date}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentActivity
