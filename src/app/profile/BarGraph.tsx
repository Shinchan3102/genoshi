'use client'

import { AreaChart, BarChart, Card, Flex, Subtitle, Switch, Title } from "@tremor/react";

const chartdata = [
  {
    name: "Charts Created",
    "value": 2488,
  },
  {
    name: "Charts Shared",
    "value": 1445,
  },
  {
    name: "Papers Uploaded",
    "value": 743,
  },
];

const valueFormatter = (number: number) => `${number}`;


const BarGraph = () => {
  return (
    <div>
      <Card className="bg-transparent outline-none ring-0 border" style={{borderColor: 'hsl(var(--border)) !important'}}>
        <Title>Data records (2023)</Title>
        <BarChart
          className="mt-6"
          data={chartdata}
          index="name"
          categories={["value"]}
          colors={["blue"]}
          valueFormatter={valueFormatter}
          yAxisWidth={48}
        />
      </Card>
    </div>
  )
}

export default BarGraph
