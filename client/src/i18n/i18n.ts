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
                register: 'Register',
            },
            contact: 'Contact',
            home: 'Home',
            language: {
                en: 'English',
                fr: 'Français',
                label: 'Language'
            }
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
                register: 'Inscription',
            },
            contact: 'Contact',
            home: 'Accueil',
            language: {
                en: 'English',
                fr: 'Français',
                label: 'Langage'
            }
        },
    }
};
