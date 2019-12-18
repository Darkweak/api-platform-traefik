import { postRequest } from './API';
import { AxiosResponse } from 'axios';
import { deleteToken, getUsername, setToken } from '../helpers';

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

export const login = (data: ILoginUser, updateClient: (value: any) => void, ref: any) => {
    return postRequest({
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
};

export const logout = (updateClient: (value: any) => void) => {
    deleteToken();
    updateClient({
        logged: false,
        loginError: false,
        token: null,
        username: '',
    })
};

export const register = async (data: IRegisterUser, ref: any) => {
    postRequest({
        data,
        endpoint: '/users',
    }).then(({status}: AxiosResponse) => {
        if (201 === status) {
            ref.current.reset();
        }
    })
};
