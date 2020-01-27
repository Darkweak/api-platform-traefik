import { AxiosResponse } from 'axios';
import { APIConnection } from './API';
import { MutableRefObject } from 'react';

export interface IContact {
    username: string,
    password: string,
}

interface SendContactInterface {
    data: IContact,
    setError: (value: any) => void,
    setSent: (value: any) => void,
    ref: MutableRefObject<any>
}

export class Contact extends APIConnection {
    public send({ data, ref, setError, setSent }: SendContactInterface) {
        return this.postRequest({
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
    }
}
