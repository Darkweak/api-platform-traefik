import React, { createContext, useReducer } from 'react';

interface IForm {
    isLoading: boolean,
    dispatch?: any,
}

const defaultValue: IForm = {
    isLoading: false,
};

type Action = {
    payload: boolean;
    type: string;
}

function reducer(state: IForm, action: Action) {
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

export const FormProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    return (
        <FormContext.Provider
            value={{...state, dispatch}}
        >
            {children}
        </FormContext.Provider>
    );
};
