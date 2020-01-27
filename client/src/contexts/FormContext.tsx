import React, { createContext, useReducer } from 'react';
import { IChildren } from '../components/Layout';

interface IForm {
    isLoading: boolean,
    dispatch?: any,
    values?: any,
}

const defaultValue: IForm = {
    isLoading: false,
    values: {},
};

function reducer(state: IForm, { payload, type }: any) {
    switch (type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: payload
            };
        case 'SET_VALUE':
            let values = state.values;
            values[payload.name] = payload.value;
            return {
                ...state,
                values
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
