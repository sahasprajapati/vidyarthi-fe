import Icon from 'assets/svg/Icon';
import { Table } from 'components';
import CartCard from 'components/cart-card';
import Heading from 'components/heading';
import Modal from 'components/modal';
import PaymentMethod from 'components/payment-method';
import { AdminLayout } from 'containers';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Course } from 'redux/reducers/course.reducer';
import Service from 'setup/network';

interface IProps {}

const StudentCart: React.FC<IProps> = ({}) => {
  const [cart, setCart] = useState<{ course: Course[] }>();
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    Service.get('/profile/cart').then((res) => {
      setCart(res?.data?.data);
    });
  }, []);

  const handleOrder = async () => {
    try {
      const res = await Service.put('/profile/order');
      toast.success('Added course to cart');
    } catch (err: any) {
      toast.error(err);
    }
  };

  const tableColumn = [
    {
      Header: 'Course',
      Cell: (row: any) => {
        const course = row?.row?.original;
        const sum = course?.ratings?.reduce(
          (acc: number, curr: { rate: number }) => {
            return acc + curr?.rate;
          },
          0
        );
        const rateAvg = sum / (course?.ratings?.length || 1);
        return (
          <div className="d-flex">
            <img
              src={course?.thumbnail}
              alt="course"
              width={150}
              height={114}
              className="rounded"
            />
            <div className="ms-3">
              <div className="flex cart-icon-container ">
                {/* {Array(5)
                  .fill('')
                  .map((_, idx) => (
                    <div className="me-1" key={idx}>
                      <Icon name="star" width={19} height={19} />
                    </div>
                  ))} */}
                {Array(Math.round(rateAvg))
                  .fill('')
                  .map((_, i) => (
                    <div className="me-1" key={i}>
                      <Icon name="star" fill="#FAA307" width={24} height={24} />
                    </div>
                  ))}
                {Array(Math.round(5 - (rateAvg ?? 0)))
                  .fill('')
                  .map((_, i) => (
                    <div className="me-1" key={i}>
                      <Icon name="star" fill="grey" width={24} height={24} />
                    </div>
                  ))}
                <p className="color-light-black f-14 mt-4 ms-2">{rateAvg}/5</p>
              </div>
              <h5 className="cart-table-heading mt-2">{course?.title}</h5>
              <p className="cart-author-name mt-2">
                <span className="color-light-black f-12"> Course by: </span>
                {course?.instructors?.length > 0 &&
                  course?.instructors[0]?.name}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      Header: 'Price',
      Cell: (row: any) => {
        const course = row?.row?.original;
        return (
          <p className="cart-table-price mt-5 px-2">Rs. {course?.price}</p>
        );
      },
    },
    {
      Header: 'action',

      Cell: (row: any) => (
        <div className="flex mt-5">
          {/* <Icon name="wish-list" fill="red" width={27} height={24} /> */}
          <div className="mx-3">
            <Icon name="trash" width={27} height={24} />
          </div>
        </div>
      ),
    },
  ];

  const tableData = [
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
    {
      course: {
        rating: 4.7,
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg',
        title:
          'complete website responsive design: from Figma to webflow to website design',
        instructorName: 'Prashant Khanal',
      },
      price: '2000',
    },
  ];

  const courseSubTotal = cart?.course?.reduce((acc, course) => {
    return acc + (course?.price ?? 0);
  }, 0);
  return (
    <AdminLayout>
      <div className="row">
        <Heading
          title={`My Cart(${cart?.course?.length ?? 0})`}
          className="mt-2 mb-4"
        />
        <div className="col-md-9">
          <div className="">
            {/* table */}
            <Table tableColumn={tableColumn} tableData={cart?.course ?? []} />
          </div>
        </div>
        <div className="col-md-3">
          {(cart?.course?.length ?? 0) > 0 && (
            <CartCard
              variant="light-dark"
              couponDiscount="0%"
              subTotal={`Rs. ${courseSubTotal}`}
              total={`Rs. ${courseSubTotal}`}
              onClick={() => {
                setShowModal(true);
              }}
              label="Place Order"
            />
          )}
        </div>
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
                variant="light-dark"
                couponDiscount="0%"
                subTotal={`Rs. ${courseSubTotal}`}
                total={`Rs. ${courseSubTotal}`}
                onClick={() => {
                  handleOrder();
                }}
                label="Place Order"
              />
            </div>
          </div>
        </Modal>
      )}
    </AdminLayout>
  );
};

export default React.memo(StudentCart);
