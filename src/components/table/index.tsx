import React from 'react';
import { useTable, usePagination } from 'react-table';

interface IProps {
  tableData: any[];
  tableColumn: any;
  notPadding?: boolean;
  noPagination?: boolean;
}

const Table: React.FC<IProps> = ({
  tableData,
  tableColumn,
  notPadding = false,
  noPagination = false,
}) => {
  const data = React.useMemo(() => (tableData ? tableData : []), [tableData]);
  const columns = React.useMemo(() => tableColumn, []);
  const tableInstance: any = useTable(
    {
      data,
      columns,
    },
    usePagination
  );

  const {
    headerGroups,
    getTableBodyProps,
    page,
    prepareRow,
    getTableProps,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    pageCount,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;
  console.log('table', data);
  return (
    <div>
      <div className="overflow-auto relative bg-white rounded-4 p-2 mb-5">
        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups.map((headerGroup: any, i: number) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                {headerGroup.headers.map((column: any, idx: number) => (
                  <th
                    {...column.getHeaderProps()}
                    key={idx}
                    scope="col"
                    className={`${
                      notPadding ? 'table-padding-10' : 'table-padding-30'
                    }`}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="table-body-container">
            {page?.length > 0 ? (
              page.map((row: any, i: number) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={i} className="table-body">
                    {row.cells.map((cell: any, idx: number) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          key={idx}
                          className={`${
                            notPadding ? 'table-padding-10' : 'table-padding-30'
                          }`}
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5}>No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {!noPagination && (
        <div className="bg-white flex align-items-center flex-wrap justify-content-between mb-5 py-3 px-3 rounded">
          <div className="">
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              className="f-12 border-0 fw-500 color-primary pointer"
            >
              {'< First Page'}
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="f-12 border-0 fw-500 color-primary pointer mx-2"
            >
              {'< Back'}
            </button>
            <span className="mx-2">
              Page
              {pageIndex + 1} of {pageOptions.length}
            </span>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="f-12 border-0 fw-500 color-primary pointer mx-2"
            >
              {'Next >'}
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className="f-12 border-0 fw-500 color-primary pointer"
            >
              {'Last Page >'}
            </button>
          </div>

          <span className="flex table-pagination-input-container">
            Go to page:
            <input
              type="text"
              defaultValue={pageIndex + 1}
              placeholder="Jump to page number"
              className="table-pagination-input"
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />
          </span>
          <div className="table-pagination-select">
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
              className="border-0 p-2"
            >
              {[1, 5, 10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Table);
