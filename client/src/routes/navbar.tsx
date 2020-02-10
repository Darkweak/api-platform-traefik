import * as React from 'react';
import { Contact, Search, Welcome } from '../components/pages';
import { IRoute, loggedRoutes } from './index';
import { languageRoutes } from './language';

export const navbarRoutes = (logged: boolean): IRoute[] => [
    {
        component: Welcome,
        icon: 'home',
        name: 'home',
        path: '/',
    },
    {
        component: Contact,
        icon: 'envelope',
        name: 'contact',
        path: '/contact',
    },
    {
        children: languageRoutes(),
        component: () => <div/>,
        icon: 'language',
        name: 'language.label',
        path: '/',
        type: 'dropdown',
    },
    {
        children: logged ? loggedRoutes() : [],
        component: () => <div/>,
        icon: 'user',
        name: 'account.label',
        path: logged ? '/account' : '/login',
        type: logged ? 'dropdown' : undefined,
    },
    {
        component: Search,
        icon: 'search',
        name: 'search',
        path: '/search',
        type: 'button',
    }
];
