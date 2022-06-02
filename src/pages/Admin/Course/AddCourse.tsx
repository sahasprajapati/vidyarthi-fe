/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import * as Yup from 'yup';
import { AdminLayout } from 'containers';
import Icon from 'assets/svg/Icon';
import Button from 'components/Button';
import { defaultImage } from 'assets/images';
import { BorderBottom, CustomSelect, Editor, TextField } from 'components';
import Card from 'components/Card';
import { Field, FieldArray, Form, Formik } from 'formik';
import MainHeading from 'components/MainHeading';
import Heading from 'components/Heading';

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string().min(5).max(80).required('Title is required.'),
  subTitle: Yup.string().min(1).max(180).required('Subtitle is required.'),
});

const courseCategory = [
  { label: 'programming', value: 'pro' },
  { label: 'Web Design', value: 'web' },
  { label: 'UI', value: 'ui' },
];

const AddCourse: React.FC = () => {
  const inputImageRef = React.useRef<any>(null);
  const inputSkillImageRef = React.useRef<any>(null);
  const inputAddMore = React.useRef<any>(null);
  const [previewImageUrl, setPreviewImageUrl] = React.useState<any>('');
  const [descriptionsText, setDescriptionsText] = React.useState<string>('');
  const [previewImage, setPreviewImage] = React.useState<any>(null);

  //   const initValues = {
  //     title: '',
  //     subTitle: '',
  //     courseCategory: '',
  //     courseSubCategory: '',
  //     courseTopic: '',
  //     courseLanguage: '',
  //     subtitleLanguage: '',
  //     courseLevel: '',
  //     duration: '',
  //   };
  const initValues = {
    learnCourse: [
      {
        title: '',
      },
    ],
    skills: [
      {
        title: '',
      },
    ],
  };
  if (previewImageUrl) {
    const reader = new FileReader();
    reader.readAsDataURL(previewImageUrl);
    reader.onload = () => setPreviewImage(reader?.result);
  }

  const previewImageDiv = React.useMemo(
    () => (
      <img src={previewImage} alt="imageurl" width="230px" height="160px" />
    ),
    [previewImage]
  );
  return (
    <AdminLayout>
      <MainHeading title="Create a new Course" />
      <Formik initialValues={initValues} onSubmit={(val) => {}}>
        {({ values }) => (
          <Form>
            <Card>
              <div className="row">
                <div className="col-md-6">
                  <h6 className="course__upload__adv__info__title">
                    Course Thumbnail
                  </h6>
                  <div className="flex">
                    <div className="me-3">
                      <input
                        hidden
                        ref={inputImageRef}
                        type="file"
                        name="thumbnail"
                        id=""
                        onChange={(e: any) => {
                          setPreviewImageUrl(e?.target?.files[0]);
                        }}
                      />
                      {previewImage ? (
                        previewImageDiv
                      ) : (
                        <img
                          src={defaultImage}
                          alt="image_logo"
                          width={230}
                          height={160}
                        />
                      )}
                    </div>

                    <div className="flex-col">
                      <p className="course__thumbnail__text">
                        Upload your course Thumbnail here.
                        <span className="font-weight-bold">
                          {' '}
                          Important guidelines:
                        </span>
                        1200x800 pixels or 12:8 Ratio. Supported format: .jpg,
                        .jpeg, or .png
                      </p>
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={() => inputImageRef.current.click()}
                      >
                        <div className="flex">
                          <span className="me-3">Upload Image</span>
                          <Icon name="upload" />
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h6 className="course__upload__adv__info__title">
                    Course Thumbnail
                  </h6>
                  <div className="flex">
                    <div className="me-3">
                      <input
                        hidden
                        ref={inputImageRef}
                        type="file"
                        name=""
                        id=""
                        onChange={(e: any) =>
                          setPreviewImageUrl(e?.target?.files[0])
                        }
                      />
                      {previewImage ? (
                        previewImageDiv
                      ) : (
                        <img
                          src={defaultImage}
                          alt="image_logo"
                          width={230}
                          height={160}
                        />
                      )}
                    </div>

                    <div className="flex-col">
                      <p className="course__thumbnail__text">
                        Upload your course Thumbnail here.
                        <span className="font-weight-bold">
                          {' '}
                          Important guidelines:
                        </span>
                        1200x800 pixels or 12:8 Ratio. Supported format: .jpg,
                        .jpeg, or .png
                      </p>
                      <Button
                        variant="secondary"
                        type="button"
                        onClick={() => inputImageRef.current.click()}
                      >
                        <div className="flex">
                          <span className="me-3">Upload Image</span>
                          <Icon name="upload" />
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-5">
                  <div className="mt-5">
                    <h6 className="course__upload__adv__info__title">
                      Course Thumbnail
                    </h6>
                    {/* What you will learn in this course (4/8) */}
                    <Editor
                      onChange={(_event: any, editor: any) => {
                        const data = editor.getData();

                        setDescriptionsText(data);
                      }}
                    />
                  </div>
                </div>
              </div>
              <BorderBottom />
              <div className="my-5">
                <div className="flex-between">
                  <h6 className="course__upload__adv__info__title my-5">
                    Course Thumbnail
                  </h6>
                  <Button variant="outline" type="button">
                    <div className="flex">
                      <Icon name="plus" />
                      <span
                        className="ms-2"
                        onClick={() => inputAddMore.current.click()}
                      >
                        Add New
                      </span>
                    </div>
                  </Button>
                </div>
                <FieldArray name="learnCourse">
                  {({ push }) =>
                    values.learnCourse.map((_, idx) => (
                      <>
                        <TextField
                          label={idx + 1}
                          name={`learnCourse.${idx}.title`}
                          placeholder="What you will teach in this course..."
                        />
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => push({ title: '' })}
                          hidden
                          ref={inputAddMore}
                        >
                          Add Friend
                        </button>
                      </>
                    ))
                  }
                </FieldArray>
              </div>
              {/* What skill you get (4/8) */}
              <BorderBottom />
              <div className="my-5">
                <div className="flex-between">
                  <h6 className="course__upload__adv__info__title my-5">
                    What skill you get
                  </h6>
                  <Button variant="outline" type="button">
                    <div className="flex">
                      <Icon name="plus" />
                      <span
                        className="ms-2"
                        onClick={() => inputSkillImageRef.current.click()}
                      >
                        Add New
                      </span>
                    </div>
                  </Button>
                </div>
                <FieldArray name="skills">
                  {({ push }) =>
                    values.skills.map((_, idx) => (
                      <>
                        <TextField
                          label={idx + 1}
                          name={`skills.${idx}.title`}
                          placeholder="What you will teach in this course..."
                          key={idx}
                        />
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => push({ title: '' })}
                          hidden
                          ref={inputSkillImageRef}
                        >
                          Add Friend
                        </button>
                      </>
                    ))
                  }
                </FieldArray>
              </div>
              <div className="flex-between">
                <Button variant="outline" type="button">
                  Previous
                </Button>
                <Button variant="primary" type="button">
                  Save & Next
                </Button>
              </div>
            </Card>
          </Form>
        )}
      </Formik>
    </AdminLayout>
  );
};

export default React.memo(AddCourse);

{
  /* <Formik
        initialValues={initValues}
        validationSchema={FORM_VALIDATION}
        validateOnMount
        onSubmit={(val: any) => console.log('values', val)}
      >
        <div className="row">
          <div className="col-12">
            <TextField
              label="Title"
              name="title"
              placeholder="Your course title"
            />
          </div>
          <div className="col-12">
            <TextField
              label="Subtitle"
              name="subTitle"
              placeholder="Your course Subtitle"
            />
          </div>
          <div className="col-lg-6 col-md-6 ">
            <label htmlFor="" className="input__label">
              Course Category
            </label>
            <Field
              name="courseCategory"
              options={courseCategory}
              component={CustomSelect}
              placeholder="Select a role"
              isMulti={false}
            />
          </div>
          <div className="col-lg-6 col-md-6 ">
            <label htmlFor="" className="input__label">
              Course Sub-Category
            </label>
            <Field
              name="courseSubCategory"
              options={courseCategory}
              component={CustomSelect}
              placeholder="Select a role"
              isMulti={false}
            />
          </div>
          <div className="col-12">
            <TextField
              label="Course Topic"
              name="courseTopic"
              placeholder="Your Course topic"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <label htmlFor="" className="input__label">
              Course Languages
            </label>
            <Field
              name="courseLanguage"
              options={courseCategory}
              component={CustomSelect}
              placeholder="--Select--"
              isMulti={false}
            />
          </div>
          <div className="col-lg-3 col-md-6 ">
            <label htmlFor="" className="input__label">
              Subtitle Languages (Optional)
            </label>
            <Field
              name="subtitleLanguage"
              options={courseCategory}
              component={CustomSelect}
              placeholder="--Select--"
              isMulti={false}
            />
          </div>
          <div className="col-lg-3 col-md-6 ">
            <label htmlFor="" className="input__label">
              Course Level
            </label>
            <Field
              name="courseLevel"
              options={courseCategory}
              component={CustomSelect}
              placeholder="--Select--"
              isMulti={false}
            />
          </div>
          <div className="col-lg-3 col-md-6 ">
            <label htmlFor="" className="input__label">
              Duration
            </label>
            <Field
              name="duration"
              options={courseCategory}
              component={CustomSelect}
              placeholder="--Select--"
              isMulti={false}
            />
          </div>
          <div className="flex-between mt-5">
            <Button variant="secondary">cancel</Button>
            <Button variant="primary" type="submit">
              Save & Next
            </Button>
          </div>
        </div>
      </Formik> */
}
