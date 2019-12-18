import { postRequest } from './API';
import { AxiosResponse } from 'axios';

export interface IContact {
    username: string,
    password: string,
}

export const contact = (data: IContact, setError: (value: any) => void, setSent: (value: any) => void, ref: any) => {
    return postRequest({
        data,
        endpoint: '/contact',
    }).then(({status}: AxiosResponse) => {
        if (200 === status) {
            setError(false);
            setSent(true);
            ref.current.reset();
        }
    }).catch(() => {
        setError(true);
    })
};
