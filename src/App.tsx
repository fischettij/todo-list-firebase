import React, { FC, useContext } from 'react';
import SessionProvider from './context/SessionContext'
import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <SessionProvider>
        <Routes/>
      </SessionProvider>
    </div>
  );
}

export default App;
