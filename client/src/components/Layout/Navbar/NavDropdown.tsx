import React, { SyntheticEvent, useState } from 'react';
import { NavLink } from './NavLink';
import { IRoute } from '../../../routes';

interface INavDropdown {
    items: IRoute[]
}

export const NavDropdown: React.FC<INavDropdown> = ({ children, items }) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className={`nav-item has-sub toggle-hover`}>
            <a href='/' className="nav-dropdown-link text-white py-1 px-2" onClick={(event: SyntheticEvent) => {
                event.preventDefault();
                setOpen(!open);
            }}>
                { children }
            </a>
            <ul className={`dropdown-menu dropdown-dark dropdown-animated ${ open && 'dropdown-shown' }`} role="menu">
                {
                    items.map((route: IRoute, key: number) => (
                        <li {...{
                            key,
                            role: 'menu-item',
                        }}>
                            <NavLink {...{ route }}>
                                { route.name }
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};
