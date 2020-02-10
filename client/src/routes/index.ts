import { RouteProps } from 'react-router';
import { AllowedLanguages } from '../contexts';
import { connexionRoutes } from './connexion';
import { navbarRoutes } from './navbar';
import { languageRoutes } from './language';
import { loggedRoutes } from './logged';

export interface IRoute extends RouteProps {
    children?: IRoute[],
    changeLanguage?: (setSelectedLanguage: (language: AllowedLanguages) => void) => void,
    handleClick?: ((...v: any) => void)|boolean,
    icon: string,
    name: string,
    path: string,
    type?: 'button'|'dropdown',
}

export const routes = (logged: boolean): IRoute[] => {
    return [
        ...connexionRoutes(),
        ...loggedRoutes(),
        ...navbarRoutes(logged),
        ...languageRoutes(),
    ];
};

export * from './language';
export * from './navbar';
export * from './connexion';
export * from './logged';
