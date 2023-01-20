import Icon from 'assets/svg/Icon';
import { Table } from 'components';
import Heading from 'components/heading';
import { AdminLayout } from 'containers';
import React from 'react';

interface IProps {}

const StudentCart: React.FC<IProps> = ({}) => {
  const tableColumn = [
    {
      Header: 'Course',
      accessor: 'course',
      Cell: (row: any) => (
        <div className="d-flex">
          <img
            src={row?.row?.values?.course?.imageUrl}
            alt="course"
            width={150}
            height={114}
            className="rounded"
          />
          <div className="ms-3">
            <div className="flex cart-icon-container ">
              {Array(5)
                .fill('')
                .map((_, idx) => (
                  <div className="me-1" key={idx}>
                    <Icon name="star" width={19} height={19} />
                  </div>
                ))}
              <p className="color-light-black f-14 mt-4 ms-2">
                {row?.row?.values?.course?.rating}/5
              </p>
            </div>
            <h5 className="cart-table-heading mt-2">
              {row?.row?.values?.course?.title}
            </h5>
            <p className="cart-author-name mt-2">
              <span className="color-light-black f-12"> Course by: </span>
              {row?.row?.values?.course?.instructorName}
            </p>
          </div>
        </div>
      ),
    },
    {
      Header: 'Price',
      accessor: 'price',
      Cell: (row: any) => (
        <p className="cart-table-price mt-5 px-2">${row?.row?.values?.price}</p>
      ),
    },
    {
      Header: 'action',

      Cell: (row: any) => (
        <div className="flex mt-5">
          <Icon name="wish-list" fill="red" width={27} height={24} />
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

  return (
    <AdminLayout>
      <div className="row">
        <Heading title={'My Cart(02)'} className="mt-2 mb-4" />
        <div className="col-md-9">
          <div className="">
            {/* table */}
            <Table tableColumn={tableColumn} tableData={tableData} />
          </div>
        </div>
        <div className="col-md-3">cart</div>
      </div>
    </AdminLayout>
  );
};

export default React.memo(StudentCart);
