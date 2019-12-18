import React, { useContext, useState } from 'react';
import { connexionRoutes, IRoute, navbarRoutes, loggedRoutes } from '../../routes';
import { Collapse } from './Navbar';
import { RouterContext } from '../../contexts/RouterContext';
import { ClientContext } from '../../contexts/ClientContext';
import { NavLink } from './Navbar/NavLink';

export const NavBar = () => {
    const [open, setOpen] = useState(false);
    const { router } = useContext(RouterContext);
    const { logged } = useContext(ClientContext);
    return (
        <>
            <input type="checkbox" id="nav--super-vertical-responsive" onChange={() => {setOpen(!open)}} checked={open}/>
            <label htmlFor="nav--super-vertical-responsive" className="bg--turqoise p-0">
                <div className={`transition border-none menu-icon${open ? ' is-opened' : ''}`}>
                    <span/>
                </div>
            </label>
            <aside className="nav--super-vertical g--2 g-m--3 g-s--6 g-t--12 no-margin-vertical p-0">
                <div className="g--12 logo-area no-margin-vertical bg--green-sea">
                    <h4 className="color--clouds no-margin-vertical">{process.env.REACT_APP_NAME}</h4>
                </div>
                <nav className="g--12 no-margin-vertical">
                    {
                        navbarRoutes.map((route: IRoute, index: number) => (
                            <NavLink key={index} {...{route, router}}/>
                        ))
                    }
                    <Collapse icon="face" id="nav-collapsible-1" name="Compte" links={logged ? loggedRoutes : connexionRoutes}/>
                </nav>
            </aside>
        </>
    )
};
