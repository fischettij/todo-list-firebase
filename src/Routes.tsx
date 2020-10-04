import React, { FC, useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { SessionContext } from './context/SessionContext';
import Home from './pages/Home';
import Login from './pages/Login';

// Types
type RouteProps = {
  path: string;
};

// Constants
export const ROUTES = {
  home: '/home',
  login: '/login',
};

// Custom router
const PublicRoute: FC<RouteProps> = ({ children, path }) => {
  const { state } = useContext(SessionContext);
  const { isAuthenticated } = state;

  if (isAuthenticated) return <Redirect to={ROUTES.home} />;

  return <Route path={path}>{children}</Route>;
};

const PrivateRoute: FC<RouteProps> = ({ children, path }) => {
  const { state } = useContext(SessionContext);
  const { isAuthenticated } = state;

  if (!isAuthenticated) return <Redirect to={ROUTES.login} />;

  return <Route path={path}>{children}</Route>;
};

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute path={ROUTES.login}>
        <Login />
      </PublicRoute>
      <PrivateRoute path={ROUTES.home}>
        <Home />
      </PrivateRoute>
      <PrivateRoute path="*">
        <Home />
      </PrivateRoute>
    </Switch>
  </BrowserRouter>
);

export default Routes;
