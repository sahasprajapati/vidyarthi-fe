import React, { Fragment, useEffect, useState } from 'react';
import Button from 'components/button';
import { CustomSelect } from 'components/custom-select';
import Modal from 'components/modal';
import TextField from 'components/text-field';
import { Field, Form, Formik } from 'formik';
import useFetch from 'hooks';
import toastAlert from 'utils/toast';
import Service from 'setup/network';

const CategoryModal = ({
  handleModal,
  handleChange,
  initialValue,
  isChild = false,
}: {
  handleModal: () => void;
  handleChange: (value: { name: string; categoryId?: number }) => void;
  initialValue?: {
    name: string;
    description: string;
    categoryId?: number;
  };
  isChild: boolean;
}) => {
  const { data: categoryData } = useFetch('/category');

  const handleSubmit = async (val: {
    name: string;
    description: string;
    categoryId?: number;
  }) => {
    try {
      const data: any = {
        name: val.name,
        description: val.description,
      };
      if (val.categoryId) {
        data.parentCategoryId = val.categoryId;
      }

      const request = await Service.post('/category', data);
    } catch (err: any) {
      toastAlert('error', err?.response?.data?.message);
    }
  };

  return (
    <Modal
      title={isChild ? 'Edit Sub Category' : 'Edit Category'}
      modalClose={handleModal}
      onClick={handleModal}
    >
      <Formik
        onSubmit={(val) => {
          handleChange(val);
          handleSubmit(val);
          handleModal();
        }}
        validateOnMount
        initialValues={{
          name: initialValue?.name ?? '',
          categoryId: initialValue?.categoryId ?? 0,
          description: initialValue?.description ?? '',
        }}
      >
        <Form>
          <div className="row px-3 my-5">
            <div>
              <TextField
                name="name"
                label={isChild ? 'Sub Category' : 'Category'}
                placeholder={`Write your ${
                  isChild ? 'sub category' : 'category'
                } name here..`}
              />
            </div>
            <div>
              <TextField
                name="description"
                label={'Description'}
                placeholder={`Write your description here..`}
              />
            </div>
          </div>

          {isChild && (
            <div className="col-lg-6 col-md-6">
              <Field
                name="categoryId"
                options={categoryData?.data}
                component={CustomSelect}
                placeholder="Select.."
                isMulti={false}
                label="Parent Category"
              />
            </div>
          )}

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

export default CategoryModal;
