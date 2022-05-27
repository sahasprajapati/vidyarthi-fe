import React from 'react';
import { NavBar } from 'components';

const Home: React.FC = () => {
  return (
    <div className="home__container">
      <div className="container ">
        <NavBar />
        <div className="row"></div>
      </div>
    </div>
  );
};

export default React.memo(Home);
