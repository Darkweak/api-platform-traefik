import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { IRoute, routes } from './routes';
import { LanguageProvider, RouterProvider } from './contexts';

export const history: any = createBrowserHistory();

ReactDOM.render(
    <LanguageProvider>
        <BrowserRouter>
            <Switch>
                {
                    routes.map(
                        (route: IRoute, index: number) =>
                            <Route key={index} path={route.path} strict exact component={
                                ({...rest}: any) => <RouterProvider {...rest}>
                                    {route.component}
                                </RouterProvider>
                            }/>
                    )
                }
            </Switch>
        </BrowserRouter>
    </LanguageProvider>
    ,
    document.getElementById('root')
);

