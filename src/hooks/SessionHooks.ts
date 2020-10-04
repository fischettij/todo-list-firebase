import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SessionContext, User, EMPTY_USER } from '../context/SessionContext';
import { ROUTES } from '../Routes';

// Mock constant user
const LOGIN_DATA: User = {
  name: 'Jon Snow',
  email: 'jonSnow@mail.com',
  id: 1,
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
};

// Types
export type LoginValues = {
  username: string;
  password: string;
};

const useLogin = () => {
  const { actions } = useContext(SessionContext);
  const { setUser } = actions;

  const { push } = useHistory();

  const login = (values: LoginValues) => {
    localStorage.setItem('user', JSON.stringify(values));
    setUser(LOGIN_DATA);
    push(ROUTES.home);
  };

  return { login };
};

const useLogout = () => {
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

export { useLogin, useLogout };
