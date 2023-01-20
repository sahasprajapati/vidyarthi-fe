import { FacebookLogo, GoogleLogo, VidyarthiLogo } from 'assets/images';
import { SocialMediaLoginOptions, TextField } from 'components';
import Button from 'components/button';
import MainHeading from 'components/main-heading';
import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { authAction, socialLoginAction } from 'redux/actions/auth.action';
import * as Yup from 'yup';

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email('Please enter a valid mail').required('Required'),
  password: Yup.string().required('Required'),
});

const Login: React.FC = () => {
  const dispatch: any = useDispatch();
  const userData: any = useSelector((state: any) => state.auth);
  const authError: any = useSelector((state: any) => state.auth.error);
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    if (
      search.get('role') &&
      search.get('accessToken') &&
      search.get('refreshToken')
    ) {
      dispatch(
        socialLoginAction({
          role: search.get('role') ?? '',
          accessToken: search.get('accessToken') ?? '',
          refreshToken: search.get('refreshToken') ?? '',
        })
      );
    }
  }, []);

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
              if (val.checked.find((yes) => val.checked.includes(yes))) {
                return localStorage.setItem('Email', JSON.stringify(val));
              }
              const payload: any = {
                email: val?.email,
                password: val?.password,
              };
              dispatch(authAction(payload));
            }}
            initialValues={{ email: '', password: '', checked: [] }}
            validationSchema={FORM_VALIDATION}
            validateOnMount
          >
            {({ values, isSubmitting }) => (
              <Form className="row">
                <div className="my-5">
                  <MainHeading title="Login to your Account" />
                </div>
                <p className="text-center text-danger"> {authError} </p>
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
                  <Button
                    variant="primary"
                    type="submit"
                    isSubmitting={isSubmitting}
                    isValid={true}
                  >
                    <span className="p-5">Login</span>
                  </Button>
                </div>
                <h6 className="text-center fw-normal my-5">Or Sign Up</h6>
                <div className="flex-center">
                  {/*  */}
                  <a href="/api/google">
                    <SocialMediaLoginOptions
                      logo={GoogleLogo}
                      title="Google"
                      onClick={() => {
                        // navigate('/api/google');
                      }}
                    />
                  </a>

                  <a href="/api/facebook">
                    <SocialMediaLoginOptions
                      logo={FacebookLogo}
                      title="Facebook"
                      onClick={() => {
                        // navigate('/api/facebook');
                      }}
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

export default React.memo(Login);
