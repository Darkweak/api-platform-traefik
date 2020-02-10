import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ClientContext, LanguageContext } from '../../../contexts';
import { Icon } from '../Icon';
import { IClassName } from '../index';
import { NavDropdown } from './NavDropdown';
import { IRoute } from '../../../routes';

interface INavlink {
    light?: boolean,
    route: IRoute,
}

export const NavLink: React.FC<IClassName & INavlink> = ({ className, light, route }) => {
    const { updateClient } = useContext(ClientContext);
    const { setSelectedLanguage, translate } = useContext(LanguageContext);
    const { location } = useHistory();
    switch (route.type) {
        case 'button':
            return (
                <div className="nav-item p-2">
                    <button className={`btn-primary u-no-padding w-100 text-center d-flex ${ light && 'outline' }`}>
                        <Link to='/search' className="m-auto">
                            <Icon icon={ route.icon }/>
                            <span className={`my-auto ${ route.icon && 'pl-1' }`}>{ translate(`navbar.${ route.name }`) }</span>
                        </Link>
                    </button>
                </div>
            );
        case 'dropdown':
            return (
                <NavDropdown items={route.children || []}>
                    <Icon icon={ route.icon }/>
                    <span className={`my-auto ${ route.icon && 'pl-1' }`}>{ translate(`navbar.${ route.name }`) }</span>
                </NavDropdown>
            );

    }
    return (
        <div className={`nav-item ${ className || '' } ${ route.path === location.pathname && 'active' }`}>
            <Link
                to={route.path}
                onClick={
                    (event: any) => {
                        if (route.handleClick) {
                            event.preventDefault();
                            if (route.changeLanguage) {
                                route.changeLanguage(setSelectedLanguage)
                            }
                            true !== route.handleClick && route.handleClick(updateClient)
                        }
                    }
                }
            >
                { route.icon && <Icon icon={route.icon}/> }
                <span className={`my-auto ${ route.icon && 'pl-1' }`}>{ translate(`navbar.${ route.name }`) }</span>
            </Link>
        </div>
    );
};
