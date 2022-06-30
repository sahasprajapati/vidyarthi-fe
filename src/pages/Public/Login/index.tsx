import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { FacebookLogo, GoogleLogo, VidyarthiLogo } from 'assets/images';
import { SocialMediaLoginOptions, TextField } from 'components';
import Button from 'components/Button';
import MainHeading from 'components/MainHeading';

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email('Please enter a valid mail').required('Required'),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/,
      'Password must be at least one alpha numeric character, 8 character long, at least one numeric and up to.'
    )
    .required('Required'),
});

const Login: React.FC = () => {
  return (
    <div className="row me-2">
      <div className="col-lg-6 login__image__banner">
        <div className="p-5">
          <img src={VidyarthiLogo} alt="logo" />
        </div>
      </div>
      <div className="col-lg-6 p-5">
        <div className="d-flex justify-content-end  align-items-center">
          <Link className="login__qn" to="/register">
            Don’t have account?
          </Link>
          <Link to="/register" className="link__btn">
            <span className="p-4 text-capitalize ">signup</span>
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <Formik
            onSubmit={(val) => {
              alert(JSON.stringify(val, null, 2));
              if (val.checked.find((yes) => val.checked.includes(yes))) {
                return localStorage.setItem('Email', JSON.stringify(val));
              }
            }}
            initialValues={{ email: '', password: '', checked: [] }}
            validationSchema={FORM_VALIDATION}
            validateOnMount
          >
            {({ values }) => (
              <Form className="row">
                <div className="my-5">
                  <MainHeading title="Login to your Account" />
                </div>
                <div className="col-12">
                  <TextField
                    name="email"
                    label="Email Address"
                    placeholder="Enter your Email address"
                  />
                </div>
                <div className="col-12">
                  <TextField
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <label className="mb-2">
                  <div className="flex">
                    <Field
                      type="checkbox"
                      name="checked"
                      value="yes"
                      id="checkbox"
                    />

                    <p className="ms-3 login__qn">Remember me</p>
                  </div>
                </label>
                <div className="mt-2 col-6">
                  <Button variant="primary" type="submit">
                    <span className="p-5">Login</span>
                  </Button>
                </div>
                <h6 className="text-center fw-normal my-5">Or Sign Up</h6>
                <div className="flex-center">
                  {/*  */}
                  <SocialMediaLoginOptions logo={GoogleLogo} title="Google" />
                  <SocialMediaLoginOptions
                    logo={FacebookLogo}
                    title="Facebook"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Login);
