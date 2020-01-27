import { AbstractProvider } from './AbstractProvider';
import { AxiosResponse } from 'axios';
import { ISearchForm } from '../components/Form/types';

interface IBienIciObject {
    filterType: string;
    from: number;
    maxAuthorizedResults: number;
    maxPrice: number;
    minPrice: number;
    minArea: number;
    maxArea: number;
    onTheMarket: boolean[];
    page: number;
    propertyType: string[];
    sortBy: string;
    sortOrder: string;
    showAllModels: boolean;
    zoneIdsByTypes: {
        zoneIds: string[]
    }
}

export class BienIciProvider extends AbstractProvider {
    protected baseUrl = 'https://www.bienici.com';
    protected endpoint = '/realEstateAds.json';

    private getIds(search: string) {
        this.baseUrl = 'https://res.bienici.com';
        this.endpoint = '/suggest.json';
        return this.getRequest({endpoint: `?q=${ search }`});
    }

    private serializeDataToValidObject(data: ISearchForm): IBienIciObject {
        return {
            filterType: 'rent',
            from: 0,
            maxAuthorizedResults: 2400,
            maxPrice: parseInt(data.maxPrice),
            minPrice: parseInt(data.minPrice),
            minArea: parseInt(data.minSize),
            maxArea: parseInt(data.maxSize),
            onTheMarket: [ true ],
            page: 1,
            propertyType: [ 'house', 'flat' ],
            sortBy: 'relevance',
            sortOrder: 'desc',
            showAllModels: false,
            zoneIdsByTypes: {
                zoneIds: []
            }
        }
    }

    public get(search: ISearchForm) {
        return new BienIciProvider()
            .getIds(search.postcode)
            .then(
                ({ data }: AxiosResponse) => {
                    let bienIciObject = this.serializeDataToValidObject(search)
                    bienIciObject.zoneIdsByTypes.zoneIds = bienIciObject.zoneIdsByTypes.zoneIds.concat(...(data.filter((d: any) => d.postalCodes && d.postalCodes.includes(search.postcode)).map((v: any) => v.zoneIds)));
                    return this.getRequest({endpoint: `?filters=${ encodeURI(JSON.stringify(bienIciObject)) }&extensionType=extendedIfNoResult&leadingCount=2&access_token=test&id=1`})
                }
            );
    }
}
