import React from 'react';

interface Props {
  title: string;
}

const MainHeading: React.FC<Props> = ({ title }) => (
  <h4 className="main__heading my-2">{title}</h4>
);

export default React.memo(MainHeading);
