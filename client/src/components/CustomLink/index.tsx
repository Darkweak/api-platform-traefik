import React from 'react';
import { ClassNameInterface } from '../Layout';

interface CustomLinkInterface extends ClassNameInterface {
    href: string;
}

export const CustomLink: React.FC<CustomLinkInterface> = ({children, className, href}) => (
    <a target='_blank' rel='noopener noreferrer' className={`${className || 'text-muted'} no-decoration`}
       href={href}>{children}</a>
);
