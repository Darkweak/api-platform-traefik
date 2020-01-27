import { AxiosResponse } from 'axios';
import { deleteToken, getUsername, setToken } from '../helpers';
import { APIConnection } from './API';
import { MutableRefObject } from 'react';

export interface ILoginUser {
    username: string,
    password: string,
}

export interface IRegisterUser{
    email: string,
    firstname: string,
    lastname: string,
    password: string,
}

interface RefInterface {
    ref: MutableRefObject<any>,
}

interface LoginInterface extends RefInterface {
    data: ILoginUser,
    updateClient: (value: any) => void
}

interface RegisterInterface extends RefInterface {
    data: IRegisterUser,
    updateClient: (value: any) => void
}

interface LogoutInterface {
    updateClient: (value: any) => void
}

export class User extends APIConnection {
    public login({ data, ref, updateClient }: LoginInterface) {
        return this.postRequest({
            data,
            endpoint: '/login',
        }).then(({status, data}: AxiosResponse) => {
            if (200 === status) {
                const { token } = data;
                setToken(token);
                updateClient({
                    logged: true,
                    loginError: false,
                    token,
                    username: getUsername(),
                });
                ref.current.reset();
            }
        }).catch(() => updateClient({
            logged: false,
            loginError: true,
        }))
    }

    public logout({ updateClient }: LogoutInterface) {
        deleteToken();
        updateClient({
            logged: false,
            loginError: false,
            token: null,
            username: '',
        })
    }

    public register({ data, ref }: RegisterInterface) {
        return this.postRequest({
            data,
            endpoint: '/users',
        }).then(({status}: AxiosResponse) => {
            if (201 === status) {
                ref.current.reset();
            }
        })
    }
}
