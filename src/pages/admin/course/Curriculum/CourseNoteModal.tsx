import Button from 'components/button';
import Modal from 'components/modal';
import TextField from 'components/text-field';
import { Form, Formik } from 'formik';
import React from 'react';

const CourseNoteModal = () => {
  const handleModal = () => {};
  return (
    <Modal
      title="Add Course Description"
      modalClose={handleModal}
      onClick={handleModal}
    >
      <Formik
        onSubmit={(val) => console.log('this is value', val)}
        validateOnMount
        initialValues={{
          description: '',
        }}
      >
        <Form>
          <div className="row px-3 my-5">
            <div>
              <TextField
                component="textarea"
                name="description"
                label="Description"
                placeholder="Write your section name here.."
              />
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

            <Button
              onClick={handleModal}
              variant={'primary'}
              type={'button'}
              isValid={true}
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default CourseNoteModal;
