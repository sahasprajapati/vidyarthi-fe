/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { AdminLayout } from 'containers';
import Icon from 'assets/svg/Icon';
import Button from 'components/button';
import { defaultImage } from 'assets/images';
import { BorderBottom, CustomSelect, TextField, Tabs } from 'components';
import Card from 'components/card';
import { Field, FieldArray, Form, Formik } from 'formik';
import MainHeading from 'components/main-heading';
import Heading from 'components/heading';
import useFetch from 'hooks';
import Service from 'setup/network';
import toastAlert from 'utils/toast';
import {
  createCourse,
  selectCourse,
  updateCourse,
} from 'redux/actions/course.action';
import { useDispatch, useSelector } from 'react-redux';
import { CourseReducer } from 'redux/reducers/course.reducer';
import { useNavigate } from 'react-router-dom';
import CurriculumSection from './Curriculum/CurriculumSection';
import CategoryModal from 'components/category/Category';
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
  {
    id: 3,
    label: 'Publish Course',
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
  const [isChildCategory, setIsChildCategory] = useState(false);
  const [initalCategoryValue, setInitialCategoryValue] = useState({
    name: '',
    description: '',
  });
  const [showCategoryModal, setShowCategoryModal] = useState(false);

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
  const [searchText, setSearchText] = React.useState('');
  const [activeInstructor, setActiveInstructor] = React.useState(0);

  const navigate = useNavigate();
  const { data: categoryData } = useFetch('/category');
  const { data: usersData } = useFetch('/users/instructor');
  const { data: subCategoryData } = useFetch(
    `/category/sub/${courseCategoryId}`
  );

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
      setVideoSourceUrl(request?.data?.data?.url);
      setFieldValue('trailer', request?.data?.data?.url);
    } catch (error) {}
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
  const previewVideoDiv = React.useMemo(
    () => <video src={videoSourceUrl} width="230px" height="160px" controls />,
    [previewImage, videoSourceUrl]
  );

  const handleStepOneSubmit = async (val: any, { resetForm }: any) => {
    if (courseData?.selectedCourse?.id) {
      try {
        const request = await Service.patch(
          `/course/${courseData?.selectedCourse?.id}`,
          val
        );
        if (request?.status === 200) {
          toastAlert('success', request?.data?.message);
          dispatch(selectCourse(request?.data?.data));
          setActiveIndex(activeIndex + 1);
        }
      } catch (err: any) {
        toastAlert('error', err?.response?.data?.message);
      }
    } else {
      try {
        const request = await Service.post('/course', val);

        if (request?.status === 201) {
          toastAlert('success', request?.data?.message);
          dispatch(selectCourse(request?.data?.data));
          setActiveIndex(activeIndex + 1);
        }
      } catch (err: any) {
        toastAlert('error', err?.response?.data?.message);
      }
    }

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

  const handleSecondStep = async (val: any) => {
    if (courseData?.selectedCourse?.id) {
      try {
        const request = await Service.patch(
          `/course/${courseData?.selectedCourse?.id}`,
          val
        );
        if (request?.status === 200) {
          toastAlert('success', request?.data?.message);
          dispatch(selectCourse(request?.data?.data));
          setActiveIndex(activeIndex + 1);
        }
      } catch (err: any) {
        toastAlert('error', err?.response?.data?.message);
      }
    }
  };

  const handleThirdStep = async (val: any) => {
    if (courseData?.selectedCourse?.id) {
      try {
        const request = await Service.patch(
          `/course/${courseData?.selectedCourse?.id}`,
          val
        );
        if (request?.status === 200) {
          toastAlert('success', request?.data?.message);
          dispatch(selectCourse(request?.data?.data));
          setActiveIndex(activeIndex + 1);
        }
      } catch (err: any) {
        toastAlert('error', err?.response?.data?.message);
      }
    }
  };

  useEffect(() => {}, []);

  const filterInstructorData = usersData.data
    ? usersData?.data.filter((item: { name: string }) => {
        if (searchText === '') {
          return item;
        } else {
          return item?.name.toLowerCase().includes(searchText.toLowerCase());
        }
      })
    : [];

  const handleInstructorChoose = (item: { name: string; id: number }) => {
    toastAlert('success', `${item?.name} instructor is selected`);
    setActiveInstructor(item.id);
  };

  const handleFourthStep = async (val: {
    welcomeMessage: string;
    congratulationMessage: string;
  }) => {
    if (courseData?.selectedCourse?.id) {
      try {
        const payload = {
          instructorIds: [activeInstructor],
          ...val,
        };

        const request = await Service.patch(
          `/course/${courseData?.selectedCourse?.id}`,
          payload
        );
        if (request?.status === 200) {
          toastAlert('success', request?.data?.message);
          dispatch(selectCourse(request?.data?.data));
          navigate('/admin-course');
        }
      } catch (err: any) {
        toastAlert('error', err?.response?.data?.message);
      }
    }
  };

  useEffect(() => {
    if (courseData?.selectedCourse?.instructors?.length > 0)
      setActiveInstructor(
        courseData?.selectedCourse?.instructors?.length > 0
          ? courseData?.selectedCourse?.instructors[0]?.id
          : activeInstructor
      );
  }, [courseData?.selectedCourse?.instructors]);

  return (
    <AdminLayout>
      <Card>
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
              price: courseData?.selectedCourse?.price,
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
                        isCreatable={true}
                        handleCreate={(inputValue: string) => {
                          setInitialCategoryValue({
                            name: inputValue,
                            description: '',
                          });
                          setIsChildCategory(false);
                          setShowCategoryModal(true);
                        }}
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
                        isCreatable={true}
                        handleCreate={(inputValue: string) => {
                          setInitialCategoryValue({
                            name: inputValue,
                            description: '',
                          });
                          setIsChildCategory(true);
                          setShowCategoryModal(true);
                        }}
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
                    <div className="col-lg-3 col-md-6 mt-2">
                      <TextField
                        label={'Price'}
                        name="price"
                        placeholder="Course Price"
                      />
                    </div>
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
              thumbnail: courseData?.selectedCourse?.thumbnail ?? '',
              trailer: courseData?.selectedCourse?.trailer ?? '',
              description: courseData?.selectedCourse?.description ?? '',
              learnableContent:
                courseData?.selectedCourse?.learnableContent?.length > 0
                  ? courseData?.selectedCourse?.learnableContent
                  : [''],
              skills:
                courseData?.selectedCourse?.skills?.length > 0
                  ? courseData?.selectedCourse?.skills
                  : [''],
            }}
            // validationSchema={FORM_VALIDATION_STEP_TWO}
            // validateOnMount
            onSubmit={handleSecondStep}
          >
            {({ isSubmitting, isValid, values, setFieldValue }) => {
              return (
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
                                  src={values?.thumbnail || defaultImage}
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
                              {values?.trailer ? (
                                <video
                                  src={values?.trailer}
                                  width="230px"
                                  height="160px"
                                  controls
                                />
                              ) : videoSourceUrl ? (
                                previewVideoDiv
                              ) : (
                                <img
                                  src={defaultImage}
                                  width={230}
                                  height={160}
                                />
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
                            values.learnableContent.map(
                              (_: any, idx: number) => (
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
                              )
                            )
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
                                onClick={() =>
                                  inputSkillImageRef.current.click()
                                }
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
                          Save & Next
                        </Button>
                      </div>
                    </Card>
                  </Form>
                </>
              );
            }}
          </Formik>
        )}
        {activeIndex === 2 && (
          <CurriculumSection
            handleSubmit={handleThirdStep}
            initialSection={courseData?.selectedCourse?.sections}
          />
        )}

        {activeIndex === 3 && (
          <Formik
            initialValues={{
              welcomeMessage: courseData?.selectedCourse?.welcomeMessage ?? '',
              congratulationMessage:
                courseData?.selectedCourse?.congratulationMessage ?? '',
            }}
            // validationSchema={FORM_VALIDATION_STEP_TWO}
            // validateOnMount
            onSubmit={handleFourthStep}
          >
            {({ isSubmitting, isValid, values, setFieldValue }) => (
              <Form>
                <Heading title={'Publish Course'} className="my-5" />
                <BorderBottom />
                <div className="mt-5">
                  <h6 className="f-f-24">Message</h6>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-5">
                      <div className="mt-5">
                        <h6 className="course__upload__adv__info__title">
                          welcome Message
                        </h6>
                        <Field
                          as="textarea"
                          name="welcomeMessage"
                          className="w-100 p-3 rounded"
                          cols={50}
                          rows={5}
                          placeholder="Enter course starting message here..."
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-5">
                      <div className="mt-5">
                        <h6 className="course__upload__adv__info__title">
                          congratulations Message
                        </h6>
                        <Field
                          as="textarea"
                          name="congratulationMessage"
                          className="w-100 p-3 rounded"
                          cols={50}
                          rows={5}
                          placeholder="Enter course starting message here..."
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h6 className="f-24">Add Instructor</h6>
                      <div className="mt-4">
                        <div
                          className="flex course__search__container mb-5"
                          style={{ border: '1px solid #00000033' }}
                        >
                          <Icon name="search" />
                          <input
                            type="text"
                            placeholder="Search for instructor..."
                            className="form-control shadow-none bg-transparent outline-none border-none"
                            value={searchText}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => setSearchText(event?.target?.value)}
                          />
                        </div>
                        <div className="row">
                          {filterInstructorData ? (
                            filterInstructorData
                              .slice(0, 4)
                              .map(
                                (item: {
                                  name: string;
                                  image: string;
                                  id: number;
                                }) => (
                                  <div
                                    className="col-6 mb-4"
                                    key={item?.id}
                                    onClick={() => handleInstructorChoose(item)}
                                  >
                                    <div
                                      className="flex px-3 py-2 pointer"
                                      style={{
                                        background: '#F4F5F9',
                                        borderRadius: 4,
                                        border: `${
                                          activeInstructor === item?.id
                                            ? '1px solid #6b8e4e'
                                            : 'none'
                                        }`,
                                      }}
                                    >
                                      <img
                                        src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg"
                                        alt=""
                                        width={50}
                                        height={50}
                                        style={{
                                          objectFit: 'cover',
                                          borderRadius: '50px',
                                        }}
                                      />
                                      <p className="ms-3 mt-2">
                                        {' '}
                                        {item?.name}{' '}
                                      </p>
                                    </div>
                                  </div>
                                )
                              )
                          ) : (
                            <p>No instructor found with is name</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-end">
                  <Button
                    type="submit"
                    variant="primary"
                    isSubmitting={isSubmitting}
                    isValid={isValid}
                  >
                    Save
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </Card>
      {showCategoryModal && (
        <CategoryModal
          handleChange={(value) => {}}
          handleModal={() => {
            setShowCategoryModal(false);
          }}
          initialValue={initalCategoryValue}
          isChild={isChildCategory}
        />
      )}
    </AdminLayout>
  );
};

export default React.memo(AddCourse);
