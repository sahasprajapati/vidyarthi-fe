import Icon from 'assets/svg/Icon';
import MainHeading from 'components/MainHeading';
import { AdminLayout } from 'containers';
import React from 'react';
import formatMoney from 'utils/formatMoney';

const AdminCourse: React.FC = () => {
  return (
    <AdminLayout>
      <MainHeading title="All Courses" />
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2">
          <label htmlFor="" className="label__heading mb-1">
            To Date
          </label>
          <div className="flex course__search__container">
            <Icon name="search" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for courses..."
              className="form-control shadow-none bg-transparent outline-none border-none"
            />
          </div>
        </div>
        {Array(4)
          .fill('')
          .map((e, i) => (
            <div className="col-lg-2 col-md-2 col-sm-6 col-12 mb-2" key={i}>
              <label htmlFor="" className="label__heading mb-1">
                To Date
              </label>
              <div className="flex-between course__filter__container">
                <select
                  name=""
                  id=""
                  className="form-control shadow-none bg-transparent outline-none border-none"
                >
                  <option value="hhd">djf</option>
                  <option value="dfd">djkjf</option>
                  <option value="dfjfkj">fdfdkj</option>
                </select>
                <Icon name="down-arrow" />
              </div>
            </div>
          ))}
        {/* course listing */}
        {Array(15)
          .fill('')
          .map((e, i) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-3" key={i}>
              <div className="course__card__container">
                <div className="course__card__image__container">
                  <img
                    src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/10/23170637/Graphic-Design-Courses.jpg"
                    alt="course"
                  />
                </div>
                <div className="course__card__wrapper">
                  <h6 className="course__card__descriptions__tag mb-3">
                    Design course
                  </h6>
                  <h6 className="course__card__descriptions__title">
                    Premiere Pro CC for Beginners: Video Editiing in Premiere
                  </h6>
                  <div className="course__card__info__container flex-between my-3">
                    <div className="flex">
                      <Icon name="down-arrow" />
                      <h6 className="course__card__info__title ms-2 mt-2">
                        4.5
                      </h6>
                    </div>
                    <div className="flex">
                      <Icon name="dashboard" />
                      <h6 className="course__card__info__count">
                        121 students
                      </h6>
                    </div>
                  </div>
                  <div className="flex-between course__card__bottom__container pb-3 pt-2">
                    <h6 className="course__card__info__price">
                      {formatMoney('3000')}{' '}
                    </h6>
                    <div className="course__card__info__options">..</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </AdminLayout>
  );
};

export default React.memo(AdminCourse);
