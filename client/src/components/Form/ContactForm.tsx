import React, { useState } from 'react';
import { email, firstname, lastname, message, subject } from './Field';
import { Form } from './';
import { FormProvider } from '../../contexts';
import { BackgroundAlertDanger } from '../Alert';
import { BackgroundAlertSuccess } from '../Alert/BackgroundAlert';
import { Contact, IContact } from '../../actions';

export const ContactForm = () => {
    const [ hasError, setError ] = useState<boolean>(false);
    const [ hasSent, setSent ] = useState<boolean>(false);

    return (
        <>
            {
                hasError ?
                    <div className="fade-in-from-top">
                        <BackgroundAlertDanger className="py-3">
                            <span>Une erreur est survenue, veuillez réessayer plus tard</span>
                        </BackgroundAlertDanger>
                    </div> :
                    hasSent ?
                        <div className="fade-in-from-top">
                            <BackgroundAlertSuccess className="py-3">
                                <span>Votre message a bien été envoyé!</span>
                            </BackgroundAlertSuccess>
                        </div> : ''
            }
            <FormProvider>
                <Form {...{
                    buttonText: 'Envoyer',
                    fields: [
                        lastname('col-6'),
                        firstname('col-6'),
                        email(),
                        subject(),
                        message()
                    ],
                    submitForm: (data: IContact, ref) => new Contact().send({
                        data,
                        setError,
                        setSent,
                        ref,
                    }),
                    type: 'large',
                }}/>
            </FormProvider>
        </>
    )
};
