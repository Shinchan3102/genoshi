'use client'

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const DonutGraph = () => {

//   const data = {
//     labels: ['Chart Created', 'Chart Shared', 'Papers Uploaded'],
//     datasets: [
//       {
//         data: [20, 10, 30],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//       },
//     ],
//   };
//   return (
//     <div className="w-full max-h-[500px] justify-center flex p-8  border relative rounded">
//       <Doughnut data={data} />
//     </div>
//   )
// }

// export default DonutGraph


import { Card, DonutChart, Title } from "@tremor/react";

const cities = [
  {
    name: "Charts Created",
    sales: 80,
  },
  {
    name: "Charts Shared",
    sales: 50,
  },
  {
    name: "Papers Uploaded",
    sales: 60,
  },
];

const valueFormatter = (number: number) => `${number}`;


const DonutGraph = () => {
  return (
    <div className="">
      <Card className="w-full border ring-0 shadow-none pb-12 bg-transparent text-white" style={{borderColor:'hsl(var(--border)) !important'}}>
        <Title>My Works</Title>
        <DonutChart
          className="mt-6 text-white"
          data={cities}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={["violet", "rose", "cyan", "amber"]}
        />
      </Card>
    </div>
  )
}

export default DonutGraph
