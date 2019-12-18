import React from 'react';
import { Welcome } from './components/pages';
import { Contact } from './components/pages';
import { Login } from './components/pages';
import { Register } from './components/pages';
import { logout } from './actions/user';
import { About } from './components/pages';

export interface IRoute {
    component: JSX.Element,
    handleClick?: (...v: any) => void,
    icon: string,
    name: string,
    path: string,
    strict?: boolean,
}

export const connexionRoutes: IRoute[] = [
    {
        component: <Login/>,
        icon: 'input',
        name: 'Connexion',
        path: '/login',
    },
    {
        component: <Register/>,
        icon: 'add_box',
        name: 'Inscription',
        path: '/register',
    },
];

export const loggedRoutes: IRoute[] = [
    {
        component: <div/>,
        handleClick: (updateClient: (v?: any) => void, router: any) => { logout(updateClient); router && router.history.push('/') },
        icon: 'arrow_back',
        name: 'Déconnexion',
        path: '',
    },
];

export const navbarRoutes: IRoute[] = [
    {
        component: <Welcome/>,
        icon: 'home',
        name: 'Accueil',
        path: '/',
    },
    {
        component: <Contact/>,
        icon: 'send',
        name: 'Contact',
        path: '/contact',
    },
    {
        component: <About/>,
        icon: 'help',
        name: 'À propos',
        path: '/about',
    },
];

export const routes: IRoute[] = [
    ...navbarRoutes,
    ...connexionRoutes,
];
