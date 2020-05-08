import { AppState } from 'src/reducers/store';
import { useSelector } from 'react-redux';

export const useCurrentUser = () => {
  const currentUser = useSelector((state: AppState) => state.auth.currentUser);

  return { currentUser };
};
