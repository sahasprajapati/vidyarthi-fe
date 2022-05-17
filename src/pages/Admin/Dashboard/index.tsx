/* eslint-disable no-unused-vars */
import { OvalFour, OvalOne, OvalThree, OvalTwo } from 'assets/images';
import Icon from 'assets/svg/Icon';
import { Chart, CustomTable } from 'components';
import Card from 'components/Card';
import Heading from 'components/Heading';
import MainHeading from 'components/MainHeading';
import { AdminLayout } from 'containers';
import React from 'react';
import { TableColumn } from 'react-data-table-component';
import { Link } from 'react-router-dom';
import formatMoney from 'utils/formatMoney';
import { doughnutData, stackGraph } from './__chartdata__/chartData';

interface DataRow {
  title: string;
  director: string;
  year: string;
  payementMethod: string;
  amount: string | number;
}

const AdminDashboard: React.FC = () => {
  const graphData = {
    type: 'bar',
    labels: stackGraph.map((e) => e?.month),
    datasets: [
      {
        label: 'dataset1',
        data: stackGraph.map((e) => e?.courseVisit),
        backgroundColor: '#6B8E4E',
        order: 1,
      },
      {
        label: 'dataset2',
        data: stackGraph.map((e) => e?.courseSale),
        backgroundColor: '#92C9FB',
        order: 2,
      },
      {
        label: 'Line Dataset',
        data: stackGraph.map((e) => e?.courseVisit),
        type: 'line' as any,
        borderColor: '#3F3F44',
        fill: true,
        order: 3,
      },
    ],
  };

  const columns: TableColumn<DataRow>[] = React.useMemo(
    () => [
      {
        name: 'Instructor Name',
        selector: ({ title }) => title,
      },
      {
        name: 'Date',
        selector: ({ year }) => year,
      },
      {
        name: 'Payment Method',
        selector: ({ payementMethod }) => payementMethod,
      },
      {
        name: 'Amount',
        selector: ({ amount }) => formatMoney(amount),
      },
    ],
    []
  );

  const data = [
    {
      title: 'Ricardo Michael',
      director: 'prashant',
      payementMethod: 'Mastercards',
      amount: '$2000',
      year: '20/05/2018',
    },
    {
      title: 'Ricardo Michael',
      director: 'prashant',
      payementMethod: 'Mastercards',
      amount: '$2000',
      year: '20/05/2018',
    },
    {
      title: 'Ricardo Michael',
      director: 'prashant',
      payementMethod: 'Mastercards',
      amount: '$2000',
      year: '20/05/2018',
    },
    {
      title: 'Ricardo Michael',
      director: 'prashant',
      payementMethod: 'Mastercards',
      amount: '$2000',
      year: '20/05/2018',
    },
    {
      title: 'Ricardo Michael',
      director: 'prashant',
      payementMethod: 'Mastercards',
      amount: '$2000',
      year: '20/05/2018',
    },
  ];

  const overviewData = [
    { id: 0, total: '2000', title: 'total students', image: OvalOne },

    {
      id: 1,
      total: '49832',
      title: 'total instructor',
      image: OvalTwo,
    },
    { id: 2, total: '2000', title: 'revenue', image: OvalThree },
    { id: 3, total: '2000', title: 'total enrolled courses', image: OvalFour },
  ];

  //   stacked chart options

  const options = {
    responsive: true,
    type: 'bar',
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          boxHeight: 9.93,
          title: {
            color: 'red',
          },
          font: {
            size: 14,
          },
        },
        // title: {
        //   color: '#',
        //   font: 14,
        //   text: 'hello',
        // },
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
      tooltip: {
        backgroundColor: '#FFFFFF',
        titleColor: '#3F3F44',
        titleFont: '12px',
        padding: 20,
        intersect: true,
        titleSpacing: 4,
        titleMarginBottom: 10,
      },
    },
  };
  const doughnutConfig = {
    responsive: true,
    cutout: '75%',
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          color: '#333333',
          padding: 30,
          font: {
            size: 12,
            weight: 500,
          },
        },
      },
    },
  };

  //   Best Instructor data

  const bestInstructor = [
    {
      title: 'Dennis Guzman',
      image:
        'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
      course: '5 Design Courses',
      students: '12k Students',
    },
    {
      title: 'Dennis Guzman',
      image:
        'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
      course: '5 Design Courses',
      students: '12k Students',
    },
    {
      title: 'Dennis Guzman',
      image:
        'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
      course: '5 Design Courses',
      students: '12k Students',
    },
    {
      title: 'Dennis Guzman',
      image:
        'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
      course: '5 Design Courses',
      students: '12k Students',
    },
    {
      title: 'Dennis Guzman',
      image:
        'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
      course: '5 Design Courses',
      students: '12k Students',
    },
    {
      title: 'Dennis Guzman',
      image:
        'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
      course: '5 Design Courses',
      students: '12k Students',
    },
    {
      title: 'Dennis Guzman',
      image:
        'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
      course: '5 Design Courses',
      students: '12k Students',
    },
    {
      title: 'Dennis Guzman',
      image:
        'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
      course: '5 Design Courses',
      students: '12k Students',
    },
    {
      title: 'Dennis Guzman',
      image:
        'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
      course: '5 Design Courses',
      students: '12k Students',
    },
    {
      title: 'Dennis Guzman',
      image:
        'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
      course: '5 Design Courses',
      students: '12k Students',
    },
    {
      title: 'Dennis Guzman',
      image:
        'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
      course: '5 Design Courses',
      students: '12k Students',
    },
    {
      title: 'Dennis Guzman',
      image:
        'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
      course: '5 Design Courses',
      students: '12k Students',
    },
    {
      title: 'Dennis Guzman',
      image:
        'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
      course: '5 Design Courses',
      students: '12k Students',
    },
    {
      title: 'Dennis Guzman',
      image:
        'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
      course: '5 Design Courses',
      students: '12k Students',
    },
  ];

  // Doughnut Data

  const doughnut = {
    labels: doughnutData.map((e) => e?.label),
    datasets: [
      {
        data: doughnutData.map((e) => e?.data),
        backgroundColor: doughnutData.map((e) => e?.color),
      },
    ],
  };

  return (
    <AdminLayout>
      <div className="container-fluid">
        <MainHeading title="overview" />
        <div className="row">
          {overviewData.map((e) => (
            <div
              className="col-xl-3 col-lg-6 col-md-6  col-sm-6 col-xs-12 mt-4"
              key={e?.id}
            >
              <Card>
                <div className="dashboard__card">
                  <div className="flex-between ">
                    <div className="flex-col">
                      <Heading title={formatMoney(e?.total)} />
                      <span className="dashboard__card__title">{e?.title}</span>
                    </div>
                    <div className="">
                      <div className="position-absolute top-0 end-0">
                        <img
                          src={e?.image}
                          alt="logo"
                          height={80}
                          className="dashboard__card__image"
                        />
                      </div>
                      <div className="">
                        <Icon name="dashboard" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        {/* Sales chart */}
        <div className="row my-5">
          <div className="col-lg-7 col-md-12">
            <Card>
              <Chart data={graphData} options={options} type="bar" />
            </Card>
          </div>
          <div className="col-lg-5 col-md-12">
            <Card>
              <MainHeading title="Best Instructor" />
              <div className="instructor__container">
                {bestInstructor.map((e, i) => (
                  <div className="flex-between py-3  " key={i}>
                    <div className="flex">
                      <img
                        src={e?.image}
                        alt="teacher_image"
                        className="dashboard__instructor__image"
                      />
                      <div className="flex-col">
                        <h6 className="dashboard__instructor__title">
                          {e?.title}
                        </h6>
                        <span className="dashboard__instructor__sub__title">
                          {e?.course}
                        </span>
                      </div>
                    </div>
                    <div className="me-3">
                      <h6 className="dashboard__instructor__teacher">
                        {e?.students}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
        {/*  */}
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <Card>
              <div className="flex-between">
                <Heading title="top sales" />
                <Link to="/">View all</Link>
              </div>
              <div className="flex-between mt-3">
                <div className="dashboard__topsales">
                  <h6 className="dashboard__topsales__title">
                    {formatMoney('2000')}{' '}
                  </h6>
                  <h6 className="dashboard__topsales__subtitle">
                    weekly report
                  </h6>
                </div>
                <div className="dashboard__topsales">
                  <h6 className="dashboard__topsales__title">
                    {formatMoney('2000')}{' '}
                  </h6>
                  <h6 className="dashboard__topsales__subtitle">
                    weekly report
                  </h6>
                </div>
                <div className="dashboard__topsales">
                  <h6 className="dashboard__topsales__title">
                    {formatMoney('2000')}{' '}
                  </h6>
                  <h6 className="dashboard__topsales__subtitle">
                    weekly report
                  </h6>
                </div>
              </div>
              <Chart
                data={doughnut}
                type="doughnut"
                options={doughnutConfig}
                width={158}
                height={158}
              />
            </Card>
          </div>
          <div className="col-lg-7 col-md-12">
            <Card>
              <CustomTable
                columns={columns}
                title="Latest Withdraw"
                data={data}
              />
            </Card>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12 mb-4">
            <Card>
              <CustomTable columns={columns} title="Feedback" data={data} />
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default React.memo(AdminDashboard);
