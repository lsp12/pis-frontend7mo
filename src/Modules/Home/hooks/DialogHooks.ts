import { useAppSelector } from '../../../Store/Hooks';

export const useDeleteByIdUser = () => {
  const { user } = useAppSelector(( state ) => state.user );
  return {
    id: user?.id || 0,
    username: user?.username || '',
    password: user?.password || '',
  };
};
