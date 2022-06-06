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
  type: 'bar' | 'doughnut';
  width?: number;
  height?: number;
}

const Chart: React.FC<Props> = ({ data, options, type, width, height }) => {
  const renderGraph = React.useMemo(() => {
    if (type === 'doughnut') {
      return (
        <Doughnut data={data} options={options} width={width} height={height} />
      );
    } else if (type === 'bar') {
      return (
        <Bar data={data} options={options} width={width} height={height} />
      );
    } else {
      return null;
    }
  }, [type]);

  return <React.Fragment>{renderGraph}</React.Fragment>;
};

export default React.memo(Chart);
