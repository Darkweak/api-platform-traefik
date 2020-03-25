import React from 'react';
import { Layout } from '../Layout';
import { RegisterForm } from '../Form';

export const Register = () => (
    <Layout>
        <div
            className='col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 fade-in-from-bottom anim-delay--5 card'>
            <RegisterForm/>
        </div>
    </Layout>
);
