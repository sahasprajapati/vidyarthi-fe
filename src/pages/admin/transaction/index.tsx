import React, { useEffect, useState } from 'react';
import Icon from 'assets/svg/Icon';
import Heading from 'components/heading';
import { AdminLayout } from 'containers';
import { Table } from 'components';
import Service from 'setup/network';
import { format } from 'date-fns';
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
  const tableColumn = [
    {
      Header: 'No',
      id: 'id',
      Cell: ({ row, flatRows }: any) => {
        return flatRows.indexOf(row) + 1;
      },
    },
    {
      Header: 'Request Date',
      accessor: 'requestData',
      maxWidth: 10,
    },
    {
      Header: 'Instructor Name',
      accessor: 'instructorName',
      Cell: (row: any) => (
        <div className="flex">
          <img
            src={row?.cell?.value?.imageUrl}
            alt="instructor-image"
            className="instructor-transaction-table-image"
          />
          <p className="instructor-transaction-table-image-name">
            {row?.cell?.value?.name}
          </p>
        </div>
      ),
    },
    {
      Header: 'Payment Method',
      accessor: 'method',
    },
    {
      Header: 'Amount',
      accessor: 'amount',
      Cell: (row: any) => (
        <p className="color-primary f-16 fw-500"> $ {row?.cell?.value}</p>
      ),
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: (row: any) =>
        row?.cell?.value === 'pending' ? (
          <p className="f-16 fw-500 color-yellow text-capitalize">
            {row?.cell?.value}
          </p>
        ) : (
          <p className="color-primary f-16 fw-500 text-capitalize">
            {row?.cell?.value}
          </p>
        ),
    },

    {
      Header: 'Action',
      Cell: ({ row, flatRows }: any) => (
        <div className="">
          <div className="position-relative">
            <Icon name="dots" height={15} width={15} />
            <select name="" id="" className="table-select">
              <option value="" className="course__options__dropdown__list">
                View course
              </option>
              <option value="" className="course__options__dropdown__list">
                View course
              </option>
              <option value="" className="course__options__dropdown__list">
                View course
              </option>
            </select>
          </div>
        </div>
      ),
    },
  ];

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

  const [transactions, setTransactions] = useState<any[]>([]);
  useEffect(() => {
    const url = `/transaction`;
    Service.get(url).then((res) => {
      setTransactions(res?.data?.data);
    });
  }, []);

  return (
    <AdminLayout>
      <Heading title={`Transaction (${data.length.toString()})`} />
      <Table
        tableData={
          transactions?.length > 0
            ? transactions?.map((transaction) => {
                return {
                  requestData: 'June 1, 08:22 AM',
                  id: transaction.id + '',
                  status: transaction.status,
                  method: transaction.medium,
                  amount: transaction.total,
                  instructorName: {
                    name: transaction?.paidTo?.name,
                    imageUrl:
                      'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_960_720.jpg',
                  },
                  date: format(
                    transaction.createdAt
                      ? new Date(transaction.createdAt)
                      : new Date(),
                    'dd-mm-yyyy'
                  ),
                };
              })
            : []
        }
        tableColumn={tableColumn}
      />
    </AdminLayout>
  );
};

export default AdminTransaction;
