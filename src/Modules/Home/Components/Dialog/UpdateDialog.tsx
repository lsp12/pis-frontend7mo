import {
  Dialog, DialogTitle, DialogActions, Button,
} from '@mui/material';
import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../Store/Hooks';
import { useDeleteByIdUser } from '../../hooks/DialogHooks';
import { updateUser } from '../../Reducer/UserReducer';
import { setDialog } from '../../slice/User.slice';

export function UpdateDialog() {
  const { dialog } = useAppSelector(( state ) => state.user );
  const dispatch = useAppDispatch();
  const values = useDeleteByIdUser();

  const HandleClose = () => {
    dispatch( setDialog( !dialog ));
  };

  const HandleCloseDelete = () => {
    dispatch( setDialog( !dialog ));
    if ( values.id ) {
      dispatch( updateUser( values ));
    } else {
      console.log( 'no hay id' );
    }
  };

  return (
    <div>
      <Dialog
        open={dialog}
        onClose={HandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Estas seguro de eliminar este registro?
        </DialogTitle>
        <DialogActions>
          <Button onClick={HandleClose}>Cancelar</Button>
          <Button onClick={HandleCloseDelete} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
