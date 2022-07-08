import { Chart, CustomTable, InstructorCard } from 'components';
import Card from 'components/Card';
import Heading from 'components/Heading';
import { AdminLayout } from 'containers';
import { instructorTransactionLineGraph } from 'pages/Admin/Dashboard/__chartdata__/chartData';
import React from 'react';
import { TableColumn } from 'react-data-table-component';
import formatMoney from 'utils/formatMoney';

interface DataRow {
  date: string;
  method: string;
  amount: string;
  status: string;
}

const instructorTransactionData = [
  {
    id: 0,
    iconName: 'book',
    bgColor: '#FFFFFF',
    color: '#120d26',
    fontWeight: 'fw-500',
    title: '2354.00',
    subTitle: 'Total Revenue',
    subTitleColor: 'rgba(0, 0, 0, 0.7)',
  },
  {
    id: 1,
    iconName: 'book',
    bgColor: '#FFFFFF',
    color: '#120d26',
    fontWeight: 'fw-500',
    title: '25354.00',
    subTitle: 'Current Balance',
    subTitleColor: 'rgba(0, 0, 0, 0.7)',
  },
  {
    id: 2,
    iconName: 'book',
    bgColor: '#FFFFFF',
    color: '#120d26',
    fontWeight: 'fw-500',
    title: '25354.00',
    subTitle: 'Total Withdrawals',
    subTitleColor: 'rgba(0, 0, 0, 0.7)',
  },
];

const Transaction: React.FC = ({}) => {
  const graphData = {
    type: 'line',
    labels: instructorTransactionLineGraph?.map((e) => e?.day),
    datasets: [
      {
        label: '',
        data: instructorTransactionLineGraph?.map((e) => e?.courseVisit),
        borderColor: '#6B8E4E',
        backgroundColor: '#111',
        order: 1,
        borderWidth: 5,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 5,
      },
    ],
  };

  const instructorGraphLineOptions = {
    type: 'line',
    options: {
      elements: {
        point: {
          radius: 0,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        beginAtZero: true,
        min: 0,
      },
      y: {
        grid: {
          drawBorder: false,
          display: false,
        },
        beginAtZero: true,
        min: 0,
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          display: false,
        },
      },
    },
  };
  const columns: TableColumn<DataRow>[] = React.useMemo(
    () => [
      {
        name: 'Date',
        selector: ({ date }) => date,
      },
      {
        name: 'Method',
        selector: ({ method }) => method,
      },
      {
        name: 'Amount',
        selector: ({ amount }) => formatMoney(amount),
      },
      {
        name: 'Status',
        selector: ({ status }) => status,
      },
    ],
    []
  );
  const data = [
    {
      status: 'completed',
      method: 'Mastercards',
      amount: '$2000',
      date: '20/05/2018',
    },
    {
      status: 'pending',
      method: 'Mastercards',
      amount: '$2000',
      date: '20/05/2018',
    },
    {
      status: 'completed',
      method: 'Mastercards',
      amount: '$2000',
      date: '20/05/2018',
    },
    {
      status: 'pending',
      method: 'Mastercards',
      amount: '$2000',
      date: '20/05/2018',
    },
    {
      status: 'pending',
      method: 'Mastercards',
      amount: '$2000',
      date: '20/05/2018',
    },
  ];

  return (
    <AdminLayout>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {instructorTransactionData?.map((e) => (
              <div className="col-sm-4" key={e?.id}>
                <InstructorCard
                  title={e?.title}
                  subTitle={e?.subTitle}
                  iconName={e?.iconName}
                  bgColor={e?.bgColor}
                  color={e?.color}
                  fontWeight={e?.fontWeight}
                  variant="transaction"
                  subTitleColor={e?.subTitleColor}
                />
              </div>
            ))}
            <div className="col-sm-4"></div>
            <div className="col-sm-4"></div>
          </div>
        </div>
        <div className="col-md-4">Your Earnings</div>

        <div className="col-md-8">
          <Card>
            <Heading title="Selling Activities" />
            <p className="f-16 color-gray ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
              quo.
            </p>
            <div className="my-5">
              <Chart
                options={instructorGraphLineOptions}
                data={graphData}
                type="line"
              />
            </div>
          </Card>
        </div>
        <div className="col-md-4">Add your card</div>
        <div className="col-md-5 my-5">
          <Card>
            <Heading title="Withdraw your Money" />
          </Card>
        </div>
        <div className="col-md-7 my-5">
          <Card>
            <Heading title="Withdraw History" />
            {/* <Heading title=""> */}
            <CustomTable columns={columns} title="" data={data} />
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default React.memo(Transaction);
