import Button from 'components/button';
import Modal from 'components/modal';
import TextField from 'components/text-field';
import { Form, Formik } from 'formik';
import React from 'react';

const SectionModal = ({
  handleModal,
  isSection,
  handleChange,
  initialValue,
}: any) => {
  return (
    <Modal
      title={isSection ? 'Edit Section Name' : 'Edit Lecture Name'}
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
          name: initialValue ?? '',
        }}
      >
        <Form>
          <div className="row px-3 my-5">
            <div>
              <TextField
                name="name"
                label={isSection ? 'Section' : 'Lecture'}
                placeholder={`Write your ${
                  isSection ? 'section' : 'lecture'
                } name here..`}
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

            <Button variant={'primary'} type={'submit'} isValid={true}>
              Save Changes
            </Button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default SectionModal;
