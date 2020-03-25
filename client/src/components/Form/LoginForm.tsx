import React, { useContext } from 'react';
import { password, username } from './Field';
import { Form } from './';
import { ILoginUser, Login } from '../../actions';
import { ClientContext, FormProvider, LanguageContext } from '../../contexts';
import { BackgroundAlertWarning } from '../Alert';

export const LoginForm = () => {
    const {logged, loginError, updateClient} = useContext(ClientContext);
    const {translate} = useContext(LanguageContext);

    return (
        <>
            {
                !logged && loginError ?
                    <div className='fade-in-from-bottom'>
                        <BackgroundAlertWarning>
                            <span>{translate(`form.login.error`)}</span>
                        </BackgroundAlertWarning>
                    </div> : ''
            }
            <FormProvider>
                <Form {...{
                    additionalLinks: [
                        {
                            label: 'register',
                            path: '/register',
                        }
                    ],
                    fields: [
                        username(),
                        password()
                    ],
                    submitForm: (data: ILoginUser, ref: any) => new Login().login({data, callback: updateClient, ref})
                }}/>
            </FormProvider>
        </>
    )
};
