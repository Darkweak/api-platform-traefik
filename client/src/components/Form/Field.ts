import { IClassName } from '../Layout';

export interface IField extends IClassName {
    label?: string;
    name: string;
    pattern?: string|undefined;
    placeholder?: string;
    type?: string;
}

export interface IDropdownField extends IClassName {
    fields: IField[];
    name: string;
}

export type DropdownFieldType = IDropdownField|IField

export const email = (className?: string): IField => ({
    className,
    name: 'email',
    placeholder: 'votre@email.com',
    type: 'email',
});

export const firstname = (className?: string): IField => ({
    className,
    name: 'firstname',
    placeholder: 'Prénom',
});

export const lastname = (className?: string): IField => ({
    className,
    name: 'lastname',
    placeholder: 'Nom de famille',
});

export const message = (className?: string): IField => ({
    className,
    name: 'message',
    type: 'textarea',
});

export const password = (className?: string): IField => ({
    className,
    name: 'password',
    placeholder: 'supermotdepasse',
    type: 'password',
});

export const oldPassword = (className?: string): IField => ({
    className,
    name: 'oldpassword',
    placeholder: 'ancienmotdepasse',
    type: 'password',
});

export const newPassword = (className?: string): IField => ({
    className,
    name: 'newpassword',
    placeholder: 'nouveaumotdepasse',
    type: 'password',
});

export const subject = (className?: string): IField => ({
    className,
    name: 'subject',
    placeholder: 'Sujet du message',
});

export const username = (className?: string): IField => ({
    className,
    name: 'username',
    placeholder: 'votre@email.com',
    type: 'email',
});
