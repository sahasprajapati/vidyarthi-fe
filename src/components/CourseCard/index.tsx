import React from 'react';
import Icon from 'assets/svg/Icon';
import Heading from 'components/Heading';

const CourseCard = () => {
  return (
    <div className="course__card__container p-2 my-3">
      <img
        src="https://images.unsplash.com/photo-1557804483-ef3ae78eca57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
        alt="course_image"
        className="home__page__course__card__image"
      />
      <div className="p-2">
        <h6 className="course__card__descriptions__tag mb-3">Design course</h6>
        <Heading title="How to become a good designer" />

        <p className="course__card__description">
          The DesignCourse is the best place to learn and understand UI
          fundamentals.
        </p>
        <div className="flex-between">
          <div className="">
            <span className="course__card__price">$25</span> <span>/</span>
            <span className="course__card__price__tag">Courses</span>
          </div>
          <div className="homepage__course__next pointer flex-center ">
            <Icon name="arrow-right" />
          </div>
        </div>
      </div>
      {/* details */}
    </div>
  );
};

export default CourseCard;
