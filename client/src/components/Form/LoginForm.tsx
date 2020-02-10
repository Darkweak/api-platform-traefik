import React, { useContext } from 'react';
import { password, username } from './Field';
import { Form } from './';
import { ILoginUser, User } from '../../actions';
import { ClientContext, FormProvider } from '../../contexts';
import { BackgroundAlertWarning } from '../Alert';
import { useRedirection } from '../../hooks';

export const LoginForm = () => {
    const { logged, loginError, updateClient } = useContext(ClientContext);
    useRedirection(logged);

    return (
        <>
            {
                !logged && loginError ?
                    <div className="fade-in-from-bottom px-2">
                        <BackgroundAlertWarning>
                            <span>Identifiants invalides</span>
                        </BackgroundAlertWarning>
                    </div> : ''
            }
            <FormProvider>
                <Form {...{
                    additionalLinks: [
                        {
                            label: 'Pas encore de compte ?',
                            path: '/register',
                        }
                    ],
                    fields: [
                        username(),
                        password()
                    ],
                    submitForm: (data: ILoginUser, ref: any) => new User().login({data, updateClient, ref}),
                    type: 'large',
                }}/>
            </FormProvider>
        </>
    )
};
