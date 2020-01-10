import React from 'react';
import { Welcome } from './components/pages';
import { Contact } from './components/pages';
import { Login } from './components/pages';
import { Register } from './components/pages';
import { logout } from './actions/user';
import { About } from './components/pages';
import { AllowedLanguages } from './contexts';

export interface IRoute {
    component: JSX.Element,
    changeLanguage?: (setSelectedLanguage: (language: AllowedLanguages) => void) => void,
    handleClick?: ((...v: any) => void)|boolean,
    icon: string,
    name: string,
    path: string,
    strict?: boolean,
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
        handleClick: (updateClient: (v?: any) => void, router: any) => { logout(updateClient); router && router.history.push('/') },
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
        icon: 'send',
        name: 'contact',
        path: '/contact',
    },
    {
        component: <About/>,
        icon: 'help',
        name: 'about',
        path: '/about',
    },
];

export const routes: IRoute[] = [
    ...navbarRoutes,
    ...connexionRoutes,
    ...languageRoutes,
];
