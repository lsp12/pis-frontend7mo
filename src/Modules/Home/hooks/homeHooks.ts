import { useAppSelector } from '../../../Store/Hooks';

export const useInitialHomeForm = () => {
  const { user } = useAppSelector(( state ) => state.user );
  return {
    id: user?.id || 0,
    username: user?.username || '',
    password: '',
    password2: '',
  };
};
