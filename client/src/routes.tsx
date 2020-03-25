import { Contact, Login, Welcome } from './components/pages';
import { User } from './actions/user';
import { AllowedLanguages } from './contexts';
import { RouteProps } from 'react-router-dom';
import { IconInterface } from './components/Layout/Icon';
import { Dispatch, SetStateAction } from 'react';

export interface IRoute extends RouteProps {
    changeLanguage?: (setSelectedLanguage: (language: AllowedLanguages) => void) => void,
    handleClick?: ((...v: any) => void) | boolean,
    icon: IconInterface,
    name: string,
    realPath?: string,
}

export const connexionRoutes: IRoute[] = [
    {
        component: Login,
        icon: {
            icon: 'input'
        },
        name: 'account.login',
        path: '/login',
    },
];

export const languageRoutes: IRoute[] = [
    {
        changeLanguage: (setSelectedLanguage) => setSelectedLanguage('fr'),
        handleClick: true,
        icon: {
            icon: ''
        },
        name: 'language.fr',
        path: '',
    },
    {
        changeLanguage: (setSelectedLanguage) => setSelectedLanguage('en'),
        handleClick: true,
        icon: {
            icon: ''
        },
        name: 'language.en',
        path: '',
    },
];

export const loggedRoutes: IRoute[] = [
    {
        handleClick: (callback: Dispatch<SetStateAction<{}>>, router: any) => {
            new User().logout({callback});
            router && router.history.push('/')
        },
        icon: {
            icon: ''
        },
        name: 'account.logout',
        path: '',
    },
];

export const navbarRoutes: IRoute[] = [
    {
        component: Welcome,
        icon: {
            icon: 'home',
        },
        name: 'home',
        path: '/:language([a-z]{2})?',
        realPath: '/',
    },
    {
        component: Contact,
        icon: {
            icon: 'envelope',
            type: 'far',
        },
        name: 'contact',
        path: '/contact',
    }
];

export const routes: IRoute[] = [
    ...navbarRoutes,
    ...connexionRoutes,
    ...languageRoutes,
];
