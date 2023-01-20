import React from 'react';
import MainHeading from 'components/main-heading';

interface Props {
  title: string;
  children: React.ReactNode;
}

const DashBoardScrollContent: React.FC<Props> = ({ title, children }) => {
  return (
    <React.Fragment>
      <MainHeading title={title} />
      <div className="instructor__container">{children}</div>
    </React.Fragment>
  );
};

export default React.memo(DashBoardScrollContent);
