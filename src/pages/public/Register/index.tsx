import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { FacebookLogo, GoogleLogo, VidyarthiLogo } from 'assets/images';
import { SocialMediaLoginOptions, TextField } from 'components';
import Button from 'components/Button';
import MainHeading from 'components/MainHeading';
import Icon from 'assets/svg/Icon';

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email('Please enter a valid mail').required('Required'),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/,
      'Password must be at least one alpha numeric character, 8 character long, at least one numeric and up to.'
    )
    .required('Required'),

  cpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),

  firstName: Yup.string()
    .min(3, 'First Name must be at least 3 character long')
    .required('Required'),
  lastName: Yup.string()
    .min(3, 'Last Name must be at least 3 character long')
    .required('Required'),
});

const Register: React.FC = () => {
  return (
    <div className="row me-2">
      <div className="col-lg-6 register__image__banner">
        <div className="p-5">
          <img src={VidyarthiLogo} alt="logo" />
        </div>
      </div>
      <div className="col-lg-6 p-5">
        <div className="d-flex justify-content-end  align-items-center">
          <Link className="login__qn" to="/register">
            Don’t have account?
          </Link>
          <Link to="/login" className="link__btn">
            <span className="p-4 text-capitalize ">login</span>
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <Formik
            onSubmit={(val: any) => console.log('This is the values', val)}
            initialValues={{
              email: '',
              password: '',
              cpassword: '',
              checked: [],
              firstName: '',
              lastName: '',
            }}
            validationSchema={FORM_VALIDATION}
            validateOnMount
          >
            {({ values }) => (
              <Form className="row position-relative">
                <div className="my-5">
                  <MainHeading title="Create your Account" />
                </div>
                <div className="col-md-6">
                  <TextField
                    name="firstName"
                    label="Full Name"
                    placeholder="First name"
                  />
                </div>
                <div className="col-md-6 mt-2">
                  <TextField
                    name="lastName"
                    label=" "
                    placeholder="Last name"
                  />
                </div>
                <div className="col-12">
                  <TextField
                    name="email"
                    label="Email"
                    type=""
                    placeholder="Email address"
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Create password"
                  />
                  <Icon name="eye" />
                </div>
                <div className="col-md-6">
                  <TextField
                    name="cpassword"
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm Password"
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
                    <p className="ms-3 login__qn">I Aggree with all of your</p>{' '}
                    <Link to="/terms-conditions" className="primary-color">
                      Terms & conditions.
                    </Link>
                  </div>
                </label>
                <div className="mt-2 col-6">
                  <Button variant="primary" type="submit">
                    <span className="p-5">Register</span>
                  </Button>
                </div>
                <h6 className="text-center fw-normal my-5">Or Sign Up</h6>
                <div className="flex-center">
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

export default React.memo(Register);
