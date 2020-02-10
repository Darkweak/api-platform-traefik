import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import { BrowserRouter, Route, RouteProps, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { ClientContext, LanguageProvider } from './contexts';
import { routes } from './routes';

export const history: any = createBrowserHistory();

const Routes = () => {
    const { logged } = useContext(ClientContext);

    return (
        <>
            {
                routes(logged).map(
                    (route: RouteProps, key: number) =>
                        <Route {...{
                            component: route.component,
                            exact: true,
                            key,
                            path: route.path,
                            strict: true,
                        }}/>
                )
            }
        </>
    )
}

ReactDOM.render(
    <LanguageProvider>
        <BrowserRouter>
            <Switch>
                <Routes/>
            </Switch>
        </BrowserRouter>
    </LanguageProvider>
    ,
    document.getElementById('root')
);

