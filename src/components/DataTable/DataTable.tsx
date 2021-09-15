import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 110 },
    { field: 'name', headerName: 'Hero Name', width: 150, editable: true, },
    { field: 'alias', headerName: 'Alias', width: 140, editable: true, },
    {
      field: 'number_comics',
      headerName: 'Comics Appeared In',
      type: 'number',
      width: 220,
      editable: true,   
    },
    {
      field: 'base_of_operations',
      headerName: 'Base of Operations',
    //   description: 'This column has a value getter and is not sortable.',  ** THIS IS NEEDED WHEN USING valueGetter()
      sortable: true,
      width: 200,
      editable: true,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`,  **USE THIS TO MERGE MULTIPLE ITEMS
    },
  ];

  const rows = [
    { id: 1, name: 'Superman', alias: 'Clark Kent', number_comics: 35, base_of_operations: 'Metropolis' },
    { id: 2, name: 'Batman', alias: 'Bruce Wayne', number_comics: 42, base_of_operations: 'Gotham City' },
    { id: 3, name: 'Green Arrow', alias: 'Oliver Queen', number_comics: 45, base_of_operations: 'Star City' },
  ];




  export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Heroes in Inventory</h2>
          <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
      );
}