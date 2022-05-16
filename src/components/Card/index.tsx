import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return <div className="card__container position-relative">{children}</div>;
};

export default Card;
