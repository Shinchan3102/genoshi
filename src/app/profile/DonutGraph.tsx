'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutGraph = () => {

  const data = {
    labels: ['Chart Created', 'Chart Shared', 'Papers Uploaded'],
    datasets: [
      {
        data: [20, 10, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  return (
    <div className="w-full max-h-[500px] justify-center flex p-8  border relative rounded">
      <Doughnut data={data} />
    </div>
  )
}

export default DonutGraph
