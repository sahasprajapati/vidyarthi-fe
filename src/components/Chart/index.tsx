import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineController,
  LineElement,
  ArcElement,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineController,
  LineElement,
  ArcElement
);

interface Props {
  data: any;
  options?: any;
  type: string;
  width?: number;
  height?: number;
}

const Chart: React.FC<Props> = ({ data, options, type, width, height }) => {
  return (
    <div>
      {type === 'bar' ? (
        <Bar data={data} options={options} width={width} height={height} />
      ) : type === 'doughnut' ? (
        <Doughnut data={data} options={options} width={width} height={height} />
      ) : null}
    </div>
  );
};

export default React.memo(Chart);
