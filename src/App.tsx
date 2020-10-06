import React, { FC } from 'react';
import SessionProvider from 'lib/providers/SessionProvider/provider';
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
