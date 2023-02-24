import Icon from 'assets/svg/Icon';
import { CartCard, CourseCard, PaymentMethod } from 'components';
import AchievementCard from 'components/course-card/achievement-card';
import MainHeading from 'components/main-heading';
import Modal from 'components/modal';
import { AdminLayout } from 'containers';
import React, { useEffect, useState } from 'react';
import Service from 'setup/network';

const StudentAchievements = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [achievements, setAchievements] = useState<
    {
      image: string;
      coursesOnStudents: {
        course: any;
      };
    }[]
  >([]);

  useEffect(() => {
    Service.get('/achievement/').then((res) => {
      console.log('res', res?.data?.data);
      setAchievements(res?.data?.data);
    });
  }, []);
  return (
    <AdminLayout>
      <>
        <div className="flex-between flex-wrap mb-3">
          <MainHeading
            title={`Achievements & Certificates (${achievements?.length ?? 0})`}
          />
          <div className="flex mt-3">
            <label htmlFor="" className="label__course__search mb-1 me-2 ">
              Sort <span>by: </span>
            </label>
            <div className="flex-between course__filter__container p-0 m-0">
              <select
                name=""
                id=""
                className="form-control shadow-none bg-transparent outline-none border-none p-2"
              >
                <option value="">All Type</option>
                <option value="hhd">djf</option>
              </select>
              <div className="me-2">
                <Icon name="down-arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          {achievements?.length > 0 &&
            achievements?.map((achievement, i) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3 " key={i}>
                {/* <CourseCard
                  types="normal"
                  title={achievement?.coursesOnStudents?.course?.title}
                  courseTag={achievement?.coursesOnStudents?.course?.level}
                  imageUrl="https://images.unsplash.com/photo-1557804483-ef3ae78eca57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
                /> */}
                <AchievementCard
                  types="normal"
                  title={achievement?.coursesOnStudents?.course?.title}
                  courseTag={achievement?.coursesOnStudents?.course?.level}
                  imageUrl={achievement?.image}
                />
              </div>
            ))}
        </div>
      </>
    </AdminLayout>
  );
};

export default React.memo(StudentAchievements);
