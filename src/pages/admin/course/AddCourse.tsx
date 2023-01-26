/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect } from 'react';
import * as Yup from 'yup';
import { AdminLayout } from 'containers';
import Icon from 'assets/svg/Icon';
import Button from 'components/button';
import { defaultImage } from 'assets/images';
import {
  BorderBottom,
  CustomSelect,
  Editor,
  TextField,
  Tabs,
} from 'components';
import Card from 'components/card';
import { Field, FieldArray, Form, Formik } from 'formik';
import MainHeading from 'components/main-heading';
import Heading from 'components/heading';
import useFetch from 'hooks';
import Service from 'setup/network';
import toastAlert from 'utils/toast';
import { createCourse, updateCourse } from 'redux/actions/course.action';
import { useDispatch, useSelector } from 'react-redux';
import { CourseReducer } from 'redux/reducers/course.reducer';
import { useNavigate } from 'react-router-dom';

// "title": "string",
//   "subtitle": "string",
//   "categoryId": 0,
//   "subCategoryId": 0,
//   "topic": "string",
//   "language": "ENGLISH",
//   "subtitleLanguage": "ENGLISH",
//   "level": "BEGINNER",

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Title must be at least 5 character long.')
    .max(80),
  subtitle: Yup.string()
    .min(5, 'sub title must be at least 5 character long.')
    .required('Subtitle is required.'),
  categoryId: Yup.string().required(''),
  subCategoryId: Yup.string().required(''),
  topic: Yup.string()
    .min(5, 'Topic must be at least 5 character long ')
    .required('course is required.'),
  language: Yup.string().required(''),
  subtitleLanguage: Yup.string(),
  level: Yup.string().required(''),
  // time: Yup.string().required('Duration is required'),
});
const FORM_VALIDATION_STEP_TWO = Yup.object().shape({
  description: Yup.string()
    .min(5, 'Title must be at least 5 character long.')
    .required('Description is required'),
  skills: Yup.array()
    .min(1, 'skills must be at least one')
    .max(8, 'Must not be more than 8')
    .required('Subtitle is required.'),
  learnableContent: Yup.array().required('learnable content is required.'),
});

const courseLanguage = [
  { name: 'ENGLISH', id: 'ENGLISH' },
  { name: 'NEPALI', id: 'NEPALI' },
];
const courseSubLanguage = [
  { name: 'ENGLISH', id: 'ENGLISH' },
  { name: 'NEPALI', id: 'NEPALI' },
];
const courseLevel = [
  { name: 'BEGINNER', id: 'BEGINNER' },
  { name: 'MEDITATE', id: 'MEDITATE' },
  { name: 'ADVANCED', id: 'ADVANCED' },
];

const tabData = [
  {
    id: 0,
    label: 'Basic Information',
  },
  {
    id: 1,
    label: 'Preview Details',
  },
  {
    id: 2,
    label: 'Course Content',
  },
  // {
  //   id: 2,
  //   label: 'step 3',
  // },
  // {
  //   id: 3,
  //   label: 'step 4',
  // },
];

const AddCourse: React.FC = () => {
  const dispatch: any = useDispatch();
  const inputImageRef = React.useRef<any>(null);
  const inputVideoRef = React.useRef<any>(null);
  const inputSkillImageRef = React.useRef<any>(null);
  const inputAddMore = React.useRef<any>(null);
  const [previewImageUrl, setPreviewImageUrl] = React.useState<any>('');
  const [descriptionsText, setDescriptionsText] = React.useState<string>('');
  const [previewImage, setPreviewImage] = React.useState<any>(null);
  const [courseCategoryId, setCourseCategoryId] = React.useState<number>(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [videoSourceUrl, setVideoSourceUrl] = React.useState('');
  const [videoProgressReport, setVideoProgressReport] = React.useState(0);
  const [values, setValues] = React.useState({
    firstStepCourseId: '',
  });
  const courseData: CourseReducer = useSelector((state: any) => state.course);

  const navigate = useNavigate();
  const { data: categoryData } = useFetch('/category');
  const { data: subCategoryData } = useFetch(
    `/category/sub/${courseCategoryId}`
  );

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
  const initValuesOne = {
    description: '',
    learnableContent: [''],
    skills: [''],
  };

  const handleUploadImageFile = async (e: any, setFieldValue: any) => {
    const file = new FormData();
    setPreviewImageUrl(e?.target?.files[0]);

    file.append('file', e?.target?.files[0]);
    try {
      const request = await Service.post('/upload/file', file);
      setFieldValue('thumbnail', request?.data?.data?.url);
    } catch (error) {}
  };

  const configs = {
    onUploadProgress: function (progressEvent: any) {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      setVideoProgressReport(percentCompleted);
    },
  };

  const handleChangeVideo = async (
    event: React.ChangeEvent<HTMLInputElement> | any,
    setFieldValue: any
  ) => {
    const file = new FormData();
    const files = event?.target?.files[0];
    file.append('file', files);
    // const videoUrl = URL.createObjectURL(files);
    // setVideoSourceUrl(videoUrl);
    try {
      const request = await Service.post('/upload/video', file, configs);
      console.log('this is requrest', request);
      setVideoSourceUrl(request?.data?.data?.url);
      setFieldValue('trailer', request?.data?.data?.url);
    } catch (error) {}
  };

  console.log('discriptions text', videoSourceUrl);

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
  const previewVideoDiv = React.useMemo(
    () => (
      <video
        src={videoSourceUrl}
        width="230px"
        height="160px"
        controls
        autoPlay
      />
    ),
    [previewImage]
  );

  const handleStepOneSubmit = async (val: any, { resetForm }: any) => {
    try {
      const request = await Service.post('/course', val);
      if (request?.status === 201) {
        toastAlert('success', request?.data?.message);
        resetForm({ val: '' });
      }
    } catch (err: any) {
      toastAlert('error', err?.response?.data?.message);
    }

    console.log('Sahas data', val);

    // if (courseData?.selectedCourse?.id) {
    //   dispatch(
    //     updateCourse({
    //       ...val,
    //       id: courseData?.selectedCourse?.id,
    //     })
    //   );
    // } else {
    //   dispatch(
    //     createCourse({
    //       ...val,
    //     })
    //   );
    // }
  };

  const handleSecondStep = (val: any) => {
    // navigate('/admin-course');
    console.log('this si values', val);
  };

  useEffect(() => {}, []);

  // console.log('Category options', categoryOptions);
  return (
    <AdminLayout>
      <Tabs
        tabData={tabData}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      {activeIndex === 0 && (
        <Formik
          initialValues={{
            title: courseData?.selectedCourse?.title,
            subtitle: courseData?.selectedCourse?.subtitle,
            categoryId: courseData?.selectedCourse?.categoryId + '',
            subCategoryId: courseData?.selectedCourse?.subCategoryId + '',
            topic: courseData?.selectedCourse?.topic,
            language: courseData?.selectedCourse?.language,
            subtitleLanguage: courseData?.selectedCourse?.subtitleLanguage,
            level: courseData?.selectedCourse?.level,
          }}
          validationSchema={FORM_VALIDATION}
          validateOnMount
          onSubmit={handleStepOneSubmit}
        >
          {({ isSubmitting, isValid, values }) => (
            <>
              <Form>
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
                      name="subtitle"
                      placeholder="Your course Subtitle"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Field
                      name="categoryId"
                      options={categoryData?.data}
                      component={CustomSelect}
                      placeholder="Select.."
                      isMulti={false}
                      label="Course Category"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 ">
                    <Field
                      name="subCategoryId"
                      options={subCategoryData?.data}
                      component={CustomSelect}
                      placeholder="Select.."
                      isMulti={false}
                      label="Course Sub-Category"
                    />
                  </div>

                  <div className="col-12">
                    <TextField
                      label="Course Topic"
                      name="topic"
                      placeholder="Your Course topic"
                    />
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <Field
                      name="language"
                      options={courseLanguage}
                      component={CustomSelect}
                      placeholder="Select.."
                      isMulti={false}
                      label="Course Languages"
                    />
                  </div>
                  <div className="col-lg-3 col-md-6 ">
                    <Field
                      name="subtitleLanguage"
                      options={courseLanguage}
                      component={CustomSelect}
                      placeholder="Select.."
                      isMulti={false}
                      label="Subtitle Languages (Optional)"
                    />
                  </div>
                  <div className="col-lg-3 col-md-6 ">
                    <Field
                      name="level"
                      options={courseLevel}
                      component={CustomSelect}
                      placeholder="Select.."
                      isMulti={false}
                      label="Course Level"
                    />
                  </div>
                  {/* <div className="col-lg-3 col-md-6 mt-2">
                    <TextField
                      label={'Duration'}
                      name="time"
                      placeholder="course duration"
                    />
                  </div> */}
                  <div className="flex flex-end my-5">
                    <Button
                      variant="primary"
                      type="submit"
                      isSubmitting={isSubmitting}
                      isValid={isValid}
                      // onClick={() => setActiveIndex(activeIndex + 1)}
                    >
                      Save & Next
                    </Button>
                  </div>
                </div>
              </Form>
              {setCourseCategoryId(+values?.categoryId)}
            </>
          )}
        </Formik>
      )}
      {activeIndex === 1 && (
        <Formik
          initialValues={{
            thumbnail: '',
            trailer: '',
            description: '',
            learnableContent: [''],
            skills: [''],
          }}
          // validationSchema={FORM_VALIDATION_STEP_TWO}
          // validateOnMount
          onSubmit={handleSecondStep}
        >
          {({ isSubmitting, isValid, values, setFieldValue }) => (
            <>
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
                            name=""
                            id=""
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={(e) =>
                              handleUploadImageFile(e, setFieldValue)
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
                            1200x800 pixels or 12:8 Ratio. Supported format:
                            .jpg, .jpeg, or .png
                          </p>
                          <Button
                            variant="secondary"
                            type="button"
                            onClick={() => inputImageRef.current.click()}
                            isValid={true}
                          >
                            <div className="flex">
                              <span className="me-3">Upload Image</span>
                              <Icon name="upload" />
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* course thumbnail */}
                    <div className="col-md-6">
                      <h6 className="course__upload__adv__info__title">
                        Course Trailer
                      </h6>
                      <div className="flex">
                        <div className="me-3">
                          <input
                            hidden
                            ref={inputVideoRef}
                            type="file"
                            name="thumbnail"
                            accept=".mp4"
                            id=""
                            onChange={(e) =>
                              handleChangeVideo(e, setFieldValue)
                            }
                          />
                          {videoSourceUrl ? (
                            previewVideoDiv
                          ) : (
                            <img src={defaultImage} width={230} height={160} />
                          )}
                        </div>

                        <div className="flex-col">
                          <p className="course__thumbnail__text">
                            Upload your course Thumbnail here.
                            <span className="font-weight-bold">
                              Important guidelines:
                            </span>
                            1200x800 pixels or 12:8 Ratio. Supported format:
                            .jpg, .jpeg, or .png
                          </p>
                          {videoProgressReport > 0 ? (
                            <p>Uploading {videoProgressReport} % </p>
                          ) : (
                            <Button
                              type="button"
                              variant="secondary"
                              onClick={() => inputVideoRef.current.click()}
                              isValid={true}
                            >
                              <div className="flex">
                                <span className="me-3">Upload Image</span>
                                <Icon name="upload" />
                              </div>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mb-5">
                      <div className="mt-5">
                        <h6 className="course__upload__adv__info__title">
                          Course Descriptions
                        </h6>
                        <textarea
                          name="description"
                          className="w-100 p-3 rounded"
                          cols={100}
                          rows={10}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <BorderBottom />
                  <div className="my-5">
                    <div className="flex-between">
                      <h6 className="course__upload__adv__info__title my-5">
                        Learnable Content
                      </h6>

                      <Button variant="outline" type="button" isValid>
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
                    <FieldArray name="learnableContent">
                      {({ insert }) =>
                        values.learnableContent.map((_: any, idx: number) => (
                          <>
                            <TextField
                              label={idx + 1}
                              name={`learnableContent.${idx}`}
                              placeholder="What you will teach in this course..."
                            />
                            <button
                              type="button"
                              className="secondary"
                              onClick={() => insert(idx, '')}
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
                      <Button variant="outline" type="button" isValid>
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
                      {({ insert }) =>
                        values.skills.map((_: any, idx: number) => (
                          <>
                            <TextField
                              label={idx + 1}
                              name={`skills.${idx}`}
                              placeholder="What you will teach in this course..."
                              key={idx}
                            />
                            <button
                              type="button"
                              className="secondary"
                              onClick={() => insert(idx, '')}
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
                  <div className="flex flex-end my-5">
                    <Button
                      variant="primary"
                      type="submit"
                      // isSubmitting={isSubmitting}
                      // isValid={isValid}
                      isValid={true}
                    >
                      Save
                    </Button>
                  </div>
                </Card>
              </Form>
            </>
          )}
        </Formik>
      )}
      {activeIndex === 2 && (
        <div className="">
          <div className="my-4">
            <Heading title={'Curriculum'} />
          </div>
          <div className="flex-between my-5">
            <div className="flex">
              <Icon name="menu" height={20} />
              <p>Section 01: section name</p>
            </div>

            <div className="flex">
              <Icon name="trash" height={20} />
              <Icon name="plus" height={20} />
            </div>
          </div>

          <Formik
            initialValues={{
              thumbnail: '',
              trailer: '',
              description: '',
              learnableContent: [''],
              skills: [''],
            }}
            // validationSchema={FORM_VALIDATION_STEP_TWO}
            // validateOnMount
            onSubmit={handleSecondStep}
          >
            {({ isSubmitting, isValid, values, setFieldValue }) => (
              <>
                <Form>
                  <Card>
                    <div className="row">{/* course thumbnail */}</div>
                    <BorderBottom />
                    <div className="my-5">
                      <div className="flex-between">
                        <h6 className="course__upload__adv__info__title my-5">
                          Learnable Content
                        </h6>

                        <Button variant="outline" type="button" isValid>
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
                      <FieldArray name="learnableContent">
                        {({ insert }) =>
                          values.learnableContent.map((_: any, idx: number) => (
                            <>
                              <TextField
                                label={idx + 1}
                                name={`learnableContent.${idx}`}
                                placeholder="What you will teach in this course..."
                              />
                              <button
                                type="button"
                                className="secondary"
                                onClick={() => insert(idx, '')}
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
                        <Button variant="outline" type="button" isValid>
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
                        {({ insert }) =>
                          values.skills.map((_: any, idx: number) => (
                            <>
                              <TextField
                                label={idx + 1}
                                name={`skills.${idx}`}
                                placeholder="What you will teach in this course..."
                                key={idx}
                              />
                              <button
                                type="button"
                                className="secondary"
                                onClick={() => insert(idx, '')}
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
                    <div className="flex flex-end my-5">
                      <Button
                        variant="primary"
                        type="submit"
                        // isSubmitting={isSubmitting}
                        // isValid={isValid}
                        isValid={true}
                      >
                        Save
                      </Button>
                    </div>
                  </Card>
                </Form>
              </>
            )}
          </Formik>
        </div>
      )}
    </AdminLayout>
  );
};

export default React.memo(AddCourse);
