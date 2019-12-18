import React, { useContext } from 'react';
import { email, firstname, lastname, password } from './Field';
import { Form } from './';
import { useRedirection } from '../../hooks';
import { ClientContext } from '../../contexts/ClientContext';
import { FormProvider } from '../../contexts/FormContext';
import { register } from '../../actions/user';

export const RegisterForm = () => {
    const { logged } = useContext(ClientContext);
    useRedirection(logged);
    return (
        <div className="card fade-in-from-bottom anim-delay--5">
            <FormProvider>
                <Form {...{
                    additionalLinks: [
                        {
                            label: 'Déjà inscrit ?',
                            path: '/login',
                        }
                    ],
                    fields: [
                        lastname('g--6 g-t--12'),
                        firstname('g--6 g-t--12'),
                        email(),
                        password()
                    ],
                    submitForm: register
                }}/>
            </FormProvider>
        </div>
    );
};
