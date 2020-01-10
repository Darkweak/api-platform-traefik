import React from 'react';
import { Layout } from '../Layout';
import { CONTACT, HOME } from '../Breadcrumb';
import { ContactForm } from '../Form';

export const Contact: React.FC = () => {
    return (
        <Layout pageName="pages.contact.title" breadcrumb={[HOME, CONTACT]}>
            <div className="g--10 m--1">
                <ContactForm/>
            </div>
        </Layout>
    )
};
