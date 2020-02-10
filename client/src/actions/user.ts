import { AxiosResponse } from 'axios';
import { Token, Firstname, Lastname, Username } from '../helpers';
import { APIConnection } from './API';
import { MutableRefObject } from 'react';

export interface ILoginUser {
    username: string,
    password: string,
}

export interface IChangePassword {
    newpassword: string,
    oldpassword: string,
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

interface ChangePasswordInterface extends RefInterface {
    data: ILoginUser
}

interface RegisterInterface extends RefInterface {
    data: IRegisterUser,
    updateClient?: (value: any) => void
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
                new Token().set(token);
                const firstname = new Firstname();
                firstname.set();
                new Lastname().set();
                new Username().set();
                updateClient({
                    logged: true,
                    loginError: false,
                    token,
                    username: firstname.get(),
                });
                ref.current.reset();
            }
        }).catch(() => updateClient({
            logged: false,
            loginError: true,
        }))
    }

    public logout({ updateClient }: LogoutInterface) {
        new Token().delete();
        new Firstname().delete();
        new Lastname().delete();
        updateClient({
            logged: false,
            loginError: false,
            token: null,
            username: '',
        });
    }

    public changePassword({ data, ref }: ChangePasswordInterface) {
        return this.postRequest({
            data,
            endpoint: '/change-password',
        }).then(({status}: AxiosResponse) => {
            if (201 === status) {
                ref.current.reset();
            }
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
