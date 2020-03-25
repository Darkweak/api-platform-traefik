import { AxiosResponse } from 'axios';
import { API } from './API';
import { Dispatch, SetStateAction } from 'react';
import { RequestInterface } from './user';

export interface IContact {
    username: string,
    password: string,
}

interface ContactInterface extends RequestInterface {
    setError: Dispatch<SetStateAction<boolean>>;
    setSent: Dispatch<SetStateAction<boolean>>;
}

export class Contact extends API {
    public endpoint = '/contact';

    send({data, ref, setError, setSent}: ContactInterface) {
        return super
            .post({data})
            .then(({status}: AxiosResponse) => {
                if (200 === status) {
                    setError(false);
                    setSent(true);
                    ref.current.reset();
                }
            }).catch(() => {
                setError(true);
            });
    }
};
