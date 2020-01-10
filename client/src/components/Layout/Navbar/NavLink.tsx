import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IRoute } from '../../../routes';
import { ClientContext, LanguageContext } from '../../../contexts';
import { Icon } from '../Icon';

interface INavlink {
    route: IRoute,
    router: any,
}

export const NavLink = ({ route, router }: INavlink) => {
    const { updateClient } = useContext(ClientContext);
    const { setSelectedLanguage, translate } = useContext(LanguageContext);
    return (
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
            className={`d-flex${router && router.location.pathname === route.path ? ' bg--turqoise color--paper' : ''}`}
        >
            <Icon>
                {route.icon}
            </Icon>
            <span className="my-auto ml-1">{ translate(`navbar.${ route.name }`) }</span>
        </Link>
    )
};
