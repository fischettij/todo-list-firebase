import React, { FC, useState, useMemo } from 'react';

import { SessionContext } from './context';
import { User } from 'lib/types';

// Helpers
const safelyGetObjectFromLocalStorage = (key: string) => JSON.parse(localStorage.getItem(key) || '{}');

export const SessionProvider: FC = ({ children }) => {
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
