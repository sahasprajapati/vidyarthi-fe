import React from 'react';
import { useLocation } from 'react-router-dom';

interface IProps {}

const ScrollTopTop: React.FC<IProps> = ({}) => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default React.memo(ScrollTopTop);
