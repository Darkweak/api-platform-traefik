import React from 'react';
import { Layout } from '../Layout';
import { HOME, LOGIN } from '../Breadcrumb';
import { LoginForm } from '../Form/LoginForm';

export const Login = () => {
    return (
        <Layout pageName={`Connexion`} breadcrumb={[HOME, LOGIN]}>
            <div className="g--4 m--4 g-m--8 m-m--2 g-s--10 m-s--1">
                <LoginForm/>
            </div>
        </Layout>
    )
};
