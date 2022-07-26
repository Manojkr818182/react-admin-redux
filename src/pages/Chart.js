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
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June','july', 'August', "September"];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [31, 20, 12,27 ,9 ,18, 2],
      backgroundColor: 'orange',
    }
    
  ],
};

const Chart = () => {
  return (
    <div className=' mt-5 px-5'>
    <Bar options={options} data={data} />
  </div>
  )
}

export default Chart