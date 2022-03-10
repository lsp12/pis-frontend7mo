import {
  Card, Grid,
} from '@mui/material';
import React from 'react';
import FormUser from '../Components/FormsModule/FormUser';
import { TableUser } from '../Components/Tables/TableUser';
import { IFormUser } from '../interface/HomeInterfaceForm';

function Home() {
  const data:IFormUser[] = [
    {
      id: 1,
      name: 'Juan',
      password: '123456',
      password2: '123456',
    },
    {
      id: 2,
      name: 'Pedro',
      password: '123456',
      password2: '123456',
    },
  ];
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
            <Grid item xs={12} md={8} pb={5}>
              <TableUser data={data} />
            </Grid>
          </Grid>
        </Card>
      </Grid>

    </Grid>
  );
}

export default Home;
