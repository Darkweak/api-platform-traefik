export interface RouteBreadcrumb {
    label: string,
    path: string,
}

export const HOME: RouteBreadcrumb = {
    label: 'Accueil',
    path: '/'
};

export const ABOUT: RouteBreadcrumb = {
    label: 'À propos',
    path: '/about'
};

export const CONTACT: RouteBreadcrumb = {
    label: 'Contact',
    path: '/contact'
};

export const LOGIN: RouteBreadcrumb = {
    label: 'Connexion',
    path: '/login'
};

export const REGISTER: RouteBreadcrumb = {
    label: 'Inscription',
    path: '/register'
};
