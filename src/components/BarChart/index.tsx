import React from 'react';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
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
    label: data.map((e: { courseVisit: string }) => e?.courseVisit),
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
