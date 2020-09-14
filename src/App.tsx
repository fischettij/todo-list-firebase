import React, { FC } from 'react';
import SessionProvider from './context/SessionContext';
import Routes from './Routes';

const App: FC = () => {
  return (
    <div className="App">
      <SessionProvider>
        <Routes />
      </SessionProvider>
    </div>
  );
};

export default App;
