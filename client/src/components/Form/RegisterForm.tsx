import React, { useContext } from 'react';
import { email, firstname, lastname, password } from './Field';
import { Form } from './';
import { useRedirection } from '../../hooks';
import { ClientContext, FormProvider } from '../../contexts';
import { IRegisterUser, User } from '../../actions';

export const RegisterForm = () => {
    const { logged } = useContext(ClientContext);
    useRedirection(logged);
    return (
        <>
            <FormProvider>
                <Form {...{
                    additionalLinks: [
                        {
                            label: 'Déjà inscrit ?',
                            path: '/login',
                        }
                    ],
                    fields: [
                        lastname('col-6'),
                        firstname('col-6'),
                        email(),
                        password()
                    ],
                    submitForm: (data: IRegisterUser, ref: any) => new User().register({ data, ref }),
                    type: 'large',
                }}/>
            </FormProvider>
        </>
    );
};
