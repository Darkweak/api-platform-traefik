import * as React from 'react';
import { IRoute } from './';

export const languageRoutes = (): IRoute[] => [
    {
        component: () => <div/>,
        changeLanguage: (setSelectedLanguage) => setSelectedLanguage('fr'),
        handleClick: true,
        icon: '',
        name: 'language.fr',
        path: '',
    },
    {
        component: () => <div/>,
        changeLanguage: (setSelectedLanguage) => setSelectedLanguage('en'),
        handleClick: true,
        icon: '',
        name: 'language.en',
        path: '',
    },
];
