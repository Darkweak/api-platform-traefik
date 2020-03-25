import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { languages } from '../i18n/i18n';
import { ClientProvider } from './ClientContext';

interface IPageTranslations {
    title: string
}

interface ITranslations {
    navbar: {
        account: {
            label: string;
            login: string;
            logout: string;
            register: string;
        };
        about: string;
        contact: string;
        home: string;
        language: {
            label: string,
            fr: string,
            en: string
        }
    };
    pages: {
        about: IPageTranslations;
        contact: IPageTranslations;
        home: IPageTranslations;
        login: IPageTranslations;
        register: IPageTranslations;
    };
}

export interface ILanguages {
    en: ITranslations;
    fr: ITranslations;
}

const findTranslation = (
    keys: string[],
    translations: any /*eslint-disable-line*/
): string | undefined => {
    const key = keys[ 0 ];
    if (keys.length && translations[ key.toString() ]) {
        keys.shift();
        return findTranslation(keys, translations[ key.toString() ]);
    } else if (!keys.length) {
        return translations;
    }
    return undefined;
};

export type AllowedLanguages = 'en' | 'fr'

interface ILanguageContext {
    language: 'en' | 'fr';
    translate: (value: string) => string,
    setSelectedLanguage: (language: AllowedLanguages) => void;
}

const defaultState: ILanguageContext = {
    language: 'en',
    translate: (value: string) => value,
    setSelectedLanguage: (value: AllowedLanguages) => null,
};

export const LanguageContext = createContext<ILanguageContext>(defaultState);

export const LanguageProvider: React.FC = ({children}) => {
    const [language, setLanguage]: [AllowedLanguages, Dispatch<SetStateAction<AllowedLanguages>>] = useState<AllowedLanguages>('en');
    const translate = (value: string): string => findTranslation(value.split('.'), languages[ language ]) || value;

    return (
        <LanguageContext.Provider
            value={{
                language,
                translate,
                setSelectedLanguage: (language: AllowedLanguages) => setLanguage(language),
            }}
        >
            <ClientProvider>
                {children}
            </ClientProvider>
        </LanguageContext.Provider>
    );
};
