import React from 'react';
import MainHeading from 'components/MainHeading';
import { DashboardCard } from 'components';
import { AdminLayout } from 'containers';
import { overviewData } from './dashboardData';

const StudentDashBoard = () => {
  return (
    <AdminLayout>
      <MainHeading title="overview" />
      <div className="row">
        {overviewData.map((e) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2" key={e?.id}>
            <DashboardCard
              title={e?.title}
              bgColor={e?.bgColor}
              iconName={e?.iconName}
              money={e?.courseProgress.toString()}
            />
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default StudentDashBoard;
