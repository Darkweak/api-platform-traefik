import React, { useState } from 'react';
import { email, firstname, lastname, message, subject } from './Field';
import { Form } from './';
import { FormProvider } from '../../contexts';
import { BackgroundAlertDanger } from '../Alert';
import { BackgroundAlertSuccess } from '../Alert/BackgroundAlert';
import { contact, IContact } from '../../actions/contact';

export const ContactForm = () => {
    const [hasError, setError] = useState(false);
    const [hasSent, setSent] = useState(false);

    return (
        <div className="card fade-in-from-bottom anim-delay--5">
            {
                hasError ?
                    <div className="fade-in-from-bottom">
                        <BackgroundAlertDanger>
                            <span>Une erreur est survenue, veuillez réessayer plus tard</span>
                        </BackgroundAlertDanger>
                    </div> :
                    hasSent ?
                        <div className="fade-in-from-bottom">
                            <BackgroundAlertSuccess>
                                <span>Votre message a bien été envoyé!</span>
                            </BackgroundAlertSuccess>
                        </div> : ''
            }
            <FormProvider>
                <Form {...{
                    buttonText: 'Envoyer',
                    fields: [
                        lastname('g--6 g-t--12'),
                        firstname('g--6 g-t--12'),
                        email(),
                        subject(),
                        message()
                    ],
                    submitForm: (data: IContact, ref) => contact(data, setError, setSent, ref)
                }}/>
            </FormProvider>
        </div>
    )
};
