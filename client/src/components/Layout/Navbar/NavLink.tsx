import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IRoute } from '../../../routes';
import { ClientContext, LanguageContext } from '../../../contexts';
import { Icon } from '../Icon';

interface INavlink {
    route: IRoute
}

export const NavLink = ({route}: INavlink) => {
    const {updateClient} = useContext(ClientContext);
    const {setSelectedLanguage, translate} = useContext(LanguageContext);
    return (
        <li className='nav-item'>
            <Link
                to={route.realPath || route.path as string}
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
                className={`nav-link`}
            >
                <Icon {...route.icon}/>{' '}{translate(`navbar.${route.name}`)}
            </Link>
        </li>
    )
};
