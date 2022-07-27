import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true
};
const labels = ["Clients", "Providers", "Order", "Completed"];
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset',
      data: [41, 60, 55, 71],
      backgroundColor: '#6bcfd1',
      barThickness: 50,
      maxBarThickness: 55,
    }

  ],
}

const MyChart = () => {
  return (
    <Bar options={options} data={data} />
  )
}

export default MyChart