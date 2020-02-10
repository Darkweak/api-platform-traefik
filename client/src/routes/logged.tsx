import * as React from 'react';
import { IRoute } from './';
import { User } from '../actions';
import { Account } from '../components/pages/Account';

export const loggedRoutes = (): IRoute[] => [
    {
        component: Account,
        icon: 'user',
        name: 'account.my_account',
        path: '/account',
    },
    {
        component: () => <div/>,
        handleClick: (updateClient: (v?: any) => void, router: any) => { new User().logout({ updateClient }); router && router.history.push('/') },
        icon: 'sign-out-alt',
        name: 'account.logout',
        path: '',
    },
];
