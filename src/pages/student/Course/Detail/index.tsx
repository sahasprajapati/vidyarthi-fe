import Icon from 'assets/svg/Icon';
import { DashBoardScrollContent, Tabs, VideoPlayer } from 'components';
import Button from 'components/button';
import Card from 'components/card';
import Heading from 'components/heading';
import MainHeading from 'components/main-heading';
import TextField from 'components/text-field';
import { AdminLayout } from 'containers';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  fetchMyCourseById,
  updateMyLecture,
} from 'redux/actions/course.action';
import { Course, CourseReducer, Lecture } from 'redux/reducers/course.reducer';
import Service from 'setup/network';
import * as Yup from 'yup';
interface IProps {}

const REVIEW_VALIDATION = Yup.object().shape({
  message: Yup.string().required(),
  rate: Yup.number(),
});
const StudentCourse: React.FC<IProps> = ({}) => {
  const courseData: CourseReducer = useSelector((state: any) => state.course);
  const userData = JSON.parse(localStorage.getItem('user') ?? 'null');

  const [selectedLecture, setSelectedLecture] = useState({
    sectionId: 0,
    lectureId: 0,
  });
  const [currentLecture, setCurrentLecture] = useState<Lecture>();
  const {
    selectedCourse,
  }: {
    selectedCourse: Course;
  } = courseData ?? {};
  const { courseId } = useParams();
  const dispatch: any = useDispatch();

  const handleCheckVideo = (val: any) => {
    console.log(val);
  };
  const [activeIndex, setActiveIndex] = React.useState(0);
  const courseCompletion = 10;
  const tabData = [
    {
      id: 0,
      label: 'About',
    },
    // {
    //   id: 1,
    //   label: 'Course Notes',
    // },
    // {
    //   id: 2,
    //   label: 'New Notes',
    // },
    {
      id: 3,
      label: 'Reviews',
    },
  ];

  const totalLength = selectedCourse?.sections?.reduce((acc, section) => {
    return acc + section?.lectures?.length;
  }, 0);
  useEffect(() => {
    if (selectedLecture) {
      if (selectedCourse?.sections?.length > 0) {
        const sections = selectedCourse.sections;
        if (sections[selectedLecture?.sectionId]?.lectures?.length > 0) {
          const lecture =
            sections[selectedLecture?.sectionId]?.lectures[
              selectedLecture?.lectureId
            ];
          setCurrentLecture(lecture);
        }
      }
    }
  }, [selectedLecture]);

  useEffect(() => {
    dispatch(fetchMyCourseById(courseId ? +courseId : 0));
  }, [courseId]);
  return (
    <AdminLayout variant="not-spacing">
      <div className="row bg-white border-top">
        <div className="col-md-8 col-sm-12 py-3 px-4">
          <MainHeading title={selectedCourse?.title ?? ''} />
          <div className="flex">
            <div className="flex align-items-center mb-3">
              <span className="me-2 mt-1">
                {selectedCourse?.ratingsAvg ?? 5}
              </span>
              {Array(Math.round(selectedCourse?.ratingsAvg ?? 5))
                .fill('')
                .map((e, i) => (
                  <div className="mx-1" key={i}>
                    <Icon name="star" fill="#FAA307" height={18} width={18} />
                  </div>
                ))}
              {Array(Math.round(5 - (selectedCourse?.ratingsAvg ?? 5)))
                .fill('')
                .map((e, i) => (
                  <div className="mx-1" key={i}>
                    <Icon name="star" fill="grey" height={18} width={18} />
                  </div>
                ))}
            </div>
            <p className="fs-18 color-light-black mx-3">
              Review ({selectedCourse?.ratingsUserCount ?? 0})
            </p>
            <p className="fs-18 color-light-black text-capitalize">
              {selectedCourse?.coursesOnStudents?.length ?? 0} students
            </p>
          </div>
          <VideoPlayer
            VideoSource={currentLecture?.video ?? ''}
            handleProgress={handleCheckVideo}
            thumbnail={selectedCourse?.thumbnail ?? ''}
          />
          <div className="max-w-half mt-4">
            <Heading title={currentLecture?.name ?? ''} className="px-2" />
            <div className="max-w-half">
              <Tabs
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                tabData={tabData}
              />
            </div>

            {activeIndex === 0 && (
              <div className="tab-content">
                <div className="tab-pane fade show active mt-4 mx-4">
                  {currentLecture?.description ?? selectedCourse?.description}
                </div>
              </div>
            )}
            {activeIndex === 1 && (
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  my name is prashant
                </div>
              </div>
            )}
            {activeIndex === 2 && (
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  my name is khanal
                </div>
              </div>
            )}
            {activeIndex === 3 && (
              <div>
                <div className="flex p-4">
                  <div className="mt-4">
                    <Heading title={selectedCourse?.ratingsAvg ?? 5} />
                    <div className="flex ">
                      {Array(Math.round(selectedCourse?.ratingsAvg ?? 5))
                        .fill('')
                        .map((_, i) => (
                          <div className="me-1" key={i}>
                            <Icon
                              name="star"
                              fill="#FAA307"
                              width={24}
                              height={24}
                            />
                          </div>
                        ))}
                      {Array(Math.round(5 - (selectedCourse?.ratingsAvg ?? 5)))
                        .fill('')
                        .map((_, i) => (
                          <div className="me-1" key={i}>
                            <Icon
                              name="star"
                              fill="grey"
                              width={24}
                              height={24}
                            />
                          </div>
                        ))}
                    </div>
                    <h6 className="f-16 mt-3 flex-1">Course Rating</h6>
                  </div>
                  <div className="flex-col">
                    {Array(5)
                      .fill('')
                      .map((e, i) => {
                        const groupRating =
                          selectedCourse?.groupedRatings?.find(
                            (rating) => rating?.rate === i + 1
                          );
                        const percent =
                          (groupRating?._count?.rate ?? 0) /
                          (selectedCourse?.ratings?.length ?? 1);
                        return (
                          <div className="flex" key={i}>
                            <div className="ms-4">
                              <progress
                                value={percent * 500}
                                max={500}
                                className="progress__container"
                              ></progress>
                            </div>

                            <div className="flex ms-5">
                              {Array(Math.round(i + 1 ?? 0))
                                .fill('')
                                .map((_, i) => (
                                  <div className="me-1" key={i}>
                                    <Icon name="star" fill="#FAA307" />
                                  </div>
                                ))}
                              <h6>{`${
                                groupRating?._count?.rate ?? 0
                              } Review`}</h6>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div>
                  <Formik
                    enableReinitialize
                    initialValues={{
                      message: '',
                      rate: 5,
                    }}
                    validationSchema={REVIEW_VALIDATION}
                    validateOnMount
                    onSubmit={async (val) => {
                      const user = JSON.parse(
                        localStorage.getItem('user') ?? 'null'
                      );
                      const value = {
                        ...val,
                        courseId: selectedCourse?.id,
                        userId: user?.id,
                      };
                      try {
                        const res = await Service.post(`/rating`, value);
                        if (res) toast.success('Added Review');
                      } catch (err: any) {
                        toast.error(err);
                      }
                    }}
                  >
                    {({ isValid, values, setFieldValue }) => (
                      <Form>
                        <Card>
                          <div className="row">
                            <div className="col-12 mt-3">
                              <TextField
                                label=""
                                name="message"
                                placeholder="Write you review..."
                              />
                            </div>

                            <div className="mt-4">
                              <div className="flex flex-end">
                                <div className="flex ">
                                  {Array(Math.round(values?.rate ?? 5))
                                    .fill('')
                                    .map((_, i) => (
                                      <div
                                        className="me-1"
                                        key={i}
                                        onClick={() => {
                                          setFieldValue('rate', i + 1);
                                        }}
                                      >
                                        <Icon
                                          name="star"
                                          fill="#FAA307"
                                          width={24}
                                          height={24}
                                        />
                                      </div>
                                    ))}
                                  {Array(Math.round(5 - (values?.rate ?? 5)))
                                    .fill('')
                                    .map((_, i) => (
                                      <div
                                        className="me-1"
                                        key={i}
                                        onClick={() => {
                                          setFieldValue(
                                            'rate',
                                            values?.rate + i + 1
                                          );
                                        }}
                                      >
                                        <Icon
                                          name="star"
                                          fill="grey"
                                          width={24}
                                          height={24}
                                        />
                                      </div>
                                    ))}
                                </div>
                                <Button
                                  variant="primary"
                                  type="submit"
                                  isValid={isValid}
                                >
                                  Add Review
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Form>
                    )}
                  </Formik>
                </div>

                {/* Reviews comment */}
                <aside className="p-4 my-5">
                  <Heading title="Reviews" />
                  {selectedCourse?.ratings?.map((e) => (
                    <div className="" key={e?.id}>
                      <div className="flex my-3" key={e?.id}>
                        <div className="course__detail__review__container">
                          <img
                            src="https://images.unsplash.com/photo-1564460576398-ef55d99548b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                            alt="review-logo"
                          />
                        </div>
                        <div className="flex-col ms-3">
                          <h6 className="f-18-f500 pt-3">{e?.ratedBy?.name}</h6>
                          <div className="flex">
                            <h6 className="f-18-f500">{e?.rate} </h6>
                            <div className="flex mb-3 ms-3">
                              {Array(Math.round(e?.rate))
                                .fill('')
                                .map((_, i) => (
                                  <div className="me-1" key={i}>
                                    <Icon
                                      name="star"
                                      fill="#FAA307"
                                      width={24}
                                      height={24}
                                    />
                                  </div>
                                ))}
                              {Array(Math.round(5 - e?.rate))
                                .fill('')
                                .map((_, i) => (
                                  <div className="me-1" key={i}>
                                    <Icon
                                      name="star"
                                      fill="grey"
                                      width={24}
                                      height={24}
                                    />
                                  </div>
                                ))}
                            </div>
                            <div className="pipe mb-3 ms-3" />
                            <p className="text-capitalize f-18 opacity-half ms-3">
                              {new Date(e?.createdAt).getMonth() + ' month ago'}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="f-18">{e.message}</p>
                    </div>
                  ))}
                </aside>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-4 col-sm-12 bg-white vh-100 overflow-auto border-left py-3 px-4">
          <Heading title="About the course" />
          <div className="flex">
            <img
              src="https://cdn.pixabay.com/photo/2022/08/06/12/34/corsac-fox-7368515_960_720.jpg"
              alt="avatar"
              width={48}
              height={48}
              className="rounded-circle"
            />
            <div className="ms-2 mt-3">
              <h6 className="m-0 p-0">
                {selectedCourse?.instructors?.length > 0 &&
                  selectedCourse?.instructors[0]?.name}
              </h6>
              <p className="color-light-black mt-2">
                {selectedCourse?.instructors?.length > 0 &&
                  selectedCourse?.instructors[0]?.occupation}
              </p>
            </div>
          </div>
          <p className="color-light-black mt-1 mb-5">
            {selectedCourse?.description}
          </p>
          <Heading title="Course Completion" className="mb-4" />
          <div className="flex justify-content-between mb-1">
            <p className="m-0 pb-1 f-14">
              {' '}
              {Math.min(
                selectedCourse?.myCourse?.progress?.progressPercentage,
                1
              ) * 100}
              % Completed
            </p>
            <p className="m-0 pb-1 f-14">{`${
              selectedCourse?.myCourse?.progress?.completedLectures?.length ?? 0
            }/${totalLength ?? 1}`}</p>
          </div>
          <div className="progress" style={{ height: 5 }}>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{
                width:
                  selectedCourse?.myCourse?.progress?.progressPercentage * 500,
              }}
            />
          </div>
          <DashBoardScrollContent title="">
            {selectedCourse?.sections?.map((section, index) => {
              return (
                <>
                  <div
                    className="flex justify-content-between mt-5 me-3"
                    key={index}
                  >
                    <div className="flex align-items-center">
                      <h6>{index + 1}</h6>
                      <p className="f-14 px-4 text-capitalize">
                        {section?.name}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      paddingLeft: '2px',
                    }}
                  >
                    {section?.lectures?.map((lecture, lecIndex) => {
                      return (
                        // <div
                        //   className="flex justify-content-between mt-5 me-3"
                        //   key={index}
                        // >
                        <div
                          className="flex justify-content-between  me-3 pointer"
                          key={lecIndex}
                          onClick={() => {
                            try {
                              setSelectedLecture({
                                sectionId: index,
                                lectureId: lecIndex,
                              });
                              dispatch(
                                updateMyLecture(selectedCourse?.id, lecture?.id)
                              );
                            } catch (err: any) {
                              toast.error(err);
                            }
                          }}
                        >
                          <div className="px-4 flex align-items-center">
                            <h6>o</h6>
                            <p className="f-14 px-4 text-capitalize">
                              {lecture?.name}
                            </p>
                          </div>
                          {selectedCourse?.myCourse?.progress?.completedLectures?.findIndex(
                            (lec) => lec.id === lecture.id
                          ) >= 0 && <Icon name="tick" />}
                        </div>

                        // </div>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </DashBoardScrollContent>
        </div>
      </div>
    </AdminLayout>
  );
};

export default React.memo(StudentCourse);
