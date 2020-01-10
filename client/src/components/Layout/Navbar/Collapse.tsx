import React, { useContext } from 'react';
import { IRoute } from '../../../routes';
import { LanguageContext, RouterContext } from '../../../contexts';
import { NavLink } from './NavLink';

interface ICollapse {
    icon: string,
    id: string,
    links?: IRoute[],
    name: string,
}

export const Collapse = ({ name, icon, id, links = [] }: ICollapse) => {
    const { router } = useContext(RouterContext);
    const { translate } = useContext(LanguageContext);
    return (
        <div className="nav-collapsible">
            <input type="checkbox" id={id} />
            <label htmlFor={ id }>
                <i className="material-icons my-auto">
                    { icon }
                </i>
                <span className="my-auto ml-1">{ translate(name) }</span>
            </label>
            <div className="nav-collapsible-links">
                {
                    links.map((route: IRoute, index: number) => (
                        <NavLink key={index} {...{route, router}}/>
                    ))
                }
            </div>
        </div>
    )
};
