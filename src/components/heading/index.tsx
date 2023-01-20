import React from 'react';

interface Props {
  title: string | number;
  className?: string;
}

const Heading: React.FC<Props> = ({ title, className }) => (
  <h6 className={`${className} heading`}>{title}</h6>
);

export default React.memo(Heading);
