import * as Yup from 'yup';

export const userFormSchema = Yup.object().shape({
  username: Yup.string().required( 'Usuario es requerido' ),
  password: Yup.string().required( 'Se requiere contraseña' ),
  password2: Yup.string().oneOf([Yup.ref( 'password' ), null], 'Las contraseñas deben coincidir' ),
});
