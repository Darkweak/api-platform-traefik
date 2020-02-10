import React, { createContext, useState } from 'react';
import { IChildren } from '../components/Layout';
import { languages } from '../i18n/i18n';
import { ClientProvider } from './ClientContext';

interface ITranslations {
    app: {
        title: string
    };
    navbar: {
        account: {
            label: string;
            login: string;
            logout: string;
            my_account: string;
            register: string;
        };
        contact: string;
        home: string;
        language: {
            label: string,
            fr: string,
            en: string
        },
        search: string
    };
}

export interface ILanguages {
    en: ITranslations;
    fr: ITranslations;
}

const containsKey = (obj: any, keys: string[]): string | undefined => {
    if (obj[ keys[ 0 ] ]) {
        if (1 === keys.length) {
            return obj[ keys[ 0 ] ]
        } else {
            let newObj = obj[ keys[ 0 ] ];
            keys.splice(0, 1);
            return containsKey(newObj, keys);
        }
    } else {
        return undefined
    }
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

export const LanguageProvider: React.FC<IChildren> = ({children}) => {
    const [ language, setLanguage ] = useState<AllowedLanguages>('en');
    const translate = (key: string) => containsKey(languages[ language ], key.split('.')) || key;

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
