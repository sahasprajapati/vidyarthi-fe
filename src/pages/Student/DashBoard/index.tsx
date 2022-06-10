import React from 'react';
import MainHeading from 'components/MainHeading';
import { DashboardCard, DashBoardScrollContent } from 'components';
import { AdminLayout } from 'containers';
import { overviewData } from './dashboardData';
import Icon from 'assets/svg/Icon';

const StudentDashBoard: React.FC = () => {
  return (
    <AdminLayout>
      <MainHeading title="overview" />
      <div className="row my-3">
        {overviewData.map((e) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={e?.id}>
            <DashboardCard
              title={e?.title}
              bgColor={e?.bgColor}
              iconName={e?.iconName}
              money={e?.courseProgress.toString()}
            />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-lg-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          tenetur soluta aperiam expedita fugiat officiis minima, repellendus
          animi quia vel nesciunt veritatis explicabo ad! Hic accusantium
          possimus suscipit porro tenetur.
        </div>
        <div className="col-lg-6">
          <div className="b10 p-3">
            <DashBoardScrollContent title="Completed Courses">
              {Array(10)
                .fill('')
                .map((_, i) => (
                  <div className="flex-between" key={i}>
                    <div className="flex">
                      <img
                        src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/01170800/Free-Online-Courses-with-Certificates.jpg"
                        alt="completed-course-image"
                        className="student__completed__course__image"
                      />

                      <div className="ms-3">
                        <h6 className="f-24 text-capitalize mt-4">hello</h6>
                        <h6 className="student__completed__course__subtitle">
                          hello
                        </h6>
                        <p className="student__completed__course__time mb-2">
                          4h 41m <span>.</span> <span>djdfj</span>{' '}
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
