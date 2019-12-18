import React, { useContext } from 'react';
import { password, username } from './Field';
import { Form } from './';
import { ILoginUser, login } from '../../actions/user';
import { ClientContext } from '../../contexts/ClientContext';
import { BackgroundAlertWarning } from '../Alert';
import { FormProvider } from '../../contexts/FormContext';
import { useRedirection } from '../../hooks';

export const LoginForm = () => {
    const { logged, loginError, updateClient } = useContext(ClientContext);
    useRedirection(logged);

    return (
        <div className="card fade-in-from-bottom anim-delay--5">
            {
                !logged && loginError ?
                    <div className="fade-in-from-bottom">
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
                    submitForm: (data: ILoginUser, ref: any) => login(data, updateClient, ref)
                }}/>
            </FormProvider>
        </div>
    )
};
