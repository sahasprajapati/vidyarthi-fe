import { CustomSelect, TextField } from 'components';
import Button from 'components/button';
import Card from 'components/card';
import MainHeading from 'components/main-heading';
import { AdminLayout } from 'containers';
import { format } from 'date-fns';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Service from 'setup/network';
import * as Yup from 'yup';

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
  dob: Yup.string(),
  occupation: Yup.string(),
  institution: Yup.string().min(
    5,
    'School or College name must be at least 5 character long'
  ),
  currentQualification: Yup.string(),
  highestQualification: Yup.string(),

  image: Yup.mixed()
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
  phone: Yup.string(),
});
const FORM_TEACHER_VALIDATION = Yup.object().shape({
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
  biography: Yup.string(),
  title: Yup.string(),
  phoneNumber: Yup.string(),
  teacherNotificationTypes: Yup.array().of(Yup.string()),
  socialProfile: Yup.object().shape({
    website: Yup.string(),
    facebook: Yup.string(),
    instagram: Yup.string(),
    linkedin: Yup.string(),
    twitter: Yup.string(),
    youtube: Yup.string(),
    whatsapp: Yup.string(),
  }),
  image: Yup.mixed()
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
});
// Form validation password
const FORM_VALIDATION_PASSWORD = Yup.object().shape({
  password: Yup.string().required('Current password is required'),
  newPassword: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/,
      'Password must be at least one alpha numeric character, 8 character long, at least one numeric and up to.'
    )
    .required('New password is required'),

  rePassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm new password is required'),
});

const changePasswordForm = [
  {
    label: 'Current Password',
    name: 'password',
    placeHolder: 'Current password',
  },
  {
    label: 'New Password',
    name: 'newPassword',
    placeHolder: 'New password',
  },
  {
    label: 'Confirm Password',
    name: 'rePassword',
    placeHolder: 'Confirm new password',
  },
];

const personalDetailsFullSize = [
  {
    label: 'Phone Number',
    name: 'phone',
    placeHolder: 'Phone Number with country code',
  },
  {
    label: 'School or College',
    name: 'institution',
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
const personalDetailsTeacherFullSize = [
  {
    label: 'Phone Number',
    name: 'phoneNumber',
    placeHolder: 'Phone Number with country code',
  },
  {
    label: 'Title',
    name: 'title',
    placeHolder: 'Enter your title',
  },
  {
    label: 'Biography',
    name: 'biography',
    placeHolder: 'Enter biography',
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

const StudentProfile = () => {
  const userData = JSON.parse(localStorage.getItem('user') ?? 'null');
  const names = userData?.name?.split(' ');

  return (
    <Formik
      enableReinitialize
      initialValues={{
        firstName: (names?.length > 0 && names[0]) ?? '',
        lastName: (names?.length > 1 && names[1]) ?? '',
        imageUri: '',
        email: userData?.email ?? '',
        dob: userData?.studentProfile?.dob
          ? format(new Date(userData?.studentProfile?.dob), 'yyyy-MM-dd')
          : '',
        highestQualification:
          userData?.studentProfile?.highestQualification ?? '',
        institution: userData?.studentProfile?.institution ?? '',
        currentQualification:
          userData?.studentProfile?.currentQualification ?? '',
        occupation: userData?.studentProfile?.occupation ?? '',
        phone: userData?.studentProfile?.phone ?? '',
      }}
      validationSchema={FORM_VALIDATION}
      validateOnMount
      onSubmit={async (val) => {
        try {
          const res = await Service.patch(`/profile/${userData?.id}`, val);
          toast.success('Profile updated successfully');
        } catch (err: any) {
          toast.error(err);
        }
      }}
    >
      {({ isValid, values }) => {
        console.log('Values', values);
        return (
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

                    {/* <div className="col-md-12">
                      <div className="flex">
                        <Field
                          type="checkbox"
                          name="checked"
                          value="yes"
                          id="checkbox"
                        />
                        <p className="ms-3 pt-3">Get Email Updates</p>
                      </div>
                    </div> */}
                    <div className="col-md-6 mt-4">
                      <TextField
                        label="Date Of Birth"
                        name="dob"
                        placeholder="Date of Birth"
                        type="date"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 mt-4">
                      {/* <label htmlFor="" className="input__label">
                        Occupation
                      </label> */}
                      <div>
                        {/* <Field
                          name="occupation"
                          className="pb-3"
                          options={occupationOptions}
                          component={CustomSelect}
                          placeholder="Select a role"
                          isMulti={false}
                        /> */}
                        <TextField
                          label="Occupation"
                          name="occupation"
                          placeholder="Occupation"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="col-md-4 mt-4">
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
                </div> */}
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
                  <Button variant="primary" type="submit" isValid={isValid}>
                    Save Changes
                  </Button>
                </div>
              </div>
            </Card>
          </Form>
        );
      }}
    </Formik>
  );
};
const TeacherProfile = () => {
  const userData = JSON.parse(localStorage.getItem('user') ?? 'null');
  const names = userData?.name?.split(' ');

  return (
    <Formik
      enableReinitialize
      initialValues={{
        firstName: (names?.length > 0 && names[0]) ?? '',
        lastName: (names?.length > 1 && names[1]) ?? '',
        imageUri: '',
        email: userData?.email ?? '',
        phoneNumber: userData?.teacherProfile?.phoneNumber ?? '',
        biography: userData?.teacherProfile?.biography ?? '',
        title: userData?.teacherProfile?.title ?? '',
        teacherNotificationTypes:
          userData?.teacherProfile?.teacherNotificationTypes ?? [],
        socialProfile: userData?.teacherProfile?.socialProfile ?? {},
      }}
      validationSchema={FORM_TEACHER_VALIDATION}
      validateOnMount
      onSubmit={async (val) => {
        try {
          const res = await Service.patch(`/profile/${userData?.id}`, val);
        } catch (err: any) {
          toast.error(err);
        }
      }}
    >
      {({ isValid }) => (
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
                </div>
              </div>

              {/* <div className="col-md-4 mt-4">
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
              </div> */}
              {personalDetailsTeacherFullSize?.map((e) => (
                <div className="col-12 mt-3" key={e?.name}>
                  <TextField
                    label={e?.label}
                    name={e?.name}
                    placeholder={e?.placeHolder}
                  />
                </div>
              ))}
              <div className="mt-4">
                <Button variant="primary" type="submit" isValid={isValid}>
                  Save Changes
                </Button>
              </div>
            </div>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

const Setting: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem('user') ?? 'null');
  const names = userData?.name?.split(' ');

  const initValPassword = {
    rePassword: '',
    newPassword: '',
    password: '',
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
  ];
  // change password ui

  const changePasswordElement = React.useMemo(() => {
    return (
      <Formik
        initialValues={initValPassword}
        validationSchema={FORM_VALIDATION_PASSWORD}
        validateOnMount
        onSubmit={async (val, { resetForm }) => {
          try {
            const a = await Service.post('auth/change-password', val);
            toast.success('Password changed');
            resetForm();
          } catch (err) {
            toast.error('Failed to change password');
          }
        }}
      >
        {({ isValid, values }) => (
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
                    <Button variant="primary" type="submit" isValid={isValid}>
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
  }, [userData]);

  return (
    <AdminLayout>
      {userData?.role?.name === 'student' && <StudentProfile />}
      {userData?.role?.name === 'instructor' && <TeacherProfile />}
      {changePasswordElement}
    </AdminLayout>
  );
};

export default React.memo(Setting);
