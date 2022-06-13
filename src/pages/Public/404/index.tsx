import { NotFoundImage } from 'assets/images';
import { NavBar } from 'components';
import Button from 'components/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <NavBar />
        <div className="col-md-6 my-5">
          <h4 className="not__fount__left__heading my-2">Error 404</h4>
          <h6 className="not__fount__left__subheading my-3">
            Oops! Page not found
          </h6>
          <p className="not__fount__left__subtitle mb-4">
            Something went wrong. It’s look that your requested could not be
            found. It’s look like the link is broken or the page is removed.
          </p>

          <Button variant="primary" type="button" onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </div>
        <div className="col-md-6">
          <img src={NotFoundImage} alt="notfound" />
          <h1 className="text-center not__found__right__text my-3">404</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
