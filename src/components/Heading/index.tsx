import React from 'react';

interface Props {
  title: string | number;
}

const Heading: React.FC<Props> = ({ title }) => (
  <h6 className="heading">{title}</h6>
);

export default React.memo(Heading);
