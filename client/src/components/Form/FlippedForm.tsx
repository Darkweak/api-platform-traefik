import React from 'react';
import { Flipped, Flipper } from 'react-flip-toolkit';
import { FormProvider } from '../../contexts';
import { Form, IForm } from './Form';

interface IFlippedForm {
    flipped: boolean;
    form: IForm;
    id: string;
    setFlipped: (value: boolean) => void;
}

export const FlippedForm: React.FC<IFlippedForm> = ({ children, flipped, form, id, setFlipped }) => {
    return (
        <Flipper flipKey={flipped}>
            <Flipped flipId={id}>
                <div className="card" onClick={() => setFlipped(!flipped)}>
                    {children}
                    <FormProvider>
                        <Form {...form}/>
                    </FormProvider>
                </div>
            </Flipped>
        </Flipper>
    )
}
