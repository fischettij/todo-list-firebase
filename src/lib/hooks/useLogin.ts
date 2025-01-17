import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTES } from 'Routes';
import { SessionContext } from 'lib/providers/SessionProvider/context';
import { User } from 'lib/types';

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

export const useLogin = () => {
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
