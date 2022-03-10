import { Button, Container, Typography } from '@mui/material';
import {
  GridRowsProp, GridColDef, GridValueGetterParams, DataGrid,
} from '@mui/x-data-grid';
import { IFormUser } from '../../interface/HomeInterfaceForm';

interface tableProps {
  data: IFormUser[];
}

export function TableUser({ data }: tableProps ) {
  console.log( data );
  const handlerEditUser = ( id:number ) => {
    console.log( 'Editar', id );
  };
  const handlerDeleteUser = ( id:number ) => {
    console.log( 'Eliminar', id );
  };
  const rows: GridRowsProp = data.map(
    ( Data: IFormUser, index ) => ({
      id: Data?.id || index,
      name: Data.name,
      actions: Data,
    }),
  );

  const columns: GridColDef[] = [
    {
      headerName: 'ID',
      field: 'id',
      sortable: true,
      width: 100,
    },
    {
      headerName: 'Name User',
      field: 'name',
      sortable: true,
      width: 300,
    },
    {
      headerName: 'Acciones',
      field: 'actions',
      sortable: false,
      width: 200,
      cellClassName: 'actions',
      type: 'actions',
      renderCell: ( e: GridValueGetterParams ) => {
        const id = e.id as number;
        return (
          <div>
            <Button onClick={() => handlerEditUser( id )}>Editar</Button>
            <Button onClick={() => handlerDeleteUser( id )}>Eliminar</Button>
          </div>
        );
      },
    },
  ];
  return (
    <Container>
      <div style={{ height: 500, width: '100%' }}>
        <Typography variant="h6" gutterBottom>
          Reporte
        </Typography>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Container>
  );
}
