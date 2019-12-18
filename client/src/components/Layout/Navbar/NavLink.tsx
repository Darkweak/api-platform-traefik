import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IRoute } from '../../../routes';
import { ClientContext } from '../../../contexts/ClientContext';

interface INavlink {
    route: IRoute,
    router: any,
}

export const NavLink = ({ route, router }: INavlink) => {
    const { updateClient } = useContext(ClientContext);
    return (
        <Link to={route.path} onClick={(event: any) => { if (route.handleClick) { event.preventDefault(); route.handleClick(updateClient) } }} className={`d-flex${router && router.location.pathname === route.path ? ' bg--turqoise color--paper' : ''}`}>
            <i className="material-icons my-auto">
                {route.icon}
            </i>
            <span className="my-auto ml-1">{ route.name }</span>
        </Link>
    )
};
