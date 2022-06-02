import { VidyarthiWhiteLogo } from 'assets/images';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const todayYear = new Date().toISOString().slice(0, 4);

  const footerData = [
    {
      id: 0,
      title: 'about',
      subtitle1: 'about us',
      subtitle2: 'courses',
      subtitle3: 'contact us',
    },
    {
      id: 1,
      title: 'courses',
      subtitle1: 'programming courses',
      subtitle2: 'art',
      subtitle3: 'marketing',
    },
  ];

  return (
    <div className="bg-primary-color">
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
              <h6 className="footer__title mb-4">{e?.title}</h6>
              <Link to="/">
                <p className="footer__subtile"> {e?.subtitle1} </p>
              </Link>
              <Link to="/">
                <p className="footer__subtile"> {e?.subtitle2} </p>
              </Link>
              <Link to="/">
                <p className="footer__subtile"> {e?.subtitle2} </p>
              </Link>
              <Link to="/">
                <p className="footer__subtile"> {e?.subtitle3} </p>
              </Link>
            </div>
          ))}

          <div className="col-lg-2 col-md-12">
            <h6 className="footer__title mb-4">company</h6>
            <Link to="/">
              <p className="footer__subtile">FAQs</p>
            </Link>
            <Link to="/">
              <p className="footer__subtile">privacy & policy</p>
            </Link>
            <Link to="/">
              <p className="footer__subtile">terms of service</p>
            </Link>
            <Link to="/">
              <p className="footer__subtile">help & support</p>
            </Link>
          </div>
        </div>
        <div className="pb-4">
          <span className="footer__copyright__text">&copy; - {todayYear}</span>
          <span className="footer__copyright__bold">Viyarthi</span>
          <span className="footer__copyright__text">. All right reserved</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);
