import {
  Card, Grid,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Store/Hooks';
import DeleteDialog from '../Components/Dialog/DeleteDialog';
import FormUser from '../Components/FormsModule/FormUser';
import { TableUser } from '../Components/Tables/TableUser';
import { getUsers } from '../Reducer/UserReducer';

function Home() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector(( state ) => state.user );

  useEffect(() => {
    dispatch( getUsers());
  }, [dispatch]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Card sx={{ boxShadow: 3 }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
          >
            <Grid item xs={12} md={4}>
              <FormUser />
            </Grid>
            <DeleteDialog />
            <Grid item xs={12} md={8} pb={5}>
              <TableUser data={users} />
            </Grid>
          </Grid>
        </Card>
      </Grid>

    </Grid>
  );
}

export default Home;
