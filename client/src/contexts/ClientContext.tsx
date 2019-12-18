import React, { createContext, useState } from 'react';
import { getToken } from '../helpers';
import { IChildren } from '../components/Layout';

export const ClientContext = createContext({
    logged: !!getToken(),
    loginError: false,
    token: getToken() || null,
    username: '',
    updateClient: (v: any) => {},
});

export const ClientProvider: React.FC<IChildren> = ({ children }) => {
    const [client, setClient] = useState({
        logged: !!getToken(),
        loginError: false,
        token: getToken() || null,
        username: ''
    });

    return (
        <ClientContext.Provider
            value={{...client, updateClient: (v: any) => { setClient({...{...client, ...v}}) }}}
        >
            {children}
        </ClientContext.Provider>
    );
};
