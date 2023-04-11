import Icon from 'assets/svg/Icon';
import {
  Chart,
  CustomTable,
  DashboardCard,
  DashBoardScrollContent,
  Table,
} from 'components';
import Card from 'components/card';
import Heading from 'components/heading';
import MainHeading from 'components/main-heading';
import { AdminLayout } from 'containers';
import React, { useEffect, useState } from 'react';
import { TableColumn } from 'react-data-table-component';
import { Link } from 'react-router-dom';
import Service from 'setup/network';
import formatMoney from 'utils/formatMoney';
import { doughnutData, stackGraph } from './__chartdata__/chartData';

const AdminDashboard: React.FC = () => {
  const graphData = {
    type: 'bar',
    labels: stackGraph?.map((e) => e?.month),
    datasets: [
      {
        label: 'dataset1',
        data: stackGraph?.map((e) => e?.courseVisit),
        backgroundColor: '#6B8E4E',
        order: 1,
      },
      {
        label: 'dataset2',
        data: stackGraph?.map((e) => e?.courseSale),
        backgroundColor: '#92C9FB',
        order: 2,
      },
      {
        label: 'Line Dataset',
        data: stackGraph?.map((e) => e?.courseVisit),
        type: 'line' as any,
        borderColor: '#3F3F44',
        fill: true,
        order: 3,
      },
    ],
  };

  const columns = [
    {
      Header: 'Instructor Name',
      accessor: 'instructorName',
      Cell: (row: any) => (
        <div className="d-flex">
          <img
            src={row?.cell?.value?.imageUrl}
            alt="instructor-image"
            width={30}
            height={30}
            className="rounded-circle"
          />
          <p className="text-capitalize mt-.5 ms-2">{row?.cell?.value?.name}</p>
        </div>
      ),
    },
    {
      Header: 'Date',
      accessor: 'year',
    },
    {
      Header: 'Payment Method',
      accessor: 'payementMethod',
    },
    {
      Header: 'Amount',
      accessor: 'amount',
      Cell: (row: any) => (
        <p className="color-primary f-16 fw-500"> $ {row?.cell?.value}</p>
      ),
    },
    {
      Header: 'Action',
      Cell: ({ row, flatRows }: any) => (
        <div className="">
          <div className="position-relative">
            <Icon name="dots" height={15} width={15} />
            <select name="" id="" className="table-select">
              <option value="" className="course__options__dropdown__list">
                View course
              </option>
              <option value="" className="course__options__dropdown__list">
                View course
              </option>
              <option value="" className="course__options__dropdown__list">
                View course
              </option>
            </select>
          </div>
        </div>
      ),
    },
  ];
  // feedback column
  const feedBackColumns = [
    {
      Header: 'S.N',

      Cell: ({ row, flatRows }: any) => <p>0{flatRows?.indexOf(row) + 1} </p>,
    },
    {
      Header: 'Name',
      accessor: 'name',
      Cell: (row: any) => (
        <div className="d-flex">
          <img
            src={row?.cell?.value?.imageUrl}
            alt="instructor-image"
            width={30}
            height={30}
            className="rounded-circle"
          />
          <p className="text-capitalize mt-.5 ms-2">{row?.cell?.value?.name}</p>
        </div>
      ),
    },
    {
      Header: 'Email Address',
      accessor: 'email',
      Cell: (row: any) => <p className="f-16">{row?.cell?.value}</p>,
    },
    {
      Header: 'Date',
      accessor: 'date',
      Cell: (row: any) => (
        <p className="f-16 color-light-black">{row?.cell?.value}</p>
      ),
    },
    {
      Header: 'title',
      accessor: 'title',
      Cell: (row: any) => (
        <p className="f-16 fw-500">{row?.cell?.value?.slice(0, 19)}...</p>
      ),
    },
    {
      Header: 'Rating',
      accessor: 'rating',
      Cell: (row: any) => {
        return (
          <div className="flex ">
            {Array(Math.round(4.5))
              .fill('')
              .map((_, idx) => (
                <Icon name="star" width={10} height={10} key={idx} />
              ))}
          </div>
        );
      },
    },
    {
      Header: 'Action',
      Cell: ({ row, flatRows }: any) => (
        <div className="">
          <div className="position-relative">
            <Icon name="dots" height={15} width={15} />
            <select name="" id="" className="table-select">
              <option value="" className="course__options__dropdown__list">
                View course
              </option>
              <option value="" className="course__options__dropdown__list">
                View course
              </option>
              <option value="" className="course__options__dropdown__list">
                View course
              </option>
            </select>
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      instructorName: {
        name: 'prashant khanal',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      director: 'prashant',
      payementMethod: 'Mastercards',
      amount: '2000',
      year: '20/05/2018',
    },
    {
      instructorName: {
        name: 'prashant khanal',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      director: 'prashant',
      payementMethod: 'Mastercards',
      amount: '2000',
      year: '20/05/2018',
    },
    {
      instructorName: {
        name: 'prashant khanal',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      director: 'prashant',
      payementMethod: 'Mastercards',
      amount: '2000',
      year: '20/05/2018',
    },
    {
      instructorName: {
        name: 'prashant khanal',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      director: 'prashant',
      payementMethod: 'Mastercards',
      amount: '2000',
      year: '20/05/2018',
    },
    {
      instructorName: {
        name: 'prashant khanal',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      director: 'prashant',
      payementMethod: 'Mastercards',
      amount: '2000',
      year: '20/05/2018',
    },
  ];
  const feedBackData = [
    {
      name: {
        name: 'prashant khanal',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      email: 'prashantkhanal32@gmail.com',
      title: 'how do i know what should i choose',
      rating: 4.5,
      date: '20/05/2018',
    },
    {
      instructorName: {
        name: 'prashant khanal',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      email: 'prashantkhanal32@gmail.com',
      title: 'how do i know what should i choose',
      rating: 4.5,
      date: '20/05/2018',
    },
    {
      instructorName: {
        name: 'prashant khanal',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      email: 'prashantkhanal32@gmail.com',
      title: 'how do i know what should i choose',
      rating: 4.5,
      date: '20/05/2018',
    },
    {
      instructorName: {
        name: 'prashant khanal',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      email: 'prashantkhanal32@gmail.com',
      title: 'how do i know what should i choose',
      rating: 4.5,
      date: '20/05/2018',
    },
    {
      instructorName: {
        name: 'prashant khanal',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      email: 'prashantkhanal32@gmail.com',
      title: 'how do i know what should i choose',
      rating: 4.5,
      date: '20/05/2018',
    },
  ];

  // const overviewData = [
  //   {
  //     id: 0,
  //     total: '2000',
  //     title: 'total students',
  //     iconName: 'menu',
  //     bgColor: 'red',
  //   },

  //   {
  //     id: 1,
  //     total: '49832',
  //     title: 'total instructor',
  //     iconName: 'menu',
  //     bgColor: 'red',
  //   },
  //   {
  //     id: 2,
  //     total: '2000',
  //     title: 'revenue',
  //     iconName: 'menu',
  //     bgColor: 'red',
  //   },
  //   {
  //     id: 3,
  //     total: '2000',
  //     title: 'total enrolled courses',
  //     iconName: 'menu',
  //     bgColor: 'red',
  //   },
  // ];

  //   stacked chart options

  const options = {
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

  // const bestInstructor = [
  //   {
  //     title: 'Dennis Guzman',
  //     image:
  //       'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
  //     course: '5 Design Courses',
  //     students: '12k Students',
  //   },
  //   {
  //     title: 'Dennis Guzman',
  //     image:
  //       'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
  //     course: '5 Design Courses',
  //     students: '12k Students',
  //   },
  //   {
  //     title: 'Dennis Guzman',
  //     image:
  //       'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
  //     course: '5 Design Courses',
  //     students: '12k Students',
  //   },
  //   {
  //     title: 'Dennis Guzman',
  //     image:
  //       'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
  //     course: '5 Design Courses',
  //     students: '12k Students',
  //   },
  //   {
  //     title: 'Dennis Guzman',
  //     image:
  //       'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
  //     course: '5 Design Courses',
  //     students: '12k Students',
  //   },
  //   {
  //     title: 'Dennis Guzman',
  //     image:
  //       'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
  //     course: '5 Design Courses',
  //     students: '12k Students',
  //   },
  //   {
  //     title: 'Dennis Guzman',
  //     image:
  //       'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
  //     course: '5 Design Courses',
  //     students: '12k Students',
  //   },
  //   {
  //     title: 'Dennis Guzman',
  //     image:
  //       'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
  //     course: '5 Design Courses',
  //     students: '12k Students',
  //   },
  //   {
  //     title: 'Dennis Guzman',
  //     image:
  //       'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
  //     course: '5 Design Courses',
  //     students: '12k Students',
  //   },
  //   {
  //     title: 'Dennis Guzman',
  //     image:
  //       'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
  //     course: '5 Design Courses',
  //     students: '12k Students',
  //   },
  //   {
  //     title: 'Dennis Guzman',
  //     image:
  //       'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
  //     course: '5 Design Courses',
  //     students: '12k Students',
  //   },
  //   {
  //     title: 'Dennis Guzman',
  //     image:
  //       'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
  //     course: '5 Design Courses',
  //     students: '12k Students',
  //   },
  //   {
  //     title: 'Dennis Guzman',
  //     image:
  //       'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
  //     course: '5 Design Courses',
  //     students: '12k Students',
  //   },
  //   {
  //     title: 'Dennis Guzman',
  //     image:
  //       'https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg',
  //     course: '5 Design Courses',
  //     students: '12k Students',
  //   },
  // ];

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

  const [dashboard, setDashboard] = useState({});
  const [bestInstructor, setBestInstructor] = useState<any[]>([]);
  const [overviewData, setOverviewData] = useState<any[]>([]);
  useEffect(() => {
    Service.get('profile/dashboard').then((res) => {
      console.log('Profile', res?.data?.data?.dashboard);
      const dashboard = res.data?.data?.dashboard;
      setDashboard(dashboard);
      setBestInstructor(
        dashboard?.popularTeacher?.map((teacher: any) => {
          console.log('Teacher', teacher);
          const teacherStudents = teacher?.teacherCourses?.reduce(
            (sum: number, course: any) => {
              return sum + (course?._count?.coursesOnStudents ?? 0);
            },
            0
          );
          console.log('teacherStudents', teacherStudents);

          return {
            title: teacher?.name ?? '',
            image: teacher?.image ?? '',
            course: `${teacher?._count?.teacherCourses ?? 0} Design Courses`,
            students: `${teacherStudents} Students`,
          };
        })
      );
      const instructor = dashboard?.roledUsers.find((user: any) => {
        return user.name === 'instructor';
      });

      const student = dashboard?.roledUsers.find((user: any) => {
        return user.name === 'student';
      });

      const admin = dashboard?.roledUsers.find((user: any) => {
        return user.name === 'student';
      });
      setOverviewData([
        {
          id: 0,
          total: (student?.count ?? '0') + '',
          title: 'total students',
          iconName: 'menu',
          bgColor: 'red',
        },

        {
          id: 1,
          total: (instructor?.count ?? '0') + '',
          title: 'total instructor',
          iconName: 'menu',
          bgColor: 'red',
        },
        // {
        //   id: 2,
        //   total: '2000',
        //   title: 'revenue',
        //   iconName: 'menu',
        //   bgColor: 'red',
        // },
        {
          id: 3,
          total: (dashboard?.courses ?? '0') + '',
          title: 'total enrolled courses',
          iconName: 'menu',
          bgColor: 'red',
        },
      ]);
    });
  }, []);
  return (
    <AdminLayout>
      <div className="container-fluid">
        <MainHeading title="overview" />
        <div className="flex "></div>
        <div className="row">
          {overviewData.map((e) => (
            <div
              className="col-xl-3 col-lg-6 col-md-6  col-sm-6 col-xs-12 mt-4"
              key={e?.id}
            >
              <DashboardCard
                title={e?.title}
                bgColor={e?.bgColor}
                iconName={e?.iconName}
                money={e?.total}
              />
            </div>
          ))}
        </div>
        {/* Sales chart */}
        <div className="row my-5">
          {/* <div className="col-lg-7 col-md-12">
            <Card>
              <Chart
                data={graphData}
                options={options}
                type="bar"
                height={200}
              />
            </Card>
          </div> */}
          <div className="col-lg-5 col-md-12">
            <Card>
              <DashBoardScrollContent title="Best Instructor">
                {bestInstructor?.map((e, i) => (
                  <div className="flex-between py-3" key={i}>
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
              </DashBoardScrollContent>
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
              <div className="flex mt-3">
                <div className="dashboard__topsales">
                  <h6 className="dashboard__topsales__title">
                    {formatMoney('2000')}
                  </h6>
                  <h6 className="dashboard__topsales__subtitle">
                    weekly report
                  </h6>
                </div>
                <div className="dashboard__topsales">
                  <h6 className="dashboard__topsales__title">
                    {formatMoney('2000')}
                  </h6>
                  <h6 className="dashboard__topsales__subtitle">
                    weekly report
                  </h6>
                </div>
                <div className="dashboard__topsales">
                  <h6 className="dashboard__topsales__title">
                    {formatMoney('2000')}
                  </h6>
                  <h6 className="dashboard__topsales__subtitle">
                    weekly report
                  </h6>
                </div>
              </div>
              <Chart data={doughnut} type="doughnut" options={doughnutConfig} />
            </Card>
          </div>
          {/* <div className="col-lg-7 col-md-12">
            <Card>
              <div className="flex-between mb-4 mt-2">
                <Heading title="latest withdraw" />
                <Link to="/">View all</Link>
              </div>
              <Table
                tableColumn={columns}
                tableData={data}
                noPagination
                notPadding
              />
            </Card>
          </div> */}
        </div>
        {/* <div className="row my-5">
          <div className="col-12 mb-4">
            <Card>
              <Heading title="Feedback" />
              <Table
                tableColumn={feedBackColumns}
                tableData={feedBackData}
                noPagination
                notPadding
              />
            </Card>
          </div>
        </div> */}
      </div>
    </AdminLayout>
  );
};

export default React.memo(AdminDashboard);
