import React, { FC, useState, useMemo } from 'react';

import { User } from 'lib/types';
import { SessionContext } from './context';

// Helpers
const safelyGetObjectFromLocalStorage = (key: string) => JSON.parse(localStorage.getItem(key) || '{}');

const SessionProvider: FC = ({ children }) => {
  const storedUser = safelyGetObjectFromLocalStorage('user');
  const [user, setUser] = useState<User>(storedUser);
  const isAuthenticated = useMemo(() => Boolean(user?.token), [user]);

  const state = {
    user,
    isAuthenticated,
  };

  const actions = {
    setUser,
  };
  return <SessionContext.Provider value={{ state, actions }}>{children}</SessionContext.Provider>;
};

export default SessionProvider;
