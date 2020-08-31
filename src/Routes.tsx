import React, { FC, useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {SessionContext} from './context/SessionContext'

// Types
type RouteProps = {
  path: string;
}

// Constants
const ROUTES = {
  home: "/home",
  login: "/login",
};

// Components
const Login = () => {
  return <h1>Login</h1>
};

const Home = () => {
  return <h1>Home</h1>
};

// Custom router
const PublicRoute: FC<RouteProps> = ({ children, path }) => {
  const {state} = useContext(SessionContext);
  const { isAuthenticated } = state;

  if (isAuthenticated) return <Redirect to={ROUTES.home}/>

  return <Route path={path}>{children}</Route>;
}

const PrivateRoute: FC<RouteProps> = ({ children, path }) => {
  const {state} = useContext(SessionContext);
  const { isAuthenticated } = state;
  
  if (!isAuthenticated) return <Redirect to={ROUTES.login}/>

  return <Route path={path}>{children}</Route>;
}

const Routes: FC = () => (
        <BrowserRouter>
          <Switch>
            <PublicRoute path={ROUTES.login}>
              <Login />
            </PublicRoute>
            <PrivateRoute path={ROUTES.home}>
              <Home />
            </PrivateRoute>
            <PrivateRoute path={'*'}>
              <Home />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>

)

export default Routes