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
            <div className="g--6 m--3 g-m--8 m-m--2 g-s--10 m-s--1 g-t--12 m-t--0 fade-in-from-bottom card">
                <LoginForm/>
            </div>
        </Layout>
    )
};
