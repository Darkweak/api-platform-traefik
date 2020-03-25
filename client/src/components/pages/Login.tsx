import React from 'react';
import { LoginForm } from '../Form';
import { Layout } from '../Layout';

export const Login = () => (
    <Layout>
        <div
            className='col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 fade-in-from-bottom anim-delay--5 card'>
            <LoginForm/>
        </div>
    </Layout>
);
