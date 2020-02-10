import React, { createContext, useState } from 'react';
import { Token } from '../helpers';
import { IChildren } from '../components/Layout';

export const ClientContext = createContext({
    logged: !!new Token().get(),
    loginError: false,
    token: new Token().get() || null,
    username: '',
    updateClient: (v: any) => {},
});

export const ClientProvider: React.FC<IChildren> = ({ children }) => {
    const token = new Token().get();
    const [client, setClient] = useState({
        logged: !!token,
        loginError: false,
        token: token || null,
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
