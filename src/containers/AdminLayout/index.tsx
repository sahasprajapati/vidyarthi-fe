import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar';

const AdminLayout: React.FC = () => {
  const [responsive, setResponsive] = React.useState<boolean>(false);
  return (
    <>
      <Header />
      <SideBar responsive={responsive} setResponsive={setResponsive} />
    </>
  );
};

export default React.memo(AdminLayout);
