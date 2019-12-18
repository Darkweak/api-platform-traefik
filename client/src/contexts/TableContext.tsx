import React, { createContext, useReducer } from 'react';
import { IChildren } from '../components/Layout';

export const ADD_SELECTED_ITEM = 'ADD_SELECTED_ITEM';
export const REMOVE_SELECTED_ITEM = 'REMOVE_SELECTED_ITEM';

interface ITable {
    items: string[],
    dispatch?: any,
}

const defaultValue: ITable = {
    items: [],
};

function reducer(state: ITable, action: any) {
    const items = state.items;
    switch (action.type) {
        case 'ADD_SELECTED_ITEM':
            if (!items.includes(action.payload)) {
                items.push(action.payload);
            }
            return {
                ...state,
                items
            };
        case 'REMOVE_SELECTED_ITEM':
            const index = items.findIndex((item: string) => item === action.payload);
            if (index > -1) {
                items.splice(index, 1);
            }
            return {
                ...state,
                items
            };
        default:
            return state;
    }
}

export const TableContext = createContext(defaultValue);

export const TableProvider: React.FC<IChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    return (
        <TableContext.Provider
            value={{...state, dispatch}}
        >
            {children}
        </TableContext.Provider>
    );
};
