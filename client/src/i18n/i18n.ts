import { ILanguages } from '../contexts';

export const languages: ILanguages = {
    en: {
        app: {
            title: 'Find your place'
        },
        navbar: {
            account: {
                label: 'Account',
                login: 'Login',
                logout: 'Logout',
                my_account: 'My account',
                register: 'Register',
            },
            contact: 'Contact',
            home: 'Home',
            language: {
                en: 'English',
                fr: 'Français',
                label: 'Language'
            },
            search: 'Start searching'
        },
    },
    fr: {
        app: {
            title: 'Trouve ton appart\''
        },
        navbar: {
            account: {
                label: 'Compte',
                login: 'Connexion',
                logout: 'Déconnexion',
                my_account: 'Mon compte',
                register: 'Inscription',
            },
            contact: 'Contact',
            home: 'Accueil',
            language: {
                en: 'English',
                fr: 'Français',
                label: 'Langage'
            },
            search: 'Lancer une recherche'
        },
    }
};
