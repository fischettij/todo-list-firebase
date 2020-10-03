import React, { FC } from 'react';
import { useLogout } from '../hooks/SessionHooks';

const Home: FC = () => {
  const { logout } = useLogout();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => logout()}>LOGUOT</button>
    </div>
  );
};

export default Home;
