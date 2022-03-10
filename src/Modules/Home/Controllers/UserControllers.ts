import { api } from '../../../Shared/Controllers/AxiosControllers';
import { IFormUser } from '../interface/HomeInterfaceForm';

export const postUser = async ( user: IFormUser ) => {
  const response = await api.post( '/api/user', user );
  return response.data;
};
