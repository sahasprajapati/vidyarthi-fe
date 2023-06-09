import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { FacebookLogo, GoogleLogo, VidyarthiLogo2 } from 'assets/images';
import { SocialMediaLoginOptions, TextField } from 'components';
import Button from 'components/button';
import MainHeading from 'components/main-heading';
import Icon from 'assets/svg/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { authRegisterAction } from 'redux/actions/auth.action';
import Tabs from 'components/tabs';
import TabsButton from 'components/tabs-button';

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
  const [showPassword, setShowPassword] = useState(false);

  const dispatch: any = useDispatch();
  const userData: any = useSelector((state: any) => state.auth);
  const [activeIndex, setActiveIndex] = React.useState(2);

  const tabData = [
    {
      id: 3,
      label: 'Teacher',
    },
    {
      id: 2,
      label: 'Student',
    },
  ];
  const [errorText, setErrorText] = React.useState('');
  const navigate = useNavigate();
  const handleRegister = async (val: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    cpassword: string;
  }) => {
    try {
      const payload = {
        email: val?.email,
        password: val?.password,
        firstName: val?.firstName,
        lastName: val?.lastName,
        confirmPassword: val?.cpassword,
        role: activeIndex ?? 2,
      };

      dispatch(authRegisterAction(payload));
    } catch (err: any) {}
  };

  if (userData?.authenticate && userData?.userData && userData?.role) {
    if (userData?.role === 'student') {
      navigate('/student-dashboard');
    }
    if (userData?.role === 'super') {
      navigate('/admin');
    }
    if (userData?.role === 'instructor') {
      navigate('/teacher');
    }
  }

  return (
    <div className="row me-2">
      <div className="col-lg-6 register__image__banner">
        <div>
          <a href="/">
            <img
              src={VidyarthiLogo2}
              alt="logo"
              width="230px"
              style={{
                margin: '4em',
              }}
            />
          </a>
        </div>
      </div>
      <div className="col-lg-6 p-5">
        <div className="d-flex justify-content-end  align-items-center">
          <Link className="login__qn" to="/login">
            Already have account?
          </Link>
          <Link to="/login" className="link__btn">
            <span className="p-4 text-capitalize ">login</span>
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <Formik
            onSubmit={handleRegister}
            initialValues={{
              email: '',
              password: '',
              cpassword: '',
              firstName: '',
              lastName: '',
            }}
            validationSchema={FORM_VALIDATION}
            validateOnMount
          >
            {({ values, isSubmitting }) => (
              <Form className="row position-relative">
                <div className="my-5">
                  <MainHeading title="Create your Account" />
                </div>
                <p
                  style={{
                    fontSize: '1.15em',
                    fontWeight: 500,
                  }}
                >
                  Sign Up As:
                </p>
                <TabsButton
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  tabData={tabData}
                />

                <p className="text-center text-danger"> {errorText} </p>
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
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create password"
                    icon={
                      <div
                        onClick={() => {
                          setShowPassword((password) => !password);
                        }}
                      >
                        {showPassword ? (
                          <Icon name="eye" />
                        ) : (
                          <Icon name="eyeClosed" />
                        )}
                      </div>
                    }
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    name="cpassword"
                    label="Confirm Password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm password"
                    icon={
                      <div
                        onClick={() => {
                          setShowPassword((password) => !password);
                        }}
                      >
                        {showPassword ? (
                          <Icon name="eye" />
                        ) : (
                          <Icon name="eyeClosed" />
                        )}
                      </div>
                    }
                  />
                </div>
                {/* <label className="mb-2">
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
                </label> */}
                <div className="mt-2 col-6">
                  <Button
                    variant="primary"
                    type="submit"
                    isSubmitting={isSubmitting}
                    isValid={true}
                  >
                    <span className="p-5">Register</span>
                  </Button>
                </div>
                <h6 className="text-center fw-normal my-5">
                  Or Sign Up (Student Only)
                </h6>
                <div className="flex-center">
                  <a href={`${process.env.REACT_APP_API_BASE_URL}/google`}>
                    <SocialMediaLoginOptions logo={GoogleLogo} title="Google" />
                  </a>
                  <a href={`${process.env.REACT_APP_API_BASE_URL}/facebook`}>
                    <SocialMediaLoginOptions
                      logo={FacebookLogo}
                      title="Facebook"
                    />
                  </a>
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
