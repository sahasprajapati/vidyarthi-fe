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
      <div className="container">
        <NavBar variant="black" />
        <Heading title={'Contact Us'} className="text-center mb-5" />
        <p className="f-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          soluta? Quas, impedit rem qui consectetur atque optio eveniet, soluta
          ab maiores cum et saepe totam fuga amet aspernatur quis similique
          voluptatibus voluptatum ipsa magni. Architecto blanditiis accusantium
          laborum. Vero excepturi totam voluptas dolorum ipsam dolores,
          dignissimos tenetur quod libero amet quam! Accusantium magnam eos,
          ipsum aut cupiditate quas neque, consectetur reprehenderit quos
          dolorem enim excepturi amet voluptatibus blanditiis eligendi illo
          voluptatum, et impedit? Sunt dolorum temporibus recusandae modi
          asperiores corporis! Cumque, dolorum culpa. Corrupti magnam
          blanditiis, eveniet incidunt at ducimus iusto explicabo qui ipsam
          suscipit tempora quo, minus soluta impedit similique doloribus dolorum
          optio. Voluptatem quo magni dolores distinctio dolorum, earum id
          similique dicta eligendi porro adipisci veniam deleniti iusto animi
          aperiam necessitatibus molestiae corporis tenetur. Pariatur ipsum
          architecto accusamus debitis, sequi dolorum alias saepe ex provident
          velit? Ea doloribus error dicta culpa commodi ab accusantium repellat
          quos totam ullam consequuntur labore nam quis repellendus
          exercitationem aliquam at, magnam odit repudiandae? Soluta cupiditate
          error rerum nulla consequuntur exercitationem odit deleniti,
          distinctio architecto est sed quas nesciunt asperiores veritatis
          voluptas? Nostrum incidunt autem quam laboriosam blanditiis nam porro,
          error saepe eos veniam ad nesciunt dolores qui! Deleniti dolores modi
          ipsa possimus.
        </p>
        <p className="text-center f-18-f500 mt-5">
          Contact Us for more inforamtion
        </p>
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
                  <TextField
                    label={'Comment'}
                    name="comment"
                    placeholder="Enter your Address"
                  />
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
