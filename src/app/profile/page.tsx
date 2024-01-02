
import React from 'react'
import DashboardCards from './DashboardCards'
import RecentActivity from './RecentActivity'
import BarGraph from './BarGraph'

const page = () => {
  return (
    <div className='flex flex-col gap-6'>

      <DashboardCards />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 w-full'>
        <div className='col-span-1 lg:col-span-2'>
          <BarGraph />
          {/* <DonutGraph /> */}
        </div>

        <div className=''>
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}

export default page
