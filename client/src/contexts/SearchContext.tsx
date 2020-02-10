import React, { createContext, useReducer } from 'react';

interface ISearchItemPhoto {
    url_photo: "http://box.ics.fr/cit_CITYA_FLANDRES_jdd/location/…esized_20191219_081832605-3347538795784917768.jpg",
    photo: "citya-immobilier-1289-GES00970031-40_box.ics.fr_ci…esized_20191219_081832605-3347538795784917768.jpg",
    url: "https://file.bienici.com/photo/citya-immobilier-12…esized_20191219_081832605-3347538795784917768.jpg"
}

export interface ISearchItem {
    adType: string,
    agencyFeeUrl: string,
    agencyRentalFee: number,
    balconyQuantity: number,
    bathroomsQuantity: number,
    bedroomsQuantity: number,
    cellarsOrUndergroundsQuantity: number,
    city: string,
    description: string,
    energyClassification: string,
    energyValue: number,
    floor: number,
    floorQuantity: number,
    greenhouseGazClassification: string,
    greenhouseGazValue: number,
    hasElevator: false,
    heating: string,
    id: string,
    inventoryOfFixturesFees: number,
    parkingPlacesQuantity: number,
    photos: ISearchItemPhoto[],
    postalCode: string,
    price: number,
    propertyType: string,
    reference: string,
    roomsQuantity: number,
    safetyDeposit: number,
    surfaceArea: number,
    terracesQuantity: number
}

interface ISearch {
    dispatch?: any,
    list: ISearchItem[]
}

const defaultValue: ISearch = {
    list: []
};

function reducer(state: ISearch, action: any) {
    switch (action.type) {
        case 'SET_LIST':
            return {
                list: action.payload
            };
        case 'ADD_TO_LIST':
            let list = state.list;
            list.push(...action.payload);
            return {
                list
            };
        default:
            return state;
    }
}

export const SearchContext = createContext(defaultValue);

export const SearchProvider: React.FC = ({children}) => {
    const [ state, dispatch ] = useReducer(reducer, {list: []});

    return (
        <SearchContext.Provider
            value={{ ...state, dispatch }}
        >
            {children}
        </SearchContext.Provider>
    );
};
