import Button from 'components/button';
import Modal from 'components/modal';
import TextField from 'components/text-field';
import { Field, Form, Formik } from 'formik';
import React from 'react';

const CourseDescriptionModal = ({
  handleModal,
  initialValue,
  handleChange,
}: any) => {
  return (
    <Modal
      title="Add Course Description"
      modalClose={handleModal}
      onClick={handleModal}
    >
      <Formik
        onSubmit={(val) => {
          handleChange(val);
          handleModal();
        }}
        validateOnMount
        initialValues={{
          description: initialValue ?? '',
        }}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="row px-3 my-5">
              <div>
                <div className="mt-5">
                  <h6 className="course__upload__adv__info__title">
                    Description
                  </h6>
                  <Field
                    component="textarea"
                    name="description"
                    className="w-100 p-3 rounded"
                    cols={100}
                    rows={10}
                  ></Field>
                </div>
              </div>
            </div>

            <div className="flex-between">
              <Button
                onClick={handleModal}
                variant={'primary'}
                type={'button'}
                isValid={true}
              >
                Cancel
              </Button>

              <Button variant={'primary'} type={'submit'} isValid={true}>
                Save Changes
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CourseDescriptionModal;
