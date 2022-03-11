import {
  Grid, IconButton, InputAdornment, TextField, Button, FormControl, InputLabel, FilledInput, FormHelperText, Container, CardHeader,
} from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { userFormSchema } from '../../validator/formUser';
import { useInitialHomeForm } from '../../hooks/homeHooks';
import { IFormUser } from '../../interface/HomeInterfaceForm';
import { useAppDispatch } from '../../../../Store/Hooks';
import { postUser, updateUser } from '../../Reducer/UserReducer';

function FormUser() {
  const [showPassword, setShowPassword] = React.useState( false );
  const dispatch = useAppDispatch();
  const handleClickShowPassword = () => {
    setShowPassword( !showPassword );
  };

  const handleMouseDownPassword = ( event: React.MouseEvent<HTMLButtonElement> ) => {
    event.preventDefault();
  };

  const {
    getFieldProps, errors, touched, handleSubmit,
  } = useFormik<IFormUser>({
    initialValues: useInitialHomeForm(),
    enableReinitialize: true,
    validationSchema: userFormSchema,
    onSubmit: ( FormValues ) => {
      if ( FormValues.id ) {
        dispatch( updateUser( FormValues ));
      } else {
        dispatch( postUser( FormValues ));
      }
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="false"
    >
      <Container>
        <Grid
          container
          direction="row"
          spacing={2}
        >
          <CardHeader title="Registro de usuarios para servicio de Streming" />
          <Grid item xs={12} md={12}>
            <TextField
              variant="filled"
              fullWidth
              label="Nombre de usuario"
              {...getFieldProps( 'username' )}
              error={touched.username && !!errors.username}
              helperText={touched.username && errors.username}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <FormControl variant="filled" fullWidth>
              <InputLabel htmlFor="filled-adornment-password">Contraseña</InputLabel>
              <FilledInput
                type={showPassword ? 'text' : 'password'}
                fullWidth
                {...getFieldProps( 'password' )}
                error={!!( errors.password && touched.password )}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}
              />
              <FormHelperText error>{touched.password && errors.password}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <FormControl variant="filled" fullWidth>
              <InputLabel htmlFor="filled-adornment-password">Repite contraseña</InputLabel>
              <FilledInput
                type={showPassword ? 'text' : 'password'}
                {...getFieldProps( 'password2' )}
                error={touched.password2 && !!errors.password2}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}
              />
              <FormHelperText error={touched.password2 && !!errors.password2}>{errors.password2}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit">Enviar</Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
}

export default FormUser;
