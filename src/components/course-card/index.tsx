import React from 'react';
import Heading from 'components/heading';

interface Props {
  types?: 'cursoul' | 'normal';
  imageUrl: string;
  courseTag: string;
  title: string;
  descriptions?: string;
  isPrice?: 'yes' | 'no';
  price?: string;
  isCourseDisplay?: 'yes' | 'no';
  isIcon?: 'yes' | 'no';
  icon?: JSX.Element;
}

const CourseCard: React.FC<Props> = ({
  types,
  imageUrl,
  isCourseDisplay,
  courseTag,
  isIcon,
  isPrice,
  title,
  descriptions,
  price,
  icon,
}) => {
  return (
    <div
      className={
        types === 'cursoul'
          ? 'course__card__container__cursol p-2 my-3'
          : 'course__card__container p-2 my-3'
      }
    >
      <img
        src={imageUrl}
        alt="course_image"
        className="home__page__course__card__image"
      />
      <div className="p-2">
        <h6 className="course__card__descriptions__tag mb-3">{courseTag} </h6>
        <Heading title={title} />

        <p className="course__card__description">{descriptions}</p>
        <div className="flex-between">
          <div>
            {isPrice && (
              <span>
                <span className="course__card__price">{price ?? 0}</span>
                <span> / </span>
              </span>
            )}

            {isCourseDisplay && (
              <span className="course__card__price__tag">Courses</span>
            )}
          </div>
          {isIcon && (
            <div className="homepage__course__next pointer flex-center ">
              {icon}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CourseCard);
