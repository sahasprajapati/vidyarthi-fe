import React from 'react';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import {
  Chart as ChartJS1,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS1.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  data: any[];
  options: any;
}

const BarChartComponent: React.FC<Props> = ({ data, options }) => {
  // eslint-disable-next-line no-unused-vars
  const [graphData, setGraphData] = React.useState({
    label: data.map((data: { month: string }) => data.month),
    datasets: [
      {
        label: 'Course Visit',
        data: data.map((e: { courseVisit: string }) => e?.courseVisit),
      },
      {
        label: 'Course Visit',
        data: data.map((e: { courseSale: string }) => e?.courseSale),
      },
    ],
  });
  return (
    <div>
      <Bar data={graphData} options={options} />
    </div>
  );
};

export default BarChartComponent;
