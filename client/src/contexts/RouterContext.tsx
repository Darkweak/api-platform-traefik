import React, { createContext, useEffect, useState } from 'react';
import { match, RouterProps } from 'react-router';
import { IChildren } from '../components/Layout';
import { Location } from 'history';

interface IRouterProvider extends IChildren, RouterProps {
    location: Location,
    match: match,
}

const defaultValue: any = {};

export const RouterContext = createContext(defaultValue);

export const RouterProvider: React.FC<IRouterProvider> = ({ children, history, location, match }) => {
    const [router, setRouter] = useState(defaultValue);
    useEffect(() => {
        setRouter({router: { history, location, match }});
    }, [history, location, match]);

    return (
        <RouterContext.Provider
            value={router}
        >
            {children}
        </RouterContext.Provider>
    );
};
