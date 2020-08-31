import React, {FC, createContext, useState} from 'react';

// Types
type User = {
  email: string,
  name: string,
  id: number,
  token: string,
}

type SessionContextValues = {
  state: {
    isAuthenticated: boolean,
    user: User,
  },
  actions: {
    setUser: (user: User) => void;
  }
};

// Constants
const EMPTY_USER = {
  email: '',
  name: '',
  id: 0,
  token: '',
};

export const SessionContext = createContext<SessionContextValues>({
  state: {
    isAuthenticated: false,
    user: EMPTY_USER
  },
  actions: {
    setUser: () => {}
  }
});

const SessionProvider: FC = ({children}) => {
  const [user, setUser] = useState<User>(EMPTY_USER);

  const isAuthenticated = true;

  const state = {
    user,
    isAuthenticated,
  }

  const actions = {
    setUser,
  }
  return (
    <SessionContext.Provider value={{state, actions}} >{children}</SessionContext.Provider>
  )
}

export default SessionProvider