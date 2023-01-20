import React from 'react';
import MainHeading from 'components/main-heading';
import { AdminLayout } from 'containers';
import Icon from 'assets/svg/Icon';
import { Chart, InstructorCard } from 'components';
import {
  doughnutDataInstructor,
  stackGraph,
} from 'pages/admin/dashboard/__chartdata__/chartData';
import Card from 'components/card';
import Heading from 'components/heading';
import formatMoney from 'utils/formatMoney';
import Feedback from './Feedback';

interface IProps {}

const TeacherDashboard: React.FC<IProps> = ({}) => {
  const [showModal, setShowModal] = React.useState(false);
  const handleModal = () => setShowModal(!showModal);
  const graphData = {
    type: 'bar',
    labels: stackGraph?.map((e) => e?.month),
    datasets: [
      {
        label: 'dataset1',
        data: stackGraph?.map((e) => e?.courseVisit),
        backgroundColor: '#6B8E4E',
        order: 1,
        borderRadius: 20,
      },
      {
        label: 'dataset2',
        data: stackGraph?.map((e) => e?.courseSale),
        backgroundColor: '#92C9FB',
        order: 2,
        borderRadius: 20,
      },
    ],
  };
  // total students data
  const totalStudentData = {
    type: 'line',
    labels: stackGraph?.map((e) => e?.month),
    datasets: [
      {
        label: '',
        data: stackGraph?.map((e) => e?.courseVisit),
        backgroundColor: '#6B8E4E',
        order: 1,
      },
    ],
  };
  const instructorLineData = {
    type: 'line',
    labels: stackGraph?.map((e) => e?.month),
    datasets: [
      {
        label: '',
        data: stackGraph?.map((e) => e?.courseVisit),
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
  const options = {
    type: 'bar',
    cornerRadius: 10,

    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
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
  const totalStudentsOptions = {
    type: 'bar',
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
          display: false,
        },
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
          drawOnChartArea: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
          display: false,
        },
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

  const instructorCardData = [
    {
      id: 0,
      title: formatMoney('30000'),
      subtitle: 'Total Course',
      bgColor: '#92C9FB',
      iconName: 'book',
      fontWeight: 'fw-700',
      color: 'color-white',
    },
    {
      id: 1,
      title: formatMoney('50000'),
      subtitle: 'Course Content',
      bgColor: '#787878',
      iconName: 'rectangle',
      fontWeight: 'fw-700',
      color: 'color-white',
    },
    {
      id: 1,
      title: formatMoney('80000'),
      subtitle: 'Review',
      bgColor: '#6B8E4E',
      iconName: 'like',
      fontWeight: 'fw-700',
      color: 'color-white',
    },
  ];

  // Instuctor doughnutConfig

  const doughnutConfig = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        align: 'start',
        labels: {
          usePointStyle: true,
          color: '#333333',
          padding: 30,
          textAlign: 'left',
          font: {
            size: 16,
            weight: 500,
          },
        },
      },
    },
  };
  const doughnut = {
    labels: doughnutDataInstructor.map((e) => e?.label),
    datasets: [
      {
        data: doughnutDataInstructor.map((e) => e?.data),
        backgroundColor: doughnutDataInstructor.map((e) => e?.color),
      },
    ],
  };

  return (
    <AdminLayout>
      <div className="row">
        <Heading title="Overview" />
        <div className="col-md-8">
          <div className="row">
            <div className="col-sm-4 instructor__graph__card">
              <Card>
                <div className="instructor__graph__card">
                  <Heading title="Total Students" />
                  <div className="my-4">
                    <Chart
                      type="bar"
                      data={totalStudentData}
                      options={totalStudentsOptions}
                    />
                  </div>
                  <div className="flex flex-wrap">
                    <h6 className="fw-600 fs-18 color-secondary me-3 mt-2">
                      12.993
                    </h6>
                    <span className="color-light-purple fw-700 fs-10">
                      5.8%
                    </span>
                    <span className="fs-10 color-gray ms-1">
                      than last year
                    </span>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-sm-4">
              <Card>
                <div className="instructor__graph__card">
                  <Heading title="Course" />
                  <div className="flex my-2 flex-wrap">
                    <div className="width-32 border-8 bg-primary-color me-2 flex-center">
                      <Icon name="up-arrow" fill="white" />
                    </div>
                    <h6 className="fw-700 fs-16 mt-2 me-2">100</h6>
                    <span className="fs-10 me-1 color-primary">+15% </span>
                    <span className="color-gray fs-10"> than last year</span>
                  </div>
                  <div className="my-4">
                    <Chart
                      type="line"
                      data={instructorLineData}
                      options={instructorGraphLineOptions}
                    />
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-sm-4 instructor__graph__card">
              <Card>
                <div className="instructor__graph__card">
                  <Heading title="Earning" />
                  <div className="my-4">
                    <Chart
                      type="line"
                      data={instructorLineData}
                      options={instructorGraphLineOptions}
                    />
                  </div>
                </div>
              </Card>
            </div>
            {instructorCardData?.map((e) => (
              <div className="col-sm-4 instructor__graph__card" key={e?.id}>
                <InstructorCard
                  title={e?.title}
                  subTitle={e?.subtitle}
                  bgColor={e?.bgColor}
                  fontWeight={e?.fontWeight}
                  iconName={e?.iconName}
                  color={e?.color}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <Card>
            <Heading title="Popular Courses" />
            <div className="my-4">
              <Chart type="doughnut" data={doughnut} options={doughnutConfig} />
            </div>
          </Card>
        </div>
        <div className="flex-between">
          <MainHeading title="Course Statistics" />
          <div className=" course__filter__container flex-between ">
            <select
              name=""
              id=""
              className="form-control shadow-none bg-transparent outline-none border-none"
            >
              <option value="hhd">Weekly</option>
              <option value="dfd">djkjf</option>
              <option value="dfjfkj">fdfdkj</option>
            </select>
            <div className="me-2">
              <Icon name="down-arrow" />
            </div>
          </div>
        </div>
        <div className="col-md-8 my-5">
          <Card>
            <div className="instructor__bottom__graph__card">
              <Chart
                type="bar"
                data={graphData}
                options={options}
                height={250}
              />
            </div>
          </Card>
        </div>
        <div className="col-md-4 my-5">
          {/* course sales */}
          <div className="mb-4">
            <Card>
              <Heading title="Top Sales" />
              {Array(3)
                .fill('')
                .map((_, i) => (
                  <div className="flex-between my-4" key={i}>
                    <div className="flex">
                      <div className="me-3 bg-primary-color p-3 b16 opacity-1">
                        <div className="">
                          <Icon
                            name="book"
                            fill="black"
                            width={32}
                            height={32}
                          />
                        </div>
                      </div>
                      <div className="">
                        <p className="p-0 m-0 color-gray f-14">UI Design</p>
                        <h6 className="mt-1 fs-18 fw-600">12.3455</h6>
                      </div>
                    </div>
                    <div className="">grpaj</div>
                  </div>
                ))}
            </Card>
          </div>
          {/* feedback section */}
          <Card>
            <Heading title="Feedback Form" />
            <p className="my-4">
              Any Issues regarding the course or give some feedback.
              <span
                className="text-decoration-underline primary-color ms-2 pointer"
                onClick={handleModal}
              >
                Click here
              </span>
            </p>
          </Card>
        </div>
      </div>
      {/* feedbaack form */}
      {showModal && <Feedback handleModal={handleModal} />}
    </AdminLayout>
  );
};

export default React.memo(TeacherDashboard);
