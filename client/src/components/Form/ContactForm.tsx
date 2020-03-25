import React, { useContext, useState } from 'react';
import { email, firstname, lastname, message, subject } from './Field';
import { Form } from './';
import { FormProvider, LanguageContext } from '../../contexts';
import { BackgroundAlertDanger, BackgroundAlertSuccess } from '../Alert';
import { Contact, IContact } from '../../actions';

export const ContactForm = () => {
    const [hasError, setError] = useState(false);
    const [hasSent, setSent] = useState(false);
    const {translate} = useContext(LanguageContext);
    const t = (value: string) => translate(`form.contact.${value}`);

    return (
        <div className='card p-3'>
            {
                hasError ?
                    <div className='fade-in-from-bottom'>
                        <BackgroundAlertDanger>
                            <span>{t('error')}</span>
                        </BackgroundAlertDanger>
                    </div> :
                    hasSent ?
                        <div className='fade-in-from-bottom'>
                            <BackgroundAlertSuccess>
                                <span>{t('success')}</span>
                            </BackgroundAlertSuccess>
                        </div> : ''
            }
            <FormProvider>
                <Form {...{
                    buttonText: 'send',
                    fields: [
                        lastname('col-sm-6'),
                        firstname('col-sm-6'),
                        email(),
                        subject(),
                        message()
                    ],
                    submitForm: (data: IContact, ref) => new Contact().send({data, setError, setSent, ref})
                }}/>
            </FormProvider>
        </div>
    )
};
