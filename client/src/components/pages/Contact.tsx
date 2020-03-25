import React, { useContext } from 'react';
import { Layout } from '../Layout';
import { ContactForm } from '../Form';
import { LanguageContext } from '../../contexts';

export const Contact: React.FC = () => {
    const {translate} = useContext(LanguageContext);
    return (
        <Layout>
            <span className='h1 text-center font-weight-lighter text-white m-auto col-12 pb-4 pb-sm-0'>
                {translate('pages.contact.title')}
            </span>
            <div className='text-justify row m-0 py-5'>
                <div className='col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
                    <ContactForm/>
                </div>
            </div>
        </Layout>
    )
};
