import React from 'react';
import { Accordion, CourseCard, NavBar } from 'components';
import { Footer } from 'containers';
import Icon from 'assets/svg/Icon';
import Button from 'components/button';
import Heading from 'components/heading';
import {
  courseCurriculum,
  courseReview,
  learnCourse,
  learnCourseSecond,
  ratingData,
  // ratingData,
} from './courseDetailData';
import { BgCourse } from 'assets/images';
import { Course, CourseReducer } from 'redux/reducers/course.reducer';
import { useSelector } from 'react-redux';
import course from 'pages/admin/course';
// import VideoTest from './VideoTest.mp4';

const CourseDetail: React.FC = () => {
  const courseData: CourseReducer = useSelector((state: any) => state.course);
  const {
    selectedCourse,
  }: {
    selectedCourse: Course;
  } = courseData ?? {};
  const rating = 4.7;
  const review = 1023;
  const totalStudent = 20327;
  return (
    <main className="bg-main">
      <div
        className="w-100"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BgCourse})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '125vh',
        }}
      >
        <div className="container">
          <NavBar variant="white" />
          <div className="mt-3">
            <h6 className="course__detail__title">
              {selectedCourse?.title?.toUpperCase()}
            </h6>
            <div className="flex mt-4">
              {Array(Math.round(rating))
                .fill('')
                .map((e, i) => (
                  <div className="mx-1" key={i}>
                    <Icon name="star" fill="#FAA307" />
                  </div>
                ))}
              <span className="ms-2 pt-1 color-white f-18"> {rating}/5 </span>
              <span className="ms-2 pt-1 color-white f-18">
                ({review} Reviews)
              </span>
              <span className="ms-2 pt-1 color-white f-18">
                {totalStudent} Student
              </span>
            </div>
            <div className="flex mt-4">
              <div className="course__detail__instructor__image">
                <img
                  src="https://images.unsplash.com/photo-1564460576398-ef55d99548b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="instructor-image"
                />
              </div>
              <h6 className="f-24 color-white ms-4 pt-2">Prashant Khanal</h6>
            </div>
            <div className="flex mt-4">
              <div className="me-4">
                <Button variant="primary" type="button">
                  <div className="flex py-1">
                    <span className="me-2">Add to Wishlist</span>
                    <Icon name="plus" fill="#ffff" width={24} height={24} />
                  </div>
                </Button>
              </div>
              <Button variant="outline" type="button">
                <div className="flex py-1 px-2">
                  <Icon name="share" /> <span className="ms-2">Share</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-5">
          <div className="col-md-8">
            <Heading title="Course Description" />
            <p className="course__dec__text mt-4">
              {selectedCourse?.description}
            </p>

            {/* Course Descriptions */}
            <aside className="my-5">
              <Heading title="What you will Learn in this course" />
              <div className="course__detail__card mt-3">
                <div className="row ">
                  <div className="col-md-6">
                    {selectedCourse?.learnableContent?.map((content, i) => {
                      return (
                        <div className="flex" key={i}>
                          <Icon name="tick" />
                          <p className="mt-4 ms-3 fs-14"> {content} </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>
            {/* Curriculum */}
            <aside className="my-5">
              <Heading title="Curriculum" />
              <div className="course__detail__card">
                {courseCurriculum.map((e, i) => (
                  <div className="course__curriculum__container" key={i}>
                    <Accordion title={e?.title} variant="small">
                      {e?.content.map((el, i) => (
                        <div className="flex-between mt-4 mx-1 " key={i}>
                          <p className="f-16">{el.title}</p>
                          <p className="course__detail__length">{el?.length}</p>
                        </div>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </aside>
            {/* Rating */}
            <aside className="my-5">
              <Heading title="Rating" />
              <div className="flex">
                <div className="mt-4">
                  <Heading title={rating} />
                  <div className="flex ">
                    {Array(Math.round(rating))
                      .fill('')
                      .map((_, i) => (
                        <div className="me-1" key={i}>
                          <Icon name="star" fill="#FAA307" />
                        </div>
                      ))}
                  </div>
                  <h6 className="f-16 mt-3 flex-1">Course Rating</h6>
                </div>
                <div className="flex-col">
                  {ratingData.map((e, i) => (
                    <div className="flex" key={i}>
                      <div className="ms-4">
                        <progress
                          value={e?.minValue}
                          max={e?.maxValue}
                          className="progress__container"
                        ></progress>
                      </div>

                      <div className="flex ms-5">
                        {Array(Math.round(e?.star))
                          .fill('')
                          .map((_, i) => (
                            <div className="me-1" key={i}>
                              <Icon name="star" fill="#FAA307" />
                            </div>
                          ))}
                        <h6>{e?.title}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/*  */}
            </aside>
            {/* Reviews comment */}
            <aside className="my-5">
              <Heading title="Reviews" />
              {courseReview.map((e) => (
                <div className="" key={e?.id}>
                  <div className="flex my-3" key={e?.id}>
                    <div className="course__detail__review__container">
                      <img
                        src="https://images.unsplash.com/photo-1564460576398-ef55d99548b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt="review-logo"
                      />
                    </div>
                    <div className="flex-col ms-3">
                      <h6 className="f-18-f500 pt-3">{e?.name}</h6>
                      <div className="flex">
                        <h6 className="f-18-f500">{e?.ratingPoint} </h6>
                        <div className="flex mb-3 ms-3">
                          {Array(Math.round(e?.rating))
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
                        </div>
                        <div className="pipe mb-3 ms-3" />
                        <p className="text-capitalize f-18 opacity-half ms-3">
                          1 Month ago
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="f-18">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{' '}
                  </p>
                </div>
              ))}
            </aside>
          </div>
          <div className="col-md-4">
            <h5>hello</h5>
          </div>
        </div>
        <aside className="my-5">
          <Heading title="Suggested for you" />
          <div className="row">
            {Array(4)
              .fill('')
              .map((_, i) => (
                <div className="col-lg-3" key={i}>
                  <CourseCard
                    isCourseDisplay="yes"
                    title="How to become a good designer"
                    descriptions="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid harum sequi vero obcaecati, reiciendis dignissimos culpa quisquam non odio veritatis."
                    courseTag="Design Course"
                    price="$22"
                    imageUrl="https://images.unsplash.com/photo-1557804483-ef3ae78eca57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
                    icon={<Icon name="arrow-right" />}
                  />
                </div>
              ))}
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
};

export default React.memo(CourseDetail);

//  {
//    ratingData.map((e, i) => (
//      <div className="flex-col" key={i}>
//        <div className="ms-4">
//          <div className="">
//            <progress
//              value={e?.minValue}
//              max={e?.maxValue}
//              className="progress__container"
//            ></progress>
//          </div>
//        </div>
//        <div className="flex ms-5">
//          {Array(Math.round(e?.star))
//            .fill('')
//            .map((_, i) => (
//              <div className="me-1" key={i}>
//                <Icon name="star" fill="#FAA307" />
//              </div>
//            ))}
//          {e?.title}
//        </div>
//      </div>
//    ));
//  }
