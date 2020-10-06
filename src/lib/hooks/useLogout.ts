import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SessionContext } from 'lib/providers/SessionProvider/context';
import { EMPTY_USER } from 'lib/constants';
import { ROUTES } from 'Routes';

export const useLogout = () => {
  const { actions } = useContext(SessionContext);
  const { setUser } = actions;

  const { push } = useHistory();

  const logout = () => {
    localStorage.removeItem('user');
    setUser(EMPTY_USER);
    push(ROUTES.home);
  };

  return { logout };
};
