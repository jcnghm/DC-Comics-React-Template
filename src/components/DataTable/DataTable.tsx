import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridSelectionModel } from '@material-ui/data-grid';
import { server_calls } from '../../api'; 
import { useGetData } from '../../custom-hooks';
import { Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@material-ui/core'; 
import { HeroForm } from '../../components/HeroForm';

const columns: GridColDef[] = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 110 
    },
    { 
      field: 'name', 
      headerName: 'Hero Name', 
      width: 150, 
      editable: true, 
    },
    { 
      field: 'alias', 
      headerName: 'Alias', 
      width: 140, 
      editable: true, 
    },
    { 
      field: 'powers', 
      headerName: 'Powers', 
      width: 400, 
      editable: true, 
    },
    {
      field: 'comics_appeared_in',
      headerName: 'Comics Appeared In',
      type: 'number',
      width: 210,
      editable: true,   
    },
    {
      field: 'base_of_operations',
      headerName: 'Base of Operations',
      sortable: true,
      width: 200,
      editable: true,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`,  **USE THIS TO MERGE MULTIPLE ITEMS
    },
  ];




  export const DataTable =  () => {
  
    let { heroData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])
  
    let handleOpen = () => {
      setOpen(true)
    }
  
    let handleClose = () => {
      setOpen(false)
    }
  
    let deleteData = () => {
      server_calls.delete(`${gridData[0]}`)
      getData()
    }
  
  
      return (
          <div style={{ height: 400, width: '100%' }}>
            <h2>Heroes Recruited</h2>
            <DataGrid rows={heroData} columns={columns} pageSize={5} checkboxSelection onSelectionModelChange={(newSelectionModel) => {
              setData(newSelectionModel);
            }}
            selectionModel={gridData}
            {...heroData}/>
  
          <Button onClick={handleOpen} color='primary' variant='contained'>Update</Button>
          <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
  
            {/*Dialog Pop Up begin */}
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Your Hero</DialogTitle>
            <DialogContent>
              <DialogContentText>Hero: {gridData[0]}</DialogContentText>
                <HeroForm id={`${gridData[0]}`}/>
            </DialogContent>
            <DialogActions>
              <Button onClick = {handleClose} color="primary">Cancel</Button>
            </DialogActions>
          </Dialog>
          </div>
        );
  }