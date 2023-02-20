import React from 'react';
import Icon from 'assets/svg/Icon';
import { CartCard, CourseCard, PaymentMethod } from 'components';
import MainHeading from 'components/main-heading';
import Modal from 'components/modal';
import { AdminLayout } from 'containers';

const StudentAchievements = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <AdminLayout>
      <div className="flex-between flex-wrap mb-3">
        <MainHeading title="Achievements & Certificates (02)" />
        <div className="flex mt-3">
          <label htmlFor="" className="label__course__search mb-1 me-2 ">
            Sort <span>by: </span>
          </label>
          <div className="flex-between course__filter__container p-0 m-0">
            <select
              name=""
              id=""
              className="form-control shadow-none bg-transparent outline-none border-none p-2"
            >
              <option value="">All Type</option>
              <option value="hhd">djf</option>
            </select>
            <div className="me-2">
              <Icon name="down-arrow" />
            </div>
          </div>
        </div>
        <div className="row my-4">
          {Array(2)
            .fill('')
            .map((e, i) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3 " key={i}>
                <CourseCard
                  types="normal"
                  title="How to become a good designer"
                  courseTag="Design Course"
                  imageUrl="https://images.unsplash.com/photo-1557804483-ef3ae78eca57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
                />
              </div>
            ))}
        </div>
        <div className="" onClick={() => setShowModal(!showModal)}>
          <h6>Click me</h6>
        </div>
        {showModal && (
          <Modal
            title="Payment Method"
            modalClose={() => setShowModal(!showModal)}
            onClick={() => setShowModal(!showModal)}
          >
            <div className="row">
              <div className="col-md-6">
                <PaymentMethod />
              </div>
              <div className="col-md-6">
                <CartCard
                  label="Place Order"
                  variant="light-dark"
                  tax="1058"
                  couponDiscount="20%"
                  subTotal="30000"
                  total="298357"
                />
              </div>
            </div>
          </Modal>
        )}
      </div>
    </AdminLayout>
  );
};

export default React.memo(StudentAchievements);
