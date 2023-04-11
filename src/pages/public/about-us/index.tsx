import { NavBar } from 'components';
import Heading from 'components/heading';
import { Footer } from 'containers';
import React from 'react';

interface IProps {}

const AboutUs: React.FC<IProps> = ({}) => {
  return (
    <React.Fragment>
      <div className="banner-container">
        <NavBar variant="black" />
        <h5 className="banner-container-text">About us</h5>
      </div>
      <div className="container mx-auto my-5">
        <p className="f-16 py-5">
          {` We are an online education platform that aims to reform the online
          education industry in the country. At Vidyarthi, we aim for much more
          than just teaching; our goal is to get young Nepalese minds on par
          with global standards through effective, goal-oriented education
          imparting essential skills that are (or will soon be) a “Must Know” in
          order to survive, excel and grow. We are a value-driven firm with a
          special emphasis on minimizing our costs to make our products and
          services affordable for everyone. We are well aware, however, that
          learning does not stop at school. Vidyarthi thus provides
          opportunities not only for children but also for adults and young
          professionals to develop their skill sets. Whether it’s upskilling or
          getting ready for your career; whether you're learning for fun or for
          your personal well-being, or whether you're learning to increase your
          self-worth or to earn more; Vidyarthi does it all.`}
        </p>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default React.memo(AboutUs);
