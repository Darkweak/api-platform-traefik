import React from 'react';

export interface IconInterface {
    icon: string;
    type?: 'fab' | 'far' | 'fal';
}

export const Icon: React.FC<IconInterface> = ({icon, type}) => (
    <i className={`${type || 'fas'} fa-${icon} my-auto`}/>
);
