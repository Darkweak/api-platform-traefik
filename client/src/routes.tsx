import React from 'react';
import { Contact, Login, Register, Search, Welcome } from './components/pages';
import { AllowedLanguages } from './contexts';
import { IClassName } from './components/Layout';
import { User } from './actions';

export interface IRoute extends IClassName {
    children?: IRoute[],
    component: JSX.Element,
    changeLanguage?: (setSelectedLanguage: (language: AllowedLanguages) => void) => void,
    handleClick?: ((...v: any) => void)|boolean,
    icon: string,
    name: string,
    path: string,
    strict?: boolean,
    type?: 'button'|'dropdown',
}

export const connexionRoutes: IRoute[] = [
    {
        component: <Login/>,
        icon: 'input',
        name: 'account.login',
        path: '/login',
    },
    {
        component: <Register/>,
        icon: 'add_box',
        name: 'account.register',
        path: '/register',
    },
];

export const languageRoutes: IRoute[] = [
    {
        component: <div/>,
        changeLanguage: (setSelectedLanguage) => setSelectedLanguage('fr'),
        handleClick: true,
        icon: '',
        name: 'language.fr',
        path: '',
    },
    {
        component: <div/>,
        changeLanguage: (setSelectedLanguage) => setSelectedLanguage('en'),
        handleClick: true,
        icon: '',
        name: 'language.en',
        path: '',
    },
];

export const loggedRoutes: IRoute[] = [
    {
        component: <div/>,
        handleClick: (updateClient: (v?: any) => void, router: any) => { new User().logout({ updateClient }); router && router.history.push('/') },
        icon: 'arrow_back',
        name: 'account.logout',
        path: '',
    },
];

export const navbarRoutes: IRoute[] = [
    {
        component: <Welcome/>,
        icon: 'home',
        name: 'home',
        path: '/',
    },
    {
        component: <Contact/>,
        icon: 'envelope',
        name: 'contact',
        path: '/contact',
    },
    {
        children: languageRoutes,
        component: <div/>,
        icon: '',
        name: 'language',
        path: '/',
        type: 'dropdown',
    },
    {
        className: 'p-2',
        component: <Search/>,
        icon: 'search',
        name: 'search',
        path: '/search',
        type: 'button',
    }
];

export const routes: IRoute[] = [
    ...navbarRoutes,
    ...connexionRoutes,
    ...languageRoutes,
];
