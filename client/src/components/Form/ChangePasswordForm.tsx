import React from 'react';
import { password } from './Field';
import { Form } from './';
import { ILoginUser, User } from '../../actions';
import { FormProvider } from '../../contexts';

export const ChangePasswordForm = () => (
    <FormProvider>
        <Form {...{
            fields: [
                password(),
                password()
            ],
            submitForm: (data: ILoginUser, ref: any) => new User().changePassword({data, ref}),
            type: 'large',
        }}/>
    </FormProvider>
);
