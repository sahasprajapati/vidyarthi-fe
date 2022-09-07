import React from 'react';
import { useTable, usePagination } from 'react-table';

interface IProps {
  tableData: any[];
  tableColumn: any;
}

const Table: React.FC<IProps> = ({ tableData, tableColumn }) => {
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
  return (
    <div>
      <div className="mt-5 overflow-x-auto relative">
        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups.map((headerGroup: any, i: number) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                {headerGroup.headers.map((column: any, idx: number) => (
                  <th
                    {...column.getHeaderProps()}
                    key={idx}
                    scope="col"
                    className=""
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row: any, i: number) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={i}>
                  {row.cells.map((cell: any, idx: number) => {
                    return (
                      <td {...cell.getCellProps()} key={idx}>
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-5  d-flex align-items-center flex-wrap justify-content-between">
        <div className="">
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className=""
          >
            {'< First Page'}
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className=""
          >
            {'< Back'}
          </button>
          <span className="">
            Page
            {pageIndex + 1} of {pageOptions.length}
          </span>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className=""
          >
            {'Next >'}
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className=""
          >
            {'Last Page >'}
          </button>
        </div>

        <span>
          Go to page:
          <input
            type=""
            defaultValue={pageIndex + 1}
            placeholder="Jump to page number"
            className="form-control"
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
          />
        </span>
        <div className="">
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            className="form-control"
          >
            {[1, 5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Table);
