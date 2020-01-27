import React from 'react';

interface IIcon {
    className?: string;
    icon: string;
    type?: 'fab'|'far';
}

export const Icon: React.FC<IIcon> = ({ className, icon, type = 'fas' }) => (
    <i className={`fa-wrapper ${ type } fa-${ icon } ${ className || '' }`}/>
);
