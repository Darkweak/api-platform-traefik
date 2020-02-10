import React from 'react';
import { RegisterForm } from '../Form';
import { Layout } from '../Layout';

export const Register = () => {
    return (
        <Layout>
            <div className="panel content">
                <h1 className="text-primary text-center">
                    S'inscrire
                </h1>
                <RegisterForm/>
            </div>
        </Layout>
    )
};
