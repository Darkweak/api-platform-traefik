import { IClassNames } from '../Layout';

export interface IField extends IClassNames {
    label?: string,
    name: string,
    placeholder?: string,
    type?: string,
}

export const email = (classnames?: string) => ({
    classnames,
    name: 'email',
    placeholder: 'votre@email.com',
    type: 'email',
});

export const firstname = (classnames?: string) => ({
    classnames,
    name: 'firstname',
    placeholder: 'Prénom',
});

export const lastname = (classnames?: string) => ({
    classnames,
    name: 'lastname',
    placeholder: 'Nom de famille',
});

export const message = (classnames?: string) => ({
    classnames,
    name: 'message',
    type: 'textarea',
});

export const password = (classnames?: string) => ({
    classnames,
    name: 'password',
    placeholder: 'supermotdepasse',
    type: 'password',
});

export const subject = (classnames?: string) => ({
    classnames,
    name: 'subject',
    placeholder: 'Sujet du message',
});

export const username = (classnames?: string) => ({
    classnames,
    name: 'username',
    placeholder: 'votre@email.com',
    type: 'email',
});
