import React from 'react';
import Icon from 'assets/svg/Icon';
import { CustomTable } from 'components';
import Heading from 'components/Heading';
import { AdminLayout } from 'containers';
// import { TableColumn } from 'react-data-table-component';

// interface DataRow {
//   requestData: string;
//   instructorName: string;
//   method: string;
//   amount: string;
//   status: string;
//   id: string | number;
// }

const AdminTransaction = () => {
  const [option, setOption] = React.useState<any>(null);
  const columns: any = React.useMemo(
    () => [
      {
        name: 'S.N',
        selector: (_: any, i: number) => i + 1,
      },
      {
        name: 'Request Date',
        selector: (row: { requestData: string }) => row.requestData,
      },
      {
        name: 'Instructor Name',
        selector: (row: { imageUrl: string; name: string }) =>
          console.log('roeww', row),
      },
      {
        name: 'Payment Method',
        selector: (row: { method: string }) => row.method,
      },
      {
        name: 'Amount',
        selector: (row: { amount: string }) => row.amount,
      },
      {
        name: 'Status',
        selector: (row: { status: string }) => row.status,
      },
      //       z-index: 999;
      //     /* top: 90%; */
      //     /* padding: 0px 16px; */
      //     border: 1px solid;
      //     height: 119px;
      //     width: 200px;
      //     left: -117%;
      //     /* background: gray; */
      //     background: #FFFFFF;
      //     border: 1px solid #F4F5F9;
      //     border-radius: 8px;
      //     /* left: 82.03%; */
      //     /* right: 4.41%; */
      //     /* top: 117.15%; */
      //     /* bottom: 52.03%; */
      // }
      {
        selector: (row: any, idx: number) => (
          <div key={idx} className="">
            <div
              className="course__card__info__options pointer position-relative px-1"
              onClick={() => {
                option === idx ? setOption(null) : setOption(idx);
              }}
            >
              <Icon name="dots" />
            </div>
            {option === idx && (
              <div className="position-absolute">
                <div className="ms-3">
                  <h6 className="course__options__dropdown__list">
                    View Course
                  </h6>
                  <h6 className="course__options__dropdown__list">
                    Edit Course
                  </h6>
                  <h6 className="course__options__dropdown__list">
                    Delete Course
                  </h6>
                </div>
              </div>
            )}
          </div>
        ),
      },
    ],
    [option]
  );

  const data = [
    {
      requestData: 'June 1, 08:22 AM',
      instructorName: {
        name: 'test',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      method: 'Mastercard',
      amount: '300000.99',
      id: '2',
      status: 'completed',
    },
    {
      requestData: 'June 1, 08:22 AM',
      instructorName: {
        name: 'test',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      method: 'Mastercard',
      amount: '300000.99',
      id: '2',
      status: 'completed',
    },
    {
      requestData: 'June 1, 08:22 AM',
      instructorName: {
        name: 'test',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      method: 'Mastercard',
      amount: '300000.99',
      id: '2',
      status: 'completed',
    },
    {
      requestData: 'June 1, 08:22 AM',
      instructorName: {
        name: 'test',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      method: 'Mastercard',
      amount: '300000.99',
      id: '2',
      status: 'completed',
    },
    {
      requestData: 'June 1, 08:22 AM',
      instructorName: {
        name: 'test',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      method: 'Mastercard',
      amount: '300000.99',
      id: '2',
      status: 'completed',
    },
    {
      requestData: 'June 1, 08:22 AM',
      instructorName: {
        name: 'test',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      method: 'Mastercard',
      amount: '300000.99',
      id: '2',
      status: 'completed',
    },
    {
      requestData: 'June 1, 08:22 AM',
      instructorName: {
        name: 'test',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      method: 'Mastercard',
      amount: '300000.99',
      id: '2',
      status: 'completed',
    },
    {
      requestData: 'June 1, 08:22 AM',
      instructorName: {
        name: 'test',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      method: 'Mastercard',
      amount: '300000.99',
      id: '2',
      status: 'completed',
    },
    {
      requestData: 'June 1, 08:22 AM',
      instructorName: {
        name: 'test',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      method: 'Mastercard',
      amount: '300000.99',
      id: '2',
      status: 'pending',
    },
    {
      requestData: 'June 1, 08:22 AM',
      instructorName: {
        name: 'test',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      method: 'Mastercard',
      amount: '300000.99',
      id: '2',
      status: 'pending',
    },
    {
      requestData: 'June 1, 08:22 AM',
      instructorName: {
        name: 'test',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      method: 'Mastercard',
      amount: '300000.99',
      id: '2',
      status: 'pending',
    },
    {
      requestData: 'June 1, 08:22 AM',
      instructorName: {
        name: 'test',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      method: 'Mastercard',
      amount: '300000.99',
      id: '2',
      status: 'pending',
    },
    {
      requestData: 'June 1, 08:22 AM',
      instructorName: {
        name: 'test',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
      },
      method: 'Mastercard',
      amount: '300000.99',
      id: '2',
      status: 'completed',
    },
  ];

  return (
    <AdminLayout>
      <Heading title={`Transaction (${data.length.toString()})`} />
      <CustomTable
        data={data}
        columns={columns}
        title=""
        pagination
        paginationServer
        selectableRows
        highlightOnHover
        pointerOnHover
      />
    </AdminLayout>
  );
};

export default AdminTransaction;
