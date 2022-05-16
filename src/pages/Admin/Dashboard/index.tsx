import { OvalFour, OvalOne, OvalThree, OvalTwo } from 'assets/images';
import Icon from 'assets/svg/Icon';
import BarChartComponent from 'components/BarChart';
import Card from 'components/Card';
import Heading from 'components/Heading';
import MainHeading from 'components/MainHeading';
import { AdminLayout } from 'containers';
import React from 'react';
import formatMoney from 'utils/formatMoney';
import { stackGraph } from './__chartdata__/chartData';

const AdminDashboard: React.FC = () => {
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
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
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
          <div className="col-lg-8 col-md-12">
            <h5>helolo</h5>
            <BarChartComponent options={options} data={stackGraph} />
          </div>
          <div className="col-lg-4 col-md-12">
            <h5>helolo</h5>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default React.memo(AdminDashboard);
