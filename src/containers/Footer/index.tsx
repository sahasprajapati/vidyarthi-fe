import { VidyarthiWhiteLogo } from 'assets/images';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const todayYear = new Date().toISOString().slice(0, 4);

  const footerData = [
    {
      id: 0,
      subtitle1: 'about',
      subtitle2: 'privacy policy',
      subtitle3: 'FAQ',
      subtitle4: 'terms & conditions',
      subtitle5: 'contact us',
    },
  ];
  const footerData1 = [
    {
      id: 0,
      subtitle1: 'Programming',
      subtitle2: 'Art',
      subtitle3: 'Designing',
    },
  ];

  return (
    <footer className="bg-primary-color">
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <img src={VidyarthiWhiteLogo} alt="vidyathilogo" />
            <p className="footer__leftside__subtitle mt-3">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment.
            </p>
          </div>
          {footerData.map((e) => (
            <div className="col-lg-2 col-md-3 col-sm-3" key={e?.id}>
              <Link to="/about-us">
                <p className="footer__subtile"> {e?.subtitle1} </p>
              </Link>
              <Link to="/privacy-policy">
                <p className="footer__subtile"> {e?.subtitle2} </p>
              </Link>
              <Link to="/faq">
                <p className="footer__subtile"> {e?.subtitle3} </p>
              </Link>
              <Link to="/terms-conditions">
                <p className="footer__subtile"> {e?.subtitle4} </p>
              </Link>
              <Link to="/contact-us">
                <p className="footer__subtile"> {e?.subtitle5} </p>
              </Link>
            </div>
          ))}
          {footerData1.map((e) => (
            <div className="col-lg-2 col-md-3 col-sm-3" key={e?.id}>
              <Link to="/course">
                <p className="footer__subtile"> {e?.subtitle1} </p>
              </Link>
              <Link to="/privacy-policy">
                <p className="footer__subtile"> {e?.subtitle2} </p>
              </Link>
              <Link to="/faq">
                <p className="footer__subtile"> {e?.subtitle3} </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="pb-4">
          <span className="footer__copyright__text">&copy; - {todayYear}</span>
          <span className="footer__copyright__bold">Viyarthi</span>
          <span className="footer__copyright__text">. All right reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
