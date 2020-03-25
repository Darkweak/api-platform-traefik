import { API } from './API';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Token, Username } from '../helpers';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';

export interface ILoginUser {
    username: string,
    password: string,
}

export interface RequestInterface extends AxiosRequestConfig {
    callback?: Dispatch<SetStateAction<{}>>;
    ref: MutableRefObject<HTMLFormElement>
}

export class Login extends API {
    public endpoint = '/login';

    login({callback, data, ref}: RequestInterface) {
        return super
            .post({data})
            .then(({status, data}: AxiosResponse) => {
                if (200 === status) {
                    const {token} = data;
                    new Token().set(token);
                    callback && callback({
                        logged: true,
                        loginError: false,
                        token,
                        username: new Username().get(),
                    });
                    ref.current.reset();
                }
            }).catch(() => callback && callback({
                logged: false,
                loginError: true,
            }))
    }
}

export class User extends API {
    public endpoint = '/users';

    register({data, ref}: RequestInterface) {
        return super
            .post({data})
            .then(({status}: AxiosResponse) => {
                if (201 === status) {
                    ref.current.reset();
                }
            });
    }

    logout({callback}: { callback: Dispatch<SetStateAction<{}>> }) {
        new Token().delete();
        callback({
            logged: false,
            loginError: false,
            token: null,
            username: '',
        })
    }
}
