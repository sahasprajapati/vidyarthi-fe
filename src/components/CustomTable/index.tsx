import React, { ReactNode } from 'react';
import DataTable from 'react-data-table-component';

interface Props {
  title: string;
  loading?: boolean;
  data: any[];
  columns: any[];
  totalRows?: number;
  handlePerRowsChange?: () => void;
  handlePageChange?: () => void;
  selectableRows?: boolean;
  toggleCleared?: boolean;
  contextActions?: ReactNode | ReactNode[];
  handleRowSelected?: () => void;
  pagination?: boolean;
  paginationServer?: boolean;
}

const CustomTable: React.FC<Props> = ({
  data,
  title,
  loading,
  columns,
  handlePageChange,
  handlePerRowsChange,
  totalRows,
  toggleCleared,
  handleRowSelected,
  contextActions,
  selectableRows,
  paginationServer,
  pagination,
}) => {
  return (
    <DataTable
      title={title}
      columns={columns}
      data={data}
      progressPending={loading}
      pagination={pagination}
      paginationServer={paginationServer}
      paginationTotalRows={totalRows}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      selectableRows={selectableRows}
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
    />
  );
};

export default React.memo(CustomTable);
