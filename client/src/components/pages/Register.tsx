import React from 'react';
import { Layout } from '../Layout';
import { HOME, REGISTER } from '../Breadcrumb';
import { RegisterForm } from '../Form/RegisterForm';

export const Register = () => {
    return (
        <Layout pageName={`Inscription`} breadcrumb={[HOME, REGISTER]}>
            <div className="g--8 m--2 g-m--10 m-m--1">
                <RegisterForm/>
            </div>
        </Layout>
    )
};
