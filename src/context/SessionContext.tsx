import React, { FC, createContext, useState, useMemo } from 'react';

// Types
export type User = {
  email: string;
  name: string;
  id: number;
  token: string;
};

type SessionContextValues = {
  state: {
    isAuthenticated: boolean;
    user: User;
  };
  actions: {
    setUser: (user: User) => void;
  };
};

// Constants
export const EMPTY_USER: User = {
  email: '',
  name: '',
  id: 0,
  token: '',
};

export const SessionContext = createContext<SessionContextValues>({
  state: {
    isAuthenticated: false,
    user: EMPTY_USER,
  },
  actions: {
    setUser: () => {},
  },
});

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
