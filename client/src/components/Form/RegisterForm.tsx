import React from 'react';
import { email, firstname, lastname, password } from './Field';
import { Form } from './';
import { FormProvider } from '../../contexts';
import { User } from '../../actions';

export const RegisterForm = () => (
    <>
        <FormProvider>
            <Form {...{
                additionalLinks: [
                    {
                        label: 'login',
                        path: '/login',
                    }
                ],
                fields: [
                    lastname('col-sm-6'),
                    firstname('col-sm-6'),
                    email(),
                    password()
                ],
                submitForm: (data, ref) => new User().register({data, ref})
            }}/>
        </FormProvider>
    </>
);
