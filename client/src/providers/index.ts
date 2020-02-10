import { ISearchForm } from '../components/Form/types';
import { AxiosPromise } from 'axios';
import { BienIciProvider } from './BienIciProvider';

interface IProviders {
    data: ISearchForm,
    resetList: any,
}

export * from './BienIciProvider';
export const initProviders = ({ data }: IProviders): Promise<AxiosPromise>[] => {
    return [
        new BienIciProvider().get(data).then(),
    ]
};
