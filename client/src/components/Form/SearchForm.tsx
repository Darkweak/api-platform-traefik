import React, { useContext } from 'react';
import { FormWithDropdownFields } from './';
import { FormProvider } from '../../contexts';
import { searchFields } from './field/search';
import { initProviders } from '../../providers';
import { ISearchItem, SearchContext } from '../../contexts/SearchContext';

interface IResponseSearch {
    data: {
        realEstateAds: ISearchItem[];
    };
}

export const SearchForm = () => {
    const { dispatch } = useContext(SearchContext);
    return (
        <div className="content">
            <FormProvider>
                <FormWithDropdownFields {...{
                    buttonText: 'Rechercher',
                    fields: searchFields,
                    submitForm: (value: string) => Promise.all(initProviders({ data: JSON.parse(value), resetList: dispatch({ type: 'SET_LIST', payload: [] }) }))
                        .then((response: any) => response.forEach(({ data: { realEstateAds } }: IResponseSearch) => dispatch({ type: 'ADD_TO_LIST', payload: realEstateAds })))
                }}/>
            </FormProvider>
        </div>
    )
};
