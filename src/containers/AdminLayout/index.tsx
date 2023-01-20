import React from 'react';
import { ReactNode } from 'react';
import Header from '../Header';
import SideBar from '../SideBar';

interface Props {
  children: ReactNode;
  variant?: 'not-spacing';
}

const AdminLayout: React.FC<Props> = ({ children, variant }) => {
  const [responsive, setResponsive] = React.useState<boolean>(false);
  //   const currentYear = new Date().getFullYear();

  return (
    <>
      <Header responsive={responsive} />
      <SideBar responsive={responsive} setResponsive={setResponsive} />
      <div
        className={`${
          responsive ? 'responsive__dashboard__content' : 'dashboard__content'
        }`}
      >
        <div
          className={`${
            variant !== 'not-spacing' ? 'mx-4 pt-3' : 'overflow-hidden'
          }`}
        >
          {children}
        </div>
      </div>
      {/* <div className="footer__container">
        <div>
          <span className="me-2 footer__title">&#169; {currentYear}</span>
          <span className="footer__title__brand">- Viyarthi.</span>
          <span className="ms-1 text-capitalize">All right reserved</span>
        </div>
      </div> */}
    </>
  );
};

export default React.memo(AdminLayout);
