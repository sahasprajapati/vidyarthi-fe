import React from 'react';
import { AdminLayout } from 'containers';
import MainHeading from 'components/main-heading';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Card from 'components/card';
import { CustomSelect, TextField } from 'components';
import Button from 'components/button';

const imageSupportedFormat = ['image/jpg', 'image/png', 'image/jpeg'];

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First Name must be at least 3 character long')
    .required('First Name is Required'),
  lastName: Yup.string()
    .min(2, 'Last Name must be at least 3 character long')
    .required('Last Name is Required'),
  email: Yup.string()
    .email()
    .typeError('Please enter an valid email address')
    .required('Email is Required'),
  dateOfBirth: Yup.string().required('Date of Birth is Required'),
  occupation: Yup.string().required('Occupation is Required'),
  schoolOrCollege: Yup.string()
    .min(5, 'School or College name must be at least 5 character long')
    .required('School or College name is required'),
  currentQualification: Yup.string().required(
    'Current qualification is required'
  ),
  highestQualification: Yup.string().required(
    'Highest qualification is required'
  ),
  currentPassword: Yup.string().required('current password is required'),
  newpassword: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/,
      'Password must be at least one alpha numeric character, 8 character long, at least one numeric and up to.'
    )
    .required('Required'),

  cpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  imageUri: Yup.mixed()
    .nullable()
    .test(
      'fileSize',
      'The file size must be 2mb',
      (value) => !value || (value && value?.size <= 1024 * 1024)
    )
    .test(
      'format',
      'uploadFormat',
      (value) => !value || (value && imageSupportedFormat.includes(value?.type))
    ),
  phoneNumber: Yup.string().required('Phone Number is Required'),
});
// Form validation password
const FORM_VALIDATION_PASSWORD = Yup.object().shape({
  currentPassword: Yup.string().required('Current password is required'),
  newPassword: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/,
      'Password must be at least one alpha numeric character, 8 character long, at least one numeric and up to.'
    )
    .required('New password is required'),

  cpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm new password is required'),
});

const changePasswordForm = [
  {
    label: 'Current Password',
    name: 'currentPassword',
    placeHolder: 'Current password',
  },
  {
    label: 'New Password',
    name: 'newPassword',
    placeHolder: 'New password',
  },
  {
    label: 'Confirm Password',
    name: 'cpassword',
    placeHolder: 'Confirm new password',
  },
];

const personalDetailsFullSize = [
  {
    label: 'Phone Number',
    name: 'phoneNumber',
    placeHolder: 'Phone Number with country code',
  },
  {
    label: 'School or College',
    name: 'schoolOrCollege',
    placeHolder: 'Enter your college or school name',
  },
  {
    label: 'Current Qualification',
    name: 'currentQualification',
    placeHolder: 'Enter your current qualification',
  },
  {
    label: 'Highest Qualification',
    name: 'highestQualification',
    placeHolder: 'Enter your highest qualification',
  },
];
const personalDetailsHalfSize = [
  {
    label: 'Full Name',
    name: 'firstName',
    placeHolder: 'First Name',
    className: 'col-md-6 mt-3',
  },
  {
    label: '',
    name: 'lastName',
    placeHolder: 'Last Name',
    className: 'col-md-6 mt-4',
  },
  {
    label: 'Email Address',
    name: 'email',
    placeHolder: 'Email Address',
    className: 'col-12 mt-4',
  },
];

const Setting: React.FC = () => {
  const initVal = {
    firstName: '',
    lastName: '',
    imageUri: '',
    email: '',
    dateOfBirth: '',
    highestQualification: '',
    schoolOrCollege: '',
    currentQualification: '',
    occupation: '',
    phoneNumber: '',
  };
  const initValPassword = {
    cpassword: '',
    newPassword: '',
    currentPassword: '',
  };

  const occupationOptions = [
    {
      label: 'Teacher',
      value: 'Teacher',
    },
    {
      label: 'Student',
      value: 'student',
    },
    {
      label: 'Student',
      value: 'student',
    },
    {
      label: 'Student',
      value: 'student',
    },
  ];
  // change password ui

  const changePasswordElement = React.useMemo(() => {
    return (
      <Formik
        initialValues={initValPassword}
        validationSchema={FORM_VALIDATION_PASSWORD}
        validateOnMount
        onSubmit={(val) => console.log('this us valye', val)}
      >
        {() => (
          <Form>
            <div className="my-5">
              <Card>
                <MainHeading title="Change Password" />
                <div className="mx-3">
                  {changePasswordForm?.map((e) => (
                    <div className="mt-4" key={e?.name}>
                      <TextField
                        label={e?.label}
                        name={e?.name}
                        placeholder={e?.placeHolder}
                      />
                    </div>
                  ))}
                  <div className="mt-4">
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </Form>
        )}
      </Formik>
    );
  }, []);

  return (
    <AdminLayout>
      <Formik
        initialValues={initVal}
        validationSchema={FORM_VALIDATION}
        validateOnMount
        onSubmit={(val) => console.log('this is values', val)}
      >
        {() => (
          <Form>
            <Card>
              <MainHeading title="Account Setting" />
              <div className="row mx-2">
                <div className="col-md-8">
                  <div className="row">
                    {personalDetailsHalfSize?.map((e) => (
                      <div className={e?.className} key={e?.name}>
                        <TextField
                          label={e?.label}
                          name={e?.name}
                          placeholder={e?.placeHolder}
                        />
                      </div>
                    ))}

                    <div className="col-md-12">
                      <div className="flex">
                        <Field
                          type="checkbox"
                          name="checked"
                          value="yes"
                          id="checkbox"
                        />
                        <p className="ms-3 pt-3">Get Email Updates</p>
                      </div>
                    </div>
                    <div className="col-md-6 mt-4">
                      <TextField
                        label="Date Of Birth"
                        name="dateOfBirth"
                        placeholder="Date of Birth"
                        type="date"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 mt-4">
                      <label htmlFor="" className="input__label">
                        Occupation
                      </label>
                      <div>
                        <Field
                          name="occupation"
                          className="pb-3"
                          options={occupationOptions}
                          component={CustomSelect}
                          placeholder="Select a role"
                          isMulti={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-4">
                  <TextField
                    label=""
                    name="imageUri"
                    placeholder="First Name"
                    type="file"
                    hidden
                  />
                  <div className="">
                    <img src="" alt="profile photo" />
                    <h5>hello</h5>
                  </div>
                </div>
                {personalDetailsFullSize?.map((e) => (
                  <div className="col-12 mt-3" key={e?.name}>
                    <TextField
                      label={e?.label}
                      name={e?.name}
                      placeholder={e?.placeHolder}
                    />
                  </div>
                ))}
                <div className="mt-4">
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </div>
              </div>
            </Card>
          </Form>
        )}
      </Formik>
      {changePasswordElement}
    </AdminLayout>
  );
};

export default React.memo(Setting);
