import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { CheckBox, TextArea, TextField } from 'components';
import Button from 'components/Button';
import Modal from 'components/Modal';

interface IProps {
  handleModal: () => void;
}

const FEEDBACK_FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
    .min(3, 'At least 3 character long required')
    .required('Name is required'),
  title: Yup.string()
    .min(3, 'At least 3 character long required')
    .required('Title is required'),
  descriptions: Yup.string()
    .min(10, 'At least 10 character long required')
    .required('Descriptions is required'),
  checked: Yup.string().required(
    'You must accept the terms and conditions to continue'
  ),
  email: Yup.string()
    .email()
    .typeError('Please enter a valid Email Address')
    .required('Email is required'),
});

const feedBackFormData = [
  {
    id: 0,
    className: 'col-md-6',
    label: 'Name',
    name: 'name',
    placeHolder: 'Enter your name',
  },
  {
    id: 1,
    className: 'col-md-6',
    label: 'Email Address',
    name: 'email',
    placeHolder: 'Enter your Email Address',
  },
  {
    id: 2,
    className: 'col-12',
    label: 'Title',
    name: 'title',
    placeHolder: 'Title issue or feedback title',
  },
];

const FeedBack: React.FC<IProps> = ({ handleModal }) => {
  const initValues = {
    name: '',
    email: '',
    title: '',
    checked: '',
    descriptions: '',
  };
  return (
    <Modal
      title="Fill the form to submit your feedBack"
      modalClose={handleModal}
      onClick={handleModal}
    >
      <Formik
        initialValues={initValues}
        onSubmit={(val) => console.log('this is value', val)}
        validateOnMount
        validationSchema={FEEDBACK_FORM_VALIDATION}
      >
        <Form>
          <div className="row px-3 my-5">
            {feedBackFormData?.map((e) => (
              <div className={e?.className} key={e?.id}>
                <TextField
                  name={e?.name}
                  label={e?.label}
                  placeholder={e?.placeHolder}
                />
              </div>
            ))}
            <div className="col-12 my-3">
              <h6>Your service rating</h6>
            </div>
            <div className="col-12 my-3">
              <TextArea
                name="descriptions"
                placeHolder="if you have any additional feedback, please type it in here..."
                rows={6}
                label="Your Issue or Feedback"
              />
            </div>
            <div className="col-12 my-3">
              <CheckBox
                name="checked"
                title="  I have read and accept the privacy policy"
                value="yes"
              />
            </div>
            <Button variant="primary" type="submit">
              Submit Feedback
            </Button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default React.memo(FeedBack);
