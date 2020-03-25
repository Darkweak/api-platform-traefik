import React, { createContext, useState } from 'react';
import { Token } from '../helpers';

const token = new Token().get();

export const ClientContext = createContext({
    logged: !!token,
    loginError: false,
    token: token,
    username: '',
    updateClient: (v: any) => {
    },
});

export const ClientProvider: React.FC = ({children}) => {
    const [client, setClient] = useState({
        logged: !!token,
        loginError: false,
        token: token,
        username: ''
    });

    return (
        <ClientContext.Provider
            value={{
                ...client, updateClient: (v: any) => {
                    setClient({...{...client, ...v}})
                }
            }}
        >
            {children}
        </ClientContext.Provider>
    );
};
