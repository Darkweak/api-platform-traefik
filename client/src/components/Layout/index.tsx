import React, { useContext } from 'react';
import { NavBar } from './NavigationBar';
import './layout.css';
import { Breadcrumb, IBreadcrumb } from '../Breadcrumb';
import { Footer } from './Footer';
import { LanguageContext } from '../../contexts';

export interface IChildren {
    children: JSX.Element|JSX.Element[],
}

export interface IClassNames {
    classnames?: string,
}

interface ILayout {
    pageName: string,
}

export const Layout = ({ breadcrumb, children, pageName }: IBreadcrumb & IChildren & ILayout) => {
    const { translate } = useContext(LanguageContext);
    return (
        <>
            <NavBar/>
            <main className="g--10 g-m--12 m--2 m-m--0 no-margin-vertical">
                <header className="no-margin">
                    <h1 className="m--1 g--10 fade-in-from-bottom">{ translate(pageName) }</h1>
                </header>
                { breadcrumb && <Breadcrumb {...{ breadcrumb }}/> }
                { children }
                <Footer/>
            </main>
        </>
    )
};
