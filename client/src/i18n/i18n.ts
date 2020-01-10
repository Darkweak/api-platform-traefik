import { ILanguages } from '../contexts';

export const languages: ILanguages = {
    en: {
        navbar: {
            about: 'About',
            account: {
                label: 'Account',
                login: 'Login',
                logout: 'Logout',
                register: 'Register',
            },
            contact: 'Contact',
            home: 'Home',
            language: {
                label: 'Language',
                fr: 'French',
                en: 'English'
            }
        },
        pages: {
            about: {
                title: 'About us'
            },
            contact: {
                title: 'Contact us!'
            },
            home: {
                title: 'Welcome'
            },
            login: {
                title: 'Login'
            },
            register: {
                title: 'Register'
            }
        }
    },
    fr: {
        navbar: {
            about: 'À propos',
            account: {
                label: 'Compte',
                login: 'Connexion',
                logout: 'Déconnexion',
                register: 'Inscription',
            },
            contact: 'Contact',
            home: 'Accueil',
            language: {
                label: 'Langage',
                fr: 'Français',
                en: 'Anglais'
            }
        },
        pages: {
            about: {
                title: 'À propos'
            },
            contact: {
                title: 'Contactez nous'
            },
            home: {
                title: 'Bienvenue'
            },
            login: {
                title: 'Connexion'
            },
            register: {
                title: 'Inscription'
            }
        }
    }
};
