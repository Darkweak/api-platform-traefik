import React, { useContext } from 'react';
import { ClientContext } from '../../contexts';
import { useRedirection } from '../../hooks';
import { LoginForm } from '../Form/LoginForm';
import { Layout } from '../Layout';

export const Login = () => {
    const { logged } = useContext(ClientContext);
    useRedirection(logged);

    return (
        <Layout>
            <div className="panel content">
                <h1 className="text-primary text-center">
                    Se connecter
                </h1>
                <LoginForm/>
            </div>
        </Layout>
    )
};
