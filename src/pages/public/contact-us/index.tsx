import React from 'react';
import * as Yup from 'yup';

import { NavBar, TextField } from 'components';
import Heading from 'components/heading';
import { Footer } from 'containers';
import { Form, Formik } from 'formik';
import Button from 'components/button';

interface IProps {}

const FORM_VALIDATION = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Full name must be at least 3 character long')
    .required('Full Name is required'),
  email: Yup.string()
    .email()
    .typeError('Please enter a valid email address')
    .required('Email is required'),
  address: Yup.string()
    .min(3, 'Address must be at least 3 character long')
    .required('Address is required'),
  contact_number: Yup.number()
    .typeError('Contact number must in numeric')
    .required('Contact Number is required'),
  comment: Yup.string()
    .min(3, 'comment must be at least 3 character long')
    .required('Comment is required'),
});

const ContactUs: React.FC<IProps> = ({}) => {
  const intiVal = {
    fullName: '',
    email: '',
    address: '',
    contact_number: '',
    comment: '',
  };
  return (
    <React.Fragment>
      <div className="banner-container">
        <NavBar variant="black" />
        <h5 className="banner-container-text">Contact Us</h5>
      </div>
      <div className="container">
        <h3 className="text-center my-5">Contact Us for more inforamtion</h3>
        <div className="row mt-3 mb-5">
          <div className="col-lg-6 col-sm-12 col-12 mx-auto">
            <Formik
              initialValues={intiVal}
              validateOnMount
              validationSchema={FORM_VALIDATION}
              onSubmit={() => {}}
            >
              {({ isSubmitting }) => (
                <Form>
                  <TextField
                    label={'Full Name'}
                    name="fullName"
                    placeholder="Enter your full name"
                  />
                  <TextField
                    label={'Email'}
                    name="email"
                    placeholder="Enter your Full Name"
                  />
                  <TextField
                    label={'Contact Number'}
                    name="contact_number"
                    placeholder="Enter your Contact Number"
                  />
                  <TextField
                    label={'Address'}
                    name="address"
                    placeholder="Enter your Address"
                  />
                  <div className="my-4">
                    <label htmlFor="" className="mb-2">
                      Comment
                    </label>

                    <textarea
                      name="comment"
                      cols={70}
                      rows={5}
                      placeholder="Please write down your feed back here.."
                      className="p-4 contact-comment"
                    />
                  </div>

                  <div className="mt-5">
                    <Button
                      variant="primary"
                      isSubmitting={isSubmitting}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default React.memo(ContactUs);
