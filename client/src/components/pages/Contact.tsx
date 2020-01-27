import React from 'react';
import { Layout } from '../Layout';
import { ContactForm } from '../Form';

export const Contact: React.FC = () => {
    return (
        <Layout>
            <div className="panel content">
                <h1 className="text-primary text-center">
                    Nous contacter
                </h1>
                <ContactForm/>
            </div>
        </Layout>
    )
};
