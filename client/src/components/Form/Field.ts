import { ClassNameInterface } from '../Layout';

export interface IField extends ClassNameInterface {
    label?: string,
    name: string,
    type?: string,
}

export const email = (className?: string) => ({
    className,
    name: 'email',
    type: 'email',
});

export const firstname = (className?: string) => ({
    className,
    name: 'firstname',
});

export const lastname = (className?: string) => ({
    className,
    name: 'lastname'
});

export const message = (className?: string) => ({
    className,
    name: 'message',
    type: 'textarea',
});

export const password = (className?: string) => ({
    className,
    name: 'password',
    type: 'password',
});

export const subject = (className?: string) => ({
    className,
    name: 'subject',
});

export const username = (className?: string) => ({
    className,
    name: 'username',
    type: 'email',
});
