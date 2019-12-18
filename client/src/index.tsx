import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import './app.scss';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import { IRoute, routes } from './routes';
import { RouterProvider } from './contexts/RouterContext';

export const history: any = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {
        routes.map(
          (route: IRoute, index: number) =>
            <Route key={index} path={route.path} strict exact component={
              ({...rest}: any) => <RouterProvider {...rest}>{route.component}</RouterProvider>
            }/>
        )
      }
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

