import { useAppSelector } from '../../../Store/Hooks';

export const useInitialHomeForm = () => {
  const { user } = useAppSelector(( state ) => state.home );
  return {
    name: user?.name || '',
    password: '',
    password2: '',
  };
};
