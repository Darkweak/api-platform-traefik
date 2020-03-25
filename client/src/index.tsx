import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { IRoute, routes } from './routes';
import { LanguageProvider } from './contexts';

export const history: any = createBrowserHistory();

ReactDOM.render(
    <LanguageProvider>
        <BrowserRouter>
            <Switch>
                {
                    routes.map(
                        (route: IRoute, index: number) =>
                            <Route key={index} exact {...route}/>
                    )
                }
            </Switch>
        </BrowserRouter>
    </LanguageProvider>
    ,
    document.getElementById('root')
);

