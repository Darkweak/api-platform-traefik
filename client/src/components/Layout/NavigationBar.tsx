import React, { useContext, useEffect, useState } from 'react';
import './layout.css';
import { NavLink } from './Navbar';
import { IRoute, navbarRoutes } from '../../routes';
import { LanguageContext } from '../../contexts';

interface IAnimatedNavBar {
    fixed?: boolean;
    className?: string
}

interface INavBar extends IAnimatedNavBar {
    light?: boolean
}

export const AnimatedNavbar: React.FC<IAnimatedNavBar> = ({ className, fixed }) => {
    const [isTop, setTop] = useState<boolean>(50 > window.scrollY);
    useEffect(() => {
        const listener = () => setTop(50 > window.scrollY);
        document.addEventListener('scroll', listener);
        return () => {
            document.removeEventListener('scroll', listener)
        }
    }, []);
    return <NavBar {...{
        className: className || '',
        light: isTop,
        fixed,
    }}/>
};

export const NavBar: React.FC<INavBar> = ({ className, light, fixed }) => {
    const [open, setOpen] = useState<boolean>(false);
    const { translate } = useContext(LanguageContext);
    return (
        <div
            id="header"
            className={`header header-top m-0 unselectable ${ open && 'translucent' } ${ fixed && 'header-fixed' } ${ light ? 'header-clear-mod header-clear' : 'header-dark' } ${ className || '' }`}>
            <div className="header-brand">
                <div className="nav-item no-hover">
                    <a href='/'>
                        <h5 className="title text-white">{ translate('app.title') }</h5>
                    </a>
                </div>
                <div className={`nav-item nav-btn ${ open && 'active' }`} id="header-btn" onClick={() => setOpen(!open)}>
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
            <div className={`header-nav ${ open && 'active' }`} id="header-menu">
                <div className="nav-right">
                    {
                        navbarRoutes.map((route: IRoute, key: number) => (
                            <NavLink {...{key, light, route}}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};
