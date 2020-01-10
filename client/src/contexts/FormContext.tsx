import React, { createContext, useReducer } from 'react';
import { IChildren } from '../components/Layout';

interface IForm {
    isLoading: boolean,
    dispatch?: any,
}

const defaultValue: IForm = {
    isLoading: false,
};

function reducer(state: IForm, action: any) {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                isLoading: action.payload
            };
        default:
            return state;
    }
}

export const FormContext = createContext(defaultValue);

export const FormProvider: React.FC<IChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    return (
        <FormContext.Provider
            value={{...state, dispatch}}
        >
            {children}
        </FormContext.Provider>
    );
};
