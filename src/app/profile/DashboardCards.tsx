'use client'

import GraphCard from "@/components/cards/GraphCard"
import { dashboardCards } from "@/util/constants"

const DashboardCards = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {
          dashboardCards.map((item) => (
            <GraphCard
              key={item.name}
              name={item.name}
              value={item.value}
              Icon={item.Icon}
            />
          ))
        }
      </div>
  )
}

export default DashboardCards
