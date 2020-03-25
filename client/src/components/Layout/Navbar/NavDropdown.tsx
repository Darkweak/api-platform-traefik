import React, { createRef, useState } from 'react';
import { useOutsideClick } from '../../../hooks';

interface NavDropdownInterface {
    icon?: string;
    title: string;
}

export const NavDropdown: React.FC<NavDropdownInterface> = ({icon, title, children}) => {
    const [open, setOpen] = useState(false);
    const ref = createRef<HTMLDivElement>();
    useOutsideClick(ref, () => setOpen(false));
    return (
        <div className='dropdown nav-item' ref={ref}>
            <span
                aria-haspopup='true'
                aria-expanded='false'
                onClick={() => setOpen(!open)}
                className={`${open ? 'show' : ''} dropdown-toggle nav-link pointer`}
                role='button'
            >
                {icon ? <i className={`fas fa-${icon}`}/> : ''}{icon ? ' ' : ''}{title}
            </span>
            <div className={`${open ? 'show' : ''} dropdown-menu dropdown-menu-right mt-lg-2 shadow`}
                 aria-labelledby={title}>
                {
                    children
                }
            </div>
        </div>
    );
}
