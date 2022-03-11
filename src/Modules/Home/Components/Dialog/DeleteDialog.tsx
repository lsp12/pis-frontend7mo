import {
  Dialog, DialogTitle, DialogActions, Button,
} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../../../Store/Hooks';
import { useDeleteByIdUser } from '../../hooks/DialogHooks';
import { deleteUser } from '../../Reducer/UserReducer';
import { setDialog } from '../../slice/User.slice';

export default function DeleteDialog( ) {
  const { dialog } = useAppSelector(( state ) => state.user );
  const dispatch = useAppDispatch();
  const { id } = useDeleteByIdUser();

  const HandleClose = () => {
    dispatch( setDialog( !dialog ));
  };

  const HandleCloseDelete = () => {
    dispatch( setDialog( !dialog ));
    if ( id ) {
      dispatch( deleteUser( id ));
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
