import { api } from '../../../Shared/Controllers/AxiosControllers';
import { IFormUser } from '../interface/HomeInterfaceForm';

export const postUserControllers = async ( user: IFormUser ) => {
  const response = await api.post( '/users', user );
  return response.data;
};

export const getUsersController = async () => {
  const response = await api.get( '/users' );
  return response.data;
};

export const updateUserController = async ( user: IFormUser ) => {
  const response = await api.put( `/users/${user.id}`, user );
  return response.data;
};

export const deleteUserController = async ( id: number ) => {
  const response = await api.delete( `/users/${id}` );
  return response.data;
};

export const getUserController = async ( id: number ) => {
  const response = await api.get( `/users/${id}` );
  return response.data;
};
