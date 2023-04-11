import React, { useEffect, useState } from 'react';
import MainHeading from 'components/main-heading';
import { DashboardCard, DashBoardScrollContent } from 'components';
import { AdminLayout } from 'containers';
import { overviewData } from './dashboardData';
import Icon from 'assets/svg/Icon';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Service from 'setup/network';

const StudentDashBoard: React.FC = () => {
  const [overviewData, setOverviewData] = useState<any[]>([]);
  const [completedCourses, setCompletedCourses] = useState<any[]>([]);
  useEffect(() => {
    Service.get('profile/dashboard').then((res) => {
      const dashboard = res?.data?.data?.dashboard;
      setCompletedCourses(res?.data?.data?.completedCourses);
      setOverviewData([
        {
          id: 0,
          courseProgress: dashboard?.courseInProgress,
          bgColor: '#72BFB2',
          iconName: 'menu',
          title: 'Course in progress',
        },
        {
          id: 1,
          courseProgress: dashboard?.completedCourseCount,
          bgColor: '#779CE6',
          iconName: 'menu',
          title: 'Courses Competed',
        },
        {
          id: 2,
          courseProgress: dashboard?.ownedCourse,
          bgColor: '#EE8059',
          iconName: 'menu',
          title: 'Courses Owned',
        },
        {
          id: 3,
          courseProgress: dashboard?.totalAchievement,
          bgColor: '#EB6077',
          iconName: 'menu',
          title: 'Certificates achivements',
        },
      ]);
    });
  }, []);
  return (
    <AdminLayout>
      <MainHeading title="overview" />
      <div className="row">
        {overviewData?.map((e) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5 mt-2"
            key={e?.id}
          >
            <DashboardCard
              title={e?.title}
              bgColor={e?.bgColor}
              iconName={e?.iconName}
              money={e?.courseProgress.toString()}
            />
          </div>
        ))}

        <div className="col-lg-6">
          {/* <span> {!textLength ? displayText : data} </span>{' '}
          <span className="pointer" onClick={() => setTextLength(!textLength)}>
            {!textLength ? '...Read More' : '...Read Less'}
          </span> */}
          <Calendar />
          {/* {data.length > 20 ? 'read more' : null} */}
        </div>
        <div className="col-lg-6">
          <div className="b10 p-3">
            <DashBoardScrollContent title="Completed Courses">
              {completedCourses?.map((course, i) => (
                <div className="flex-between" key={i}>
                  <div className="flex">
                    <img
                      src={course?.thumbnail}
                      alt="completed-course-image"
                      className="student__completed__course__image"
                    />

                    <div className="ms-3">
                      <div className="pb-2">
                        <h6 className="f-24 text-capitalize mt-4 m-0 p-0">
                          {course?.title}
                        </h6>
                        <h6 className="student__completed__course__subtitle m-0 p-0">
                          {course?.subtitle}
                        </h6>
                      </div>
                      <p className="student__completed__course__time mb-4">
                        ${course?.price} <span>.</span>{' '}
                        <span>{course?.level}</span>{' '}
                      </p>
                    </div>
                  </div>
                  <div className="me-3 pointer">
                    <Icon name="dots" />
                  </div>
                </div>
              ))}
            </DashBoardScrollContent>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default React.memo(StudentDashBoard);
